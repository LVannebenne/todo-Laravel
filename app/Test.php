<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    //
    protected $table = 'users';
    protected $primaryKey = 'id_user';
    protected $fillable = ['username','email','password'];
    public $timestamps = false;

    public function showAll() {
        $tests = App\Test::all();

        foreach ($tests as $test) {
            echo $test->name;
        }
    }

    
}
