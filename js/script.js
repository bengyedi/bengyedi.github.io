// 实时时间更新
function updateBeijingTime() {
    const timeElement = document.getElementById('beijing-time');
    const now = new Date();
    const options = { timeZone: 'Asia/Shanghai', hour12: false };
    const timeString = now.toLocaleTimeString('zh-CN', options);
    timeElement.textContent = `中国北京时间: ${timeString}`;
}
setInterval(updateBeijingTime, 1000);
updateBeijingTime();

// 随机名言生成
const quotes = [
    "此时相望不相闻，愿逐月华流照君。",
    "醉后不知天在水，满船清梦压星河。",
    "莫听穿林打叶声，何妨吟啸且徐行。",
    "‌纵使晴明无雨色，入云深处亦沾衣。"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// 初始名言
getRandomQuote();

// 绑定按钮点击事件
document.getElementById('new-quote-btn').addEventListener('click', getRandomQuote);
