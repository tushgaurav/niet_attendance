const hideBtn = document.getElementById("btn");

hideBtn.addEventListener("click", function () {
  if (hideBtn.innerText == "Show Page") {
    hideBtn.innerText = "Hide Page";
  } else {
    hideBtn.innerText = "Show Page";
  }

  const rockImage = document.getElementById("clicked");
  if (rockImage.style.display === "block") {
    rockImage.style.display = "none";
  } else {
    rockImage.style.display = "block";
  }
});
