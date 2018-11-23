<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Obi_component extends Eloquent
{
    //
    protected $connection = 'mongodb';

    protected $collection = 'obi_components';
}
