// declara um conjunto inicial de contatos
var db_cursos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Leanne Graham",
            "titulo": "Entenda o que faz um Analista de Sistema",
            "conteudo": "amigos",
            "email": "Sincere@april.biz",
            // "telefone": "1-770-736-8031",
            "website": "hildegard.org"
        },
        {
            "id": 2,
            "nome": "Ervin Howell",
            "titulo": "Betim",
            "conteudo": "familia",
            "email": "Shanna@melissa.tv",
            // "telefone": "010-692-6593",
            "website": "anastasia.net"
        },
        {
            "id": 3,
            "nome": "Clementine Bauch",
            "titulo": "Rio de Janeiro",
            "conteudo": "trabalho",
            "email": "Nathan@yesenia.net",
            // "telefone": "1-463-123-4447",
            "website": "ramiro.info"
        },
        {
            "id": 4,
            "nome": "Patricia Lebsack",
            "titulo": "Betim",
            "conteudo": "trabalho",
            "email": "Julianne.OConner@kory.org",
            // "telefone": "493-170-9623 x156",
            "website": "kale.biz"
        },
        {
            "id": 5,
            "nome": "Chelsey Dietrich",
            "titulo": "São Paulo",
            "conteudo": "familia",
            "email": "Lucio_Hettinger@annie.ca",
            // "telefone": "(254)954-1289",
            "website": "demarco.info"
        },
        {
            "id": 6,
            "nome": "Mrs. Dennis Schulist",
            "titulo": "Rio de Janeiro",
            "conteudo": "trabalho",
            "email": "Karley_Dach@jasper.info",
            // "telefone": "1-477-935-8478",
            "website": "ola.org"
        },
        {
            "id": 7,
            "nome": "Kurtis Weissnat",
            "titulo": "Belo Horizonte",
            "conteudo": "amigos",
            "email": "Telly.Hoeger@billy.biz",
            // "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Nicholas Runolfsdottir V",
            "titulo": "Belo Horizonte",
            "conteudo": "familia",
            "email": "Sherwood@rosamond.me",
            // "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Glenna Reichert",
            "titulo": "Betim",
            "conteudo": "amigos",
            "email": "Chaim_McDermott@dana.io",
            // "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Clementina DuBuque",
            "titulo": "São Paulo",
            "conteudo": "amigos",
            "email": "Rey.Padberg@karina.biz",
            // "telefone": "024-648-3804",
            "website": "ambrose.net"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_curso'));
if (!db) {
    db = db_cursos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCurso(curso) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoCurso = {
        "id": novoId,
        "nome": curso.nome,
        "email" : curso.email,
       // "telefone": curso.telefone,
        "titulo" : curso.titulo,
        "conteudo": curso.conteudo,
        "website": curso.website
    };

    // Insere o novo objeto no array
    db.data.push(novoCurso);
    displayMessage("Curso inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_curso', JSON.stringify(db));
}

function updateCurso(id, curso) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = curso.nome,
    db.data[index].email = curso.email,
    // db.data[index].telefone = curso.telefone,
    db.data[index].titulo = curso.titulo,
    db.data[index].conteudo = curso.conteudo,
    db.data[index].website = curso.website

    displayMessage("Curso alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_curso', JSON.stringify(db));
}

function deleteCurso(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Curso removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_curso', JSON.stringify(db));
}