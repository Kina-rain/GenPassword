//  symbols link www.owasp.org/index.php/Password_special_characters and string of alphabet and numbers
/*  Generate a Password function */
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var symb = "!#$%&*+-/:<=>?@~";

/*  function to generate password -Getting #value from User input box  */
function genPassword() {
  var pwdlength = document.getElementById("passwordLength").value;
  var newPwdString = capChar;
  var genPassword = "";  /*  empty string for genPwd return */

  if (document.getElementById("specialChar").checked) {
    newPwdString += symb; /* Check box for symbols and += add on of symbols */
  }

  /*  Code from Idea from "Easyprogramming.net" password generator */
  /*  w3school JS Globel parseInt */
  for (var i = 0; i < parseInt(pwdlength); i++) {
    genPassword += newPwdString.charAt(Math.floor(Math.random() * newPwdString.length));
    /*  += adds on numbers/ letter to end of the genPassword string */
  }
    /*  adds password to HTML label  */
  document.getElementById("pwdCopy").innerHTML = genPassword;
}
/*  Code Idea from "Easyprogramming.net" to generate password ??  */

/* stackoverflow has copy to clipboard code -easy peasy & works*/
function copyData() {
  var copyText = document.getElementById("pwdCopy");
  navigator.clipboard.writeText(copyText.innerHTML);
}
/*  copy password to the clipboard. User can now paste anywhere.  */
