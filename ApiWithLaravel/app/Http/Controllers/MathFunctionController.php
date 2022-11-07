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
            'tiempo' => 'required',
            'vInicial'
        ]);

        $resultado=0;

        #obteniendo datos de la form
        $funcion=new MathFunction();
        $funcion->vFinal = $request->vFinal;
        $funcion->vAcel = $request->vAcel;
        $funcion->tiempo = $request->tiempo;

        #formulacion
        $veloFinal = $request->vFinal;
        $parseVFinal = floatval($veloFinal);

        $veloAceleracion = $request->vAcel;
        $parseAceleracion = floatval($veloAceleracion);

        $tiempoY = $request->tiempo;
        $parseTiempo = floatval($tiempoY);

        #realizacion de la operacion
        $resultado = $parseVFinal - $parseAceleracion * $parseTiempo;

        #asignando el resultado
        $funcion->vInicial = $resultado;

        # guardar los datos a la base de datos
        $funcion->save();

        
        # API response
        return response([
            'status' => 200,
            'message' => 'El resultado de la velocidad inicial es de: '.$resultado
        ]);

    }

}
