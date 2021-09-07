function attachments() 
{ 
var attach = '<lable for=Attach>Attachment: </label><input type="file" id="Attach" ><br><button type="button" id="btnattach" onclick="attachments()">Add More Attachment</Button>';
document.getElementById("repeat").innerHTML += attach;

}

function send()
{
var Reciver = document.getElementById("Reciver").value;
document.getElementById("hto").innerHTML = Reciver; 

var Sub = document.getElementById("sub").value;
document.getElementById("heading").innerHTML = Sub; 
document.getElementById("dateTime").innerHTML = Date();
var Msg = document.getElementById("msg").value;
document.getElementById("mssg").innerHTML = Msg; 
document.getElementById("hide").setAttribute("style", "display: none;");
document.getElementById("btnsend").setAttribute("style", "display: none;");
}