
//Left and Right Panel
document.getElementById('toggle').
addEventListener('click', function() { 
  leftPanel.classList.toggle('leftPanel');
  exitBtnId.classList.toggle('exitBtnId');
  trenId.classList.toggle('trenId');
  testId.classList.toggle('testId');
  fingersColId.classList.toggle('fingersColId');
  helpBox.classList.toggle('helpBox');
})

//Help Show
var help = document.getElementById("help");
help.onclick = () =>{
  document.getElementById("container").style.display="flex";
}

//Help Close
var closeHelp = document.getElementById("closeHelp");
closeHelp.onclick = ()=>{
  document.getElementById("container").style.display="none";
}

function selectKey(){
  //row 1
  var KeyEE = document.getElementById("KeyEE");
  var Key1 = document.getElementById("Key1");
  var Key2 = document.getElementById("Key2");
  var Key3 = document.getElementById("Key3");
  var Key4 = document.getElementById("Key4");
  var Key5 = document.getElementById("Key5");
  var Key6 = document.getElementById("Key6");
  var Key7 = document.getElementById("Key7");
  var Key8 = document.getElementById("Key8");
  var Key9 = document.getElementById("Key9");
  var Key0 = document.getElementById("Key0");
  var KeyMinus = document.getElementById("KeyMinus");
  var KeyRavno = document.getElementById("KeyRavno");
  //row 2
  var KeyQ = document.getElementById("KeyQ");
  var KeyW = document.getElementById("KeyW");
  var KeyE = document.getElementById("KeyE");
  var KeyR = document.getElementById("KeyR");
  var KeyT = document.getElementById("KeyT");
  var KeyY = document.getElementById("KeyY");
  var KeyU = document.getElementById("KeyU");
  var KeyI = document.getElementById("KeyI");
  var KeyO = document.getElementById("KeyO");
  var KeyP = document.getElementById("KeyP");
  var KeyXX = document.getElementById("KeyXX");
  var KeyTdZn = document.getElementById("KeyTdZn");
  //row 3
  var KeyA = document.getElementById("KeyA");
  var KeyS = document.getElementById("KeyS");
  var KeyD = document.getElementById("KeyD");
  var KeyF = document.getElementById("KeyF");
  var KeyG = document.getElementById("KeyG");
  var KeyH = document.getElementById("KeyH");
  var KeyJ = document.getElementById("KeyJ");
  var KeyK = document.getElementById("KeyK");
  var KeyL = document.getElementById("KeyL");
  var KeyDJ = document.getElementById("KeyDJ");
  var KeyEEE = document.getElementById("KeyEEE");
  //row 4
  var KeyZ = document.getElementById("KeyZ");
  var KeyX = document.getElementById("KeyX");
  var KeyC = document.getElementById("KeyC");
  var KeyV = document.getElementById("KeyV");
  var KeyB = document.getElementById("KeyB");
  var KeyN = document.getElementById("KeyN");
  var KeyM = document.getElementById("KeKeyMy");
  var KeyBB = document.getElementById("KeyBB");
  var KeyQU = document.getElementById("KeyQU");
  var KeyDot = document.getElementById("KeyDot");
}


var t=3000,seconds,minutes;
//Преобразование миллисекунд
function msToTime(duration) {
 seconds = Math.floor((duration / 1000) % 60);
 minutes = Math.floor((duration / (1000 * 60)) % 60);

 minutes = (minutes < 10) ? "0" + minutes : minutes;
 seconds = (seconds < 10) ? "0" + seconds : seconds;
}

//Функция таймера
var setInter;
function timeEnter(){ 
  
  setInter = setTimeout(timeEnter, 1000); 
 
 msToTime(t);
 t+=1000;
} 

speedT = document.getElementById('speedType');
znMin = document.getElementById('znMin');

//Вывод скорости печати
function speedType(){
  var speedRes = ((entSim-err) / (minutes+seconds)*100).toFixed(0);
  if(speedRes > 0 && speedRes!=Infinity) {speedT.innerHTML= speedRes;znMin.innerHTML = "зн/мин";}
  else speedT.innerHTML="0";
  
}

var setInter2;
function setInt2(){  
 setInter2=setInterval(speedType, 1000); 

}

var str;
var str_in = document.getElementById("str_in");


document.getElementById('les_1').onclick=()=>{saveLoadLesson(1);}
document.getElementById('les_2').onclick=()=>{saveLoadLesson(2);}
document.getElementById('les_3').onclick=()=>{saveLoadLesson(3);}
document.getElementById('les_4').onclick=()=>{saveLoadLesson(4);}
document.getElementById('les_5').onclick=()=>{saveLoadLesson(5);}
document.getElementById('testId').onclick=()=>{saveLoadLesson(6);}
document.getElementById('trenId').onclick=()=>{saveLoadLesson(7);}

function saveLoadLesson(numLess){
  var seriaNumLess = JSON.stringify(numLess);
  localStorage.setItem('numLess', seriaNumLess);

 location.reload();

}

