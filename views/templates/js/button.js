$(function () {

    $(document).on("click", "#resume", function () {
        $.ajax({
            url: "views/pages/resume.html",
            success: function (dataResume) {
                $("#contenedor_cambiar_header").html(dataResume);
                $("#loader2").css("display", "block").slideUp(1000);
            }
        });
    })

    $(document).on("click", "#inicio", function () {
        $.ajax({
            url: "views/pages/inicio.html",
            success: function (dataInicio) {
                $("#contenedor_cambiar_header").html(dataInicio);
                $("#loader2").css("display", "block").slideUp(1000);
            }
        });
    })

    $(document).on("click", "#portafolio", function () {
        $.ajax({
            url: "views/pages/portafolio.html",
            success: function (dataPortafolio) {
                $("#contenedor_cambiar_header").html(dataPortafolio);
                $("#loader2").css("display", "block").slideUp(1000);

            }
        });
    });

    $(document).on("click", "#contacteme", function () {
        $.ajax({
            url: "views/pages/contacto.html",
            success: function (dataPortafolio) {
                $("#contenedor_cambiar_header").html(dataPortafolio);
                $("#loader2").css("display", "block").slideUp(1000);

            }
        });
    })

    // bloquear administrador de desarrollador
        /*document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 85)) {
                return false;
            }
        };

        document.oncontextmenu = function() {
            return false;
        } 

        document.addEventListener('keydown', function(e) {
             if (
                 e.key === 'F12' ||
                 (e.ctrlKey && e.shiftKey && ['I', 'C', 'J'].includes(e.key)) ||
                 (e.ctrlKey && e.key === 'U')
             ) {
                 e.preventDefault();
             }
         });

         window.addEventListener("load", () => {
             setTimeout(() => window.scrollTo(0, 1), 100);
         });

         setInterval(function() {
             const start = performance.now();
             debugger;
             const end = performance.now();

             if (end - start > 100) {
                 window.location.href = "error";
             }
         }, 1000);*/


})
