<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['api',]], function(){
    Route::resource('map', 'Api\MapController', ['except' => ['edit','create']]);
  });