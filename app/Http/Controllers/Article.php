<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TestCollection;
use App\Test;

class Article extends Controller
{
    //
    public function show_users() {
        $tests = Test::all();

        foreach ($tests as $test) {
            echo $test->name;
        }
    }

    public function index(){
        return Test::orderBy('id_user','DESC')->get();
    }
    
}
