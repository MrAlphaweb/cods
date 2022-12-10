// توليد محارف عشوائي
function creatRandomString(randomx) {
  var randomString = "";
  var char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstyvwxuz!@#$%&1234567890";
  for (var i = 0; i < randomx; i++) {
    randomString += char.charAt(Math.floor(Math.random() * char.length));
  }
  return randomString;
}
// _____________________________
function showData() {
  saves = JSON.parse(localStorage.cods);
  resulr.innerHTML = "";
  resulr.innerHTML = `${resulr.innerHTML}admin: ${
    saves[saves.length - 1].admin
  }<br>client: ${saves[saves.length - 1].client}<br>card value: ${
    saves[saves.length - 1].cardvalue
  }<br>token value: ${saves[saves.length - 1].tokenvalue}<br>date: ${
    saves[saves.length - 1].data
  }<br>time: ${saves[saves.length - 1].time}<br>code: ${
    saves[saves.length - 1].code
  }`;
}
// ___________________________________
function done() {
  resulr.innerHTML = "البيانات محفوظة في المخزن";
}
function delet() {
  saves.pop(delet(data));
  resulr.innerHTML = "تم حذف الكود";
}
// --------------------------------
var resulr = document.getElementById("out");
dateV = document.getElementById("date");
timeV = document.getElementById("time");
adminV = document.getElementById("admin");
clintV = document.getElementById("client");
cvV = document.getElementById("cv");
tvV = document.getElementById("tv");
gbtn = document.getElementById("gbtn");

var saves = [];
var data = {};

function main() {
  if (localStorage.cods == undefined) {
    localStorage.cods = JSON.stringify(saves);
  }
  showData();
}
function genratCode() {
  if (
    dateV.value != "" &&
    timeV.value != "" &&
    clintV.value != "" &&
    cvV.value != "" &&
    tvV.value != ""
  ) {
    if (adminV.value === "896") {
      var mrcod = `MrXh${cvV.value}${tvV.value}${creatRandomString(10)}`;
      data = {
        admin: "mohamed",
        client: clintV.value,
        cardvalue: cvV.value,
        tokenvalue: tvV.value,
        data: dateV.value,
        time: timeV.value,
        code: mrcod,
      };
      saves = JSON.parse(localStorage.cods);
      saves.push(data);
      localStorage.cods = JSON.stringify(saves);
      // resulr.textContent = `Admin : mohamed\nclient:${clintV.value}\ncard value:${cvV.value}\ntoken value:${tvV.value}\ndate:${dateV.value}\ntime${timeV.value}`;
    } else if (adminV.value === "231") {
      var mrcod = `MrXm${cvV.value}${tvV.value}${creatRandomString(10)}`;
      data = {
        admin: "manhl",
        client: clintV.value,
        cardvalue: cvV.value,
        tokenvalue: tvV.value,
        data: dateV.value,
        time: timeV.value,
        code: mrcod,
      };
      saves = JSON.parse(localStorage.cods);
      saves.push(data);
      localStorage.cods = JSON.stringify(saves);
      // resulr.textContent = `Admin : manhal\nclient:${clintV.value}\ncard value:${cvV.value}\ntoken value:${tvV.value}\ndate:${dateV.value}\ntime${timeV.value}`;
    } else {
      resulr.innerHTML = "معرف الآدمن خاطئ";
      alert("معرف الآدمن خاطئ");
    }
  } else {
    resulr.innerHTML = "أدخل البيانات";
    alert("أدخل البيانات");
  }
  showData();
}
// window.localStorage.clear();
