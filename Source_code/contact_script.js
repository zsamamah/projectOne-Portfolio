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