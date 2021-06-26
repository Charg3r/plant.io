var luz2 = [];

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/69',
        method: 'GET',
        success: (result) => {
            console.log(result)
            $("#id2").html(result[result.length-1].idPlanta)
            luz2.push(result[result.length-1].indiceLuz)
            luz2.push(20-result[result.length-1].indiceLuz)
            var ctx = document.getElementById("myChart5")
            var myChart5 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Luz', 'Total'],
                    datasets: [{
                        label: '# of Votes',
                        data: luz2,
                        backgroundColor: [
                            'rgba(54, 215, 183, 1)',
                            'rgba(0, 0, 0, 0.15)'
                        ],
                        borderColor: [
                            'rgba(255, 255, 255, 1)',

                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            ticks: { display: false },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            ticks: { display: false },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            }
                        }]
                    }
                }
            });
        },
        error: (xhr, status, error) => {
            console.log(error);
        }
    })
});