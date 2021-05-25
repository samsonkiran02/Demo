				/* copyright */
				/* Author: Samson Kiran */
				/* for chat to me */
				
				
				
		 		/* for Popup box 1 */
function openpopupbox1() {
     document.getElementById("click to open or close popup box 1").style.display = "block";
}

function closepopupbox1() {
     document.getElementById("click to open or close popup box 1").style.display = "none";
}
     /* for Popup box 1 {end} */

				/* for Popup box 2 */
function openpopupbox2() {
  document.getElementById("click to open or close popup box 2").style.display = "block";
}

function closepopupbox2() {
  document.getElementById("click to open or close popup box 2").style.display = "none";
}
     /* for Popup box 2 {end} */
     
    	/* for Popup box 3 $ for codepen page */
function openpopupbox3() {
     document.getElementById("click to open or close popup box 3").style.display = "block";
}

function closepopupbox3() {
     document.getElementById("click to open or close popup box 3").style.display = "none";
}
     /* for Popup box 3 $ for codepen page {end} */
  
     		/* for Popup box 4 $ for github page */
function openpopupbox4() {
     document.getElementById("click to open or close popup box 4").style.display = "block";
}

function closepopupbox4() {
     document.getElementById("click to open or close popup box 4").style.display = "none";
}
     /* for Popup box 4 $ for github page {end} */

     /* for codepen password starts */
function checkPassword1() {
   var password = document.getElementById("passwordBox1");
   var passwordText = password.value;
   if(passwordText == " cp p sk. ") {
    return true;
   }
   alert("Incorrect password!");
   return false;
} 
     /* for codepen password end */

     /* for github password starts */
function checkPassword2() {
   var password = document.getElementById("passwordBox2");
   var passwordText = password.value;
   if(passwordText == " gh/sk p sk02. ") {
    return true;
   }
   alert("Incorrect password!");
   return false;
}
     /* for github password end */
