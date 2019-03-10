<?php
class Calculadora{
  private $a;
  private $b;
  private $c;
  private $delta;
  private $x1;
  private $x2;

  private function isValido($valor){
    if(isset($valor)){
      if(is_numeric($valor)){
        return true;
      }
    }
    return false;
  }

  public function setA($valor){
    if($this->isValido($valor)){
      $this->a = $valor;
      return 1;
    }
    return 0;
  }
  public function setB($valor){
    if($this->isValido($valor)){
      $this->b = $valor;
      return 1;
    }
    return 0;
  }
  public function setC($valor){
    if($this->isValido($valor)){
      $this->c = $valor;
      return 1;
    }
    return 0;
  }

  private function calculaDelta(){
    $this->delta = pow($this->b,2)-(4*$this->a*$this->c);
  }

  public function getDelta(){
    return $this->delta;
  }

  public function getX1(){
    return $this->x1;
  }
  public function getX2(){
    return $this->x2;
  }
  public function getA(){
    return $this->a;
  }
  public function getB(){
    return $this->b;
  }
  public function getC(){
    return $this->c;
  }
  private function calculaX1($delta){
    $this->x1 = (($this->b*-1) + sqrt($delta)) / 2*$this->a;
  }
  private function calculaX2($delta){
    $this->x2 = (($this->b*-1) - sqrt($delta)) / 2*$this->a;
  }

  public function calcular(){
    $this->calculaDelta();
    $delta= $this->getDelta();
    $this->calculaX1($delta);
    $this->calculaX2($delta);

    if($delta > 0){
      return 1;
    } else{
      if($delta < 0){
        return -1;
      }
      return 0;
    }
  }

}

?>
