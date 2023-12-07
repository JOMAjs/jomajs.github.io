var softwareApp = {};
xhrPool = [];
softwareApp = function () {
    return {
        setLoadData: function (options) {
            var options = jQuery.extend({
                id_container_header: 'title_content',
                success: function () { },
                insertType: 'html',
                dataType: '',
                loading: true,
                type: 'POST',
                url: '',
                data: {}
            }, options);

            if (options.loading) {
                var loading = softwareApp.setLoading();
            }
            $.ajax({
                dataType: options.dataType,
                url: options.url,
                type: options.type,
                data: options.data,
                beforeSend: function (jqXHR, settings) {
                    xhrPool.push(jqXHR);
                },
                success: function (data) {
                    switch (options.url) {
                        case 'php': {
                            var data = jQuery.extend({
                                content: '',
                                error: false,
                                title: null,
                            }, data);
                            if (data.error) {
                                softwareApp.setAlert({
                                    title: 'Error en la transacción realizada',
                                    content: data.error,
                                    type: 'error',
                                });
                                if (loading) {
                                    softwareApp.removeLoading();
                                }
                                return false;
                            }
                            // Si se definio un contenedor para el title mostramos el content retornado
                            if (options.id_container_header && data.title) {
                                $('#' + options.id_container_header).html(data.title);
                            }
                            // Si se definio un contenedor para el body mostramos el content retornado

                            // Revisamos si la respuesta ajax nos retorno scripts para cargarlos
                            if (data.script) {
                                if (typeof (data.script) == 'object') {
                                    $.each(data.script, function (index, value) {
                                        softwareApp.setAutoLoadJS({
                                            src: value
                                        });
                                    });
                                } else {
                                    softwareApp.setAutoLoadJS({
                                        src: data.script
                                    });
                                }
                            }
                            if (data.css) {
                                if (typeof (data.css) == 'object') {
                                    $.each(data.css, function (index, value) {
                                        softwareApp.setAutoLoadCss({
                                            src: value
                                        });
                                    });
                                } else {
                                    softwareApp.setAutoLoadCss({
                                        src: data.css
                                    });
                                }
                            }
                        }
                            break;
                    }
                    if (loading) {
                        softwareApp.removeLoading();
                    }
                    options.success(data);
                },
                error: function (obj, typeError, text, data) {
                    console.log(obj, typeError, text, data);
                    if (loading) {
                        softwareApp.removeLoading();
                    }
                    if (typeError !== "abort") {
                        softwareApp.setAlert('Se ha producido un error inesperado. Vuelve a intentarlo mas tarde.');
                    }
                },
            });
        },
        setConfirm: function(options) {
			// valores por defecto
			var options = jQuery.extend({
				message: '¿Esta seguro de realizar esta operación?',
				accept: function() {},
				cancel : function() {}
			}, options);
			bootbox.confirm({
				animate: true,
				backdrop: true,
				className: "in",
			    message: '<strong>Mensaje de confirmación:</strong> <br><br>'+ options.message,
			    closeButton: false,
			    buttons: {
			        confirm: {
			            label: 'Aceptar',
			            className: 'btn-success'
			        },
			        cancel: {
			            label: 'Cancelar',
			            className: 'btn-danger'
			        }
			    },
			    callback: function (result) {
			        if (result) {
			        	options.accept();
			        } else {
			        	options.cancel();
			        }
			    }
			});
		},

        setNotificacion: function(options){
			var options = jQuery.extend({
				tipo: '',
				mensaje:'Prueba de mensaje'
			}, options);
			$.toast({
				heading: 'Mensaje del sistema',
				text: options.mensaje,
				showHideTransition: 'slide',
				icon: options.tipo,
				position: 'top-right',
			})
			
		},

        setLoading: function() {
            // funcion para bloquear la pantalla mientras se ejecuta una accion
            return $("#loader2").show();
            //return $(div).appendTo('body');
        },
        removeLoading: function() {
			// funcion para bloquear la pantalla mientras se ejecuta una accion
			return $("#loader2").hide();
			//return $(div).appendTo('body');
		},

        setAlert: function(options) {
			if (typeof (options) == 'string') {
				options = {
					message : options
				}
			}
			// valores por defecto
			var options = jQuery.extend({
				message: '',
				accept: function() {},
				cancel : function() {}
			}, options);
			bootbox.alert({

				backdrop: true,
				className: "in",
			    message: '<strong>Atención:</strong> <br><br>'+ options.message,
			    closeButton: false,
			    buttons: {
			        ok: {
			            label: 'Aceptar',
			            className: 'btn-success'
			        }
			    },
			});

		},

        setAutoLoadJS: function(options) {
			var options = jQuery.extend({
				src: '',
				id: options.src
			}, options);
			var ele = document.getElementById(options.id); // ahora el nombre
			if (ele == undefined) {
				var tagjs = document.createElement("script");
				tagjs.setAttribute("type", "text/javascript");
				tagjs.setAttribute("id", options.id);
				tagjs.setAttribute("src", options.src);
				document.getElementsByTagName("head")[0].appendChild(tagjs);
			}
		}

    }
}();