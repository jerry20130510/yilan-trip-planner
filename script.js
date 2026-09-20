const tripData = {
  title: "2026 宜蘭小旅行",
  startDate: "2026-09-25",
  endDate: "2026-09-26",
  people: 14,
  days: [
    {
      id: "day1",
      date: "2026-09-25",
      label: "第一天 9/25",
      title: "出發、聚餐與民宿 BBQ",
      events: [
        {
          id: "depart-taipei",
          time: "09:00",
          place: "台北出發",
          type: "交通",
          icon: "車",
          status: "已討論",
          note: "大家依照分車安排前往宜蘭。",
          address: "各車集合點待分車名單確認",
          reservation: "不需要",
          confirmed: false
        },
        {
          id: "liushui-forest",
          time: "11:30",
          place: "流水森林",
          type: "午餐",
          icon: "食",
          status: "已確認",
          note: "第一天午餐，預計 14 人。",
          address: "完整地址待補",
          reservation: "訂位資訊待補",
          confirmed: true
        },
        {
          id: "checkin-free-time",
          time: "14:30",
          estimated: true,
          place: "前往住宿／自由活動",
          type: "住宿／自由活動",
          icon: "宿",
          status: "暫定",
          note: "目前下午行程尚未完全固定。",
          address: "住宿正式地址待補",
          reservation: "不適用",
          confirmed: false
        },
        {
          id: "bbq",
          time: "18:30",
          estimated: true,
          place: "民宿 BBQ",
          type: "晚餐／活動",
          icon: "烤",
          status: "已確認",
          note: "肉品與蔬菜會在台北先採買，住宿地點已確認可冰食材。",
          address: "住宿正式地址待補",
          reservation: "住宿場地已確認",
          confirmed: true
        },
        {
          id: "sparkler",
          time: "21:00",
          estimated: true,
          place: "仙女棒",
          type: "活動",
          icon: "玩",
          status: "已規劃",
          note: "烤肉結束後的小活動，請留意場地規定與用火安全。",
          address: "民宿活動區",
          reservation: "不需要",
          confirmed: true
        }
      ]
    },
    {
      id: "day2",
      date: "2026-09-26",
      label: "第二天 9/26",
      title: "海邊、火車站與沙灘車",
      events: [
        {
          id: "breakfast",
          time: "08:30",
          estimated: true,
          place: "住宿早餐",
          type: "早餐",
          icon: "食",
          status: "待確認",
          note: "實際早餐時間入住後確認。",
          address: "住宿地點",
          reservation: "時間待確認",
          confirmed: false
        },
        {
          id: "beach",
          time: "10:00",
          estimated: true,
          place: "住宿附近海邊",
          type: "戶外活動",
          icon: "海",
          status: "已規劃",
          note: "玩水、排球與海邊活動，請自行準備替換衣物。",
          address: "確切海灘待住宿地點確認",
          reservation: "不需要",
          confirmed: true
        },
        {
          id: "red-crab",
          time: "12:30",
          estimated: true,
          place: "紅蟳蟹海鮮餐廳",
          type: "午餐",
          icon: "食",
          status: "暫定",
          note: "約 14 人，需確認是否有人不吃生食或海鮮。",
          address: "完整地址待補",
          reservation: "時間與人數待確認",
          confirmed: false
        },
        {
          id: "tiansongpi",
          time: "14:30",
          estimated: true,
          place: "天送埤火車站",
          type: "景點／活動",
          icon: "景",
          status: "暫定",
          note: "預計安排繩索體驗，需確認是否需要預約。",
          address: "宜蘭縣三星鄉福山街福山橫巷 27 號",
          reservation: "待確認",
          confirmed: false
        },
        {
          id: "atv",
          time: "16:30",
          estimated: true,
          place: "東岳沙灘車",
          type: "戶外活動",
          icon: "車",
          status: "已規劃",
          note: "150cc 沙灘車 6 台、保母車 1 台，活動約 60 分鐘，需保留午餐與塞車緩衝。",
          address: "正式集合地點待確認",
          reservation: "集合時間與價格待確認",
          confirmed: false
        },
        {
          id: "dinner-day2",
          time: "19:00",
          estimated: true,
          place: "第二天晚餐",
          type: "晚餐",
          icon: "食",
          status: "未安排",
          note: "尚未決定，請大家在群組提供想法。",
          address: "待安排",
          reservation: "待安排",
          confirmed: false
        }
      ]
    }
  ],
  shopping: [
    { category: "肉類", items: [
      { id: "beef", name: "牛肉" },
      { id: "pork", name: "豬肉" },
      { id: "chicken", name: "雞肉" }
    ] },
    { category: "海鮮", items: [
      { id: "shrimp", name: "冷凍蝦仁" }
    ] },
    { category: "蔬菜", items: [
      { id: "corn", name: "玉米" },
      { id: "mushroom", name: "杏鮑菇" },
      { id: "pepper", name: "甜椒" },
      { id: "zucchini", name: "櫛瓜" },
      { id: "onion", name: "洋蔥" }
    ] },
    { category: "飲料", items: [
      { id: "guava-tea", name: "芭樂檸檬綠茶" },
      { id: "tea", name: "無糖茶" },
      { id: "soda", name: "汽水" },
      { id: "water", name: "礦泉水" },
      { id: "alcohol", name: "啤酒" }
    ] },
    { category: "主食與點心", items: [
      { id: "snacks", name: "零食" },
      { id: "ice", name: "冰塊" },
      { id: "bread", name: "吐司／主食" },
      { id: "dessert", name: "甜點" },
      { id: "icecream", name: "小美冰淇淋" }
    ] },
    { category: "用品", items: [
      { id: "tongs", name: "烤肉夾" },
      { id: "scissors", name: "剪刀" },
      { id: "plates", name: "紙盤" },
      { id: "bowls", name: "紙碗" },
      { id: "cups", name: "紙杯" },
      { id: "chopsticks", name: "筷子" },
      { id: "trash-bags", name: "垃圾袋" },
      { id: "tissue", name: "衛生紙" },
      { id: "wet-wipes", name: "濕紙巾" },
      { id: "extra-ice", name: "備用冰塊" }
    ] }
  ],
  transport: {
    cars: [
      { owner: "分車名單待整理", passengers: "待確認", meetingPoint: "待確認", departure: "9/25 09:00", seats: "待確認", note: "確認車主後可直接修改資料" }
    ],
    atv: {
      vehicles: "150cc 沙灘車 × 6 台",
      supportCar: "保母車 × 1 台",
      supportMembers: ["Yuni", "隆", "Luke"],
      others: "其他人員分車待確認",
      price: "正式價格待確認"
    }
  }
};

