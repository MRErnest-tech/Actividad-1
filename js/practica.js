function setLogin(){
    try {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;

        if(user == "")
        {
            var inputUser = document.getElementById("user");
            inputUser.classList.add("error-input");
        //    alert("Campo usuario obligatorio.");
        }

        if(user === "MAC" && pass==="2022")
        {
            alert("Bienvenido: " + user);
        }
        else
            alert("Usuario no valido.");

    } catch (error) {
        console.log(error);
    }
}

function cambios(){
    try {
        var inputUser = document.getElementById("user");
        inputUser.classList.add("edit-input");
    } catch (error) {
        console.log(error);
    }

    
}