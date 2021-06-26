var humedadAmb = [];

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/3006',
        method: 'GET',
        success: (result) => {
            console.log(result)
            humedadAmb.push(result[result.length-1].humedadAmbiental)
            humedadAmb.push(100-result[result.length-1].humedadAmbiental)
            var ctx = document.getElementById("myChart4")
            var myChart1 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Humedad Ambiente', 'Total'],
                    datasets: [{
                        label: '# of Votes',
                        data: humedadAmb,
                        backgroundColor: [
                            'rgba(22, 160, 133, 1)',
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