const memoryStorage = new Map();
const SUPABASE_TABLE = "trip_responses";
const TRIP_EVENTS_TABLE = "trip_events";
const SHOPPING_ITEMS_TABLE = "shopping_items";
const SHOPPING_PHOTOS_BUCKET = "shopping-photos";
const MAX_SHOPPING_PHOTO_SIZE = 5 * 1024 * 1024;
const LOCAL_TRIP_EVENTS_KEY = "yilan-dashboard-trip-events";
const LOCAL_SHOPPING_ITEMS_KEY = "yilan-dashboard-shopping-items";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=24.757&longitude=121.753&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FTaipei";
const SUPABASE_CONFIG = Object.freeze({
  url: "https://fkkoexjzpyzgfdwcjqub.supabase.co",
  anonKey: "sb_publishable_IUwnVjU03uZ1xrwqPeybRw_oSAHpuBQ"
});
let activeDayId = tripData.days[0].id;
let eventProgress = new Set();
let shoppingProgress = new Set();

function getStorageKey(section, id, field = "") {
  return ["yilan-dashboard", section, id, field].filter(Boolean).join("-");
}

function readStorage(key, fallback = "") {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return memoryStorage.has(key) ? memoryStorage.get(key) : fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, String(value));
  } catch (error) {
    memoryStorage.set(key, String(value));
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function countPending(items) {
  return items.filter((item) => !item.completed).length;
}

function createMapUrl(place, address = "") {
  const usableAddress = address && !address.includes("待") ? address : place;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(usableAddress)}`;
}

function getNextIncompleteEvent(days, completedIds) {
  for (const day of days) {
    const nextEvent = day.events.find((event) => !completedIds.has(event.id));
    if (nextEvent) return nextEvent;
  }
  return null;
}

function buildEventProgressPayload(eventId, completed) {
  return {
    event_id: String(eventId).trim(),
    completed: Boolean(completed)
  };
}

function getAllEvents() {
  return tripData.days.flatMap((day) => day.events);
}

function sortEventsByTime(events) {
  return [...events].sort((first, second) => {
    const firstTime = /^\d{2}:\d{2}$/.test(first.time) ? first.time : "99:99";
    const secondTime = /^\d{2}:\d{2}$/.test(second.time) ? second.time : "99:99";
    return firstTime.localeCompare(secondTime);
  });
}

function buildTripEventPayload(event, dayId, sortOrder = 0) {
  return {
    event_id: String(event.id).trim(),
    day_id: String(dayId).trim(),
    sort_order: Number(sortOrder),
    event_time: String(event.time || "").trim(),
    estimated: Boolean(event.estimated),
    place: String(event.place || "").trim(),
    event_type: String(event.type || "").trim(),
    icon: String(event.icon || "行").trim().slice(0, 2) || "行",
    status: String(event.status || "暫定").trim(),
    note: String(event.note || "").trim(),
    address: String(event.address || "待確認").trim() || "待確認",
    reservation: String(event.reservation || "待確認").trim() || "待確認",
    confirmed: Boolean(event.confirmed),
    completed: Boolean(event.completed)
  };
}

function tripEventFromRow(row) {
  return {
    id: String(row.event_id),
    time: String(row.event_time || ""),
    estimated: Boolean(row.estimated),
    place: String(row.place || "未命名行程"),
    type: String(row.event_type || "行程"),
    icon: String(row.icon || "行"),
    status: String(row.status || "暫定"),
    note: String(row.note || ""),
    address: String(row.address || "待確認"),
    reservation: String(row.reservation || "待確認"),
    confirmed: Boolean(row.confirmed),
    completed: Boolean(row.completed)
  };
}

function upsertEventInDays(days, dayId, event) {
  return days.map((day) => {
    const withoutEvent = day.events.filter((item) => item.id !== event.id);
    const events = day.id === dayId ? [...withoutEvent, event] : withoutEvent;
    return { ...day, events: sortEventsByTime(events) };
  });
}

function removeEventFromDays(days, eventId) {
  return days.map((day) => ({
    ...day,
    events: day.events.filter((event) => event.id !== eventId)
  }));
}

function createEventId() {
  return `event-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function replaceTripDays(days) {
  tripData.days.splice(0, tripData.days.length, ...days);
  if (!tripData.days.some((day) => day.id === activeDayId)) {
    activeDayId = tripData.days[0].id;
  }
}

function saveLocalTripEvents() {
  const rows = tripData.days.flatMap((day) => day.events.map((event, index) => (
    buildTripEventPayload({ ...event, completed: eventProgress.has(event.id) }, day.id, index)
  )));
  writeStorage(LOCAL_TRIP_EVENTS_KEY, JSON.stringify(rows));
}

function loadLocalTripEvents() {
  const saved = readStorage(LOCAL_TRIP_EVENTS_KEY, "");
  if (!saved) return false;

  try {
    const rows = JSON.parse(saved);
    if (!Array.isArray(rows)) return false;
    applyTripEventRows(rows);
    return true;
  } catch (error) {
    return false;
  }
}

function applyTripEventRows(rows) {
  const nextDays = tripData.days.map((day) => ({
    ...day,
    events: sortEventsByTime(
      rows.filter((row) => row.day_id === day.id).map(tripEventFromRow)
    )
  }));

  eventProgress = new Set(rows.filter((row) => row.completed).map((row) => String(row.event_id)));
  replaceTripDays(nextDays);
}

function buildSupabaseUrl(projectUrl, table = SUPABASE_TABLE, query = "") {
  const baseUrl = String(projectUrl).trim().replace(/\/+$/, "");
  const queryString = query ? `?${query}` : "";
  return `${baseUrl}/rest/v1/${table}${queryString}`;
}

function isValidSupabaseConfig(config) {
  const validUrl = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(String(config.url || "").trim().replace(/\/+$/, ""));
  return validUrl && String(config.anonKey || "").trim().length > 0;
}

function buildResponsePayload(values) {
  return {
    name: String(values.name || "").trim(),
    attendance: String(values.attendance || "").trim(),
    food_restrictions: String(values.foodRestrictions || "").trim(),
    transport_need: String(values.transportNeed || "").trim(),
    message: String(values.message || "").trim()
  };
}

function buildSupabaseHeaders(apiKey, extraHeaders = {}) {
  const key = String(apiKey).trim();
  const headers = {
    apikey: key,
    "Content-Type": "application/json",
    ...extraHeaders
  };

  // 舊版匿名金鑰是登入權杖；新版公開金鑰只需要 apikey 標頭。
  if (!key.startsWith("sb_publishable_")) {
    headers.Authorization = `Bearer ${key}`;
  }

  return headers;
}

function getSupabaseConfig() {
  return SUPABASE_CONFIG;
}

async function supabaseTableRequest(table, query = "", options = {}) {
  const config = getSupabaseConfig();
  if (!isValidSupabaseConfig(config)) {
    throw new Error("請先填寫正確的專案網址與匿名公開金鑰");
  }

  const response = await fetch(buildSupabaseUrl(config.url, table, query), {
    ...options,
    headers: buildSupabaseHeaders(config.anonKey, options.headers)
  });

  if (!response.ok) {
    let message = `後端回傳錯誤 ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData.code === "PGRST205" && table === TRIP_EVENTS_TABLE) {
        message = "尚未建立行程資料表，請先在 Supabase 執行 trip_events 建表語法";
      } else if (errorData.code === "PGRST205" && table === SHOPPING_ITEMS_TABLE) {
        message = "尚未建立採買資料表，請先在 Supabase 執行 shopping_items 建表語法";
      } else {
        message = errorData.message || errorData.hint || message;
      }
    } catch (error) {
      message = response.statusText || message;
    }
    throw new Error(message);
  }

  if (response.status === 204) return [];
  return response.json();
}

async function supabaseRequest(query = "", options = {}) {
  return supabaseTableRequest(SUPABASE_TABLE, query, options);
}

function getStatusClass(status) {
  const classes = {
    "已確認": "confirmed",
    "已規劃": "planned",
    "暫定": "tentative",
    "已討論": "discussed",
    "待確認": "pending",
    "未安排": "unplanned"
  };

  return classes[status] || "unplanned";
}

function getShoppingItems() {
  return tripData.shopping.flatMap((group) => group.items);
}

function isShoppingDone(item) {
  return shoppingProgress.has(item.id) || readStorage(getStorageKey("shopping", item.id), "false") === "true";
}

function buildShoppingItemPayload(item, category, sortOrder = 0) {
  return {
    item_id: String(item.id).trim(),
    category: String(category).trim(),
    item_name: String(item.name).trim(),
    sort_order: Number(sortOrder),
    completed: Boolean(item.completed),
    photo_path: String(item.photoPath || "")
  };
}

function shoppingItemFromRow(row) {
  return {
    id: String(row.item_id),
    name: String(row.item_name || "未命名品項"),
    completed: Boolean(row.completed),
    photoPath: String(row.photo_path || "")
  };
}

function upsertShoppingItem(groups, category, item) {
  return groups.map((group) => {
    const items = group.items.filter((current) => current.id !== item.id);
    return {
      ...group,
      items: group.category === category ? [...items, item] : items
    };
  });
}

function removeShoppingItem(groups, itemId) {
  return groups.map((group) => ({
    ...group,
    items: group.items.filter((item) => item.id !== itemId)
  }));
}

function createShoppingItemId() {
  return `shopping-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function validateShoppingPhoto(file) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!file) return "請先選擇照片。";
  if (!allowedTypes.includes(file.type)) return "照片只支援 JPG、PNG 或 WebP。";
  if (file.size > MAX_SHOPPING_PHOTO_SIZE) return "照片大小不可超過 5 MB。";
  return "";
}

function buildShoppingPhotoPath(itemId) {
  const safeId = String(itemId).replace(/[^a-zA-Z0-9_-]/g, "-");
  return `${safeId}/photo`;
}

function encodeStoragePath(path) {
  return String(path).split("/").map(encodeURIComponent).join("/");
}

function getPublicShoppingPhotoUrl(photoPath) {
  if (!photoPath) return "";
  const config = getSupabaseConfig();
  return `${config.url}/storage/v1/object/public/${SHOPPING_PHOTOS_BUCKET}/${encodeStoragePath(photoPath)}`;
}

function updateShoppingPhotoPath(itemId, photoPath) {
  replaceShoppingGroups(tripData.shopping.map((group) => ({
    ...group,
    items: group.items.map((item) => (
      item.id === itemId ? { ...item, photoPath } : item
    ))
  })));
}

async function uploadShoppingPhoto(itemId, file) {
  const validationMessage = validateShoppingPhoto(file);
  if (validationMessage) throw new Error(validationMessage);

  const config = getSupabaseConfig();
  if (!isValidSupabaseConfig(config)) throw new Error("Supabase 連線設定不完整");

  const photoPath = buildShoppingPhotoPath(itemId);
  const uploadUrl = `${config.url}/storage/v1/object/${SHOPPING_PHOTOS_BUCKET}/${encodeStoragePath(photoPath)}`;
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: buildSupabaseHeaders(config.anonKey, {
      "Content-Type": file.type,
      "x-upsert": "true"
    }),
    body: file
  });

  if (!response.ok) {
    let message = `照片上傳失敗 ${response.status}`;
    try {
      const errorData = await response.json();
      message = errorData.message || errorData.error || message;
    } catch (error) {
      message = response.statusText || message;
    }
    throw new Error(message);
  }

  updateShoppingPhotoPath(itemId, photoPath);
  saveLocalShoppingItems();
  renderShopping();

  await supabaseTableRequest(SHOPPING_ITEMS_TABLE, `item_id=eq.${encodeURIComponent(itemId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ photo_path: photoPath })
  });
}

function replaceShoppingGroups(groups) {
  tripData.shopping.splice(0, tripData.shopping.length, ...groups);
}

function applyShoppingRows(rows) {
  const groups = tripData.shopping.map((group) => ({
    ...group,
    items: rows
      .filter((row) => row.category === group.category)
      .sort((first, second) => Number(first.sort_order) - Number(second.sort_order))
      .map(shoppingItemFromRow)
  }));
  shoppingProgress = new Set(rows.filter((row) => row.completed).map((row) => String(row.item_id)));
  replaceShoppingGroups(groups);
}

function saveLocalShoppingItems() {
  const rows = tripData.shopping.flatMap((group) => group.items.map((item, index) => (
    buildShoppingItemPayload({ ...item, completed: shoppingProgress.has(item.id) }, group.category, index)
  )));
  writeStorage(LOCAL_SHOPPING_ITEMS_KEY, JSON.stringify(rows));
}

function loadLocalShoppingItems() {
  const saved = readStorage(LOCAL_SHOPPING_ITEMS_KEY, "");
  if (!saved) return false;

  try {
    const rows = JSON.parse(saved);
    if (!Array.isArray(rows)) return false;
    applyShoppingRows(rows);
    return true;
  } catch (error) {
    return false;
  }
}

function getLocalEventProgress() {
  return new Set(
    getAllEvents()
      .filter((event) => event.completed || readStorage(getStorageKey("event", event.id), "false") === "true")
      .map((event) => event.id)
  );
}

function saveLocalEventProgress(eventId, completed) {
  writeStorage(getStorageKey("event", eventId), completed);
}

function setsHaveSameValues(first, second) {
  return first.size === second.size && [...first].every((value) => second.has(value));
}

function setEventSyncStatus(text, state = "") {
  const status = document.querySelector("#eventSyncStatus");
  status.textContent = text;
  status.className = `sync-status${state ? ` is-${state}` : ""}`;
}

function renderEventProgressViews() {
  renderQuickInfo();
  renderSchedule();
}

async function loadEventProgress() {
  const hadLocalSchedule = loadLocalTripEvents();
  if (!hadLocalSchedule) {
    eventProgress = getLocalEventProgress();
  }
  renderEventProgressViews();
  setEventSyncStatus("僅儲存在這台裝置", "local");

  if (!isValidSupabaseConfig(getSupabaseConfig())) return;

  try {
    const query = "select=event_id,day_id,sort_order,event_time,estimated,place,event_type,icon,status,note,address,reservation,confirmed,completed&order=day_id.asc,sort_order.asc";
    let rows = await supabaseTableRequest(TRIP_EVENTS_TABLE, query);

    if (!rows.length && getAllEvents().length) {
      rows = tripData.days.flatMap((day) => day.events.map((event, index) => (
        buildTripEventPayload({ ...event, completed: eventProgress.has(event.id) }, day.id, index)
      )));
      if (rows.length) {
        await supabaseTableRequest(TRIP_EVENTS_TABLE, "on_conflict=event_id", {
          method: "POST",
          headers: { Prefer: "resolution=merge-duplicates,return=representation" },
          body: JSON.stringify(rows)
        });
      }
    }

    applyTripEventRows(rows);
    saveLocalTripEvents();
    renderDayTabs();
    renderEventProgressViews();
    setEventSyncStatus("行程已與旅伴同步", "synced");
  } catch (error) {
    setEventSyncStatus(`共用同步失敗：${error.message}`, "error");
  }
}

async function setEventCompleted(eventId, completed) {
  if (completed) {
    eventProgress.add(eventId);
  } else {
    eventProgress.delete(eventId);
  }

  saveLocalEventProgress(eventId, completed);
  saveLocalTripEvents();
  renderEventProgressViews();

  if (!isValidSupabaseConfig(getSupabaseConfig())) {
    setEventSyncStatus("僅儲存在這台裝置", "local");
    return;
  }

  try {
    await supabaseTableRequest(TRIP_EVENTS_TABLE, `event_id=eq.${encodeURIComponent(eventId)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ completed: Boolean(completed) })
    });
    setEventSyncStatus("完成狀態已同步", "synced");
  } catch (error) {
    setEventSyncStatus(`已存本機，稍後再同步：${error.message}`, "error");
  }
}

