<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Component extends Eloquent
{
    protected $connection = 'mongodb';

    protected $collection = 'components';


    /**

     * The attributes that are mass assignable.

     *

     * @var array

     */

    protected $fillable = [

        'name', 'detail'

    ];
}
