var temp = [];

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/3006',
        method: 'GET',
        success: (result) => {
            console.log(result)
            temp.push(result[result.length-1].indiceTemp)
            temp.push(100-result[result.length-1].indiceTemp)
            var ctx = document.getElementById("myChart2")
            var myChart1 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Temperatura', 'Total'],
                    datasets: [{
                        label: '# of Votes',
                        data: temp,
                        backgroundColor: [
                            'rgba(3, 201, 169, 1)',
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