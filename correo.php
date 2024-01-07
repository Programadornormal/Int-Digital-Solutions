<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host       = 'moluk.hosting-mexico.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ventas@intdiso.com';
        $mail->Password   = 'Ventas.123*';
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        // Configuración del mensaje
        $mail->setFrom($correo, $nombre);
        $mail->addAddress('ventas@intdiso.com', 'Ventas Intdiso');
        $mail->isHTML(true);
        $mail->Subject = 'Solicitud de informacion';
        $mail->Body    = 'Nombre: ' . $nombre . '&nbsp;<br>Correo: ' . $correo . '&nbsp;<br>Mensaje: ' . $mensaje;

        // Envío del mensaje
        $mail->send();
        header("Location: index.html?correo=1");
        exit();
    } catch (Exception $e) {
        echo "El mensaje no pudo ser enviado. Error del correo: {$mail->ErrorInfo}";
    }
} else {
    // Redireccionar si el formulario no se envía por POST
    header("Location: index.html?fallo=1");
    exit();
}
?>