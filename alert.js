

var g=obtenerDato();
alert(' hello ' + obtenerDato() );

var t=$("#cform1").val();
alert("jquery es "+ t);

var xhr = new XMLHttpRequest();
//xhr.open("POST", "https://itunes.apple.com/search?movie", true);


xhr.open("POST", "http://test.secure.dev/ejemplo/ejemplo.php", true);


xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
     alert(xhr.responseText);
      var resp = JSON.parse(xhr.responseText);
     alert(resp.resultCount);
   // var resp = eval("(" + xhr.responseText + ")");
    //alert(resp);
     document.getElementsByName("dsrchkey")[0].value = xhr.responseText;
  }
}
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")  
	 	 
xhr.send("hola="+g);


function obtenerDato(){
	var g=document.getElementById('cform1').value;
	return g;
}