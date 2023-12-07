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

    document.onkeydown = function (e) {
        if (e.ctrlKey &&
            (e.keyCode === 85)) {
            return false;
        }
    };

    document.oncontextmenu = function () {
        return false;
    }

})