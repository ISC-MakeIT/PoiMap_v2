<?php

namespace App\Model;

use App\Model\trash_type_box;
use Illuminate\Database\Eloquent\Model;

class trash_box extends Model
{
    protected $table ='trash_boxes';
    protected $guarded = array('id');
    
    public function createData($request) {
        $this->lat = $request->lat;
        $this->lng = $request->lng;
        $this->location_name = $request->location_name;
        $this->image_url = $request->image_url;
        $this->save();
    
        $id = $this->id;
    
        $type = new trash_type_box;
        $type->types = $request->types;
        $type->trash_box_id = $id;
        $type->save();
        return $id;
    }

    public function getData() {
        $items = \DB::table('trash_boxes')
        ->select('trash_boxes.*','trash_type_boxes.types')
        ->join('trash_type_boxes','trash_boxes.id','=','trash_type_boxes.trash_box_id')
        ->OrderBy('id')
        ->get();
        return $items;
    }

    public function showData($id) {
        $items = \DB::table('trash_boxes')
        ->select('trash_boxes.*','trash_type_boxes.types')
        ->where('trash_boxes.id','=',$id)
        ->join('trash_type_boxes','trash_boxes.id','=','trash_type_boxes.trash_box_id')
        ->get();
        return $items;
    }

    public function updateData($request,$id) {
        $trash_box = trash_box::find($id);
        $data = trash_type_box::where('trash_box_id',$id)->first();
        $trash_box->lat = $request->lat;
        $trash_box->lng = $request->lng;
        $trash_box->location_name = $request->location_name;
        $trash_box->image_url = $request->image_url;
        $data->types = $request->types;
        $trash_box->save();
        $data->save();
    }



    public function trash_type_box() {
        return $this->hasmany('App\trash_type_box','trash_box_id');
    }
}
