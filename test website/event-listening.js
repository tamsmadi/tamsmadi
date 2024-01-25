window.addEventListener("load", function greetings() {
  const effect = document.getElementsByTagName("a");
  const button = document.querySelector("button");
  alert("hello my name is thamer");
  for (var j = 0; j < effect.length; j++) {
    effect[j].addEventListener("mousemove", (event) => {
      event.target.style.backgroundColor = "grey";
    });

    effect[j].addEventListener("mouseleave", (event) => {
      event.target.style.backgroundColor = "";
    });
  }

  button.addEventListener("click", function () {
    button.style.width = `${button.offsetWidth * 2}px`;
    button.style.height = `${button.offsetHeight * 2}px`;
  });
});
