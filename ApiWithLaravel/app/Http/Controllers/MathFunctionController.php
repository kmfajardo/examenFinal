<?php

namespace App\Http\Controllers;

use App\Models\MathFunction;
use Illuminate\Http\Request;

class MathFunctionController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        #estado de entrada/salida
        $request->validate([
            'vFinal' => 'required',
            'vAcel' => 'required',
            'tiempo' => 'required'
        ]);

        $resultado=0;

        $funcion=new MathFunction();
        $funcion->vFinal = $request->vFinal;
        $funcion->vAcel = $request->vAcel;
        $funcion->tiempo = $request->tiempo;

        # guardar los datos
        $funcion->save();

        $resultado = $this->vFinal - $this->vAcel * $this->tiempo;
        # API response
        return response([
            'status' => 200,
            'message' => 'El resultado de la velocidad inicial es de: '.$resultado
        ]);

    }

}
