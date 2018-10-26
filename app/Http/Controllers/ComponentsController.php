<?php

namespace App\Http\Controllers;

use App\Component;
use Illuminate\Http\Request;

class ComponentsController extends Controller
{
    public function index()
    {
        return Component::all();
    }
}
