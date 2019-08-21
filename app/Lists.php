<?php

//Lists.php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lists extends Model
{
    //
    protected $primaryKey = 'id_list';
    protected $fillable = ['name'];
}
