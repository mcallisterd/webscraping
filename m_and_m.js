//Majors, Minors, and Programs of Study for Centre College, from
//https://www.centre.edu/majors-minors/

//Set up D3 to be useable in browser
var s = document.createElement("script");
s.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);

//Get all of the <a> elements from the page that are in the appropriate div
var all_links = d3.selectAll("div.fusion-builder-row.fusion-row a").nodes();
//And print them out
all_links.forEach(function(e){console.log(e.innerText)});
