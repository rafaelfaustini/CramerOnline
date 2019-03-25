<div class="container mt-3">
  <h5>Snizer Cramer - 2 Grau</h5>
  <h6>Calcula equação do segundo grau</h6>

  <form method="POST">
    <div class="form-inline">
      <div class="form-group">
        <input class="form-control form-control-lg" type="number" name="edt1" id="a"  value="" required />
        <label class="ml-1 mr-3 text-white">x²</label>
      </div>
      <div class="form-group">
        <input class="form-control form-control-lg" type="number" name="edt2" id="b"  value=""  required ></input>
        <label class="ml-1 mr-3 text-white">x</label>
      </div>
      <div class="form-group">
        <input class="form-control form-control-lg" type="number" name="edt3" id="c"  value="" required ></input>
        <label class="ml-1 mr-3 text-white"> = 0</label>
      </div>
    </div>
    <input type="submit" name="btn" class="btn btn-lg btn-warning mt-4" value="Calcular">

  </form>


  <?php
  include("include/calcular.php")
  ?>
</div>
