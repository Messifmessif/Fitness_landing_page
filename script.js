const menuBotton = document.querySelector(".fa-bars");
const navigation = document.querySelector(".nav-links");

menuBotton.addEventListener("click", function () {
  //ADDED CLASSES FOR NAVIGATION
  navigation.style.transform = "translateX(0)";
  console.log("clicked");
});
