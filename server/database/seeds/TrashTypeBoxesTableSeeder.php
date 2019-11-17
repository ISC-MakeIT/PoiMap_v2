<?php

use Illuminate\Database\Seeder;

class TrashTypeBoxesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trash_type_boxes')->truncate();
        $param = [
            'trash_box_id' => 3,
            'types' => "1100",
            'created_at' => "2019-01-02 17:50:30",
            'updated_at' => "2019-01-02 18:38:31",
        ];
        DB::table('trash_type_boxes')->insert($param);

        $param = [
            'trash_box_id' => 2,
            'types' => "0100",
            'created_at' => "2019-01-02 17:50:31",
            'updated_at' => "2019-01-02 18:38:32",
        ];
        DB::table('trash_type_boxes')->insert($param);

        $param = [
            'trash_box_id' => 1,
            'types' => "0011",
            'created_at' => "2019-01-02 17:50:32",
            'updated_at' => "2019-01-02 18:38:33",
        ];
        DB::table('trash_type_boxes')->insert($param);
    }
}
