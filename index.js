
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


//Select keys
var KeyQ = document.getElementById("KeyQ");




//Light key
function lightKey(str){
  var arr = str.split('');
  var oneKey=arr[0].charCodeAt();

  switch(oneKey){
    case 1081:KeyQ.className = "key4_4"; break;
    case 1062:KeyW.className = "key3_3"; break;
  }

  return;
}



//Input
  var r=0,x,erros=0;
  var str_in = document.getElementById("str_in"); 
  var str = "йц"
  str_in.innerHTML=str;

  function enterText(){
  


/*
    var str = "й"
    str_in.innerHTML=str;      
    var arr = str.split('');
    var oneKey=arr[0].charCodeAt();*/
    lightKey(str);
    
    document.addEventListener("keypress",function(keyPressed){
      enterText()
      var arr = str.split('');
      console.log(arr.length);

      var arr = str.split('');///

    if(keyPressed.keyCode===arr[0].charCodeAt()){  
        var q = arr.shift();
        x = q.charCodeAt();
        console.log(q);
        
        

        str = arr.join('');
        str_in.innerHTML=str;
        
        
      
        if(arr.length <= 0 ) result(); 
        r++; 
        //typeKey(x);

      }
      else {
        erros++; 
        //console.log(erros);
        document.getElementById("colErr").innerHTML=erros; 
      }
  });
}


function result(){
  alert(r+1);
}

window.onload=()=>{
  enterText();
}