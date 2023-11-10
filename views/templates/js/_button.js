$(function () {

    $(document).on("click", "#resume", function () {
        softwareApp.setLoadData({
            url: "views/pages/resume.html",
            success: function (dataResume) {
                $("#contenedor_cambiar_header").fadeIn(100).html(dataResume);
            }
        });
    })

    $(document).on("click", "#inicio", function () {
        softwareApp.setLoadData({
            url: "views/pages/inicio.html",
            success: function (dataInicio) {
                $("#contenedor_cambiar_header").html(dataInicio);

            }
        });
    })

    $(document).on("click", "#portafolio", function () {
        softwareApp.setLoadData({
            url: "views/pages/portafolio.html",
            success: function (dataPortafolio) {
                $("#contenedor_cambiar_header").html(dataPortafolio);

            },error: function (data)
            {
                
            }
        });
    })

})