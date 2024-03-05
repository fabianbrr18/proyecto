<?php
require_once '../Class/ClassCalculadora.php';
//verifcar solicitud
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // expresion  se ha enviado en la solicitud post(comprueba el parametro)
    if(isset($_POST["expression"]) && !empty($_POST["expression"])){
        $expression = $_POST["expression"];

        // Realizar el cálculo usando la clase Calculator
        $calculator = new Calculator();
        try {
            // Evaluar la expresión usando la calculadora y mostrar el resultado
            $result = eval('return ' . $expression . ';');
            echo $result;
        } catch (DivisionByZeroError $e) {
            echo "Error: División por cero"; // Manejar la excepción de división por cero
        } catch (Throwable $e) {
            echo 'Error en la expresión'; // Otro tipo de errores
        }
    } else {
        echo "Error: La expresión no se recibió correctamente";
    }
}
?>
