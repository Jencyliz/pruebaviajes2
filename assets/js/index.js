import "../../node_modules/jquery/dist/jquery.js";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


// fondo para el navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-bg');
    } else {
        navbar.classList.remove('navbar-bg');
    }
});


// Scroll
  $('.navbar-nav .nav-link').on('click', function(event) { // al hacer click
    var target = $(this).attr('href'); 
    if ($(target).length) { 
      event.preventDefault(); 
      $('html, body').animate({ 
        scrollTop: $(target).offset().top -90 
      }, 100); 
    }
  });


// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


// Alert function
function alert1() {
    // Crea el HTML
    const alertHtml = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>¡Muy bien!</strong> Tu mensaje ha sido enviado correctamente, revisa tu bandeja de entrada para revisar nuestra respuesta.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  
    // Append (adjunta) el código al div.alertcontainer
    $("#alertContainer").append(alertHtml);
  
    // Remueve la alerta despues de 5 segundos
    setTimeout(() => {
      $("#alertContainer .alert").remove(); // Remueve la alerta
    }, 5000); // 5 segundos
  }
  
  // Botón
  $("#enviarBtn").click(function() {
    alert1();
  });