function renderQuickInfo() {
  const nextEvent = getNextIncompleteEvent(tripData.days, eventProgress);
  document.querySelector("#nextEvent").textContent = nextEvent ? `${nextEvent.time} ${nextEvent.place}` : "全部行程已完成";
}

function getWeatherDescription(code) {
  if (code === 0) return "晴朗";
  if ([1, 2].includes(code)) return "晴時多雲";
  if (code === 3) return "陰天";
  if ([45, 48].includes(code)) return "有霧";
  if ([51, 53, 55, 56, 57].includes(code)) return "毛毛雨";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "下雨";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "下雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天氣狀況不明";
}

function formatWeatherTime(time) {
  const date = new Date(time);
  if (Number.isNaN(date.getTime())) return "剛剛更新";
  return `${date.toLocaleTimeString("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false })} 更新`;
}

async function loadCurrentWeather() {
  const weatherInfo = document.querySelector("#weatherInfo");
  const weatherDetails = document.querySelector("#weatherDetails");
  const refreshButton = document.querySelector("#refreshWeatherButton");

  refreshButton.disabled = true;
  weatherDetails.textContent = "正在取得即時資料";

  try {
    const response = await fetch(WEATHER_API_URL);
    if (!response.ok) throw new Error("目前無法取得天氣資料");

    const data = await response.json();
    const current = data.current;
    if (!current) throw new Error("目前無法取得天氣資料");

    weatherInfo.textContent = `${Math.round(current.temperature_2m)}°C／${getWeatherDescription(current.weather_code)}`;
    weatherDetails.textContent = `體感 ${Math.round(current.apparent_temperature)}°C・濕度 ${current.relative_humidity_2m}%・風速 ${Math.round(current.wind_speed_10m)} 公里／時・${formatWeatherTime(current.time)}`;
  } catch (error) {
    weatherInfo.textContent = "暫時無法取得";
    weatherDetails.textContent = "請稍後按重新整理再試一次";
  } finally {
    refreshButton.disabled = false;
  }
}

