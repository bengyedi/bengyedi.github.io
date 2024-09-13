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
    "人生的意义在于不断前进。",
    "成功是努力的积累。",
    "保持积极的心态，你会更强大。",
    "伟大的成就源于坚定的信念。",
    "行动胜于空谈。",
    "学而不思则罔，思而不学则殆。",
    "一个人只要有梦想，永远都不会老。",
    "机会是留给有准备的人的。",
    "只要功夫深，铁杵磨成针。",
    "努力的人，运气永远不会太差。"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// 初始名言
getRandomQuote();

// 绑定按钮点击事件
document.getElementById('new-quote-btn').addEventListener('click', getRandomQuote);
