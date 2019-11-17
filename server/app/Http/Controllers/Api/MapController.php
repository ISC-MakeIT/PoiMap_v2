<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\TrashBoxRequest;
use App\Model\trash_box;
use App\Http\Controllers\Controller;

class MapController extends Controller
{
    public function index()
    {
        $trash_box = new trash_box();
        $data = $trash_box->getData();
        return $data;
    }

    public function store(TrashBoxRequest $request)
    {
        $trash_box = new trash_box();
        $id = $trash_box->createData($request);
        return redirect("api/map/".$id);
    }

    public function show($id)
    {
        $trash_box = new trash_box();
        $data = $trash_box->showData($id);
        return $data;
    }

    public function update(TrashBoxRequest $request, $id)
    {
        $trash_box = new trash_box();
        $trash_box->updateData($request,$id);
        return redirect("api/map/".$id);
    }

    public function destroy($id)
    {
        trash_box::find($id)->delete();
    }
}
