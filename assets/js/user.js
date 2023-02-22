
function getOne(local){
    
let id = localStorage.getItem(local)
  
fetch(`https://victoroustiakine.sites.3wa.io/res03-php-j19-api/user/${id}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    
        
        let id = data.id;
        let username = data.username;
        let firstName = data.firstName;
        let lastName = data.lastName;
        let email = data.email;
        
        let table = document.getElementById("userTable")
        
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
          
          
           button2.classList.add("update")
             button2.setAttribute("id",id)
            button3.classList.add("delete")
              button3.setAttribute("id",id)
        
        
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
       
         tr1.appendChild(_modif)
          tr1.appendChild(_delete)
       console.log(tr1)
       table.appendChild(tr1)
    
});
    
    
    
}

function displayUpdateText(){
    
    let id = localStorage.getItem("update")
    fetch(`https://victoroustiakine.sites.3wa.io/res03-php-j19-api/user/${id}`)
.then(response => response.json())
.then(data => {
    console.log(data);
    
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    
    username.value=data.username
    email.value=data.email
    firstName.value=data.firstName
    lastName.value=data.lastName
   
});
}

export { getOne };
export { displayUpdateText };