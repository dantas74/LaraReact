<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Index/Index');
    }

    public function show(Request $request)
    {
        return inertia('Index/Show');
    }
}
