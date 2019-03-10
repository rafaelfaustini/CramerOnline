<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $a = $_POST["edt1"];
  $b = $_POST["edt2"];
  $c = $_POST["edt3"];

  $calculadora->setA($a);
  $calculadora->setB($b);
  $calculadora->setC($c);
  $retorno = $calculadora->calcular();

  if($a==0 && $b==0 && $c==0)
  return;

  echo"<div class='bg-dark' id='resultado'>";
  switch($retorno){
    case -1:
    echo"<p class='text-danger text-center mt-2 ml-2'>Não há raízes reais</p>";
    break;
    case 0:
    echo"<p class='text-center mt-2'>Passo a Passo</p>";
    echo"<p class='text-white ml-2'>Δ = b²-4 *a*c</p>";
    printf("<p class='text-white ml-2'>Δ = %.1f ² -4* %.1f * %.1f</p>", $calculadora->getDelta(), $calculadora->getA(), $calculadora->getC());
    echo "<p class='text-center'>Resultado</p>";
    printf("<p class='text-white ml-2'>O valor de delta é %f</p>",$calculadora->getDelta());
    printf("<p class='text-white ml-2'>O valor de x1 e x2 é %.2f</p>", $calculadora->getX1());
    break;
    case 1:
    echo"<p class='text-center mt-2'>Passo a Passo</p>";
    echo"<p class='text-white ml-2'>Δ = b²-4 *a*c</p>";
    printf("<p class='text-white ml-2'>Δ = %.1f ² -4* %.1f * %.1f</p>", $calculadora->getDelta(), $calculadora->getA(), $calculadora->getC());
    echo "<p class='text-center'>Resultado</p>";
    printf("<p class='text-white ml-2'>O valor de delta é %f</p>",$calculadora->getDelta());
    printf("<p class='text-white ml-2'>O valor de x1 é %.2f</p>", $calculadora->getX1());
    printf("<p class='text-white ml-2'>O valor de x2 é %.2f</p>", $calculadora->getX2());
    break;
  }
  echo"</div>";

}
?>
