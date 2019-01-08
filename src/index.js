import "./styles.scss";

document.getElementById("app").innerHTML = `
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
`;

var accordion = document.getElementsByTagName("dl");
accordionDisplay();

function accordionDisplay() {
  for (var j = 0; j < accordion.length; j++) {
    for (var i = 0; i < accordion[j].children.length; i = i + 2) {
      accordion[j].children[i].addEventListener("click", function() {
        var dt = this.nextElementSibling;
        for (var k = 0; k < accordion.length; k++) {
          for (var l = 0; l < accordion[k].children.length; l = l + 2) {
            if (
              accordion[k].children[l].className === "active" &&
              this !== accordion[k].children[l]
            ) {
              accordion[k].children[l].className = "";
              accordion[k].children[l + 1].style.maxHeight = null;
              break;
            }
          }
        }
        this.classList.toggle("active");
        if (dt.style.maxHeight) {
          dt.style.maxHeight = null;
        } else {
          dt.style.maxHeight = dt.scrollHeight + "px";
          //dt.style.maxHeight = "100%";
        }
      });
    }
  }
}
