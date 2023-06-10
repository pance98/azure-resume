window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://resume-counter-fun.azurewebsites.net/api/GetResumeCounter?code=RqcDD_BoXMI3_vF_jsiyu2G-7GOZ4PTbb8RgxL1GXB4SAzFuMCY59A==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}