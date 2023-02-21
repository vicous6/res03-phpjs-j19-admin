

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
          
          button1.classList.add(id)
           button2.classList.add(id)
            button3.classList.add(id)
        
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

export { getAll };