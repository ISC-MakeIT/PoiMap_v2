<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class trash_type_box extends Model
{
    protected $table ='trash_type_boxes';
    protected $guarded = array('id');

    Public function trash_boxes()
{
    return $this->belongsTo(trash_boxes::class);
}
}
