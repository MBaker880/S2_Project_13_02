"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Mackenzie Baker
   Date:   3.26.2019
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
/* ===================================================================== */

// Loading the init function once the page is loaded
window.onload = init;

// Declaring the init fucntion to bring up the calculator when page is pulled up
function init() {
      // Calling hthe calcButtoms class to pull up when init function is run
      var calcButtons = document.getElementsByClassName("calcButtons");
      for (var i = 0; i < calcButtons; i++){
            calcButtons[i].onclick = buttonClick;
      }
      document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

// Calling the buttonClick function to change what appears in the calculator 
function buttonClick(e){
      var calcValue = document.getElementById("calcWindow");
}





/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}