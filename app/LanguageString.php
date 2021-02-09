<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LanguageString extends Model
{
    public $timestamps = false;

    protected $fillable = ['value', 'language_id' ,'key', 'lang'];
    

}
