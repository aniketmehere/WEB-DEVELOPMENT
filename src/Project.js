function(){

    // Add Close Button at the end of every LI Element
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    // Hide the current list item on clicking close button
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    // Add checked class when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
        }
    });
    // Create a new list element
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("listInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("listInput").value = "";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }



}