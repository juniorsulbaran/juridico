document.addEventListener("DOMContentLoaded", function () {

    $(document).ready(function () {
        $.ajax({
            url: '/data',
            beforeSend: function () {
                let timerInterval
                Swal.fire({
                    title: '',
                    html: 'Procesando.',
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                        }, 1000) // Actualizar cada segundo en lugar de cada 100 milisegundos
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                })
            },
            success: function (response) {
                console.log(response.metaData[0]);
                $('#metadatos').append(response.metaData[0].name);
                //expeditionDate
                $('#tagexpeditionDate').append('Expedición:');
                $('#expeditionDate').append(response.metaData[0].expeditionDate);
                //publishDate
                $('#tagpublishDate').append('Publicación:');
                $('#publishDate').append(response.metaData[0].publishDate);
                //Descripcion
                $('#tagDescripcion').append('Descripcion:');
                $('#description').append(response.metaData[0].description);
            }
        });
    });
});

function listModal() {
    $.ajax({
        url: '/data',
        beforeSend: function () {
            let timerInterval
            Swal.fire({
                title: '',
                html: 'Procesando.',
                timer: 5000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    }, 1000) // Actualizar cada segundo en lugar de cada 100 milisegundos
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            })
        },
        success: function (response) {
            console.log(response.data);
            $('#encabezado').append(response.encabezado);
            $('#parrafo1').append(response.parrafo1);
            $('#parrafo2').append(response.parrafo2);
            $('#parrafo3').append(response.parrafo3);
            $('#parrafo4').append(response.parrafo4);
            $('#parrafo5').append(response.parrafo5);
            $('#parrafo6').append(response.parrafo6);
            $('#parrafo7').append(response.parrafo7);
            $('#parrafo8').append(response.parrafo8);
            $('#parrafo9').append(response.parrafo9);
            $('#parrafo10').append(response.parrafo10);
            $('#parrafo11').append(response.parrafo11);
            $('#parrafo12').append(response.parrafo12);
            $('#parrafo13').append(response.parrafo13);
            $('#parrafo14').append(response.parrafo14);
            $('#parrafo15').append(response.parrafo15);
            $('#parrafo16').append(response.parrafo16);
            $('#parrafo17').append(response.parrafo17);
            $('#parrafo18').append(response.parrafo18);
            $('#parrafo19').append(response.parrafo19);
            $('#parrafo20').append(response.parrafo20);
            $('#parrafo21').append(response.parrafo21);
            $('#parrafo22').append(response.parrafo22);
            $('#parrafo23').append(response.parrafo23);
            $('#parrafo24').append(response.parrafo24);
        }
    });
};
