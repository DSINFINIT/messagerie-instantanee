const messagerie = {
    messages:[],
    utilisateurs:[]
};

 function ajouterMessage(message){
    messagerie.messages.push(message);
}

function afficherMessages(){
const messagesHTML = messagerie.messages.map(message=>{
    return '<p>${message}</p>';
}).join('');
document.getElementById('messages').innerHTML=messagesHTML;
}

function envoyerMessage(){
    const messageInput=Document.getElementById('message');
    const message=messageInput.value;
    ajouterMessage(message);
    afficherMessages();
    messageInput.value ="";
}

document.getElementById('envoyer').addEventListener('click',envoyerMessage);