var parseNumLess;
function loadLesson(){
   parseNumLess = JSON.parse(localStorage.getItem('numLess'));

  

  switch(parseNumLess){
    case 1: str="йцуу фф ыы вв аа оо лл дд жж ажод вода вода выфо ллвд доал вода"; strLess(str); break;
    case 2: str= "пп рр пп рр дар дар паж паж долл лврв рлжв дпор правда доллар"; strLess(str); break;
    case 3: str="кк гг кк гг кага лпкв папг гыыг лодка гора копка кадр проволока рок"; strLess(str); break;
    case 4: str="уу шш уу шш фаып лууш вжул павп ушка кош двугодок шварк шарк раул"; strLess(str); break;
    case 5: str="параграф выплавок пароварка главка проводок волков подлодка подправка кова огорожа выплавка гора пак"; strLess(str); break;
    case 6: str="напечатай этот текст и узнай свою скорость набора текста"; strLess(str); break;
    case 7: str="рыбный текст это текст служащий чтоб временно наполнить макет в производстве веб сайтов пока финальный текст еще не создан рыбный текст также известен как текст заполнитель или же текст наполнитель"; strLess(str); break;
  }

  function strLess(str){
    str_in.innerHTML = str;
    var arr = str.split('');  
    returnLightKey(); 
    lightKey(arr); 
    enterText(arr);
  } 

}     
  
          
var obj = {
  49:Key1,
  50:Key2,
  51:Key3,
  52:Key4,
  53:Key5,
  54:Key6,
  55:Key7,
  56:Key8,
  57:Key9,
  48:Key0,
  45:KeyMinus,
  61:KeyRavno,

  1081:KeyQ,
  1094:KeyW,
  1091:KeyE,
  1082:KeyR,
  1077:KeyT,
  1085:KeyY,
  1075:KeyU,
  1096:KeyI,
  1097:KeyO,
  1079:KeyP,
  1093:KeyXX,
  1098:KeyTdZn,

  1092:KeyA,
  1099:KeyS,
  1074:KeyD,
  1072:KeyF,
  1087:KeyG,
  1088:KeyH,
  1086:KeyJ,
  1083:KeyK,
  1076:KeyL,
  1078:KeyDJ,
  1101:KeyEEE,

  1133:KeyZ,
  1095:KeyX,
  1089:KeyC,
  1084:KeyV,
  1080:KeyB,
  1090:KeyN,
  1100:KeyM,
  1073:KeyBB,
  1102:KeyQU,
  46:KeyDot,
  32:KeySpace
  }

  //Подсветка клавиш
var r=0;
function lightKey(arr){

  if(entSim===0)
  var oneKey=arr[0].charCodeAt();

  if(entSim>0 && arr.length!==1)
    var oneKey=arr[1].charCodeAt();
    else var oneKey=arr[0].charCodeAt();

  if(obj[oneKey]==KeySpace) 
        obj[oneKey].classList.add("KeySpaceClass_2");

  obj[oneKey].classList.add("key2_2");

  r++;
  return;
}

//Подсветка клавиши при неверном нажатии
function errLightKey(arr){
 var oneKey=arr[0].charCodeAt();

 if(obj[oneKey]==KeySpace) 
 obj[oneKey].classList.add("KeySpaceClass_3");
else
 obj[oneKey].classList.add("key2_3");
 
  return;
}

//Убирается подсветка клавиши
function returnLightKey(){
  var keys = [];
 for (var key in obj)       
     if (obj.hasOwnProperty(key)) keys.push(key);
 
for (var i=0; i<keys.length; i++) { 
   obj[keys[i]].classList.remove("KeySpaceClass_2");
   obj[keys[i]].classList.remove("KeySpaceClass_3");
   obj[keys[i]].classList.remove("key2_2");
   obj[keys[i]].classList.remove("key2_3");
  }
}


var err=0, entSim=0,timeEntr=false;
var enterTextStop=false;


// Main функция
function enterText(arr){   

document.addEventListener("keypress",function(keypress){ 
 entSim++;

 returnLightKey();

 if(entSim == 1 ) timeEnter();
  setInt2();

  var kCode = arr[0].charCodeAt();
  
  if(keypress.keyCode === kCode){

    if(kCode === 32){
      if(parseNumLess===7){
        var val = (parseInt(document.getElementById('fields').style.left) || 200) - 10 ;
      document.getElementById('fields').style.left = val + 'px';
      }
      else{
        var val = (parseInt(document.getElementById('fields').style.left) || 200) - 3 ;
      document.getElementById('fields').style.left = val + 'px';
      }
    
    }
    else{
      if(parseNumLess===7){
        var val = (parseInt(document.getElementById('fields').style.left) || 200) + 3 ;
      document.getElementById('fields').style.left = val + 'px';
      }
      else{
        var val = (parseInt(document.getElementById('fields').style.left) || 200) + 6 ;
      document.getElementById('fields').style.left = val + 'px';
      }
      
    }

    lightKey(arr);
    arr.shift();

    str = arr.join('');
    str_in.innerHTML=str;

    if(arr.length === 0){
      returnLightKey();
      result();
    } 
  }

  else {
    errLightKey(arr);
    err++;
    document.getElementById("colErr").innerHTML=err;
  }
  
 });
 }
 
  // pop_up  результат
function result(){
  
  document.getElementById('conteinAlRes').style.display="flex";
  document.getElementById('zMin').innerHTML=((entSim-err) / (minutes+seconds)*100).toFixed(0) + " зн/мин"
  document.getElementById('colTypesAll').innerHTML= entSim;
  document.getElementById('colTypesTr').innerHTML=entSim-err;
  document.getElementById('colTypesFl').innerHTML=err;
  document.getElementById('acurate').innerHTML=(((entSim-err)/entSim)*100).toFixed(0) + " %";
  document.getElementById('znMin').style.display="none";
  clearTimeout(setInter);
  clearInterval(setInter2);
  document.getElementById('fields').style.left="200px";
  
  document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btnOk").click();
    }
  document.getElementById('speedType').innerHTML='0';
  document.getElementById('colErr').innerHTML='0';
});

return;
}


// Кнопка ОК (pop_up)
btnOk.onclick=()=>{
  document.getElementById('conteinAlRes').style.display="none";
}

// Кнопка Повторить (pop_up)
btnRepeat.onclick=()=>{
 document.getElementById('conteinAlRes').style.display="none";
 location.reload();

}

window.onload=()=>{
  loadLesson();    
}
