var rene="sss";

//trayendo el script de jquery
chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
   // chrome.tabs.executeScript(null, { file: "alert.js" });


   	$("#rb").val("asd");

  
   
});

function eto(){
	//chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
   	$("#rb").val("etooo");  
//});
}

 

function hello() {
	
//rene=document.getElementById('clickme').value;
  chrome.tabs.executeScript({
    file: 'alert.js'

  }); 
}




document.getElementById('clickme').addEventListener('click', hello);
document.getElementById('ejemplo').addEventListener('click', eto);