function renderDayTabs() {
  const dayTabs = document.querySelector("#dayTabs");
  dayTabs.innerHTML = tripData.days.map((day) => {
    const activeClass = day.id === activeDayId ? " active" : "";
    return `<button class="day-tab${activeClass}" type="button" data-day="${day.id}">${day.label}</button>`;
  }).join("");
}

function renderSchedule() {
  const activeDay = tripData.days.find((day) => day.id === activeDayId);
  const dayPanels = document.querySelector("#dayPanels");

  dayPanels.innerHTML = `
    <div class="day-title">
      <strong>${escapeHtml(activeDay.title)}</strong>
    </div>
    ${activeDay.events.length ? activeDay.events.map((event, index) => {
      const completed = eventProgress.has(event.id);
      return `
      <details class="event-card ${completed ? "is-complete" : ""}" ${index === 0 ? "open" : ""}>
        <summary>
          <span class="event-time">${escapeHtml(event.time)}</span>
          <span class="event-icon" aria-hidden="true">${escapeHtml(event.icon)}</span>
          <span class="event-title">
            <strong>${escapeHtml(event.place)}</strong>
            <small>${escapeHtml(event.type)}</small>
          </span>
          <label class="event-complete-control">
            <input type="checkbox" data-event-check="${event.id}" ${completed ? "checked" : ""}>
            <span>${completed ? "已完成" : "完成"}</span>
          </label>
        </summary>
        <div class="event-more">
          <p>${escapeHtml(event.note)}</p>
          <div class="detail-list">
            <span><strong>地址：</strong>${escapeHtml(event.address)}</span>
            <span><strong>預約：</strong>${escapeHtml(event.reservation)}</span>
            <span><strong>確認狀態：</strong>${event.confirmed ? "已確認" : "仍需追蹤"}</span>
          </div>
          <div class="event-card-actions">
            <a class="map-button" href="${createMapUrl(event.place, event.address)}" target="_blank" rel="noopener">開啟導航</a>
            <button class="secondary-button" type="button" data-edit-event="${escapeHtml(event.id)}">編輯行程</button>
            <button class="danger-button" type="button" data-delete-event="${escapeHtml(event.id)}">刪除行程</button>
          </div>
        </div>
      </details>
    `;
    }).join("") : '<p class="empty-message">這一天還沒有行程，按「新增行程」開始安排。</p>'}
  `;
}

