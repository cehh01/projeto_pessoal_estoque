<?php

namespace App\Http\Controllers;

use App\Models\Itens;
use Illuminate\Http\Request;

class ItensController extends Controller
{
    public function index()
    {

        return view('itens.index');
    }


}
