let th_icon = document.getElementById("theme_icon");
let th_msg = document.getElementById("theme_msg");
let th_button = document.getElementById("theme_button");
let theme = JSON.parse(localStorage.getItem("darkTheme"));
if (theme == null) {
  theme = localStorage.setItem("darkTheme", false);
}
function load_style() {
  if (!theme) {
    th_icon.innerHTML = `<i class="fas fa-moon"></i>`;
    th_msg.innerHTML = "Dark";
    th_button.style.backgroundColor = "black";
    th_button.style.color = "white";
    change_light();
    console.log(localStorage.getItem("darkTheme"));
  } else {
    th_icon.innerHTML = `<i class="fas fa-sun"></i>`;
    th_msg.innerHTML = "Light";
    th_button.style.backgroundColor = "white";
    th_button.style.color = "black";
    change_dark();
    console.log(localStorage.getItem("darkTheme"));
  }
}
function change_theme() {
  if (theme) {
    th_icon.innerHTML = `<i class="fas fa-moon"></i>`;
    th_msg.innerHTML = "Dark";
    th_button.style.backgroundColor = "black";
    th_button.style.color = "white";
    localStorage.setItem("darkTheme", false);
    theme = JSON.parse(localStorage.getItem("darkTheme"));
    console.log(localStorage.getItem("darkTheme"));
    // changeToLight();
    change_light();
  } else {
    th_icon.innerHTML = `<i class="fas fa-sun"></i>`;
    th_msg.innerHTML = "Light";
    th_button.style.backgroundColor = "white";
    th_button.style.color = "black";
    localStorage.setItem("darkTheme", true);
    theme = JSON.parse(localStorage.getItem("darkTheme"));
    console.log(localStorage.getItem("darkTheme"));
    // changeToDark();
    change_dark();
  }
}
function change_light() {
  document.querySelector(".navbar").style.backgroundColor = "#79b4b7";
  document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  let title_inner = document.querySelectorAll(".title");
  let title = document.querySelectorAll("h1 > i");
  let reviews = document.querySelectorAll(".review");
  let reviews_p = document.querySelectorAll(".review p");

  for (let i = 0; i < title_inner.length; i++)
    title_inner[i].style.color = "black";

  for (let i = 0; i < title.length; i++)
    title[i].style.color = "#79b4b7";

  for(let i=0;i<reviews.length;i++){
    reviews[i].style.backgroundColor="white";
    reviews[i].style.color="black";
}

for(let i=0;i<reviews_p.length;i++){
    reviews_p[i].style.color="#9d9d9d"
}
}
function change_dark() {
  document.querySelector(".navbar").style.backgroundColor = "#565656";
  document.getElementsByTagName("body")[0].style.backgroundColor =
    "rgba(5, 17, 32,0.4)";
  let title_inner = document.querySelectorAll(".title");
  let title = document.querySelectorAll("h1 > i");
  let reviews = document.querySelectorAll(".review");
  let reviews_p = document.querySelectorAll(".review p");

  for (let i = 0; i < title_inner.length; i++)
    title_inner[i].style.color = "white";

  for (let i = 0; i < title.length; i++) title[i].style.color = "white";

  for(let i=0;i<reviews.length;i++){
      reviews[i].style.backgroundColor="#d9d7d7";
      reviews[i].style.color="black";
  }

  for(let i=0;i<reviews_p.length;i++){
      reviews_p[i].style.color="black"
  }


}
