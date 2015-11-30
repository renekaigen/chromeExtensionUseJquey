var rene="sss";

chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
   // chrome.tabs.executeScript(null, { file: "alert.js" });
});

function hello() {
//rene=document.getElementById('clickme').value;



  chrome.tabs.executeScript({
    file: 'alert.js'

  }); 
}




document.getElementById('clickme').addEventListener('click', hello);