function renderShopping() {
  const shoppingGrid = document.querySelector("#shoppingGrid");

  shoppingGrid.innerHTML = tripData.shopping.map((group) => `
    <section class="shopping-group">
      <h3>${escapeHtml(group.category)}</h3>
      <ul class="shopping-items">
        ${group.items.map((item) => {
          const done = isShoppingDone(item);

          return `
            <li class="shopping-item ${done ? "is-done" : ""}">
              <input type="checkbox" data-shopping-check="${item.id}" ${done ? "checked" : ""} aria-label="${escapeHtml(item.name)}已購買">
              <strong>${escapeHtml(item.name)}</strong>
              <div class="shopping-item-actions">
                <input class="shopping-photo-input" type="file" data-shopping-photo="${item.id}" accept="image/jpeg,image/png,image/webp">
                <button class="secondary-button shopping-photo-button" type="button" data-select-shopping-photo="${item.id}">上傳照片</button>
                ${item.photoPath
                  ? `<a class="secondary-button shopping-photo-button" href="${getPublicShoppingPhotoUrl(item.photoPath)}" target="_blank" rel="noopener">檢視照片</a>`
                  : '<button class="secondary-button shopping-photo-button" type="button" disabled>檢視照片</button>'}
                <button class="shopping-delete-button" type="button" data-delete-shopping="${item.id}" aria-label="刪除${escapeHtml(item.name)}">×</button>
              </div>
            </li>
          `;
        }).join("")}
      </ul>
    </section>
  `).join("");

  updateShoppingProgress();
}

function updateShoppingProgress() {
  const items = getShoppingItems();
  const finished = items.filter(isShoppingDone).length;
  document.querySelector("#shoppingProgress").textContent = `已買 ${finished}／${items.length}`;
}

function setShoppingSyncStatus(text, state = "") {
  const status = document.querySelector("#shoppingSyncStatus");
  status.textContent = text;
  status.className = `sync-status${state ? ` is-${state}` : ""}`;
}

async function loadShoppingItems() {
  const hadLocalItems = loadLocalShoppingItems();
  if (!hadLocalItems) {
    shoppingProgress = new Set(getShoppingItems().filter(isShoppingDone).map((item) => item.id));
  }
  renderShopping();
  setShoppingSyncStatus("僅儲存在這台裝置", "local");

  if (!isValidSupabaseConfig(getSupabaseConfig())) return;

  try {
    const query = "select=item_id,category,item_name,sort_order,completed,photo_path&order=category.asc,sort_order.asc";
    let rows = await supabaseTableRequest(SHOPPING_ITEMS_TABLE, query);

    if (!rows.length && getShoppingItems().length) {
      rows = tripData.shopping.flatMap((group) => group.items.map((item, index) => (
        buildShoppingItemPayload({ ...item, completed: shoppingProgress.has(item.id) }, group.category, index)
      )));
      await supabaseTableRequest(SHOPPING_ITEMS_TABLE, "on_conflict=item_id", {
        method: "POST",
        headers: { Prefer: "resolution=merge-duplicates,return=representation" },
        body: JSON.stringify(rows)
      });
    }

    applyShoppingRows(rows);
    saveLocalShoppingItems();
    renderShopping();
    setShoppingSyncStatus("採買清單已同步", "synced");
  } catch (error) {
    setShoppingSyncStatus(error.message, "error");
  }
}

