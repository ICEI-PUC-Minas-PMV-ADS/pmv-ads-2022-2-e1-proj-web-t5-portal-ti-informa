// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('noticias'));
if (!db) {
    db = noticiaspreCarregadas
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function inserirNoticia(noticia) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoNoticia = {
        "id": novoId,
        "tituloNoticia": noticia.tituloNoticia,
        "resumo": noticia.resumo,
        "imagem": noticia.imagem,
        "conteudo": noticia.conteudo,
        "destaque": noticia.destaque
    };

    if (db.data.filter(d => d.destaque == "sim").length >= 1 && noticia.destaque == "sim")
        displayMessage("Não é possível mais de uma notícia como destaque.")
    else {
        // Insere o novo objeto no array
        db.data.push(novoNoticia);
        displayMessage("Notícia inserida com sucesso");

        // Atualiza os dados no Local Storage
        localStorage.setItem('noticias', JSON.stringify(db));
    }
}

function updateNoticia(id, noticia) {
    if (db.data.filter(d => d.destaque == "sim").length >= 1 && noticia.destaque == "sim")
        displayMessage("Não é possível mais de uma notícia como destaque.")
    else {
        // Localiza o indice do objeto a ser alterado no array a partir do seu ID
        let index = db.data.map(obj => obj.id).indexOf(id);

        // Altera os dados do objeto no array
        db.data[index].tituloNoticia = noticia.tituloNoticia,
            db.data[index].resumo = noticia.resumo,
            db.data[index].imagem = noticia.imagem,
            db.data[index].conteudo = noticia.conteudo,
            db.data[index].destaque = noticia.destaque

        displayMessage("Noticia alterado com sucesso");

        // Atualiza os dados no Local Storage
        localStorage.setItem('noticias', JSON.stringify(db));
    }
}
function deleteNoticia(id) {
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Notícia removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('noticias', JSON.stringify(db));
}