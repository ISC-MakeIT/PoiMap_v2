<!DOCTYPE html>
<html lang="en">
<head>
  <title>home</title>
</head>
<body>
  <form action="{{action('PoiMapController@search')}}"method="post">
  {{ csrf_field() }}
  <input type="text" name="keyword">
  </form>
</body>
</html>