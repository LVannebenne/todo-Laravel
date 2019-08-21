<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TestCollection;
use App\Lists;

class ListsController extends Controller
{
    //
    public function store(Request $request){
        $list = new Lists([
            'name' => $request->get('name')
        ]);

        $list->save();

        return response()->json('success');
    }
    public function index() {
        return new TestCollection(Lists::all());
    }
    public function edit($id) {
        $list = Lists::find($id);
        return response()->json($list);
    }
}
