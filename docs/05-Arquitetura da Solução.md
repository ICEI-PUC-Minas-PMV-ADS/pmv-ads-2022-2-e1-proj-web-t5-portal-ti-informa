# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesse ponto iremos mostrar os detalhes técnicos do projeto elaborado pela equipe, apontando os componentes que fazem parte da solução e do ambiente de hospedagem da solução.

## Diagrama de componentes

A figura a seguir mostra os componentes que fazem parte do presente projeto.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura 01.

![image](https://user-images.githubusercontent.com/114544326/194667065-013adeaa-3864-4019-9be9-3387a8d88c1e.png)




<center>Figura 01 - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema.  
  - **Páginas Web** - Será utilizada a linguagem de marcação HTML, na parte estética utilizaremos o CSS e JavaScript para implementar itens complexos nas páginas web criadas.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Materias de estudo** - Seções de texto aonde serão apresentadas cursos particulares e dicas  de  especialistas;
     - **Comentários** - Ficarão armazenadas as opiniões e ponto de vista dos usuários;
     - **Noticias** - Lista de notícias mantidas para leitura e acesso posterior.
     - **Login/Cadastro** - Seção destinada ao cadastro de novos usuarios, e salvo dados de usuarios cadastrados;
     - **Meu perfil** - Seção para o usuario editar o seu perfil de cadastro.
     - **Fale conosco** - Seção dedicada para tirar duvidas com os administradores do portal;
 - **News API** - plataforma que permite o acesso às notícias exibidas no site.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)


A imagem a seguir ilustra a o fluxo do usuário em nossa solução.
![userflow](https://user-images.githubusercontent.com/114547158/194790734-90e8cc15-9896-4b9a-bd1a-a6351f94e76a.jpg)

Assim que o usuário entra na plataforma, ele é apresentado à tela inicial de noticias
(Tela 1) onde ele tem a opção de fazer login ou cadastrar.

Caso ele opte por seguir pelo primeiro caminho, ele devera colocar senha para 
entrar cadastrado no site. 
Caso já tenha cadastro e opte pela segunda opção, ele deverá ele deverá criar
uma senha, e escrever o email pessoal, para seguir com o cadastro.

Com login ativo, ele poderá entrar nas noticias e poderá deixar um like, ou comentar. 
Caso ele, não esteja logado, não será permitido deixar like ou comentar.


## Tecnologias Utilizadas

Utilizaremos as linguagems Javascript, html e css para a criação do portal. COmo plataforma de hospedagem, utilizaremos o Heroku.




## Hospedagem

O site utilizará para hospedagem a plataforma Heroku uma vez que suporta a linguagem de programação do projeto. O site fica alocado na URL: 

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
