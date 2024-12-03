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
        url: '/modal',
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
            $('#texto').html(response)
            $('#textoModal').modal('show');
        }
    });
};
