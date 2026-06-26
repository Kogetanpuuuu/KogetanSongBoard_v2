let currentNow = "";

function normalize(data){
  return {
    now: (data && data.now ? data.now : "").trim(),
    requests: Array.isArray(data && data.requests) ? data.requests.filter(Boolean) : [],
    requestOpen: data && data.requestOpen !== false
  };
}

function render(raw){
  const data = normalize(raw || {});
  const nowEl = document.getElementById("nowSong");
  const requestList = document.getElementById("requestList");
  const status = document.getElementById("requestStatus");

  const nextNow = data.now || "曲名未設定";
  if (nextNow !== currentNow){
    currentNow = nextNow;
    nowEl.classList.add("fade");
    setTimeout(() => {
      nowEl.textContent = nextNow;
      nowEl.classList.remove("fade");
    }, 180);
  }

  status.textContent = data.requestOpen ? "OPEN" : "CLOSED";
  status.classList.toggle("closed", !data.requestOpen);

  requestList.innerHTML = "";
  const list = data.requests.slice(0, 8);
  if (list.length === 0){
    const li = document.createElement("li");
    li.textContent = data.requestOpen ? "リクエスト受付中" : "受付停止中";
    requestList.appendChild(li);
    return;
  }
  list.forEach(song => {
    const li = document.createElement("li");
    li.textContent = song;
    requestList.appendChild(li);
  });
}

boardRef.on("value", snap => render(snap.val()));
