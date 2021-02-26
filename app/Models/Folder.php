<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Laravel\Scout\Searchable;
use RecursiveArrayIterator;
use RecursiveIteratorIterator;
use TeamTNT\TNTSearch\Indexer\TNTIndexer;
use \Illuminate\Database\Eloquent\SoftDeletes;
use Kyslik\ColumnSortable\Sortable;

class Folder extends Model
{
    use Searchable, SoftDeletes, Sortable;

    protected $guarded = [
        'id'
    ];

    protected $appends = [
        'items', 'trashed_items'
    ];

    protected $casts = [
        'icon_emoji' => 'object',
    ];

    /**
     * Sortable columns
     *
     * @var string[]
     */
    public $sortable = [
        'name',
        'created_at',
    ];

    public $incrementing = false;

    protected $keyType = 'string';

    /**
     * Index folder
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();
        $name = Str::slug($array['name'], ' ');

        return [
            'id'         => $this->id,
            'name'       => $name,
            'nameNgrams' => utf8_encode((new TNTIndexer)->buildTrigrams(implode(', ', [$name]))),
        ];
    }

    /**
     * Counts how many folder have items
     *
     * @return int
     */
    public function getItemsAttribute()
    {
        $folders = $this->folders()->count();
        $files = $this->files()->count();

        return $folders + $files;
    }

    /**
     * Counts how many folder have items
     *
     * @return int
     */
    public function getTrashedItemsAttribute()
    {
        $folders = $this->trashed_folders()->count();
        $files = $this->trashed_files()->count();

        return $folders + $files;
    }

    /**
     * Format created at date reformat
     *
     * @return string
     */
    public function getCreatedAtAttribute()
    {
        return format_date(set_time_by_user_timezone($this->attributes['created_at']), __('vuefilemanager.time'));
    }

    /**
     * Format created at date reformat
     *
     * @return string
     */
    public function getDeletedAtAttribute()
    {
        if (! $this->attributes['deleted_at']) return null;

        return format_date(set_time_by_user_timezone($this->attributes['deleted_at']), __('vuefilemanager.time'));
    }

    /**
     * Get parent
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo('App\Folder', 'parent_id', 'unique_id');
    }

    public function folderIds()
    {
        return $this->children()->with('folderIds')->select(['unique_id', 'parent_id']);
    }

    /**
     * Get all files
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function files()
    {
        return $this->hasMany('App\File', 'folder_id', 'unique_id');
    }

    /**
     * Get all trashed files
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trashed_files()
    {

        return $this->hasMany('App\File', 'folder_id', 'unique_id')->withTrashed();
    }

    /**
     * Get all folders
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function folders()
    {
        return $this->children()->with('folders');
    }

    /**
     * Get all trashed folders
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trashed_folders()
    {
        return $this->children()->with('trashed_folders')->withTrashed()->select(['parent_id', 'unique_id', 'name']);
    }

    /**
     * Get childrens
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany('App\Folder', 'parent_id', 'unique_id');
    }

    /**
     * Get trashed childrens
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trashed_children()
    {
        return $this->hasMany('App\Folder', 'parent_id', 'unique_id')->withTrashed();
    }

    /**
     * Get sharing attributes
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function shared()
    {
        return $this->hasOne('App\Share', 'item_id', 'unique_id');
    }

    // Delete all folder children
    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->id = (string)Str::uuid();
        });

        static::deleting(function ($item) {

            if ( $item->isForceDeleting() ) {

                $item->trashed_children()->each(function($folder) {
                    $folder->forceDelete();
                });

            } else {

                $item->children()->each(function($folder) {
                    $folder->delete();
                });

                $item->files()->each(function($file) {
                    $file->delete();
                });
            }
        });

        static::restoring(function ($item) {

            // Restore children folders
            $item->trashed_children()->each(function($folder) {
                $folder->restore();
            });

            // Restore children files
            $item->trashed_files()->each(function($files) {
                $files->restore();
            });
        });
    }
}