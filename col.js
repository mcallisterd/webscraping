//Majors and minors at Columbia university, from
//https://www.college.columbia.edu/academics/programs


//Set s up D3 to be useable in browser
var s = document.createElement("script");
s.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);

//Gets all of the <li> elements which are children of the unordered list
//with class list-three-col
var list = d3.selectAll("ul.list-three-col li").nodes();
//Prints out the text
list.forEach(function(e){console.log(e.innerText)});
