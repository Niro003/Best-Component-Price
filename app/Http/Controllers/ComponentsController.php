<?php

namespace App\Http\Controllers;

use App\Component;
use App\Hornbach_component;
use App\Obi_component;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class ComponentsController extends Controller
{
    public function getComponentStatistics()
    {
        return Component::raw(function($collection)
        {
            return $collection->aggregate([
                [
                    '$group'    => [
                        '_id'   => '$component_id',
                        'category' =>  ['$first' => '$category' ],
                        'price' =>  ['$first' => '$price' ],
                        'image' =>  ['$first' => '$image' ],
                        'article-title' =>  ['$first' => '$article-title' ],
                        'company' =>  ['$first' => '$company' ],
                        'link' =>  ['$first' => '$link' ],

                        'total' => [
                            '$sum'  => '$price'
                        ],
                        'count' => [
                            '$sum'  => 1
                        ]
                    ]
                ]
            ]);
        });
    }
    public function searchComponentsByTitle($title) {
        $hornbach_components = Hornbach_component::where('article-title', 'like', $title . '%')->orderBy('price','desc')->get()->toArray();
        $obi_components = Obi_component::where('article-title', 'like', $title . '%')->get()->toArray();
        $this->addAdditionalColumnCompany($hornbach_components, $obi_components);
        return array_merge($obi_components,$hornbach_components);
    }
    public function searchComponents($title){
        return DB::collection('hornbach_components')->where('article-title', 'like', $title . '%')->get();
    }
    public function searchComponentsByCategory($category){
        $hornbach_components = Hornbach_component::where('category', '=', $category)->get()->toArray();
        $obi_components = Obi_component::where('category', '=', $category)->get()->toArray();
        $this->addAdditionalColumnCompany($hornbach_components, $obi_components);
        return array_merge($obi_components,$hornbach_components);
    }
    private function addAdditionalColumnCompany(&$hornbach_components, &$obi_components){
        $this->addColumn($hornbach_components, 'company', '/assets/800px-Hornbach_Logo_black.svg.png');
        $this->addColumn($obi_components, 'company', '/assets/obi-print.jpg');
    }
    public function store(Request $request)
    {
        // Validate the request...
        $component = new Component();
        $component->component_id = $request->_id;
        $component->category = $request->category;
        $component->price = $request->price;
        $component->image = $request->image;
        $component['article-title'] = $request['article-title'];
        $component->company = $request->company;
        $component->link = 'test';
        return $component->save() ? "ok" : "error";
    }
    private function addColumn(&$array,$column,$val) {
        foreach ($array as &$component) {
            $component[$column] = $val;
        }
    }
}
