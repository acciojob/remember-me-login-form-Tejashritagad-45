const form=document.querySelector(".form")
const loginbtn = document.querySelector("#existing");
const saveUser=JSON.parse(localStorage.getItem("user"));

document.querySelector("#username").value = "";
document.querySelector("#password").value = "";

if(saveUser){
	loginbtn.style.display="block"
}else{
	loginbtn.style.display="none"
}
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	
	const name=document.querySelector("#username").value
	const password=document.querySelector("#password").value
	const checkbox=document.querySelector("#checkbox")

         alert(`Logged in as ${name}`);

	
       if (checkbox.checked){
	         const userData={
		      name:name,
	           password:password
	        }
	         localStorage.setItem("user",JSON.stringify(userData))
		      loginbtn.style.display="block"
             console.log(userData);
            }else{
		   localStorage.removeItem("user");
		   loginbtn.style.display="none"
			}
        })
loginbtn.addEventListener("click", () => {
  const saved = JSON.parse(localStorage.getItem("user"));
  if (saved) {
    alert(`Logged in as ${saved.name}`);
  }
});
