<?php

use Illuminate\Database\Seeder;

class TrashBoxesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('trash_boxes')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $param = [
            'lat' => 35.465843,
            'lng' => 139.622269,
            'location_name'=> "横浜駅",
            'created_at' => "2019-01-02 17:50:30",
            'updated_at' => "2019-01-02 18:38:31",
        ];
        DB::table('trash_boxes')->insert($param);

        $param = [
            'lat' => 35.467753,
            'lng' => 139.620357,
            'location_name'=> "ヨドバシカメラ マルチメディア横浜",
            'created_at' => "2019-01-02 17:50:31",
            'updated_at' => "2019-01-02 18:38:32",
        ];
        DB::table('trash_boxes')->insert($param);

        $param = [
            'lat' => 35.471228,
            'lng' => 139.627117,
            'location_name'=> "神奈川駅",
            'created_at' => "2019-01-02 17:50:33",
            'updated_at' => "2019-01-02 18:38:34",
        ];
        DB::table('trash_boxes')->insert($param);
    }
}
