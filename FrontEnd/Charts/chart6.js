var temp2 = [];

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/69',
        method: 'GET',
        success: (result) => {
            console.log(result)
            temp2.push(result[result.length-1].indiceTemp)
            temp2.push(100-result[result.length-1].indiceTemp)
            var ctx = document.getElementById("myChart6")
            var myChart6 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Temperatura', 'Total'],
                    datasets: [{
                        label: '# of Votes',
                        data: temp2,
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