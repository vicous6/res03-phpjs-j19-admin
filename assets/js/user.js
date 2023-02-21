
function getOne(){
    
    
fetch('https://victoroustiakine.sites.3wa.io/res03-php-j19-api/users')
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
       console.log(tr1)
       table.appendChild(tr1)
    
});
    
    
    
}