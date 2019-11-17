<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrashTypeBoxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trash_type_boxes', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('trash_box_id');
            $table->string('types');
            $table->timestamps();

            $table->index('trash_box_id');

            $table->foreign('trash_box_id')->references('id')->on('trash_boxes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trash_type_boxes');
    }
}