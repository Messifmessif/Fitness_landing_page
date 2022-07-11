const menuBotton = document.querySelector(".fa-bars");
const navigation = document.querySelector(".link-container");
const close = document.querySelector(".icon-close");

menuBotton.addEventListener("click", function () {
  //ADDED CLASSES FOR NAVIGATION
  navigation.style.transform = "translateX(0)";
  console.log("clicked");
});
close.addEventListener("click", function () {
  navigation.style.transform = "translateX(-100vh)";
});
