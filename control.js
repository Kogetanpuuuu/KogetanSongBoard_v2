const nowInput=document.getElementById("nowInput");const requestInput=document.getElementById("requestInput");const requestOpen=document.getElementById("requestOpen");const savedText=document.getElementById("savedText");
function parseRequests(){return requestInput.value.split("\n").map(v=>v.trim()).filter(Boolean)}
function showSaved(message){savedText.textContent=message;setTimeout(()=>savedText.textContent="",1800)}
function save(){const data={now:nowInput.value.trim(),requests:parseRequests(),requestOpen:requestOpen.checked,updatedAt:Date.now()};boardRef.set(data).then(()=>showSaved("保存しました")).catch(err=>{console.error(err);showSaved("保存できませんでした")})}
boardRef.on("value",s=>{const data=s.val()||{};nowInput.value=typeof data.now==="string"?data.now:"";requestInput.value=Array.isArray(data.requests)?data.requests.join("\n"):"";requestOpen.checked=data.requestOpen!==false});
document.getElementById("saveBtn").addEventListener("click",save);
document.getElementById("clearNowBtn").addEventListener("click",()=>{nowInput.value="";save()});
document.getElementById("clearRequestsBtn").addEventListener("click",()=>{requestInput.value="";save()});
document.addEventListener("keydown",e=>{if(e.ctrlKey&&e.key==="Enter")save()});
