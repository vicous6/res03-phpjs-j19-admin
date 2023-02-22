

function getAll(){
    
    
fetch('https://victoroustiakine.sites.3wa.io/res03-php-j19-api/users')
.then(response => response.json())
.then(data => {
    console.log(data);
    for(let i = 0 ; i < data.length;i ++){
        
        let id = data[i].id;
        let username = data[i].username;
        let firstName = data[i].firstName;
        let lastName = data[i].lastName;
        let email = data[i].email;
        
        let table = document.getElementById("usersTable")
        
        let _id = document.createElement('td')
        let _username = document.createElement('td')
        let _firstName = document.createElement('td')
        let _lastName = document.createElement('td')
        let _email = document.createElement('td')
        
        
        let _user = document.createElement('td')
        let _modif = document.createElement('td')
        let _delete = document.createElement('td')
        
        
        let button1= document.createElement("button")
        let button2= document.createElement("button")
        let button3= document.createElement("button")
        
        button1.textContent="X"
         button2.textContent="X"
          button3.textContent="X"
          
          button1.setAttribute("id",id)
           button1.classList.add("user")
           button2.classList.add("update")
             button2.setAttribute("id",id)
            button3.classList.add("delete")
              button3.setAttribute("id",id)
        
        _user.appendChild(button1)
        _modif.appendChild(button2)
        _delete.appendChild(button3)
        
        _id.textContent= id
        _username.textContent= username
        _firstName.textContent= firstName
        _lastName.textContent= lastName
        _email.textContent= email
     
        let tr1 = document.createElement("tr")
       tr1.appendChild(_id)
       tr1.appendChild(_username)
       tr1.appendChild(_firstName)
       tr1.appendChild(_lastName)
       tr1.appendChild(_email)
        tr1.appendChild(_user)
         tr1.appendChild(_modif)
          tr1.appendChild(_delete)
       console.log(tr1)
       table.appendChild(tr1)
    }
});
    
    
    
}

function routingCreate(){
      let create = document.getElementById("createUser")
 create.addEventListener("click",function(){
     
     window.location.href="https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/create-user.html"
 })
 }
 function routingHomepage(){
      let home = document.getElementById("homepage")
 home.addEventListener("click",function(){
     
     window.location.href="https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/users.html"
 })
 }

 
 function getUserButton(){
  
  
 let buttonUser = document.getElementsByClassName("user");
 
 console.log(buttonUser);

 console.log("pk");
for(let elem of buttonUser){
    
        elem.addEventListener("click",function(){
         let route = (elem.getAttribute("id"))
         // console.log(buttonUser[i].className)
        localStorage.setItem("user", route);

         window.location.href=`https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/user.html`
     })
}
 }
 
 function updateUserButton(){
   
 let buttonUser = document.getElementsByClassName("update");
 
 console.log(buttonUser);

 console.log("pk");
for(let elem of buttonUser){
    
        elem.addEventListener("click",function(){
         let route = (elem.getAttribute("id"))
         // console.log(buttonUser[i].className)
        localStorage.setItem("update", route);

         window.location.href=`https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/update-user.html`
     })
}
 }
 function deleteUserButton(){
  
  
 }

export { getAll };
export { routingCreate };
export { routingHomepage};
// export { routingUpdate};
export { getUserButton };
export { updateUserButton };
export { deleteUserButton };