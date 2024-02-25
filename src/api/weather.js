import axios from "axios"

//中央氣象局 api
const weatherRequest = axios.create({
    baseURL: 'https://opendata.cwa.gov.tw/'
})

// 攔截 API request 的請求
weatherRequest.interceptors.request.use(request => {
    // API送出前可以做最後的處理
    //request.headers['Authorization'] = "你的任何想塞進去的東西";
    return request;
}, error => {
    // 如果送出前失敗了，這邊就可以做一些處理
    return Promise.reject(error);
});

// 攔截 API response 的回傳
weatherRequest.interceptors.response.use(response => {
    // 這邊可以對回來的資料先進行驗證處理，再來決定要不要把資料給吐出去
    return Promise.resolve(response);
}, error => {
    // 這邊當API發生錯誤的時候就可以處理 Error handling
    return Promise.reject(error.response.data);
})
const params = {
    Authorization: "CWB-A149DF45-12F5-4ABF-954A-F00471BD0D59",
    offset: 0,
    format: "JSON",
    elementName: "MaxT"
}
export const weatherMaxT = async () => {
    let getData = await weatherRequest.get('/api/v1/rest/datastore/F-D0047-091', { params: params });
    // console.log(getData.data.records.locations[0].location)
    let datasetDescription = getData.data.records.locations[0].datasetDescription;
    let weatherMaxT = {};
    getData.data.records.locations[0].location.forEach(datas => {
        let records = {
            locationName: datas.locationName,
            temperatures: datas.weatherElement[0].time.map(t => ({
                startTime: t.startTime,
                endTime: t.endTime,
                value: t.elementValue[0].value,
                measures: t.elementValue[0].measures
            }))
        }
        weatherMaxT[datas.locationName] = records;
    });

    return {
        datasetDescription: datasetDescription,
        weatherMaxT: weatherMaxT
    };
};