<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="../../public/assets/css/style.css">
  <title>Document</title>
</head>

<body>
  <form id="calculadora" class="calculadora" >
    <table>
      <tr>
        <div class="result" id="result"></div>

      </tr>
      <tr>
        <td><button type="button" id="limpiar" onclick="limpiarDisplay()">C</button></td>
        <td> <input type="button" value="/" onclick="addDisplay('/')"></td>
        <td><input type="button" value="*" onclick="addDisplay('*')"></td>
        <td rowspan="2"> <input type="button" value="-" onclick="addDisplay('-')"></td>
      </tr>
      <tr>
        <td><input type="button" value="1" onclick="addDisplay('1')"></td>
        <td><input type="button" value="2" onclick="addDisplay('2')"></td>
        <td><input type="button" value="3" onclick="addDisplay('3')"></td>
      </tr>
      <tr>
        <td><input type="button" value="4" onclick="addDisplay('4')"></td>
        <td><input type="button" value="5" onclick="addDisplay('5')"></td>
        <td><input type="button" value="6" onclick="addDisplay('6')"></td>
        <td rowspan="2"><input type="button" value="+" onclick="addDisplay('+')"></td>
      </tr>
      <tr>
        <td><input type="button" value="7" onclick="addDisplay('7')"></td>
        <td><input type="button" value="8" onclick="addDisplay('8')"></td>
        <td><input type="button" value="9" onclick="addDisplay('9')"></td>
      </tr>
      <tr>
        <td colspan="2"><input type="button" value="0" onclick="addDisplay('0')"></td>
        <td colspan="2"><input type="button" value="=" onclick="calculate()"></td>
        <input type="hidden" name="numero" id="numero">
        
      </tr>
      <div class="error" id="error"></div>
    </table>
   
  </form>
  
  <script src="../../public/assets/js/validation.js"></script>
</body>

</html>