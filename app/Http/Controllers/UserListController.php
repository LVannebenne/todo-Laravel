<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Auth\ResetPasswordController;
use Illuminate\Http\Request;
use App\Http\Resources\TestCollection;
use App\User;

class UserListController extends Controller
{
    public function store(Request $request){
        $user = new User([
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ]);

        $user->save();

        return response()->json('success');
    }
    public function index() {
        return new TestCollection(
            User::all());
    }

    public function findUser($email) {
        $user = User::select('id_user', 'username', 'email', 'password')
            ->where ('email','=', $email)
            ->get();
        return response()->json($user);
    }
}
