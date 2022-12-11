// declara um conjunto inicial de contatos
var db_cursos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Daniella Souza",
            "titulo": "Entenda o que faz um Analista de Sistema",
            "conteudo": "Nesse vídeo você vai conhecer o que um profissional de Análise e Desenvolvimento de Sistemas faz. Saiba, entre outras coisas, onde eles atuam e qual a formação necessária para atuar no mercado.",
            "email": "danisouza@yesenia.net",
            // "telefone": "1-770-736-8031",
            "website": "https://www.youtube.com/watch?v=5K7OGSsWlzUg"
        },
        {
            "id": 2,
            "nome": "Daniella Souza",
            "titulo": "HTML descomplicado",
            "conteudo": "Neste curso completo de HTML você vai aprender a linguagem de base de toda a web. Abordaremos tudo que você precisa aprender para iniciar sua Home Page.",
            "email": "danisouza@yesenia.net",
            // "telefone": "010-692-6593",
            "website": "https://www.youtube.com/watch?v=nPEpaft1y1k"
        },
        {
            "id": 3,
            "nome": "Daniella Souza",
            "titulo": "Primeiros passos para criar um algorítmo",
            "conteudo": "Neste curso Lógica de Programação para iniciantes você vai aprender todo o passo a passo necessário para montar algoritimos e como isso pode ser usado para criar um software do zero.",
            "email": "danisouza@yesenia.net",
            // "telefone": "1-463-123-4447",
            "website": "https://www.youtube.com/watch?v=iF2MdbrTiBM"
        },
        {
            "id": 4,
            "nome": "Daniella Souza",
            "titulo": "CSS básico",
            "conteudo": "Neste curso completo de CSS você encontra as principais propriedades e funcionamentos do CSS de forma detalhada. O CSS é a linguagem que define o estilo visual em páginas web.",
            "email": "danisouza@yesenia.net",
            // "telefone": "493-170-9623 x156",
            "website": "https://www.youtube.com/watch?v=w1J6gY40yMo"
        },
        {
            "id": 5,
            "nome": "Daniella Souza",
            "titulo": "Engenharia de Requisitos no Contexto Ágil",
            "conteudo": "Nesse curso de Engenharia de Requisitos você vai aprender técnicas para fazer levantamento, análise e gestão de requisitos de software a fim de atingir aos objetivos do negócio do cliente.a",
            "email": "danisouza@yesenia.net",
            // "telefone": "(254)954-1289",
            "website": "https://www.fattocs.com/blog/engenharia-de-requisitos-no-contexto-agil/"
        },
        {
            "id": 6,
            "nome": "Daniella Souza",
            "titulo": "Plano de Teste de Software",
            "conteudo": "Nesse curso você vai aprender como planejar seus testes de software evitando desperdícios e documentando realmente o que importa.",
            "email": "danisouza@yesenia.net",
            // "telefone": "1-477-935-8478",
            "website": "https://www.youtube.com/watch?v=lYiwTa7BWHQ"
        },
        /*{
            "id": 7,
            "nome": "Daniella Souza",
            "titulo": "Belo Horizonte",
            "conteudo": "amigos",
            "email": "danisouza@yesenia.net",
            // "telefone": "210.067.6132",
            "website": "elvis.io"
        },
        {
            "id": 8,
            "nome": "Daniella Souza",
            "titulo": "Belo Horizonte",
            "conteudo": "familia",
            "email": "danisouza@yesenia.net",
            // "telefone": "586.493.6943",
            "website": "jacynthe.com"
        },
        {
            "id": 9,
            "nome": "Daniella Souza",
            "titulo": "Betim",
            "conteudo": "amigos",
            "email": "danisouza@yesenia.net",
            // "telefone": "(775)976-6794",
            "website": "conrad.com"
        },
        {
            "id": 10,
            "nome": "Daniella Souza",
            "titulo": "São Paulo",
            "conteudo": "amigos",
            "email": "danisouza@yesenia.net",
            // "telefone": "024-648-3804",
            "website": "ambrose.net"
        }*/
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