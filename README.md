<div id='top'>

# Colab Random User

</div>

_[Read it in English](#English)_

O **Colab Random User** é uma página web que lista usuários e seus detalhes em formato de um grid de cards. Esta página foi desenvolvida para um teste técnico de **desenvolvedor FullStack** na [**Colab**](https://www.colab.re/) - uma startup que gera soluções em Tecnologia para gestões públicas colaborativas mais eficientes e transparentes.

Para este teste técnico não foram demandadas tecnologias específicas. A exigência para a vaga foi desenvolver uma _"lista de usuários e seus detalhes em uma interface web"_, utilizando a API do [randomuser.me](https://randomuser.me/) e framework à escolha.

<!-- prettier-ignore -->
| 🪧 Vitrine. Dev |     |
| -------------- | --- |
| ✨ Nome        | **Colab Random User** |
| 🏷️ Tecnologias | React, TypeScript, styled-components, Axios, Vite, [react-masonry-css](https://github.com/paulcollett/react-masonry-css#readme), [lorem-ipsum](https://github.com/knicklabs/lorem-ipsum.js#readme) |
| 🚀 URL         | **https://colab-random-user.vercel.app/** |
| 🎨 Design      | À critério do candidato. |

![](https://raw.githubusercontent.com/sucodelarangela/colab-random-user/main/public/ogimage.png#vitrinedev)

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-3C3C3C?style=for-the-badge&logo=styled-components&logoColor=DB7093">
  <img src="https://img.shields.io/badge/axios-ffffff?style=for-the-badge&logo=axios&logoColor=5A29E4">
  <img src="https://img.shields.io/badge/react masonry css-ffffff?style=for-the-badge&logo=npm&logoColor=CB3837">
  <img src="https://img.shields.io/badge/lorem ipsum-ffffff?style=for-the-badge&logo=npm&logoColor=CB3837">
</div>

## ✅ Tecnologias escolhidas

Por ser uma linguagem exigida na descrição da vaga, optei por desenvolver em **TypeScript** com **React** inicializado com **Vite**, que também é recomendado pela [versão mais recente da documentação do React](https://react.dev/learn/add-react-to-an-existing-project#step-1-set-up-a-modular-javascript-environment).

Para a estilização da aplicação, busquei no site oficial da **Colab** referências de cores e fontes para utilizar no projeto. Todos os estilos foram feitos utilizando **`styled-components`**.

Para gerenciamento da API, utilizei a biblioteca **Axios**, que já lida com cabeçalhos e configurações internamente, exigindo menos código e facilitando a implementação dos métodos de CRUD.

## 🎨 Decisões de estilização

Para uma apresentação mais agradável dos cards em tela, optei pelos seguintes recursos:

- Biblioteca **`react-masonry-css`**, que permite a organização dos cards de maneira a otimizar os espaços e proporções, similar à forma como são exibidos os cards do Pinterest, por exemplo;

- Biblioteca **`lorem-ipsum`** para gerar textos _Lorem_ de maneira aleatória e dinâmica, o que contribuiu para o design mais fluido dos cards;

- Foi criada uma função que gera cores aleatórias dinamicamente para cada card, sendo passada via `props` para o _styled-components_;

- Toda a aplicação está responsiva para celulares, tablets e desktops.

## ♿ Acessibilidade e SEO

- A própria responsividade aplicada à diferentes tamanhos de tela, favorecendo o acesso à aplicação de qualquer fonte;

- Acessibilidade adicionada aos cards, permitindo que usuários de leitores de tela naveguem de card à card através da tecla Tab, com leitura que identifica o usuário de cada card no leitor;

- Estilo específico no rodapé de cada card que **garante o contraste** entre texto e cor do card, tornando o texto mais escuro onde o `background` é claro e vice-versa;

- Botão para carregar mais posts ao final da lista com Loader para acessibilidade visual, como indicativo de ação em andamento;

- Botão para voltar ao topo da página para facilitar a navegação;

- Uso de tags `html` semânticas nos componentes React;

- Uso de tags `meta` para melhor rankeamento do site em _engines_ de busca.

## 💭 Opinião

De maneira geral, foi um desafio muito legal de fazer. Pude utilizar linguagens que gosto e metodologias próprias e com um bom prazo de execução. A questão do prazo foi de suma importância, visto que não havia design proposto para seguir, então pude pensar mais cuidadosamente no layout.

Fiquei surpresa por não haver alguma exigência para criarmos uma API do zero, mas usar uma API pronta para consumo. Por se tratar de uma vaga Fullstack, imaginei que teríamos que fazer algo mais voltado ao back-end. Mas caso fosse uma exigência, optaria por fazê-lo com **Node**, **Express** e **MongoDb** com **Mongoose**, que foi o que utilizei em projetos mais recentes.

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

</div>

## 🔎 Overview

**Colab Random User** is a web page that lists users and their info details in a grid of cards. This page was developed as a code test for a **FullStack developer** position at [**Colab**](https://www.colab.re/) - a startup which creates tech solutions for more transparent and colaborative public management.

No specific stack was required for this code test. The only demand was to develop a _"list of users and their details in a web interface"_, using [randomuser.me](https://randomuser.me/) API and a framework of my choice.

## ✅ Chosen stack

The position description demanded knowledge in **TypeScript** and **React**, so I decided to go with them. The React app was initialized with **Vite**, which is [recommended by React new docs](https://react.dev/learn/add-react-to-an-existing-project#step-1-set-up-a-modular-javascript-environment).

I have also inspected **Colab** official website for styles references, such as font-families, sizes and colors. All the styles were developed with **`styled-components`**.

For API management and CRUD operations, I have decided to go with **Axios** library, which deals automatically with most headers and configs, demands less code writing and makes it easier to implement CRUD.

## 🎨 Styling choices

For a more pleasant presentation of the cards on screen, I have chosen the following resources:

- Library **`react-masonry-css`**, which allows better organisation of the cards, optimizing space and proportions, similar to card exhibition of Pinterest's;

- Library **`lorem-ipsum`** to randomically and dynamically generate _Lorem_ texts, which contributes to a more fluid card design;

- A function to randomically and dynamically generate colors for each card, passed to _styled-components_ through `props`;

- Responsivity for all screen sizes.

## ♿ Accessibility and SEO

- The responsivity itself favors the use of the application in every screen size;

- Accessibility was added to the cards allowing users with screen readers to go from card to card using the Tab key, with a label identifying the user in each card;

- Specific styles in the card footer to **ensure contrasts** between text and card color, making the text darker when the `background` is lighter and vice-versa;

- Button for loading more posts at the end of the list, with a Loader for visual accessibility, indicating action in progress;

- Button to go back to top of the page for better navigation;

- Use of semantic `html` tags in React components;

- Use of `meta` tags for better ranking in search engines.

## 💭 Opinion

In general, it was a very nice test. I was able to use languages and methodologies which I was already used to and comfortable with and I had a very good deadline. This was very important since there was no proposed desing to follow so I could think more carefully about the layout and features.

I was surprised there were no need to create an API from scratch, but to use a ready-to-use API. Since it is a Fullstack opening, I had imagined we would be asked to do some back-end stuff. But in case I needed to, I would have used **Node**, **Express** and **MongoDb** with **Mongoose**, which I have been using lately in more recent projects.

<a href='#top'>🔼 Back to top</a>

---

Developed with 🧡 by [@sucodelarangela 🍊](https://angelacaldas.vercel.app)
