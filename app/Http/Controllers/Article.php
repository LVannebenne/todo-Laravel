<?php

namespace App\Http\Controllers;

use App\Test;

use Illuminate\Http\Request;

class Article extends Controller
{
    //
    public function show_users() {
        $tests = App\Test::all();

        foreach ($tests as $test) {
            echo $test->name;
        }
    }

    public function index(){
        return Test::orderBy('id_user','DESC')->get();
    }
    
}
