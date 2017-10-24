<!Doctype html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="mng.css">
<meta charset="utf-8"/>
</head>

<body>
<h1>Snizer Cramer - 2 Grau</h1>
<h2>Calcula equação do segundo grau</h2>

  <table>
     <tr>
      <form method="POST">
       <td><input type="number" name="edt1" id="a"  value="" ><b> x²&nbsp</font></b></td>
       <td><input type="number" name="edt2" id="b" value=""><b> x&nbsp</b></font></td>
       <td><input type="number" name="edt3" id="c" value=""><b> = 0</b></font></td>
    </tr>

  </table>
  <br>
  <input type="submit" name="btn">
 </form>
<?php
$a = $_POST["edt1"];
$b = $_POST["edt2"];
$c = $_POST["edt3"];

$delta= pow($b,2)*4*$a*$c;
$x1= (($b*-1)+sqrt($delta))/4*$a;
$x2= (($b*-1)-sqrt($delta))/4*$a;

if (isset($a)&&isset($b)&&isset($c))
{
  echo "<br>O valor de x1 é $x1<br>";
  echo "O valor de x2 é $x2";
}

?>

</body>
</html>
