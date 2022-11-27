# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

# Lizane Faria Rodrigues
Elaborei para as funcionalidades Index e Gerenciamento de notícia (Inserir, Alterar, Excluir) os seguintes casos de testes:

Caso de testes 1:
<br />
Objetivo: testar a funcionalidade inserir quando a notícia for destaque;
Título: Amazon com problemas
Resumo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
Conteúdo: É importante questionar o quanto a execução dos pontos do programa talvez venha a ressaltar a relatividade do sistema de formação de quadros que corresponde às necessidades.
É importante questionar o quanto a execução dos pontos do programa talvez venha a ressaltar a relatividade do sistema de formação de quadros que corresponde às necessidades.
Imagem: imagens/aws.png
Destaque: Sim
Resultado esperado: notícia em destaque cadastrada com sucesso.

Caso de testes 2:
Objetivo: testar a funcionalidade inserir quando a notícia não 
for estaque;
Título: JavaScript nova versão
Resumo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
Conteúdo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
Imagem: images/javascript.png 
Destaque: não
Resultado esperado: notícia não é destaque cadastrada com sucesso.

Caso de testes 3:
Objetivo: testar a funcionalidade inserir quando já tiver uma notícia em destaque cadastrada;
Título: O que é C# e para que serve
Resumo: O C# é uma linguagem multiplataforma. Sendo assim, você pode utilizá-la para desenvolver para plataformas web, dispositivos móveis e aplicações desktop. Com a praticidade dessa linguagem, você pode, de forma relativamente fácil, desenvolver desde projetos mais simples até projetos complexos e multiplataforma.
Conteúdo: O C# é uma linguagem multiplataforma. Sendo assim, você pode utilizá-la para desenvolver para plataformas web, dispositivos móveis e aplicações desktop. Com a praticidade dessa linguagem, você pode, de forma relativamente fácil, desenvolver desde projetos mais simples até projetos complexos e multiplataforma.
Imagem: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUeniUFkwz///8
Destaque: Sim
Resultado esperado: Não é possível mais de uma notícia como destaque.

Caso de testes 4:
Objetivo: testar a funcionalidade alterar
Título: novo título
Resumo: informações variadas sobre tecnologia
Conteúdo: tecnologia
Imagem: https://www.petroita.com.br/images/img1-1.jpg
Destaque: não
Resultado esperado: após alterar deve ser visualizado um novo conteúdo nos campos alterados.

Caso de testes 5:
Objetivo: testar a funcionalidade alterar
Título: novo título
Resumo: informações variadas sobre tecnologia
Conteúdo: tecnologia
Imagem: https://www.petroita.com.br/images/img1-1.jpg
Destaque: sim
Resultado esperado: Não é possível mais de uma notícia como destaque. 

Caso de testes 6:
Objetivo: testar a funcionalidade excluir
Ação: selecionar uma notícia e realizar a exclusão  
Resultado esperado:  a notícia deve ser excluída.

Caso de testes 7:
Objetivo: testar a funcionalidade limpar form
Ação: limpar os campos.
Resultado esperado: ao preencher uma notícia e realizar a ação de limpar form o formulário deve ser limpo.

Caso de testes 8:
Objetivo: testar campos em branco
Ação: tentar salvar sem preencher os campos obrigatórios.
Resultado esperado: preencha o formulário corretamente.

Caso de testes 9:
Objetivo: testar home
Ação: listar conteúdo na página principal.
Resultado esperado: carregar notícia em destaque e demais notícias.

Caso de testes 10:
Objetivo: listar apenas notícia em destaque
Ação: acessar tela de home e aguardar notícia destaque carregar.
Resultado esperado: exibir notícia em destaque.

Caso de testes 11:
Objetivo: listar apenas notícia sem ser destaque
Ação: acessar tela de home e aguardar notícia que não é destaque carregar.
Resultado esperado: exibir notícia que não é destaque.

Caso de testes 12:
Objetivo: não listar nenhuma notícia
Ação: acessar tela de home e não exibir nenhuma notícia.
Resultado esperado: não exibir nenhuma notícia.


## Ferramentas de Testes (Opcional)


Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
