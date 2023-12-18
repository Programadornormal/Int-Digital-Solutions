



var chatHistory = [];
function cerrarChat(){
    document.getElementById("historial").style.display = 'none';
    document.getElementById("bot-txt").innerHTML = "Hola, ¿En qué puedo ayudarte?";
    document.getElementById("btncerrarChat").style.display = 'none';
    chatHistory.length = '0';
}
function prodDomotica(){
    var userMessage = "Dime sobre domótica";
    var botMessage = "Información sobre el producto de domotica";
    var botOpciones = "";
    document.getElementById("historial").style.display = '';
    addToHistory(userMessage, botMessage, botOpciones);
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    
}
function prodSoftware(){
    var userMessage = "Dime sobre desarrollo";
    var botMessage = "Información sobre el producto de software";
    var botOpciones = "";
    document.getElementById("historial").style.display = '';
    addToHistory(userMessage, botMessage, botOpciones);
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    
}
function prodRepair(){
    var userMessage = "Dime sobre reparación";
    var botMessage = "Información sobre el producto de reparacion";
    var botOpciones = "";
    document.getElementById("historial").style.display = '';
    addToHistory(userMessage, botMessage, botOpciones);
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    
}
function prodElectro(){
    var userMessage = "Dime sobre venta de electrónica";
    var botMessage = "Información sobre el producto de electronica";
    var botOpciones = "";
    document.getElementById("historial").style.display = '';
    addToHistory(userMessage, botMessage, botOpciones);
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    
}

function addToHistory(userMessage, botMessage, botOpciones) {
    var conversation = { user: userMessage, bot: botMessage, op: botOpciones };
    chatHistory.push(conversation);
}

function showHistory() {
    var historyOutput = "";
    for (var i = 0; i < chatHistory.length; i++) {
        historyOutput += "<div class='mensaje-user'><strong><i class='fa-solid fa-user'></i></strong> " + chatHistory[i].user + "<br></div> ";
        historyOutput += "<div class='mensaje-bot'> <div><img class='respuesta-img' src='/img/Hola!.png'>" + chatHistory[i].bot + "<br><br></div> <div class='btn-op1'>" + chatHistory[i].op + "</div></div>";
    }
    return historyOutput;
}

document.getElementById("info1").addEventListener("click", function() {
    var userMessage = "Ver productos disponibles";
    var botMessage = "¡Aquí tienes información sobre los productos disponibles!";
    var botOpciones = "<button onclick='prodDomotica()'>Domótica</button> <button onclick='prodSoftware()'>Software</button> <button onclick='prodElectro()'>Venta de electrónica</button> <button onclick='prodRepair()'>Reparación</button> ";
    document.getElementById("historial").style.display = '';
    addToHistory(userMessage, botMessage, botOpciones);
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    document.getElementById("bot-txt").innerText = "Hola, ¿En qué más puedo ayudarte?";
    document.getElementById("btncerrarChat").style.display = 'flex';
});
document.getElementById("info2").addEventListener("click", function() {
    var userMessage = "Quiero un presupuesto";
    var botMessage = "Claro, comúnicate con nuestro equipo mediante correo para una cotización personalizada.";
    var botOpciones = "<a id='btn-correo' href='mailto:intdigitalsolutions@gmail.com?subject=Solicito Informacion&body='Hola, puedo obtener más información''><i class='fa-brands fa-google'></i>Google</a>"
    addToHistory(userMessage, botMessage, botOpciones);
    document.getElementById("historial").style.display = '';
    document.getElementById("historial").innerHTML = showHistory();
    document.getElementById("bot-txt").innerText = "Hola, ¿En qué más puedo ayudarte?";
    document.getElementById("btncerrarChat").style.display = 'flex';
    
});
document.getElementById("info3").addEventListener("click", function() {
    var userMessage = "Tengo una duda";
    var botMessage = "¿Qué te gustaría saber?";
    var botOpciones = "<button>¿Sus productos tienen garantia?</button> <button>¿En dónde están ubicados?</button> <button>Hacen envíos a domicilio</button> <button>¿Cómo puedo contactarme más rápido?</button> ";
    addToHistory(userMessage, botMessage, botOpciones);
    document.getElementById("historial").style.display = '';
    //document.getElementById("mensajes").innerHTML = "<strong>Tú:</strong> " + userMessage + "<br><br><strong>Bot:</strong> " + botMessage;
    document.getElementById("historial").innerHTML = showHistory();
    document.getElementById("bot-txt").innerText = "Hola, ¿En qué más puedo ayudarte?";
    document.getElementById("btncerrarChat").style.display = 'flex';
    
});
