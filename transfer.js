function transfer() {
    var n = document.getElementById('name').value;
    var e = parseInt(document.getElementById("moneyy").value);
    var fro= document.getElementById('from').value;
    var check3= fro+'@gmail.com'
    var check4= document.getElementById('exampleDtaList2').value;
    var check1= n+'@gmail.com';
    var check2= document.getElementById('exampleDtaList').value;
    if (check1==check2 && check3==check4) {
      var f = parseInt(document.getElementById(n).innerText);
      var g = e+f;
      var froo = parseInt(document.getElementById(fro).innerText);
      from= froo-e;
      document.getElementById(n).innerHTML= g;
      document.getElementById(fro).innerHTML= from;
      alert("Your Transaction was Successful");
      var j = document.getElementById('hist').innerText;
      var gg=' '
      var main = " Money send was from <b>" + fro+ "</b> to <b>" + n +"</b>. The amount that was transferred is <b>"+e+ "</b>. <br>";
      var hot= j +'<br> '+ main;
      document.getElementById('hist').innerHTML= hot;
    }
    else {
      alert(" Name And Email-id Doesn't match ");
    }
  
  }