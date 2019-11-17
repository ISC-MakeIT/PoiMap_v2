<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TrashBoxesTableSeeder::class);
         $this->call(TrashTypeBoxesTableSeeder::class);
         $this->call(CommentsTableSeeder::class);
    }
}
