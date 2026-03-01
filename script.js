let user = "";
let chart;
let chartData = [];

document.getElementById("login-form").addEventListener("submit", function(e){
  e.preventDefault();
  user = document.getElementById("username").value;
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  initChart();
});

function goPage(page){
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("chat").classList.add("hidden");
  document.getElementById(page).classList.remove("hidden");
}

function initChart(){
  const ctx = document.getElementById("chart");
  chart = new Chart(ctx,{
    type:'line',
    data:{
      labels:[],
      datasets:[{
        label:"ความเครียด",
        data:[],
        borderColor:"#4f46e5",
        tension:0.4
      }]
    },
    options:{
      responsive:true
    }
  });
}

function simulate(){
  const value = Math.floor(Math.random()*100);
  const time = new Date().toLocaleTimeString();

  chartData.push(value);

  chart.data.labels.push(time);
  chart.data.datasets[0].data = chartData;
  chart.update();
}

function sendChat(){
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if(!msg) return;

  const box = document.getElementById("chat-box");

  box.innerHTML += `<div class="bubble user">${msg}</div>`;

  setTimeout(()=>{
    box.innerHTML += `<div class="bubble bot">กำลังวิเคราะห์ข้อมูลสุขภาพ...</div>`;
    box.scrollTop = box.scrollHeight;
  },500);

  input.value="";
}