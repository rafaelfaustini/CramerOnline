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
  <br>
 </form>
<?php
$a = $_POST["edt1"];
$b = $_POST["edt2"];
$c = $_POST["edt3"];

$delta= ($b*$b) - ((4*$a)*$c);

$x1= (($b*-1)+(sqrt($delta)))/2*$a;
$x2= (($b*-1)-(sqrt($delta)))/2*$a;

if (isset($a)&&isset($b)&&isset($c))
{
  echo"<br>Passo a Passo<br>";
  echo"Δ = b²-4 *a*c<br>";
  echo"Δ = $b ² -4* $a * $c <br><br>";
  echo "Resultado";
  echo "<br>O valor de delta é $delta<br>";
  echo "O valor de x1 é $x1<br>";
  echo "O valor de x2 é $x2";
}

?>

</body>
</html>
