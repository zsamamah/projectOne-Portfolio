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
  document.getElementById("contact_container").style.backgroundImage='url(./assets/skills.jpeg)';
  document.querySelector(".navbar").style.backgroundColor="#79b4b7";
    document.getElementById("my_msg").style.color="black";
    let labels=document.querySelectorAll("label");
    document.getElementsByClassName("submit")[0].style.backgroundColor="#87bcbe";
    document.getElementsByClassName("submit")[0].style.color="white";
    let title = document.querySelectorAll("h1 > i");

  for(let i=0;i<labels.length;i++)
    labels[i].style.color="black";

  for (let i = 0; i < title.length; i++)
    title[i].style.color = "#79b4b7";
}
function change_dark(){
  document.getElementById("contact_container").style.backgroundImage='url(./assets/dev1.jpeg)'
  document.querySelector(".navbar").style.backgroundColor="#565656";
  document.getElementById("my_msg").style.color="white";
  let labels=document.querySelectorAll("label");
  document.getElementsByClassName("submit")[0].style.backgroundColor="white";
  document.getElementsByClassName("submit")[0].style.color="black";
  let title = document.querySelectorAll("h1 > i");

  for(let i=0;i<labels.length;i++)
    labels[i].style.color="white";
    
  for (let i = 0; i < title.length; i++)
    title[i].style.color = "white";
}







let form=document.getElementById("form");
let name_error=document.getElementById("name_error");
let email_error=document.getElementById("email_error");
let msg_error=document.getElementById("msg");

form.addEventListener('submit',function(e){
  let fullName=fname.value;
  let Email=email.value;
  let Msg=msg.value;
  let validName=validate_name(fullName);
  let validMessage=validate_msg(Msg);
  if(validName&&validMessage){
    localStorage.setItem("Name",fullName);
    localStorage.setItem("Email",Email);
    localStorage.setItem("Message",Msg);
    alert("Your message sent successfully!!");
    form.fname.value="";
    form.email.value="";
    form.msg.value="";
  }
  else{
      e.preventDefault();
      if(!validName && !validMessage){
          alert("-Name must be between 5 and 15 letters \n -Message must be more than 10 letters")
      }
      else if(!validName){
          alert("-Name must be between 5 and 15 letters");
          form.fname.value="";
      }
      else if(!validMessage){
          alert("-Message must be more than 10 letters");
          form.msg.value="";
      }
      else{
          alert("Error... Try fill form again");
          form.fname.value="";
          form.email.value="";
          form.msg.value="";
      }
    }
});

function validate_name(name){
  if(name.length<5 || name.length>15)
    return false;
  else
    return true;
}
function validate_msg(message){
  if(message.length>=10)
    return true;
  else
    return false;
}