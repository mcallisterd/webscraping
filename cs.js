//Gets all of the CSC classes at Centre college, via
//http://centre.smartcatalogiq.com/2018-2019/Catalog/Course-Descriptions/CSC-Computer-Science

//Sets up D3 to be useable in browser
var s = document.createElement("script");
s.src= "https://d3js.org/d3.v5.js";
var body = document.getElementsByTagName("body")[0];
body.after(s);

//Grabs all of the list <a> elements which are in the div with id main
var list = d3.selectAll("div#main a").nodes();
//Prints them out
list.forEach(function(e){console.log(e.innerText);});
