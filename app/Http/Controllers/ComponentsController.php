<?php

namespace App\Http\Controllers;

use App\Component;
use Illuminate\Support\Facades\DB;

class ComponentsController extends Controller
{
    public function index()
    {
        return Component::all();
    }
    public function searchComponents($title){
        return DB::collection('hornbach_components')->where('article-title', 'like', $title . '%')->get();
    }
    public function searchComponentsByCategory($category){
        return DB::collection('hornbach_components')->where('category', '=', $category)->get();
    }
}
