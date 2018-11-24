<?php

namespace App\Http\Controllers;

use App\Bundle;
use App\Hornbach_component;
use App\Obi_component;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class BundleController extends Controller
{
    public function index()
    {
        return Bundle::all();
    }
    public function store(Request $request)
    {
        // Validate the request...
        $bundle = new Bundle();
        $bundle->components = $request->all();
        $bundle->name = "user";
        return $bundle->save() ? "ok" : "error";
    }

}
