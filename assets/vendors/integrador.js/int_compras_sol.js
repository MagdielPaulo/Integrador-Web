function geraUrl(e){
    if (e.id == "fechar")
    {
        window.location.replace('fechar'); 
    }
    else
    if (e.id == "solicitacao-documento-quantidade") 
    {
        window.location.replace('4900');
    } 
    else 
    if (e.id == "solicitacao-produto-quantidade") 
    {
        window.location.replace('4928');
    } 
    else 
    if (e.id == "cotacao-documento-quantidade") 
    {
        window.location.replace('4901');
    } 
    else 
    if (e.id == "cotacao-produto-quantidade") 
    {
        window.location.replace('4932');
    } 
    else 
    if (e.id == "pedido-documento-dentro-prazo-quantidade") 
    {
        window.location.replace('4902');
    } 
    else 
    if (e.id == "pedido-produtos-dentro-prazo-percentual") 
    {
        window.location.replace('4933');
    }
    else
    if (e.id == "pedido-documento-em-atraso-quantidade") 
    {
        window.location.replace('4903');
    } 
    else 
    if (e.id == "pedido-produtos-em-atraso-percentual") 
    {
        window.location.replace('4934');
    } 
    else
    {
        window.location.replace('4900');
    };                               
};

function getValor(value, indice) {
    var r_return = value[indice].split('=');
    return r_return[1];
};

function grafico01() {
    // var r_params = location.search;
    // r_params = r_params.slice(1);
    // r_params = r_params.split('&');

    var r_pedido_em_atraso = 100;
    var r_pedido_dentro_prazo = 100;
    var r_pedido_item = 100;

    var r_pedido_em_atraso_perc = 100;
    var r_pedido_dentro_prazo_perc = 100;

    document.getElementById('orcamento-agricola-valor').innerText = 'R$ 1.000.000,00';//getValor(r_params, 0);
    document.getElementById('orcamento-agricola-realizado').innerText = 'R$ 90.000,00';//getValor(r_params, 5);

    document.getElementById('orcamento-garagem-valor').innerText = 'R$ 54.000.000.00';//getValor(r_params, 1);
    document.getElementById('ocamento-garagem-realizado').innerText = 'R$ 2.000.000,00';//getValor(r_params, 6);

    document.getElementById('orcamento-industria-valor').innerText = 'R$ 30.000,00';//getValor(r_params, 3);
    document.getElementById('orcamento-industria-realizado').innerText = 'R$ 40.000.000,00';//getValor(r_params, 3);
    
    // document.getElementById('pedido-produtos-em-atraso-percentual').innerText = r_pedido_em_atraso_perc.toFixed(2) + '%';

    // document.getElementById('pedido-documento-dentro-prazo-quantidade').innerText = getValor(r_params, 2);
    // document.getElementById('pedido-produtos-dentro-prazo-texto').innerText = 'Total de Produtos ' + getValor(r_params, 8) + ' de ' + getValor(r_params, 7);
    // document.getElementById('pedido-produtos-dentro-prazo-percentual').innerText = r_pedido_dentro_prazo_perc.toFixed(2) + '%';

    if ($(".orcamento-agricola-progress").length) {
        $('.orcamento-agricola-progress').circleProgress({
            value: 0.5,
            size: 125,
            thickness: 15,
            startAngle: 80,
            fill: {
                gradient: ["#7922e5", "#1579ff"]
            }
        });
    }

    if ($(".orcamento-garagem-progress").length) {
        $('.orcamento-garagem-progress').circleProgress({
            value: 0.4,
            size: 125,
            thickness: 15,
            startAngle: 10,
            fill: {
                gradient: ["#429321", "#b4ec51"]
            }
        });
    }

    // // if ($(".pedido-em-atraso-progress").length) {
    // //     $('.pedido-em-atraso-progress').circleProgress({
    // //         value: 0.7,
    // //         size: 125,
    // //         thickness: 15,
    // //         startAngle: 10,
    // //         fill: {
    // //             gradient: ["#f76b1c", "#fad961"]
    // //         }
    // //     });
    // }

    if ($(".orcamento-industria-progress").length) {
        $('.orcamento-industria-progress').circleProgress({
            value: 0.7,
            size: 125,
            thickness: 15,
            startAngle: 10,
            fill: {
                gradient: ["#9f041b", "#f5515f"]
            }
        });
    }
};

