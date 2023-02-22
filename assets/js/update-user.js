function update() {

    let button = document.getElementById("boutton")


    button.addEventListener("click", function(event) {
        event.preventDefault()
        let inputs = document.getElementsByTagName("input")


        let user = {
            id: inputs[0].value,
            username: inputs[1].value,
            firstName: inputs[3].value,
            lastName: inputs[4].value,
            email: inputs[2].value
        };
        console.log(user)
        // Je dois d'abord instancier un FormData qui est la reprÃ©sentation en JavaScript d'un formulaire
        let formData = new FormData();
        formData.append('id', user.id);
        formData.append('username', user.username);
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('email', user.email);

        const options = {
            method: 'POST',
            body: formData
        };
        let value = inputs[0].value
        
        fetch(`https://victoroustiakine.sites.3wa.io/res03-php-j19-api/update-user/${value}`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });

      let truc =  setTimeout(window.location.href="https://victoroustiakine.sites.3wa.io/res03-phpjs-j19-admin/users.html", 40000)



    });
}

export { update };