let th_icon = document.getElementById("theme_icon");
let th_msg = document.getElementById("theme_msg");
let th_button = document.getElementById("theme_button");
let theme=JSON.parse(localStorage.getItem("darkTheme"));
if(theme==null){
  theme=localStorage.setItem("darkTheme",false);
}
function load_style() {
  if (!theme) {
    th_icon.innerHTML = `<i class="fas fa-moon"></i>`;
    th_msg.innerHTML = "Dark";
    th_button.style.backgroundColor="black";
    th_button.style.color="white";
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
    th_button.style.backgroundColor="black";
    th_button.style.color="white";
    localStorage.setItem("darkTheme",false);
    theme=JSON.parse(localStorage.getItem("darkTheme"));
    console.log(localStorage.getItem("darkTheme"));
    // changeToLight();
    change_light();
  } else {
    th_icon.innerHTML = `<i class="fas fa-sun"></i>`;
    th_msg.innerHTML = "Light";
    th_button.style.backgroundColor = "white";
    th_button.style.color = "black";
    localStorage.setItem("darkTheme",true);
    theme=JSON.parse(localStorage.getItem("darkTheme"));
    console.log(localStorage.getItem("darkTheme"));
    // changeToDark();
    change_dark();
  }
}
function change_light(){
  document.querySelector(".navbar").style.backgroundColor="#79b4b7";
  document.getElementById("back").style.backgroundImage="url(./assets/back2.jpg)";
  document.getElementById("hd_text").style.color="black";
  let skills_i=document.querySelectorAll(".skill_card i");
  let title_inner=document.querySelectorAll(".title");
  let title=document.querySelectorAll("h1 > i");
  document.getElementsByTagName("body")[0].style.backgroundColor="white";
  for(let i=0;i<skills_i.length;i++)
    skills_i[i].style.color="#79b4b7";
  
  for(let i=0;i<title_inner.length;i++)
    title_inner[i].style.color="black";

    for(let i=0;i<title.length;i++)
      title[i].style.color="#79b4b7";


}

function change_dark(){
  document.querySelector(".navbar").style.backgroundColor="#565656";
  document.getElementById("back").style.backgroundImage="url(./assets/dev1.jpeg)";
  document.getElementById("hd_text").style.color="white";
  let skills_i=document.querySelectorAll(".skill_card i");
  let title_inner=document.querySelectorAll(".title");
  let title=document.querySelectorAll("h1 > i");
  document.getElementsByTagName("body")[0].style.backgroundColor="rgba(5, 17, 32,0.4)";
  for(let i=0;i<skills_i.length;i++)
    skills_i[i].style.color="#565656";

  for(let i=0;i<title_inner.length;i++)
    title_inner[i].style.color="white";

  for(let i=0;i<title.length;i++)
    title[i].style.color="white";



}
// function changeToLight(){
//     document.querySelector(".navbar").style.backgroundColor="#79b4b7";
//     document.getElementById("back").style.backgroundImage="url(./assets/back2.jpg)";
//     document.getElementById("hd_text").style.color="black";
//     let skills_i=document.querySelectorAll(".skill_card i");
//     let title_inner=document.querySelectorAll(".title");
//     let title=document.querySelectorAll("h1 > i");
//     document.getElementsByTagName("body")[0].style.backgroundColor="white";
////     document.getElementById("my_msg").style.color="black";
////     let labels=document.querySelectorAll(".personal_data label");
////     document.getElementsByClassName("submit")[0].style.backgroundColor="#87bcbe";
////     document.getElementsByClassName("submit")[0].style.color="white";
//     for(let i=0;i<skills_i.length;i++)
//         skills_i[i].style.color="#79b4b7";
    
//     for(let i=0;i<title_inner.length;i++)
//         title_inner[i].style.color="black";

////     for(let i=0;i<labels.length;i++)
////         labels[i].style.color="black";
    
////     for(let i=0;i<title.length;i++)
////         title[i].style.color="#79b4b7";
// }

// function changeToDark(){
//     document.querySelector(".navbar").style.backgroundColor="#565656";
//     document.getElementById("back").style.backgroundImage="url(./assets/dev1.jpeg)";
//     document.getElementById("hd_text").style.color="white";
//     let skills_i=document.querySelectorAll(".skill_card i");
//     let title_inner=document.querySelectorAll(".title");
//     let title=document.querySelectorAll("h1 > i");
//     document.getElementsByTagName("body")[0].style.backgroundColor="rgba(5, 17, 32,0.4)";
//     let labels=document.querySelectorAll(".personal_data label");
//     document.getElementById("my_msg").style.color="white";
//     document.getElementsByClassName("submit")[0].style.backgroundColor="white";
//     document.getElementsByClassName("submit")[0].style.color="black";
//     for(let i=0;i<skills_i.length;i++)
//         skills_i[i].style.color="#565656";

//     for(let i=0;i<title_inner.length;i++)
//         title_inner[i].style.color="white";

//     for(let i=0;i<labels.length;i++)
//         labels[i].style.color="white";

//     for(let i=0;i<title.length;i++)
//         title[i].style.color="white";
// }