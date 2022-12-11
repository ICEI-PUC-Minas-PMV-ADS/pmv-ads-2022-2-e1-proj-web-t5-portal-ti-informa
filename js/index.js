$(document).ready(function () {
    carregarNoticias();

})

function renderizarNoticia(noticia, index) {
    let templateNoticiaHtml = $("#templateNoticiaHtml").html();
    $("#noticiasSemDestaque").append(templateNoticiaHtml);
    var templateNoticia = $("#noticiasSemDestaque").children("#templateNoticia");

    let tituloNoticia = templateNoticia.children("#tituloNoticia");
    let imagemNoticia = templateNoticia.children("#imgNoticia");
    let resumoNoticia = templateNoticia.children("#resumoNoticia");

    tituloNoticia.html(noticia.tituloNoticia);
    imagemNoticia.attr("src", noticia.imagem)
    templateNoticia.attr("id", "templateNoticia" + index.toString())
    resumoNoticia.html(noticia.resumo);
}

function renderizarNoticiaDestaque(noticia, index) {
    let templateNoticiaDestaqueHtml = $("#templateNoticiaDestaqueHtml").html();
    $("#noticiaEmDestaque").append(templateNoticiaDestaqueHtml);
    var templateNoticiaDestaque = $("#noticiaEmDestaque").children("#templateNoticiaDestaque");

    let tituloNoticia = templateNoticiaDestaque.find(tituloNoticiaDestaque);
    let imagemNoticia = templateNoticiaDestaque.find(imgNoticiaDestaque);
    let resumoNoticia = templateNoticiaDestaque.find(resumoNoticiaDestaque);

    tituloNoticia.html(noticia.tituloNoticia);
    imagemNoticia.attr("src", noticia.imagem)
    templateNoticiaDestaque.attr("id", "templateNoticiaDestaque" + index.toString())
    resumoNoticia.html(noticia.resumo);
}

function carregarNoticias() {
    let noticias = JSON.parse(localStorage.getItem("noticias"));

    if (!noticias) {
        noticias = noticiaspreCarregadas;
        localStorage.setItem('noticias', JSON.stringify(noticiaspreCarregadas));
    }

    noticias.data.forEach(noticia => {
        if (noticia.destaque == "não") {
            renderizarNoticia(noticia, noticias.data.indexOf(noticia));
        }
        else {
            renderizarNoticiaDestaque(noticia, noticias.data.indexOf(noticia));
        }
    });
}