<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    echo $nombre.
   // $destinatario = "tu_correo@dominio.com"; // Reemplaza con tu dirección de correo
//
   // $asunto = "Nuevo mensaje de contacto de $nombre";
   // 
   // $contenido = "Nombre: $nombre\nCorreo: $correo\nMensaje: $mensaje";
   // 
   // // Puedes agregar más encabezados si es necesario
   // $encabezados = "From: $correo" . "\r\n" .
   //                "Reply-To: $correo" . "\r\n" .
   //                "X-Mailer: PHP/" . phpversion();
   // 
   // // Enviar el correo
   mail($destinatario, $asunto, $contenido, $encabezados);
    
    // Redirigir a una página de agradecimiento o mostrar un mensaje de éxito
    //header("Location: gracias.html");
} else {
    // Redirigir a una página de error si se intenta acceder directamente a este archivo
    //header("Location: error.html");
}
?>
