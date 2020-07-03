<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Stripe WebHook
Route::post('/stripe/webhook', 'WebhookController@handleWebhook');

// Deployment WebHook URL
Route::post('/deploy/github', 'DeployController@github');

// App public files
Route::get('/avatars/{avatar}', 'FileAccessController@get_avatar')->name('avatar');
Route::get('/system/{image}', 'FileAccessController@get_system_image');

// Get public thumbnails and files
Route::get('/thumbnail/{name}/public/{token}', 'FileAccessController@get_thumbnail_public');
Route::get('/file/{name}/public/{token}', 'FileAccessController@get_file_public');

// User master,editor,visitor access to image thumbnails and file downloads
Route::group(['middleware' => ['auth:api', 'auth.shared', 'auth.master', 'scope:master,editor,visitor']], function () {
    Route::get('/thumbnail/{name}', 'FileAccessController@get_thumbnail')->name('thumbnail');
    Route::get('/file/{name}', 'FileAccessController@get_file')->name('file');
});

Route::group(['middleware' => ['auth:api', 'auth.master', 'scope:master']], function () {
    Route::get('/invoice/{customer}/{token}', 'Admin\InvoiceController@show');
});

// Pages
Route::get('/shared/{token}', 'Sharing\FileSharingController@index');
Route::get('/{any?}', 'AppFunctionsController@index')->where('any', '.*');
