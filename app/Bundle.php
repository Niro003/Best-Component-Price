<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Bundle extends Eloquent
{
    protected $connection = 'mongodb';

    protected $collection = 'bundles';


}
