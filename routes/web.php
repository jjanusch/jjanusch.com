<?php

use Illuminate\Support\Facades\Route;

Route::statamic('search', 'search');
Route::redirect('/tags', '/categories');
