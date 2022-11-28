# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

Foram feitos os seguintes testes:

Anderson: Responsável pela navegabilidade do link notícias
André: responsável pelos testes no retorno da ferramenta de busca
Leonardo: Responsável pelo teste de responsividade
Daniella: Responsável pelos testes de acesso a vídeos de cursos, cadastro dos cursos, likes dos cursos.
Luiz: Responsável pelo formulário de pesquisa.
Marlon: Responsável pelos testes de inserção de dados e envio do formulário do Fale Conosco.


Anderson Rodrigo Vilaça Baia:
Caso de testes 1: 
Objetivo: Testar a funcionalidade Navegabilidade 
Notícias : Feito no link das notícias
Acesso a Notícias: Acesso feito na página oficial 

Leonardo Rodrigues Barbosa Maia:
Caso de testes 2: 
Objetivo: Testar a funcionalidade Responsividade
Pagína : Feito na página do site Portal TI
Pagína: Portal TI

Marlon Sttefane Guimarães Silva:
Caso de testes 3:
Objetivo: Testar Campos de Texto e Envio do Formulário na Página Fale Conosco.
Formulário : Testar se foi feito o envio correto dos dados/informações inseridas.
Pagína: Fale Conosco
Saída esperada: Formulário enviado com sucesso!
Saída real do sistema: Your form was successfully submitted.
Registro da execução: Campos de texto inseridos e formulário enviado normalmente.

Caso de testes 4: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o endereço (cep) foi inserido corretamente
Pagína: Portal TI

Caso de testes 5: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o telefone foi inserido corretamente
Inteiros teste feito com valores validos e invalidos
Pagína: Portal TI

Caso de testes 6: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o CPF foi inserido corretamente
Inteiros teste feito com valores validos e invalidos .
Pagína: Portal TI

Caso de testes 7: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se a data de nascimento foi inserida corretamente 
Inteiros teste feito com valores validos e invalidos .
Pagína: Portal TI

Caso de testes 8: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o endereço de email foi i nserido corretamente
Inteiros string.
Pagína: Portal TI

Daniella Souza de Oliveira:
Caso de testes 9: Testar a funcionalidade
Objetivo: Direcionamento para curso específicos publicados
Curso : Feito no link do curso
Saída esperada: Site direcionado a cursos
Pagína: Portal TI

Caso de testes 10: Testar a funcionalidade
Objetivo: Testar cadastro de cursos no site
Curso : Cadastro dos cursos pelos administradores
Saída esperada: Cadastro de cursos pelo formulário
Pagína: Portal TI

Caso de testes 11: Testar a funcionalidade
Objetivo: Permitir o usuário avaliar o curso
Curso: Botão de Like
Saída esperada: Contagem de likes
Pagína: Portal TI

Andre Azevedo Ferreira Carvalho:
Caso de testes 12: Testar retorno de busca
Objetivo: Permitir o usuário faça busca
Curso: Busca no site
Saída esperada: Busca em todo site
Pagína: Portal TI

Luiz Gustavo Pires Pereira:
Caso de testes 13: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o nome foi inserido corretamente
Pagína: Portal TI

Caso de testes 14: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o e-mail foi inserido corretamente
Inteiros teste feito com valores validos e invalidos
Pagína: Portal TI
 
Caso de testes 15: 
Objetivo: Testar Campos e páginas
Cadastro : Testar se o campo “Qual opção se encaixa em você?” foi inserido corretamente
Inteiros teste feito com valores validos e invalidos
Pagína: Portal TI



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


## Ferramentas de Testes (Opcional)


Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
