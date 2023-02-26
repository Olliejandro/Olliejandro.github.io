var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {

var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
// Let us stop the propagation of events
event.stopPropagation();
  });
  addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.backgroundColor = color.value;
    document.body.appendChild(dot);
  });

var color = document.getElementById("color");
      color.addEventListener("input", function(event) {
        var dots = document.getElementsByClassName("dot");
        for (var i = 0; i < dots.length; i++) {
          dots[i].style.backgroundColor = color.value;
        }
      });
