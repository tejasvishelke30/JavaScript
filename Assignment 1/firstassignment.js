function myFirstJavaScript() 
{
 alert("greetingMsg"); 
var Username = document.getElementById("username").value; 
document.getElementById("heading").innerHTML = "Hello " + Username; 
document.getElementById("hide").setAttribute("style", "display: none;");
document.getElementById("btnhide").setAttribute("style", "display: none;");
}