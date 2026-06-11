// Gráfico de água
const waterData = {
    labels: ["Cultura 1", "Cultura 2", "Cultura 3", "Cultura 4"],
    datasets: [{
        label: "Consumo de água (litros/ha)",
        data: [1200, 900, 700, 1500],
        backgroundColor: ["#4caf50", "#81c784", "#c8e6c9", "#a5d6a7"]
    }]
};

// Gráfico de solo
const soilData = {
    labels: ["Nitrogênio", "Fósforo", "Potássio", "Matéria Orgânica"],
    datasets: [{
        label: "Qualidade do Solo (%)",
        data: [70, 60, 80, 90],
        backgroundColor: ["#388e3c", "#66bb6a", "#a5d6a7", "#c8e6c9"]
    }]
};

new Chart(document.getElementById('chartWater'), { type: 'bar', data: waterData });
new Chart(document.getElementById('chartSoil'), { type: 'pie', data: soilData });
