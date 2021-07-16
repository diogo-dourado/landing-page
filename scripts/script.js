const form = document.getElementById('form')

function cadastrarCliente() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let aceita = document.getElementById('checkbox').checked;

    //aceita.checked = JSON.parse(localStorage.getItem('checkbox'));

    if (nome && email != null) {
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



