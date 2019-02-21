//All of the majors, minors, and programs of study at William and Mary, from
//https://www.wm.edu/majorsminors/

//Sets up D3 to be useable in browser
var s = document.createElement("script");
s.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);

//Grabs all of the <a> elements which are children of the div with class user_content
var list = d3.selectAll("div.user_content a").nodes();
//Prints them out
list.forEach(function(e){console.log(e.innerText)});
