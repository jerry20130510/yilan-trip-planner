const tripDays = [
  {
    id: "day1",
    label: "第一天 10/10",
    title: "頭城看海",
    items: [
      {
        time: "07:30",
        title: "台北車站集合",
        detail: "先買早餐與水，確認台鐵票、身分證與隨身行李。"
      },
      {
        time: "10:00",
        title: "頭城老街散步",
        detail: "逛老街與慶元宮，找間在地小店吃午餐，行程保留彈性。"
      },
      {
        time: "15:00",
        title: "蘭陽博物館",
        detail: "看宜蘭地景與文化展覽，館外建築和濕地也很適合拍照。"
      },
      {
        time: "17:00",
        title: "外澳海岸看夕陽",
        detail: "遠眺龜山島、沿海邊散步，傍晚再前往礁溪旅宿入住。"
      }
    ]
  },
  {
    id: "day2",
    label: "第二天 10/11",
    title: "礁溪與宜蘭市",
    items: [
      {
        time: "09:30",
        title: "礁溪晨間散步",
        detail: "睡飽再出門，在溫泉公園附近吃早餐並走走伸展。"
      },
      {
        time: "11:00",
        title: "五峰旗瀑布",
        detail: "走輕鬆步道看瀑布，若遇雨勢過大就改為市區備案。"
      },
      {
        time: "14:30",
        title: "宜蘭市午餐與散步",
        detail: "品嚐在地小吃，再走訪幾米公園與宜蘭車站周邊。"
      },
      {
        time: "19:00",
        title: "礁溪溫泉晚餐",
        detail: "回礁溪吃晚餐、泡湯休息，晚上不排趕時間的行程。"
      }
    ]
  },
  {
    id: "day3",
    label: "第三天 10/12",
    title: "冬山河慢遊",
    items: [
      {
        time: "10:00",
        title: "退房前整理行李",
        detail: "檢查充電器、盥洗用品，行李先寄放民宿。"
      },
      {
        time: "11:00",
        title: "冬山河親水公園",
        detail: "沿河散步或租自行車，依天氣決定停留時間。"
      },
      {
        time: "14:00",
        title: "羅東林業文化園區",
        detail: "走森林步道、拍照休息，再到羅東市區買伴手禮。"
      },
      {
        time: "17:40",
        title: "台鐵回台北",
        detail: "提早到羅東車站集合，車上分照片並結算共同費用。"
      }
    ]
  }
];

const checklist = [
  "台鐵票與證件",
  "行動電源與充電線",
  "雨具、防曬與薄外套",
  "常備藥與個人用品",
  "舒服好走的鞋",
  "旅伴共同費用現金"
];

const dayTabs = document.querySelector("#dayTabs");
const timeline = document.querySelector("#timeline");
const checklistItems = document.querySelector("#checklistItems");
const copySummaryButton = document.querySelector("#copySummary");

let activeDayId = tripDays[0].id;

function renderDayTabs() {
  dayTabs.innerHTML = tripDays.map((day) => {
    const activeClass = day.id === activeDayId ? " active" : "";
    return `<button class="day-tab${activeClass}" type="button" data-day="${day.id}">${day.label}</button>`;
  }).join("");
}

function renderTimeline() {
  const activeDay = tripDays.find((day) => day.id === activeDayId);

  timeline.innerHTML = activeDay.items.map((item) => `
    <article class="timeline-item">
      <div class="timeline-time">${item.time}</div>
      <div class="timeline-card">
        <h3>${item.title}</h3>
        <p>${item.detail}</p>
      </div>
    </article>
  `).join("");
}

function renderChecklist() {
  checklistItems.innerHTML = checklist.map((item, index) => {
    const saved = localStorage.getItem(`travel-check-${index}`) === "true";
    const checked = saved ? "checked" : "";

    return `
      <label class="check-item">
        <input type="checkbox" data-check="${index}" ${checked}>
        <span>${item}</span>
      </label>
    `;
  }).join("");
}

function buildSummaryText() {
  return tripDays.map((day) => {
    const items = day.items.map((item) => `${item.time} ${item.title}`).join("；");
    return `${day.label}：${items}`;
  }).join("\n");
}

dayTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-day]");

  if (!button) {
    return;
  }

  activeDayId = button.dataset.day;
  renderDayTabs();
  renderTimeline();
});

checklistItems.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-check]");

  if (!checkbox) {
    return;
  }

  localStorage.setItem(`travel-check-${checkbox.dataset.check}`, checkbox.checked);
});

copySummaryButton.addEventListener("click", async () => {
  const summary = buildSummaryText();

  try {
    await navigator.clipboard.writeText(summary);
    copySummaryButton.textContent = "已複製摘要";
  } catch (error) {
    copySummaryButton.textContent = "請手動複製";
  }

  setTimeout(() => {
    copySummaryButton.textContent = "複製行程摘要";
  }, 1800);
});

renderDayTabs();
renderTimeline();
renderChecklist();
