<?php

namespace App\Http\Controllers;

use App\Component;
use App\Hornbach_component;
use App\Obi_component;
use Illuminate\Support\Facades\DB;

class ComponentsController extends Controller
{
    public function index()
    {
        return Component::all();
    }
    public function searchComponentsByTitle($title) {
        $hornbach_components = Hornbach_component::where('article-title', 'like', $title . '%')->orderBy('price','desc')->get()->toArray();
        $obi_components = Obi_component::where('article-title', 'like', $title . '%')->get()->toArray();
        $this->addColumn($hornbach_components, 'company', '../assets/800px-Hornbach_Logo_black.svg.png');
        $this->addColumn($obi_components, 'company', '../assets/obi-print.jpg');
        return array_merge($obi_components,$hornbach_components);
    }
    public function searchComponents($title){
        return DB::collection('hornbach_components')->where('article-title', 'like', $title . '%')->get();
    }
    public function searchComponentsByCategory($category){
        return DB::collection('hornbach_components')->where('category', '=', $category)->get();
    }
    function addColumn(&$array,$column,$val) {
        foreach ($array as &$component) {
            $component[$column] = $val;
        }
    }
}
