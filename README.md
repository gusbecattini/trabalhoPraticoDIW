# trabalhoPraticoDIW
Trabalho prático 2 da disciplina Desenvolvimento de Interfaces Web, do curso de Análise e Desenvolvimento de Sistemas da PUC Minas. O objetivo desse trabalho é desenolver um layout simples de uma loja de ecommerce, utilizando a fakestore API (https://fakestoreapi.com/) para buscar os produtos.

Requisitos do Projeto

O site que você fará deve atender aos seguintes requisitos: 

    o site deve ser publicado em um ambiente da Internet (Repl.it, GitHub Pages, Netlify ou outro a sua escolha); 
    o site deve trazer os dados do aluno tais como seu nome completo, curso e número de matrícula, OBRIGATORIAMENTE visíveis na Home-Page;
    o site deverá ser responsivo permitindo a visualização tanto no desktop quanto em um celular de forma adequada;
    o site deve ter uma Home-Page (index.html) com dados dinâmicos obtidos via Fake Store API, contemplando duas funcionalidades: 
        Na primeira funcionalidade da Home-Page, você deve mostrar uma lista de produtos obedecendo os seguintes requisitos:
            para cada produto deve ser exibidos um mínimo de três (3) dados textuais obtidos por meio da API que descrevam sucintamente o referido item (Ex: nome, data de liberação, rating, etc);
            para cada produto, deve ser exibida uma imagem ilustrativa;
            para cada produto, deve haver um link que leve o usuário para uma Página de Detalhes (detalhes.html) que exibirá mais informações sobre o produto em questão. O id do produto, obtido via API deve ser passado como parâmetro na URL  da página de detalhes conforme mostrado nas aulas síncronas realizadas na Semana 11. 
        Na segunda funcionalidade da Home-Page, você deve utilizar as categorias para filtrar produtos ou oferece alguma navegação com base nesta informação. .
    o site deve apresentar uma Página de pesquisa (pesquisa.html) de produtos ou uma funcionalidade integrada ao cabeçalho da home-page, que permita ao usuário informar um texto e obter, como resultado da pesquisa, a lista de produtos associados a partir da Fake Store API. 
    Na página de resultados da pesquisa, devem ser obedecidos os seguintes requisitos:
        o resultado da pesquisa poderá ser paginado ou não;
        o resultado deve mostrar uma lista de produtos tal qual a home-page com imagem e textos que descrevam os produtos retornados;
        na apresentação de cada produto do resultado da pesquisa deve ter um link que, ao ser acionado, leve o usuário para a Página de Detalhes (detalhes.html) onde são exibidas mas informações sobre o produto.
