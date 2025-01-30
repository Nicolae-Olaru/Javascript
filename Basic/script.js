
function show_Message() {
    document.getElementById("text-to-change").innerHTML = " You changed the text ";
    document.getElementById("text-to-change").style.fontSize="35px";
}
function show_Message_Back() {
    document.getElementById("text-to-change").innerHTML = " Are you ready to change me? ";
    document.getElementById("text-to-change").style.fontSize="16px";
}

function Disaper_Message() {
    document.getElementById("text-to-disapper").style.display = 'none';
}
function Apper_Message_Back() {
    document.getElementById("text-to-disapper").style.display = 'block';
    document.getElementById("text-to-disapper").innerHTML = " Now you see me again! ";
}