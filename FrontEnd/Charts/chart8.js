var humedadAmb2 = [];

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/69',
        method: 'GET',
        success: (result) => {
            console.log(result)
            humedadAmb2.push(result[result.length-1].humedadAmbiental)
            humedadAmb2.push(100-result[result.length-1].humedadAmbiental)
            var ctx = document.getElementById("myChart8")
            var myChart88 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Humedad Ambiente', 'Total'],
                    datasets: [{
                        label: '# of Votes',
                        data: humedadAmb2,
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