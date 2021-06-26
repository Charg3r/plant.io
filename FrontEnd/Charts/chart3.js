var humedadSuelo = [];
var l1,l2

$(document).ready(() => {
    $.ajax({
        url:'/equipo2/api/plantio/3006',
        method: 'GET',
        success: (result) => {
            console.log(result)
            if (result[result.length-1].indiceHumedad == 1) {
                var humedadSuelo = [1,0]
                l1 = 'Humedo'
                l2 = ''
            } else {
                var humedadSuelo = [0,1]
                l1 = ''
                l2 = 'Seco'
            }
            var ctx = document.getElementById("myChart3")
            var myChart1 = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [l1, l2],
                    datasets: [{
                        label: '# of Votes',
                        data: humedadSuelo,
                        backgroundColor: [
                            'rgba(38, 194, 129, 1)',
                            'rgba(246, 36, 89, 1)'
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