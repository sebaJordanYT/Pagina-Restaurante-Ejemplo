/*
Para la frase con autoscroll en vez de repetir el div de html para que parezca infinito puedo hacer esta función que clona
(es decir solo dejaría un div)

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector('.logos').appendChild(copy);
*/

document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Aquí puedes agregar lógica para enviar el formulario al servidor si es necesario

    document.getElementById("success-message").style.display = "block";
  
    setTimeout(function () {
      document.getElementById("success-message").style.display = "none";
    }, 3000);
  });  
  


