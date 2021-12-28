var shareBtn = document.getElementById('shareBtn');
var langBtn = document.getElementById('langSelectBtn');

document.getElementsByClassName("burger")[0].onclick = function(ob) {
  ob.stopPropagation();
  document.getElementsByClassName("drawer")[0].classList.add("on-toggle");	
};

window.addEventListener('click', function(e){   
  if (!(document.getElementsByClassName("drawer")[0].contains(e.target))){
    document.getElementsByClassName("drawer")[0].classList.remove("on-toggle");
  }
});

function closeNav(){
  document.getElementsByClassName("drawer")[0].classList.remove("on-toggle");
}

//Show Social Share ----------------------------------------
shareBtn.onclick = function()
{
  shareBox.classList.toggle('is-visible');
}

langBtn.onclick = function()
{
  langSelect.classList.toggle('is-visible');
}


function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
  document.getElementById("copyLink").innerHTML = "Coppied";
  console.log("Copped");
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });

  document.getElementById("copyLink").innerHTML = "Coppied";
  console.log("Copped");
}
