<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('math_functions', function (Blueprint $table) {
            $table->id();
            $table->double('vInicial', 8, 3)->nullable();
            $table->double('vFinal', 8, 3);
            $table->double('vAcel', 8, 3);
            $table->double('tiempo', 8, 3);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('math_functions');
    }
};
