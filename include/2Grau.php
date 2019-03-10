<?php
class 2Grau{
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
    if(isValido($valor)){
      $this->a = $valor
    }
  }
  public function setB($valor){
    if(isValido($valor)){
      $this->b = $valor
    }
  }
  public function setC($valor){
    if(isValido($valor)){
      $this->c = $valor
    }
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
  public function getX1(){
    return $this->x2;
  }
  private function calculaX1($delta){
    $this->x1 = (($this->b*-1) + sqrt($delta)) / 2*$this->a
  }
  private function calculaX2($delta){
    $this->x1 = (($this->b*-1) - sqrt($delta)) / 2*$this->a
  }

  public function calcular(){
    $this->calculaDelta();
    $delta= getDelta();
    calculaX1($delta);
    calculaX2($delta);
  }

  public function __construct ( $a,$b,$c) {
    $this.setA($a);
    $this.setB($b);
    $this.setC($c);
  }

}

?>
