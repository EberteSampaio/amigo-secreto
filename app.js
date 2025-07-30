let friendsList     = [];
const tagFriendsList  = document.getElementById("listaAmigos");
const tagWinner       = document.getElementById("resultado")
const responseMessage = document.getElementById("resposta");
const inputFriendName = document.getElementById("amigo");


function adicionarAmigo(){
    let friendName = inputFriendName.value;

    if(friendName == null || friendName == ""){
        showMessage("Por gentileza, insira o nome do usuário.", "red");
        return;
    }

    friendsList.push(friendName);
    tagFriendsList.innerHTML = friendsList;
    
    showMessage(friendName+" foi inserido com sucesso!", "green");
}

function sortearAmigo(){
    let sizeList = friendsList.length;

    if(sizeList <= 2){
        showMessage("Você deve inserir ao menos duas pessoas na lista.");
        return;
    }

    let index = Math.floor(Math.random() * sizeList);
    let result = friendsList[index];
    tagWinner.innerHTML = result;
    friendsList = [];

    showMessage("Para jogar novamente, basta inserir os nomes novamente!", "green");
}

function showMessage(message, color){
    responseMessage.style.color = color;
    responseMessage.innerHTML   = message;
    inputFriendName.value       = null;
}