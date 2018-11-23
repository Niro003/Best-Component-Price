<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Hornbach_component extends Eloquent
{
    //
    protected $connection = 'mongodb';

    protected $collection = 'hornbach_components';
}
