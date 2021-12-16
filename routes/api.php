<?php

use Domain\Zip\Controllers\ZipController;
use Domain\Pages\Controllers\PagesController;
use Domain\Sharing\Controllers\ShareController;
use Domain\Trash\Controllers\DumpTrashController;
use App\Users\Controllers\ResetPasswordController;
use Domain\Files\Controllers\UploadFileController;
use App\Users\Controllers\ForgotPasswordController;
use Domain\Folders\Controllers\FavouriteController;
use Domain\Plans\Controllers\ActivePlansController;
use Domain\Folders\Controllers\CreateFolderController;
use Domain\Browsing\Controllers\BrowseFolderController;
use Domain\Sharing\Controllers\ShareViaEmailController;
use Domain\Folders\Controllers\NavigationTreeController;
use Domain\Items\Controllers\MoveFileOrFolderController;
use Domain\Items\Controllers\DeleteFileOrFolderController;
use Domain\Items\Controllers\RenameFileOrFolderController;
use Domain\Settings\Controllers\GetSettingsValueController;
use Domain\Trash\Controllers\RestoreTrashContentController;
use Domain\Browsing\Controllers\BrowseLatestFilesController;
use Domain\Browsing\Controllers\BrowseSharedItemsController;
use Domain\Browsing\Controllers\BrowseTrashContentController;
use Domain\Homepage\Controllers\SendContactMessageController;
use Domain\Browsing\Controllers\SearchFilesAndFoldersController;
use App\Users\Controllers\Authentication\RegisterAuthenticationController;
use App\Users\Controllers\Authentication\SocialiteAuthenticationController;

// Pages
Route::apiResource('/page', PagesController::class);

// Homepage
Route::post('/contact', SendContactMessageController::class);
Route::get('/pricing', ActivePlansController::class);
Route::get('/settings', GetSettingsValueController::class);

// Register user
Route::post('/register', RegisterAuthenticationController::class);

// Login via socialite
Route::group(['prefix' => 'socialite'], function () {
    Route::get('/{provider}/redirect', [SocialiteAuthenticationController::class, 'redirect']);
    Route::get('/{provider}/callback', [SocialiteAuthenticationController::class, 'callback']);
});

// Password reset
Route::group(['prefix' => 'password'], function () {
    Route::post('/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
    Route::post('/reset', [ResetPasswordController::class, 'reset']);
});

// User master Routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    // Browse
    Route::group(['prefix' => 'browse'], function () {
        Route::get('/folders/{id}', BrowseFolderController::class);
        Route::get('/navigation', NavigationTreeController::class);
        Route::get('/search', SearchFilesAndFoldersController::class);
        Route::get('/latest', BrowseLatestFilesController::class);
        Route::get('/trash/{id}', BrowseTrashContentController::class);
        Route::get('/share', BrowseSharedItemsController::class);
    });

    // Trash
    Route::group(['prefix' => 'trash'], function () {
        Route::post('/restore', RestoreTrashContentController::class);
        Route::delete('/dump', DumpTrashController::class);
    });

    // Share
    Route::post('/share/{token}/email', ShareViaEmailController::class);
    Route::apiResource('/share', ShareController::class);

    // Favourites
    Route::apiResource('/folders/favourites', FavouriteController::class);
});

// User master,editor routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/create-folder', CreateFolderController::class);
    Route::post('/upload', UploadFileController::class);

    Route::patch('/rename/{id}', RenameFileOrFolderController::class);
    Route::post('/remove', DeleteFileOrFolderController::class);
    Route::post('/move', MoveFileOrFolderController::class);

    Route::get('/zip', ZipController::class);
});
