const data = [
    { "day": "월", "visitor": { "오전 10시": 200, "오후 2시": 170, "오후 4시": 180 } },
    { "day": "화", "visitor": { "오전 10시": 230, "오후 2시": 200, "오후 4시": 280 } },
    { "day": "수", "visitor": { "오전 10시": 270, "오후 2시": 270, "오후 4시": 320 } },
    { "day": "목", "visitor": { "오전 10시": 290, "오후 2시": 170, "오후 4시": 380 } },
    { "day": "금", "visitor": { "오전 10시": 320, "오후 2시": 370, "오후 4시": 380 } },
    { "day": "토", "visitor": { "오전 10시": 230, "오후 2시": 670, "오후 4시": 280 } },
    { "day": "일", "visitor": { "오전 10시": 220, "오후 2시": 270, "오후 4시": 280 } }
];

function updateChart(day) {
    const selectedData = data.find(item => item.day === day);

    if (selectedData) {
        $("#bar1").attr("height", selectedData.visitor["오전 10시"]);
        $("#bar2").attr("height", selectedData.visitor["오후 2시"]);
        $("#bar3").attr("height", selectedData.visitor["오후 4시"]);
    }
}