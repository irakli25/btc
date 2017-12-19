function myalert()
{
document.getElementById("alert").style.display="block";
}

function myalert2()
{
document.getElementById("alertin").style.display="block";
}

function menu()
{
document.getElementById("mobile_list").style.width="160px";
event.cancelBubble = true;
}


// window click
window.onclick = function(event) {
    if (event.target == document.getElementById("id01")) {
        document.getElementById("id01").style.display = "none";
    }
}
function closemenu() {
  if(document.getElementById("mobile_list").style.width == "160px" )
  {
  document.getElementById("mobile_list").style.width = "0";}
}
