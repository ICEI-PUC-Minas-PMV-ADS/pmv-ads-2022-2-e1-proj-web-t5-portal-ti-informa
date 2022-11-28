# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

# Lizane Faria Rodrigues
Elaborei para as funcionalidades Index e Gerenciamento de notícia (Inserir, Alterar, Excluir) os seguintes casos de testes:

Caso de testes 1:
<br />
Objetivo: testar a funcionalidade inserir quando a notícia for destaque;
<br />
Título: Amazon com problemas
<br />
Resumo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
<br />
Conteúdo: É importante questionar o quanto a execução dos pontos do programa talvez venha a ressaltar a relatividade do sistema de formação de quadros que corresponde às necessidades.
É importante questionar o quanto a execução dos pontos do programa talvez venha a ressaltar a relatividade do sistema de formação de quadros que corresponde às necessidades.
<br />
Imagem: imagens/aws.png
<br />
Destaque: Sim
<br />
Resultado esperado: notícia em destaque cadastrada com sucesso.
<br />

Caso de testes 2:
<br />
Objetivo: testar a funcionalidade inserir quando a notícia não 
for estaque;
<br />
Título: JavaScript nova versão
<br />
Resumo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
<br />
Conteúdo: É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
É claro que a contínua expansão de nossa atividade afeta positivamente a correta previsão dos índices pretendidos.
<br />
Imagem: images/javascript.png 
<br />
Destaque: não
<br />
Resultado esperado: notícia não é destaque cadastrada com sucesso.
<br />

Caso de testes 3:
<br />
Objetivo: testar a funcionalidade inserir quando já tiver uma notícia em destaque cadastrada;
<br />
Título: O que é C# e para que serve
<br />
Resumo: O C# é uma linguagem multiplataforma. Sendo assim, você pode utilizá-la para desenvolver para plataformas web, dispositivos móveis e aplicações desktop. Com a praticidade dessa linguagem, você pode, de forma relativamente fácil, desenvolver desde projetos mais simples até projetos complexos e multiplataforma.
<br />
Conteúdo: O C# é uma linguagem multiplataforma. Sendo assim, você pode utilizá-la para desenvolver para plataformas web, dispositivos móveis e aplicações desktop. Com a praticidade dessa linguagem, você pode, de forma relativamente fácil, desenvolver desde projetos mais simples até projetos complexos e multiplataforma.
<br />
Imagem: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEUeniUFkwz///8
<br />
Destaque: Sim
<br />
Resultado esperado: Não é possível mais de uma notícia como destaque.
<br />

Caso de testes 4:
<br />
Objetivo: testar a funcionalidade alterar
<br />
Título: novo título
<br />
Resumo: informações variadas sobre tecnologia
<br />
Conteúdo: tecnologia
<br />
Imagem: https://www.petroita.com.br/images/img1-1.jpg
<br />
Destaque: não
<br />
Resultado esperado: após alterar deve ser visualizado um novo conteúdo nos campos alterados.
<br />

Caso de testes 5:
<br />
Objetivo: testar a funcionalidade alterar
<br />
Título: novo título
<br />
Resumo: informações variadas sobre tecnologia
<br />
Conteúdo: tecnologia
<br />
Imagem: https://www.petroita.com.br/images/img1-1.jpg
<br />
Destaque: sim
<br />
Resultado esperado: Não é possível mais de uma notícia como destaque. 
<br />

Caso de testes 6:
<br />
Objetivo: testar a funcionalidade excluir
<br />
Ação: selecionar uma notícia e realizar a exclusão 
<br />
Resultado esperado:  a notícia deve ser excluída.
<br />

Caso de testes 7:
<br />
Objetivo: testar a funcionalidade limpar form
<br />
Ação: limpar os campos.
<br />
Resultado esperado: ao preencher uma notícia e realizar a ação de limpar form o formulário deve ser limpo.
<br />

Caso de testes 8:
<br />
Objetivo: testar campos em branco
<br />
Ação: tentar salvar sem preencher os campos obrigatórios.
<br />
Resultado esperado: preencha o formulário corretamente.
<br />

Caso de testes 9:
<br />
Objetivo: testar home
<br />
Ação: listar conteúdo na página principal.
<br />
Resultado esperado: carregar notícia em destaque e demais notícias.
<br />

Caso de testes 10:
<br />
Objetivo: listar apenas notícia em destaque
<br />
Ação: acessar tela de home e aguardar notícia destaque carregar.
<br />
Resultado esperado: exibir notícia em destaque.
<br />

Caso de testes 11:
<br />
Objetivo: listar apenas notícia sem ser destaque
<br />
Ação: acessar tela de home e aguardar notícia que não é destaque carregar.
<br />
Resultado esperado: exibir notícia que não é destaque.
<br />

Caso de testes 12:
<br />
Objetivo: não listar nenhuma notícia
<br />
Ação: acessar tela de home e não exibir nenhuma notícia.
<br />
Resultado esperado: não exibir nenhuma notícia.
<br />


## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
