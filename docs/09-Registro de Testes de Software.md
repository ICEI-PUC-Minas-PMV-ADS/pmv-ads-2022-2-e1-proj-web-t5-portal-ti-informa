# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

# Lizane Faria Rodrigues
Realizado os testes para as funcionalidades Index e Gerenciamento de notícia (Inserir, Alterar, Excluir) conforme seguintes casos de testes:

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
Saída real do sistema: notícia cadastrada com sucesso
<br />

Evidência 1: Nenhuma notícia cadastrada 
![image](https://user-images.githubusercontent.com/114541642/204173069-394d9b30-e47d-44c3-8dc4-fe376e1d171a.png)

Evidência 2: Notícia Id 1 cadastrada
![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html](https://user-images.githubusercontent.com/114541642/204173174-6ef98038-d8cc-443b-96c3-b550e1b8a0f3.png)

Caso de testes 2:
<br />
Objetivo: testar a funcionalidade inserir quando a notícia não for destaque;
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
Saída real do sistema: notícia cadastrada com sucesso
<br />

Evidência 1: Nenhuma notícia cadastrada 
![image](https://user-images.githubusercontent.com/114541642/204173092-15aa1e55-886b-49f7-960c-525f475927d2.png)

Evidência 2: Notícia Id 3 cadastrada
![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html](https://user-images.githubusercontent.com/114541642/204173172-9417610a-7075-414b-9be2-3327765247c3.png)


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
Saída real do sistema: Sistema notificou erro "Não é possível mais de uma notícia como destaque."
<br />
Evidência:
![image](https://user-images.githubusercontent.com/114541642/204173319-125e66bd-b624-4100-b9e1-154188598627.png)

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
Saída real do sistema: depois que alterar deve ser visualizado um conteúdo novo no campo alterar conforme evidência abaixo:
<br />
Evidência 1: notícia de ID 2 já cadastrada. 
<br />
![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html](https://user-images.githubusercontent.com/114541642/204171440-e7b3285a-8809-4a42-a6d9-c096a7ecab02.png)

<br />
Evidência 2: notícia de ID 2 atualizada: 

![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html (3)](https://user-images.githubusercontent.com/114541642/204171579-52153944-59b8-440b-b12d-8eaaa18f5026.png)

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
Saída real do sistema: Exibido mensagem de erro Não é possível mais de uma notícia como destaque.
<br />

Evidência: exibido mensagem de erro 
![image](https://user-images.githubusercontent.com/114541642/204171790-2929610a-0760-4c4b-88c0-f70d8d16d746.png)


Caso de testes 6:
<br />
Objetivo: testar a funcionalidade excluir
<br />
Ação: selecionar uma notícia e realizar a exclusão 
<br />
Resultado esperado: a notícia deve ser excluída.
<br />
Saída real do sistema: Notícia de Id 2 excluída
<br />
Evidência: Notificação de exclusão de imagem e listagem de demais notícias 
![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html (5)](https://user-images.githubusercontent.com/114541642/204172082-91fa4b81-f6d2-4386-88b6-10e696e5a3dc.png)


Caso de testes 7:
<br />
Objetivo: testar a funcionalidade limpar form
<br />
Ação: limpar os campos.
<br />
Resultado esperado: ao preencher uma notícia e realizar a ação de limpar form o formulário deve ser limpo.
<br />
Saída real do sistema: após realizar a ação de limpar o form o mesmo limpou todos os campos preenchidos
<br />
Evidência: Formulário limpo conforme executado a ação. 
![image](https://user-images.githubusercontent.com/114541642/204172203-b6f10bef-11d1-46a8-b7e1-1dbbed080c84.png)



Caso de testes 8:
<br />
Objetivo: testar campos em branco
<br />
Ação: tentar salvar sem preencher os campos obrigatórios.
<br />
Resultado esperado: preencha o formulário corretamente.
<br />
Saída real do sistema: sistema notificou que é necessário que "preencha o formulário corretamente".
<br />
Evidência: Sistema exibindo mensagem de erro 
![image](https://user-images.githubusercontent.com/114541642/204172318-0210d067-4427-429f-85e5-f5e3f959e082.png)


Caso de testes 9:
<br />
Objetivo: testar home
<br />
Ação: listar conteúdo na página principal.
<br />
Resultado esperado: carregar notícia em destaque e demais notícias.
<br />
Saída real do sistema: listado todas notícias cadastradas conforme evidências abaixo:
<br />
Evidência 1: Notícias cadastradas
![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html](https://user-images.githubusercontent.com/114541642/204167112-29c8b835-c459-496f-8804-ae5bf8314058.png)

<br />
Evidência 2: tela de home listando notícias

![image](https://user-images.githubusercontent.com/114541642/204167460-332d36fd-28b5-4fa6-b7bd-a3c011114818.png)

<br />

Caso de testes 10:
<br />
Objetivo: listar apenas notícia em destaque
<br />
Ação: acessar tela de home e aguardar notícia destaque carregar.
<br />
Resultado esperado: exibir notícia em destaque.
<br />
Saída real do sistema: exibir  notícia em destaque cadastradas conforme evidências abaixo:
<br />
Evidência 1: notícia cadastrada em destaque:
![image](https://user-images.githubusercontent.com/114541642/204168420-38bd578a-06ad-4f9d-86b0-5e3e9491fe1b.png)

<br />
Evidência 2: tela de home cadstrada com notícia destaque:

![image](https://user-images.githubusercontent.com/114541642/204168563-267de361-6762-43c5-916d-7964940e15e9.png)

<br />

Caso de testes 11:
<br />
Objetivo: listar apenas notícia sem ser destaque
<br />
Ação: acessar tela de home e aguardar notícia que não é destaque carregar.
<br />
Resultado esperado: exibir notícia que não é destaque.
<br />
Saída real do sistema: exibir notícia que não é  destaque cadastradas conforme evidências abaixo:
<br />

Evidência 1: visualização de notícias que não são destaques na home:
![image](https://user-images.githubusercontent.com/114541642/204169205-122c6471-da47-49ef-9c78-842335f30caf.png)
<br />

Evidência 2: visualização de notícias que não é destaque:

![_C__git_pmv-ads-2022-2-e1-proj-web-t5-portal-ti-informa_cadastro html (2)](https://user-images.githubusercontent.com/114541642/204169352-8f6d3638-a812-4fe0-a2b6-45881d3923b5.png)

<br />

Caso de testes 12:
<br />
Objetivo: não listar nenhuma notícia
<br />
Ação: acessar tela de home e não exibir nenhuma notícia.
<br />
Resultado esperado: não exibir nenhuma notícia.
<br />
Saída real do sistema: não visualizar nenhuma notícia conforme evidências abaixo:
<br />

Evidência 1: não visualizar nenhuma notícia cadastrada na home:

![image](https://user-images.githubusercontent.com/114541642/204169749-35731047-65e8-4c25-9766-7b786d94f759.png)

<br />

Evidência 2: não visualizar nenhuma nortícia cadastrada.

![image](https://user-images.githubusercontent.com/114541642/204169876-4d345a95-72e7-409d-8df4-1584435f90c2.png)


<br />
Caso de testes 13: <br />
Objetivo: Testar a funcionalidade Navegabilidade <br />
Notícias : Feito no link das notícias <br />
Ascesso a Notícias: Ascesso feito na página oficial <br />

<br />
Caso de testes 14: <br />
Objetivo: Testar a funcionalidade Responsividade <br />
Pagína : Feito na página do site Portal TI <br />
Pagína: Portal TI <br />

<br />
Caso de testes 15: <br />
Objetivo: Testar Campos de Texto e Envio do Formulário na Página Fale Conosco. <br />
Formulário : Testar se foi feito o envio correto dos dados/informações inseridas. <br />
Pagína: Fale Conosco <br />
Saída esperada: Formulário enviado com sucesso! <br />
Saída real do sistema: Your form was successfully submitted. <br />
Registro da execução: Campos de texto inseridos e formulário enviado normalmente. <br />

<br />
Caso de testes 16: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o endereço (cep) foi inserido corretamente <br />
Pagína: Portal TI <br />

<br />
Caso de testes 17: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o telefone foi inserido corretamente <br />
Inteiros teste feito com valores validos e invalidos <br />
Pagína: Portal TI <br />

<br />
Caso de testes 18: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o CPF foi inserido corretamente <br />
Inteiros teste feito com valores validos e invalidos . <br />
Pagína: Portal TI <br />

<br />
Caso de testes 19: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se a data de nascimento foi inserida corretamente <br />
Inteiros teste feito com valores validos e invalidos . <br />
Pagína: Portal TI <br />

<br />
Caso de testes 20: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o endereço de email foi i nserido corretamente <br />
Inteiros string. <br />
Pagína: Portal TI <br />

<br />
Caso de testes 21: Testar a funcionalidade <br />
Objetivo: Direcionamento para curso específicos publicados <br />
Curso : Feito no link do curso <br />
Saída esperada: Site direcionado a cursos <br />
Pagína: Portal TI <br />

<br />
Caso de testes 22: Testar a funcionalidade <br />
Objetivo: Testar cadastro de cursos no site <br />
Curso : Cadastro dos cursos pelos administradores <br />
Saída esperada: Cadastro de cursos pelo formulário <br />
Pagína: Portal TI <br />

<br />
Caso de testes 23: Testar a funcionalidade <br />
Objetivo: Permitir o usuário avaliar o curso <br />
Curso: Botão de Like <br />
Saída esperada: Contagem de likes <br />
Pagína: Portal TI <br />

<br />
Caso de testes 24: <br />
Objetivo: Testar Campos de Texto e Envio do Formulário na Página Fale Conosco. <br />
Formulário : Testar se foi feito o envio correto dos dados/informações inseridas. <br />
Pagína: Formulário de Pesquisa <br />
Saída esperada: Formulário enviado com sucesso! <br />
Saída real do sistema: Your form was successfully submitted. <br />
Registro da execução: Campos de texto inseridos e formulário enviado normalmente e salvos na planilha. <br />

<br />
Caso de testes 25: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o nome foi inserido corretamente <br />
Pagína: Portal TI <br />

![nome](https://user-images.githubusercontent.com/114544447/204174660-28bd667d-85a0-4f5b-be28-ce3720b8c230.png)

<br />
Caso de testes 26: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o e-mail foi inserido corretamente <br />
Inteiros teste feito com valores validos e invalidos <br />
Pagína: Portal TI <br />

![email](https://user-images.githubusercontent.com/114544447/204174675-3fe75504-40df-47a8-8ba3-9238fb6f8431.png)

<br />
Caso de testes 27: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o campo “Qual opção se encaixa em você?” foi inserido corretamente <br />
Verificar se há uma opção selecionada <br />
Pagína: Portal TI <br />

![opcao](https://user-images.githubusercontent.com/114544447/204174693-63dad0d2-84fe-46f5-a6f6-7e4f45ccb8c4.png)

<br />
Caso de testes 28: <br />
Objetivo: Testar Campos e páginas <br />
Cadastro : Testar se o campo “Qual a área de maior interesse no site?” foi inserido corretamente <br />
Verificar se há uma opção selecionada <br />
Pagína: Portal TI <br />

![lista](https://user-images.githubusercontent.com/114544447/204174722-244377c5-4db7-4b2f-816b-bec98bc08fb1.png)

## Avaliação
Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
