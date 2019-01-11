function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var button1 = document.getElementById('delete');

    function handleSubmit() {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    function removeMesseges() {
        socket.emit("delete messeges");
    }

    button.onclick = handleSubmit;
    button1.onclick = removeMesseges;



    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }


    function deleteFromDom() {
        var pTags = document.getElementsByTagName("p");
        for (var i in pTags) {
            if (pTags.length > 0) {
                chatDiv.removeChild(pTags[0]);
            }
        }
    }

    socket.on('display message', handleMessage);
    socket.on('remove', deleteFromDom);


} // main closing bracket

window.onload = main;
