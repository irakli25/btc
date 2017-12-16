function myalert()
{
document.getElementById("alert").style.display="block";
}

function myalert2()
{
document.getElementById("alertin").style.display="block";
}




// window click
window.onclick = function(event) {
    if (event.target == document.getElementById("id01")) {
        document.getElementById("id01").style.display = "none";
    }
}