async function setShoppingCompleted(itemId, completed) {
  if (completed) shoppingProgress.add(itemId);
  else shoppingProgress.delete(itemId);

  writeStorage(getStorageKey("shopping", itemId), completed);
  saveLocalShoppingItems();
  renderShopping();

  try {
    await supabaseTableRequest(SHOPPING_ITEMS_TABLE, `item_id=eq.${encodeURIComponent(itemId)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ completed: Boolean(completed) })
    });
    setShoppingSyncStatus("勾選狀態已同步", "synced");
  } catch (error) {
    setShoppingSyncStatus(`已存本機：${error.message}`, "error");
  }
}

async function addShoppingItem(category, name) {
  const item = { id: createShoppingItemId(), name: String(name).trim(), completed: false, photoPath: "" };
  replaceShoppingGroups(upsertShoppingItem(tripData.shopping, category, item));
  saveLocalShoppingItems();
  renderShopping();

  const group = tripData.shopping.find((current) => current.category === category);
  const payload = buildShoppingItemPayload(item, category, group.items.length - 1);
  try {
    await supabaseTableRequest(SHOPPING_ITEMS_TABLE, "on_conflict=item_id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(payload)
    });
    setShoppingSyncStatus("新項目已同步", "synced");
  } catch (error) {
    setShoppingSyncStatus(`已存本機：${error.message}`, "error");
  }
}

async function deleteShoppingItem(itemId) {
  replaceShoppingGroups(removeShoppingItem(tripData.shopping, itemId));
  shoppingProgress.delete(itemId);
  writeStorage(getStorageKey("shopping", itemId), false);
  saveLocalShoppingItems();
  renderShopping();

  try {
    await supabaseTableRequest(SHOPPING_ITEMS_TABLE, `item_id=eq.${encodeURIComponent(itemId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" }
    });
    setShoppingSyncStatus("品項已刪除", "synced");
  } catch (error) {
    setShoppingSyncStatus(`本機已刪除：${error.message}`, "error");
  }
}

function setShoppingItemMessage(text, state = "") {
  const message = document.querySelector("#shoppingItemMessage");
  message.textContent = text;
  message.className = `form-message${state ? ` is-${state}` : ""}`;
}

function openShoppingItemEditor() {
  const form = document.querySelector("#shoppingItemForm");
  form.reset();
  form.elements.category.innerHTML = tripData.shopping.map((group) => (
    `<option value="${escapeHtml(group.category)}">${escapeHtml(group.category)}</option>`
  )).join("");
  setShoppingItemMessage("");
  document.querySelector("#shoppingItemEditor").showModal();
  form.elements.name.focus();
}

function closeShoppingItemEditor() {
  document.querySelector("#shoppingItemEditor").close();
}

function renderTransport() {
  const carCards = tripData.transport.cars.map((car) => `
    <article class="transport-card">
      <span class="status status-pending">名單待整理</span>
      <h3>分車卡片</h3>
      <p>車主：${escapeHtml(car.owner)}</p>
      <p>乘客：${escapeHtml(car.passengers)}</p>
      <p>集合點：${escapeHtml(car.meetingPoint)}</p>
      <p>出發時間：${escapeHtml(car.departure)}</p>
      <p>剩餘座位：${escapeHtml(car.seats)}</p>
      <p>備註：${escapeHtml(car.note)}</p>
    </article>
  `).join("");

  const atv = tripData.transport.atv;
  document.querySelector("#transportGrid").innerHTML = `
    ${carCards}
    <article class="transport-card">
      <span class="status status-tentative">分組中</span>
      <h3>沙灘車分組</h3>
      <p>${escapeHtml(atv.vehicles)}</p>
      <p>${escapeHtml(atv.supportCar)}</p>
      <p>保母車人員：${atv.supportMembers.map(escapeHtml).join("、")}</p>
      <p>${escapeHtml(atv.others)}</p>
      <p class="placeholder">${escapeHtml(atv.price)}</p>
    </article>
  `;
}

function setConnectionStatus(text, state = "") {
  const status = document.querySelector("#connectionStatus");
  status.textContent = text;
  status.className = `connection-status${state ? ` is-${state}` : ""}`;
}

function setResponseMessage(text, state = "") {
  const message = document.querySelector("#responseMessage");
  message.textContent = text;
  message.className = `form-message${state ? ` is-${state}` : ""}`;
}

function renderSupabaseSettings() {
  const config = getSupabaseConfig();
  const ready = isValidSupabaseConfig(config);

  document.querySelector("#submitResponseButton").disabled = !ready;
  document.querySelector("#refreshResponsesButton").disabled = !ready;
  setConnectionStatus(ready ? "正在連接後端" : "連線設定不完整", ready ? "connected" : "error");
}

function getAttendanceClass(attendance) {
  if (attendance === "參加") return "confirmed";
  if (attendance === "待確認") return "tentative";
  return "unplanned";
}

function formatResponseTime(value) {
  if (!value) return "時間未提供";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "時間格式不正確";

  return new Intl.DateTimeFormat("zh-TW", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderResponseList(records) {
  const responseList = document.querySelector("#responseList");

  if (!records.length) {
    responseList.innerHTML = '<p class="empty-message">後端連線成功，目前還沒有旅伴回覆。</p>';
    return;
  }

  responseList.innerHTML = records.map((record) => `
    <article class="response-card">
      <div class="response-card-heading">
        <strong>${escapeHtml(record.name)}</strong>
        <span class="status status-${getAttendanceClass(record.attendance)}">${escapeHtml(record.attendance)}</span>
      </div>
      <p>交通：${escapeHtml(record.transport_need || "未填寫")}</p>
      <p>飲食：${escapeHtml(record.food_restrictions || "無特別需求")}</p>
      <p>留言：${escapeHtml(record.message || "無")}</p>
      <time>${escapeHtml(formatResponseTime(record.created_at))}</time>
    </article>
  `).join("");
}

async function loadResponses() {
  const config = getSupabaseConfig();
  if (!isValidSupabaseConfig(config)) {
    renderResponseList([]);
    setConnectionStatus("尚未設定連線");
    return;
  }

  setConnectionStatus("正在連接後端");
  try {
    const query = "select=id,name,attendance,food_restrictions,transport_need,message,created_at&order=created_at.desc&limit=50";
    const records = await supabaseRequest(query);
    renderResponseList(records);
    setConnectionStatus("前端與後端連線成功", "connected");
    document.querySelector("#submitResponseButton").disabled = false;
    document.querySelector("#refreshResponsesButton").disabled = false;
  } catch (error) {
    setConnectionStatus("連線失敗", "error");
    setResponseMessage(error.message, "error");
  }
}

function buildSummaryText() {
  return tripData.days.map((day) => {
    const events = day.events.map((event) => `${event.time} ${event.place}`).join("；");
    return `${day.label}：${events}`;
  }).join("\n");
}

function findEventWithDay(eventId) {
  for (const day of tripData.days) {
    const event = day.events.find((item) => item.id === eventId);
    if (event) return { day, event };
  }
  return null;
}

function setEventFormMessage(text, state = "") {
  const message = document.querySelector("#eventFormMessage");
  message.textContent = text;
  message.className = `form-message${state ? ` is-${state}` : ""}`;
}

function openEventEditor(eventId = "") {
  const dialog = document.querySelector("#eventEditor");
  const form = document.querySelector("#eventForm");
  const daySelect = form.elements.dayId;
  const found = eventId ? findEventWithDay(eventId) : null;

  form.reset();
  daySelect.innerHTML = tripData.days.map((day) => (
    `<option value="${escapeHtml(day.id)}">${escapeHtml(day.label)}｜${escapeHtml(day.title)}</option>`
  )).join("");
  form.elements.eventId.value = found ? found.event.id : "";
  form.elements.dayId.value = found ? found.day.id : activeDayId;
  form.elements.time.value = found ? found.event.time : "09:00";
  form.elements.place.value = found ? found.event.place : "";
  form.elements.type.value = found ? found.event.type : "景點";
  form.elements.icon.value = found ? found.event.icon : "景";
  form.elements.status.value = found ? found.event.status : "暫定";
  form.elements.note.value = found ? found.event.note : "";
  form.elements.address.value = found ? found.event.address : "待確認";
  form.elements.reservation.value = found ? found.event.reservation : "待確認";
  document.querySelector("#eventFormTitle").textContent = found ? "編輯行程" : "新增行程";
  setEventFormMessage("");
  dialog.showModal();
  form.elements.time.focus();
}

function closeEventEditor() {
  document.querySelector("#eventEditor").close();
}

function eventFromForm(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  const oldEvent = values.eventId ? findEventWithDay(values.eventId)?.event : null;
  const status = String(values.status || "暫定");

  return {
    dayId: String(values.dayId || activeDayId),
    event: {
      id: String(values.eventId || createEventId()),
      time: String(values.time || ""),
      estimated: false,
      place: String(values.place || "").trim(),
      type: String(values.type || "").trim(),
      icon: String(values.icon || "行").trim().slice(0, 2) || "行",
      status,
      note: String(values.note || "").trim(),
      address: String(values.address || "待確認").trim() || "待確認",
      reservation: String(values.reservation || "待確認").trim() || "待確認",
      confirmed: status === "已確認",
      completed: oldEvent ? eventProgress.has(oldEvent.id) : false
    }
  };
}

async function saveTripEvent(dayId, event) {
  replaceTripDays(upsertEventInDays(tripData.days, dayId, event));
  activeDayId = dayId;
  saveLocalTripEvents();
  renderDayTabs();
  renderEventProgressViews();

  if (!isValidSupabaseConfig(getSupabaseConfig())) {
    setEventSyncStatus("行程已存於這台裝置", "local");
    return;
  }

  const targetDay = tripData.days.find((day) => day.id === dayId);
  const sortOrder = targetDay.events.findIndex((item) => item.id === event.id);
  const payload = buildTripEventPayload(event, dayId, sortOrder);

  try {
    await supabaseTableRequest(TRIP_EVENTS_TABLE, "on_conflict=event_id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=representation" },
      body: JSON.stringify(payload)
    });
    setEventSyncStatus("行程修改已同步", "synced");
  } catch (error) {
    setEventSyncStatus(`已存本機，稍後再同步：${error.message}`, "error");
  }
}

async function deleteTripEvent(eventId) {
  replaceTripDays(removeEventFromDays(tripData.days, eventId));
  eventProgress.delete(eventId);
  saveLocalEventProgress(eventId, false);
  saveLocalTripEvents();
  renderEventProgressViews();

  if (!isValidSupabaseConfig(getSupabaseConfig())) {
    setEventSyncStatus("行程已從這台裝置刪除", "local");
    return;
  }

  try {
    await supabaseTableRequest(TRIP_EVENTS_TABLE, `event_id=eq.${encodeURIComponent(eventId)}`, {
      method: "DELETE",
      headers: { Prefer: "return=minimal" }
    });
    setEventSyncStatus("行程刪除已同步", "synced");
  } catch (error) {
    setEventSyncStatus(`本機已刪除，共用同步失敗：${error.message}`, "error");
  }
}

function bindInteractions() {
  const dayTabs = document.querySelector("#dayTabs");
  const dayPanels = document.querySelector("#dayPanels");
  const shoppingGrid = document.querySelector("#shoppingGrid");
  const copySummaryButton = document.querySelector("#copySummary");
  const responseForm = document.querySelector("#responseForm");
  const submitResponseButton = document.querySelector("#submitResponseButton");
  const refreshResponsesButton = document.querySelector("#refreshResponsesButton");
  const refreshEventProgressButton = document.querySelector("#refreshEventProgressButton");
  const addEventButton = document.querySelector("#addEventButton");
  const eventForm = document.querySelector("#eventForm");
  const saveEventButton = document.querySelector("#saveEventButton");
  const closeEventEditorButton = document.querySelector("#closeEventEditorButton");
  const cancelEventButton = document.querySelector("#cancelEventButton");
  const addShoppingItemButton = document.querySelector("#addShoppingItemButton");
  const shoppingItemForm = document.querySelector("#shoppingItemForm");
  const saveShoppingItemButton = document.querySelector("#saveShoppingItemButton");
  const closeShoppingItemButton = document.querySelector("#closeShoppingItemButton");
  const cancelShoppingItemButton = document.querySelector("#cancelShoppingItemButton");
  const refreshWeatherButton = document.querySelector("#refreshWeatherButton");

  refreshWeatherButton.addEventListener("click", loadCurrentWeather);

  dayTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-day]");
    if (!button) return;

    activeDayId = button.dataset.day;
    renderDayTabs();
    renderSchedule();
  });

  dayPanels.addEventListener("click", async (event) => {
    if (event.target.closest(".event-complete-control")) {
      event.stopPropagation();
      return;
    }

    const editButton = event.target.closest("[data-edit-event]");
    if (editButton) {
      event.preventDefault();
      openEventEditor(editButton.dataset.editEvent);
      return;
    }

    const deleteButton = event.target.closest("[data-delete-event]");
    if (deleteButton) {
      event.preventDefault();
      const found = findEventWithDay(deleteButton.dataset.deleteEvent);
      if (found && window.confirm(`確定要刪除「${found.event.place}」嗎？`)) {
        await deleteTripEvent(found.event.id);
      }
    }
  });

  dayPanels.addEventListener("change", async (event) => {
    const checkbox = event.target.closest("[data-event-check]");
    if (!checkbox) return;

    await setEventCompleted(checkbox.dataset.eventCheck, checkbox.checked);
  });

  refreshEventProgressButton.addEventListener("click", async () => {
    await loadEventProgress();
  });

  addEventButton.addEventListener("click", () => {
    openEventEditor();
  });

  closeEventEditorButton.addEventListener("click", closeEventEditor);
  cancelEventButton.addEventListener("click", closeEventEditor);

  eventForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const result = eventFromForm(eventForm);
    if (!result.event.time || !result.event.place || !result.event.type) {
      setEventFormMessage("請完成時間、行程名稱與類型。", "error");
      return;
    }

    saveEventButton.disabled = true;
    setEventFormMessage("正在儲存行程");
    await saveTripEvent(result.dayId, result.event);
    saveEventButton.disabled = false;
    closeEventEditor();
  });

  shoppingGrid.addEventListener("change", async (event) => {
    const checkbox = event.target.closest("[data-shopping-check]");
    if (checkbox) {
      await setShoppingCompleted(checkbox.dataset.shoppingCheck, checkbox.checked);
      return;
    }

    const photoInput = event.target.closest("[data-shopping-photo]");
    if (!photoInput || !photoInput.files[0]) return;

    setShoppingSyncStatus("正在上傳照片");
    try {
      await uploadShoppingPhoto(photoInput.dataset.shoppingPhoto, photoInput.files[0]);
      setShoppingSyncStatus("照片已上傳", "synced");
    } catch (error) {
      setShoppingSyncStatus(error.message, "error");
    } finally {
      photoInput.value = "";
    }
  });

  shoppingGrid.addEventListener("click", async (event) => {
    const photoButton = event.target.closest("[data-select-shopping-photo]");
    if (photoButton) {
      const input = shoppingGrid.querySelector(`[data-shopping-photo="${photoButton.dataset.selectShoppingPhoto}"]`);
      input.click();
      return;
    }

    const deleteButton = event.target.closest("[data-delete-shopping]");
    if (!deleteButton) return;

    const item = getShoppingItems().find((current) => current.id === deleteButton.dataset.deleteShopping);
    if (item && window.confirm(`確定要刪除「${item.name}」嗎？`)) {
      await deleteShoppingItem(item.id);
    }
  });

  addShoppingItemButton.addEventListener("click", openShoppingItemEditor);
  closeShoppingItemButton.addEventListener("click", closeShoppingItemEditor);
  cancelShoppingItemButton.addEventListener("click", closeShoppingItemEditor);

  shoppingItemForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(shoppingItemForm).entries());
    const name = String(values.name || "").trim();
    if (!name) {
      setShoppingItemMessage("請輸入品項名稱。", "error");
      return;
    }

    saveShoppingItemButton.disabled = true;
    setShoppingItemMessage("正在加入清單");
    await addShoppingItem(String(values.category), name);
    saveShoppingItemButton.disabled = false;
    closeShoppingItemEditor();
  });

  copySummaryButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      copySummaryButton.textContent = "已複製摘要";
    } catch (error) {
      copySummaryButton.textContent = "無法自動複製";
    }

    setTimeout(() => {
      copySummaryButton.textContent = "複製行程摘要";
    }, 1800);
  });

  responseForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(responseForm).entries());
    const payload = buildResponsePayload(values);

    if (!payload.name || !payload.attendance || !payload.transport_need) {
      setResponseMessage("請完成姓名、參加狀態與交通需求。", "error");
      return;
    }

    submitResponseButton.disabled = true;
    setResponseMessage("正在送出資料");

    try {
      await supabaseRequest("", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(payload)
      });
      responseForm.reset();
      setResponseMessage("回覆已寫入後端。", "success");
      await loadResponses();
    } catch (error) {
      setResponseMessage(error.message, "error");
    } finally {
      submitResponseButton.disabled = !isValidSupabaseConfig(getSupabaseConfig());
    }
  });

  refreshResponsesButton.addEventListener("click", async () => {
    setResponseMessage("");
    await loadResponses();
  });
}

