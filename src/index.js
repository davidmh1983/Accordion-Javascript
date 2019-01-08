import "./styles.scss";

var accordion = document.getElementsByTagName("dl");
accordionDisplay();

function accordionDisplay() {
  //Attach the event to all the buttons
  for (var j = 0; j < accordion.length; j++) {
    for (var i = 0; i < accordion[j].children.length; i = i + 2) {
      accordion[j].children[i].addEventListener("click", function() {
        var dt = this.nextElementSibling;
        //When click, put all in inactive
        for (var k = 0; k < accordion.length; k++) {
          for (var l = 0; l < accordion[k].children.length; l = l + 2) {
            //Only the ones from that same list that are active
            if (
              accordion[k].children[l].className === "active" &&
              this !== accordion[k].children[l] &&
              this.parentElement === accordion[k]
            ) {
              accordion[k].children[l].classList.toggle("active");
              accordion[k].children[l + 1].style.maxHeight = null;
              break;
            }
          }
        }
        //Swith the one clicked to active
        this.classList.toggle("active");
        if (dt.style.maxHeight) {
          dt.style.maxHeight = null;
        } else {
          dt.style.maxHeight = 1000 + dt.scrollHeight + "px";
        }
      });
    }
  }
}