function graficoRealizadoAgricola() {
    // var r_params = location.search;
    // r_params = r_params.slice(1);
    // r_params = r_params.split('&');
    
    var r_data = ['08/2022','09/2022','10/2022','11/2022','12/2022'];
    var r_value = [20, 40, 80, 75, 94];

    // var r_value = r_params[16].slice(10);
    // r_value = r_value.split(';');

    if (("previsao-entrega").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
    if (("previsao-entrega").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
};

function graficoRealizadoGaragem() {
    // var r_params = location.search;
    // r_params = r_params.slice(1);
    // r_params = r_params.split('&');
    
    var r_data = ['08/2022','09/2022','10/2022','11/2022','12/2022'];
    var r_value = [20, 40, 85, 75, 94];

    // var r_value = r_params[16].slice(10);
    // r_value = r_value.split(';');

    if (("previsao-entrega2").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado-Garagem',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega2").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
    if (("previsao-entrega").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
};

function graficoRealizadoIndustria() {
    // var r_params = location.search;
    // r_params = r_params.slice(1);
    // r_params = r_params.split('&');
    
    var r_data = ['08/2022','09/2022','10/2022','11/2022','12/2022'];
    var r_value = [20, 40, 80, 95, 200];

    // var r_value = r_params[16].slice(10);
    // r_value = r_value.split(';');

    if (("previsao-entrega2").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado-Industria',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega3").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
    if (("previsao-entrega3").length) {
        var previsaoEntregaData = {
            labels: r_data,
            datasets: [{
                label: 'Realizado',
                data: r_value,
                backgroundColor: [
                    'rgba(216,247,234, 0.19)',
                ],
                borderColor: [
                    '#3dd597'
                ],
                borderWidth: 2,
                fill: true,
                pointBorderColor: "#fff",
                pointBackgroundColor: "#3dd597",
                pointBorderWidth: 2,
                pointRadius: 4,
            }
            ],
        };
        var previsaoEntregaOptions = {
            scales: {
                yAxes: [{
                    display: true,
                    gridLines: {
                        drawBorder: true,
                        display: true,
                        drawTicks: true,
                        color: '#eef0fa',
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        display: true,
                        padding: 10,
                    }
                }],
                xAxes: [{
                    display: true,
                    position: 'bottom',
                    gridLines: {
                        drawBorder: false,
                        display: false,
                        drawTicks: false,
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        fontColor: "#a7afb7",
                        padding: 10,
                    }
                }],
            },
            legend: {
                display: false,
            },
            legendCallback: function (chart) {
                var text = [''];
                text.push('<ul class="' + chart.id + '-legend">');
                for (var i = 0; i < chart.data.datasets.length; i++) {
                    text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].borderColor[i] + ';"></span><span class="legend-label text-dark">');
                    if (chart.data.datasets[i].label) {
                        text.push(chart.data.datasets[i].label);
                    }
                    text.push('</span></li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            elements: {
                point: {
                    radius: 1
                },
                line: {
                    tension: 0
                }
            },
            tooltips: {
                backgroundColor: 'rgba(2, 171, 254, 1)',
            },
        };
        var barChartCanvas = $("#previsao-entrega3").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'line',
            data: previsaoEntregaData,
            options: previsaoEntregaOptions,
        });
    }
};
  
function grafico03() {
    // var r_params = location.search;
    // r_params = r_params.slice(1);
    // r_params = r_params.split('&');

    var r_orcamento       = ['Agricola', 'Garagem', 'Industria'];
    var r_valor_orcado    = [100000000, 54000000, 30000000];
    var r_valor_realizado = [7400000, 20000000, 40000000];


    // var r_prazo = r_params[13].slice(22);
    // r_prazo = r_prazo.split(';');

    // var r_atraso = r_params[14].slice(23);
    // r_atraso = r_atraso.split(';');

    // var r_maior_fornec = r_fornec[0];
    // var r_maior_fornec_quant = parseInt(r_prazo[0]) + parseInt(r_atraso[0]);
    // var r_maior_fornec_perc = (parseInt(r_atraso[0]) * 100) / r_maior_fornec_quant;

    // document.getElementById('maior_fornecedor_nome').innerText = r_maior_fornec;
    // document.getElementById('maior_fornecedor_quantidade').innerText = r_maior_fornec_quant;
    // document.getElementById('maior_fornecedor_perc').innerText = r_maior_fornec_perc.toFixed(2) + '%';

    if ($("#fornecedor-pedidos").length) {
        var fornecedorPedidosData = {
            labels: r_orcamento,
            datasets: [{
                label: 'Orçado',
                data: r_valor_orcado,
                backgroundColor: [
                    '#a461d8', '#a461d8', '#a461d8',
                ],
                borderColor: [
                    '#a461d8', '#a461d8', '#a461d8',
                ],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'Realizado',
                data: r_valor_realizado,
                backgroundColor: [
                    '#fc5a5a', '#fc5a5a', '#fc5a5a',
                ],
                borderColor: [
                    '#fc5a5a', '#fc5a5a', '#fc5a5a',
                ],
                borderWidth: 1,
                fill: false
            }
            ]
        };
        var fornecedorPedidosOptions = {
            scales: {
                xAxes: [{
                    stacked: false,
                    barPercentage: .3,
                    categoryPercentage: 0.4,
                    position: 'bottom',
                    display: true,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        display: true, //this will remove only the label
                        stepSize: 90000,
                        fontColor: "#a7afb7",
                        fontSize: 14,
                        padding: 10,
                    }
                }],
                yAxes: [{
                    stacked: false,
                    display: true,
                    gridLines: {
                        drawBorder: false,
                        display: true,
                        color: "#eef0fa",
                        drawTicks: false,
                        zeroLineColor: 'rgba(90, 113, 208, 0)',
                    },
                    ticks: {
                        display: true,
                        beginAtZero: true,
                        stepSize: 90000000,
                        fontColor: "#a7afb7",
                        fontSize: 14,
                        callback: function (value, index, values) {
                            return value;
                        },
                    },
                }]
            },
            legend: {
                display: true
            },
            legendCallback: function (chart) {
                var text = [''];
                // text.push('<ul class="' + chart.id + '-legend">');
                // for (var i = 0; i < chart.data.datasets.length; i++) {
                //     text.push('<li><span class="legend-box" style="background:' + chart.data.datasets[i].backgroundColor[i] + ';"></span><span class="legend-label text-dark">');
                //     if (chart.data.datasets[i].label) {
                //         text.push(chart.data.datasets[i].label);
                //     }
                //     text.push('</span></li>');
                // }
                // text.push('</ul>');
                return text.join("");
            },
            tooltips: {
                backgroundColor: 'rgba(0, 0, 0, 1)',
            },
            plugins: {
                datalabels: {
                    display: false,
                    align: 'center',
                    anchor: 'center'
                }
            }
        };
        var barChartCanvas = $("#fornecedor-pedidos").get(0).getContext("2d");
        var barChart = new Chart(barChartCanvas, {
            type: 'bar',
            data: fornecedorPedidosData,
            options: fornecedorPedidosOptions
        });
        document.getElementById('fornecedor-pedidos-legenda').innerHTML = barChart.generateLegend();
    }
}; 





// function grafico04() {
//     var r_params = location.search;
//     r_params = r_params.slice(1);
//     r_params = r_params.split('&');

//     var r_produto = r_params[17].slice(10);
//     r_produto = r_produto.split(';');

//     var r_produto_fornec = r_params[18].slice(15);
//     r_produto_fornec = r_produto_fornec.split(';');

//     var r_produto_quant = r_params[19].slice(21);
//     r_produto_quant = r_produto_quant.split(';');

//     var r_produto_frequente = r_produto[0];
//     var r_produto_frequente_quantidade = r_produto[1];
//     var r_produto_frequente_preco = r_produto[2] / 100;

//     document.getElementById('produto_frequente_nome').innerText = r_produto_frequente;
//     document.getElementById('produto_frequente_quantidade').innerText = r_produto_frequente_quantidade;
//     document.getElementById('produto_frequente_preco').innerText = 'R$ ' + r_produto_frequente_preco.toFixed(2);

//     if ($("#produto-frequente").length) {
//         var produtoFrequenteData = {
//             labels: r_produto_fornec,
//             datasets: [{
//                 label: 'Frequencia',
//                 data: r_produto_quant,
//                 backgroundColor: [
//                     '#cfe1ff',
//                 ],
//                 borderColor: [
//                     '#0062ff'
//                 ],
//                 borderWidth: 3,
//                 fill: true,
//             }],
//         };
//         var produtoFrequenteOptions = {
//             scales: {
//                 yAxes: [{
//                     display: false,
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                         drawTicks: false
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         stepSize: 10
//                     }
//                 }],
//                 xAxes: [{
//                     display: false,
//                     position: 'bottom',
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                         drawTicks: false
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         stepSize: 10
//                     }
//                 }],
//             },
//             legend: {
//                 display: false,
//             },
//             elements: {
//                 point: {
//                     radius: 2
//                 },
//                 line: {
//                     tension: 0
//                 }
//             },
//             tooltips: {
//                 backgroundColor: 'rgba(2, 171, 254, 1)',
//             },
//         };
//         var barChartCanvas = $("#produto-frequente").get(0).getContext("2d");
//         var barChart = new Chart(barChartCanvas, {
//             type: 'line',
//             data: produtoFrequenteData,
//             options: produtoFrequenteOptions,
//         });
//     }
// };

// function grafico05() {
//     var r_params = location.search;
//     r_params = r_params.slice(1);
//     r_params = r_params.split('&');

//     var r_maior_fornec_mes = r_params[20].slice(17);
//     r_maior_fornec_mes = r_maior_fornec_mes.split(';');

//     var r_maior_fornec_freq = r_params[21].slice(18);
//     r_maior_fornec_freq = r_maior_fornec_freq.split(';');

//     var r_barcolors = [];

//     for (var i = 0; i < r_maior_fornec_mes.length; i++) {
//         r_barcolors[i] = "#DC143C";
//     }

//     if ($("#maior-fornecedor").length) {
//         var maiorFornecedorData = {
//             labels: r_maior_fornec_mes,
//             datasets: [{
//                 label: 'Produtos',
//                 data: r_maior_fornec_freq,
//                 backgroundColor: r_barcolors,
//                 borderColor: [
//                     // '#3dd597'
//                 ],
//                 borderWidth: 1,
//                 fill: false,
//             }],
//         };
//         var maiorFornecedorOptions = {
//             scales: {
//                 yAxes: [{
//                     display: false,
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                         drawTicks: false
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         stepSize: 10
//                     }
//                 }],
//                 xAxes: [{
//                     display: true,
//                     position: 'bottom',
//                     gridLines: {
//                         drawBorder: false,
//                         display: false,
//                         drawTicks: true
//                     },
//                     ticks: {
//                         beginAtZero: true,
//                         stepSize: 10
//                     }
//                 }],
//             },
//             legend: {
//                 display: false,
//             },
//             elements: {
//                 point: {
//                     radius: 0
//                 },
//                 line: {
//                     tension: 0
//                 }
//             },
//             tooltips: {
//                 backgroundColor: 'rgba(2, 171, 254, 1)',
//             },
//         };
//         var barChartCanvas = $("#maior-fornecedor").get(0).getContext("2d");
//         var barChart = new Chart(barChartCanvas, {
//             type: 'bar',
//             data: maiorFornecedorData,
//             options: maiorFornecedorOptions,
//         });
//     }
// };
