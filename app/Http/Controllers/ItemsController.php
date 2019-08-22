<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TestCollection;
use App\Items;

class ItemsController extends Controller
{
    //
    public function store(Request $request){
        $item = new Items([
            'description' => $request->get('description'),
            'id_list' => $request->get('id_list')
        ]);

        $item->save();

        return response()->json('success');
    }
    public function index() {
        return new TestCollection(Items::all());
    }

    public function findFromList(Request $request, $id){
        return Items::select('description', 'status')
            ->where ('id_list','=',$id)
            ->get();
    }
}
