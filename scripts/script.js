
function validarEmail(inputText) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(inputText.value.match(mailformat)) {
        //alert("Valid email address!");
        cadastrarCliente();
    }
    else
    {
        //alert("You have entered an invalid email address!");
        console.log("Email não foi válido.")
    }
}


function cadastrarCliente() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let aceita = document.getElementById('checkbox').checked;

    if ((nome != null && nome != "") && (email != null && email != "")) {
        
        let data = {
            nome,
            email,
            aceita,
        }
    
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        alert("Registro feito com sucesso!");

    }else{
        console.log("Dados importantes não foram inseridos.")
    }

}