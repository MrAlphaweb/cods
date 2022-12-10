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
function done() {
  if (newcode.length > 0) {
    saves = JSON.parse(localStorage.cods);
    saves.unshift(newcode[0]);
    localStorage.cods = JSON.stringify(saves);
    resulr.innerHTML = "البيانات محفوظة في المخزن";
    window.localStorage.removeItem("new");
    newcode = [];
    sdata = {};
    localStorage.new = JSON.stringify(newcode);
  } else {
    resulr.innerHTML = "البيانات غير كاملة";
  }
}
function delet() {
  if (newcode.length > 0) {
    window.localStorage.removeItem("new");
    resulr.innerHTML = "تم حذف الكود";
    newcode = [];
    localStorage.new = JSON.stringify(newcode);
  } else {
    resulr.innerHTML = "البيانات غير كاملة";
  }
}
function showData() {
  newcode = JSON.parse(localStorage.new);
  resulr.innerHTML = "";
  resulr.innerHTML = `${resulr.innerHTML}admin: ${newcode[0].admin}<br>client: ${newcode[0].client}<br>card value: ${newcode[0].cardvalue}<br>token value: ${newcode[0].tokenvalue}<br>date: ${newcode[0].data}<br>time: ${newcode[0].time}<br>code: ${newcode[0].code}<br>position${newcode[0].position}`;
}
// ___________________________________
function erise() {
  // var serchv = document.getElementById("codviryfy");
  saves = JSON.parse(localStorage.cods);
  var nums = saves.map((object) => object.code).indexOf(serchv.value);
  saves.splice(nums);
  out2v.innerHTML = "تم حذف الكود من المخزن";
  localStorage.cods = JSON.stringify(saves);
}
function usecode() {
  saves = JSON.parse(localStorage.cods);
  var nums = saves.map((object) => object.code).indexOf(serchv.value);
  saves[nums].position = "مستخدم سابقا";
  // out2v.innerHTML = "تم حذف الكود من المخزن";
  out2v.innerHTML = "";
  out2v.innerHTML = `${out2v.innerHTML}admin: ${saves[nums].admin}<br>client: ${saves[nums].client}<br>card value: ${saves[nums].cardvalue}<br>token value: ${saves[nums].tokenvalue}<br>date: ${saves[nums].data}<br>time: ${saves[nums].time}<br>code: ${saves[nums].code}<br>position${saves[nums].position}`;
  localStorage.cods = JSON.stringify(saves);
}
// --------------------------------
// عرض كل البيانات
function showalldata() {
  var out3 = document.getElementById("allcods2");
  saves = JSON.parse(localStorage.cods);
  out3.innerHTML = "";
  for (let i = 0; i < saves.length; i++) {
    out3.innerHTML = `<br>${out3.innerHTML}admin: ${saves[i].admin}<br>client: ${saves[i].client}<br>card value: ${saves[i].cardvalue}<br>token value: ${saves[i].tokenvalue}<br>date: ${saves[i].data}<br>time: ${saves[i].time}<br>code: ${saves[i].code}<br>position${saves[i].position}<br>_________________<br>`;
  }
}

// console.log(out3);
var resulr = document.getElementById("out");
dateV = document.getElementById("date");
timeV = document.getElementById("time");
adminV = document.getElementById("admin");
clintV = document.getElementById("client");
cvV = document.getElementById("cv");
tvV = document.getElementById("tv");
gbtn = document.getElementById("gbtn");
var serchv = document.getElementById("codviryfy");
var out2v = document.getElementById("out2");
var saves = [];
var newcode = [];
var data = {};

function main() {
  if (localStorage.cods == undefined) {
    localStorage.new = JSON.stringify(newcode);
    localStorage.cods = JSON.stringify(saves);
  } else {
    showalldata();
  }
  showData();
}
function genratCode() {
  showalldata();
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
        position: "غير مستخدم",
      };
      newcode = JSON.parse(localStorage.new);
      newcode.push(data);
      localStorage.new = JSON.stringify(newcode);
      newcode = [];
      showData();
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
        position: "غير مستخدم",
      };
      newcode = JSON.parse(localStorage.new);
      newcode.push(data);
      localStorage.new = JSON.stringify(newcode);
      newcode = [];
      showData();
    } else {
      resulr.innerHTML = "معرف الآدمن خاطئ";
      alert("معرف الآدمن خاطئ");
    }
  } else {
    resulr.innerHTML = "أدخل البيانات";
    alert("أدخل البيانات");
  }
}
function veryfi() {
  if (localStorage.cods.includes(serchv.value)) {
    console.log(serchv.value);
    saves = JSON.parse(localStorage.cods);
    var nums = saves.map((object) => object.code).indexOf(serchv.value);
    out2v.innerHTML = "";
    out2v.innerHTML = `${out2v.innerHTML}admin: ${saves[nums].admin}<br>client: ${saves[nums].client}<br>card value: ${saves[nums].cardvalue}<br>token value: ${saves[nums].tokenvalue}<br>date: ${saves[nums].data}<br>time: ${saves[nums].time}<br>code: ${saves[nums].code}<br>position${saves[nums].position}`;
    localStorage.cods = JSON.stringify(saves);
  } else {
    console.log(serchv.value);
    out2v.innerHTML = "";
    out2v.innerHTML = "الكود غير موجود";
    alert("الكود غير موجود");
  }
}
// window.localStorage.clear();
// saves = JSON.parse(localStorage.cods);
