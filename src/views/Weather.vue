<template>
    <h1>{{ title }}</h1>
    <select class="form-select shadow w-25" @change="selectLocation">
        <option value="">請選擇地區</option>
        <option v-for="name in locations" :value="name">{{ name }}</option>
    </select>
    <div class="row">
        <div class="col-sm-12 col-md-5">
            <div class="p-2 my-2 rounded bg-white shadow">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">開始時間</th>
                            <th scope="col">結束時間</th>
                            <th scope="col">溫度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in tableWeatherData">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.startTime }}</td>
                            <td>{{ item.endTime }}</td>
                            <td>{{ item.measures }}{{ item.value }}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-sm-12 col-md-7">
            <div class="bg-white my-2 d-flex justify-content-center rounded shadow" style="height: 20rem;">
                <canvas id="barChart"></canvas>
            </div>
            <div class="bg-white my-2 d-flex justify-content-center rounded shadow" style="height: 20rem;">
                <canvas id="lineChart"></canvas>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
<script setup>
import { onMounted, computed, ref, reactive } from 'vue';
import Chart from 'chart.js/auto'
import { apiWeatherMaxT } from "../api"

const title = ref("中央氣象API");
const locations = reactive([]);
let selectedLocation = ref("");


let maxTemperature = reactive({});

let barChart;
let lineChart;

const getData = async () => {
    try {
        const data = await apiWeatherMaxT();
        console.log(data);
        title.value = `中央氣象API: ${data.datasetDescription}`;
        Object.keys(data.weatherMaxT).forEach(x => locations.push(x));
        maxTemperature = data.weatherMaxT;
    } catch (err) {
        console.error(err)
    }
}

const buildBarChart = () => {
    barChart = new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '未來一周氣溫',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Temperature"
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '未來一周氣溫'
                },
                tooltip: {
                    callbacks: {
                        title: (TooltipItem) => {
                            let data = TooltipItem[0].dataset.data[TooltipItem[0].dataIndex];
                            return `${data.startTime} ~ ${data.endTime}`
                        },
                        label: (TooltipItem) => {
                            let data = TooltipItem.dataset.data[TooltipItem.dataIndex];
                            return `Temperature:${data.y}`
                        },
                    }
                }
            }
        }
    });

}

const buildLineChart = () => {
    lineChart = new Chart(document.getElementById("lineChart"), {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: '未來一周氣溫',
                    data: [],
                }
            ]
        },
        options: {
            scales: {
                y: {
                    title: {
                        display: true,
                        text: "Temperature"
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '未來一周氣溫'
                },
                tooltip: {
                    callbacks: {
                        title: (TooltipItem) => {
                            let data = TooltipItem[0].dataset.data[TooltipItem[0].dataIndex];
                            return `${data.startTime} ~ ${data.endTime}`
                        },
                        label: (TooltipItem) => {
                            let data = TooltipItem.dataset.data[TooltipItem.dataIndex];
                            return `Temperature:${data.y}`
                        },
                    }
                }
            }
        }
    })
}

const updateBarChart = (data, location) => {
    barChart.data.labels.length = 0;
    barChart.data.datasets[0].data.length = 0;
    barChart.titleBlock.options.text = `${location}未來一周氣溫`;

    data.forEach((d, index) => {
        barChart.data.labels.push(index + 1);
        barChart.data.datasets[0].data.push({
            x: index + 1,
            y: d.value,
            startTime: d.startTime,
            endTime: d.endTime,
            location: location
        })
    })
    barChart.update();
}

const updateLineChart = (data, location) => {
    lineChart.data.labels.length = 0;
    lineChart.data.datasets[0].data.length = 0;
    lineChart.titleBlock.options.text = `${location}未來一周氣溫`;

    data.forEach((d, index) => {
        lineChart.data.labels.push(index + 1);
        lineChart.data.datasets[0].data.push({
            x: index + 1,
            y: d.value,
            startTime: d.startTime,
            endTime: d.endTime,
            location: location
        })
    })
    lineChart.update();
}

const selectLocation = (e) => {
    console.log(e.target.value)
    let location = e.target.value;
    selectedLocation.value = location;

    let data = maxTemperature[selectedLocation.value]?.temperatures ?? [];
    updateBarChart(data, location);
    updateLineChart(data, location);
}

const tableWeatherData = computed(() => {
    return maxTemperature[selectedLocation.value]?.temperatures ?? [];
})

onMounted(() => {
    getData();
    buildBarChart();
    buildLineChart();
})


</script>