function initializeDashboard() {
  if (!loadLocalTripEvents()) {
    eventProgress = getLocalEventProgress();
  }
  if (!loadLocalShoppingItems()) {
    shoppingProgress = new Set(getShoppingItems().filter(isShoppingDone).map((item) => item.id));
  }
  renderQuickInfo();
  renderDayTabs();
  renderSchedule();
  renderShopping();
  renderTransport();
  renderSupabaseSettings();
  bindInteractions();
  loadCurrentWeather();

  loadResponses();

  loadEventProgress();
  loadShoppingItems();

  if (typeof setInterval === "function") {
    setInterval(() => {
      loadEventProgress();
      loadShoppingItems();
    }, 30000);
    setInterval(loadCurrentWeather, 10 * 60 * 1000);
  }
}

globalThis.travelDashboard = {
  tripData,
  countPending,
  createMapUrl,
  getStorageKey,
  buildSupabaseUrl,
  isValidSupabaseConfig,
  buildResponsePayload,
  buildSupabaseHeaders,
  supabaseRequest,
  supabaseTableRequest,
  getNextIncompleteEvent,
  buildEventProgressPayload,
  sortEventsByTime,
  buildTripEventPayload,
  upsertEventInDays,
  removeEventFromDays,
  tripEventFromRow,
  buildShoppingItemPayload,
  upsertShoppingItem,
  removeShoppingItem,
  shoppingItemFromRow,
  validateShoppingPhoto,
  buildShoppingPhotoPath,
  getPublicShoppingPhotoUrl,
  getWeatherDescription,
  formatWeatherTime
};

if (typeof document !== "undefined") {
  initializeDashboard();
}
