// let images = [
//   "imgs/sasuke.jpg",
//   "imgs/Naruto.webp",
//   "imgs/obito.jpg",
//   "imgs/kakashi.jpg",
// ];
// let index = 0;

// console.log(images);
const menus = [
  {
    title: "Home",
    linkMain: "/Home",
    submenu: [
      { titleSub: "Sub Home 1", linkSub: "/sub-home-1" },
      { titleSub: "Sub Home 2", linkSub: "/sub-home-2" },
      { titleSub: "Sub Home 3", linkSub: "/sub-home-3" },
    ],
  },
  {
    title: "Sobre",
    linkMain: "/Sobre",
    submenu: [
      { titleSub: "Sub Sobre 1", linkSub: "/sub-Sobre-1" },
      { titleSub: "Sub Sobre 2", linkSub: "/sub-Sobre-2" },
      { titleSub: "Sub Sobre 3", linkSub: "/sub-Sobre-3" },
    ],
  },
  {
    title: "Contato",
    linkMain: "/Contato",
    // submenu: ["Sub Contato 1", "Sub Contato 2", "Sub Contato 3"],
  },
  {
    title: "Suporte",
    linkMain: "/Suporte",
    // submenu: ["Sub Suporte 1", "Sub Suporte 2", "Sub Suporte 3"],
  },
  {
    title: "Painel",
    linkMain: "/Painel",
    // submenu: ["Sub Painel 1", "Sub Painel 2", "Sub Painel 3"],
  },
];

//Percorrendo a varivel MENUS e trazendo por parametros cada item e a posição dos mesmos
menus.forEach((menu, index) => {
  console.log(menu, index);
  //Criando o li de primeiro nivel
  const liMain = document.createElement("li");
  //Criando tag a que fica dentro do li de primeiro nivel
  const tagA = document.createElement("a");

  //Adiconando o link do objeto no href da tag a
  tagA.setAttribute("href", menu.linkMain);

  //Adicionando o title do objeto como conteudo da tag a
  tagA.innerHTML = menu.title;

  //Adiconando a tag no li de primeiro nivel
  liMain.appendChild(tagA);

  //Verificando se a propriedade submenu é um array
  if (Array.isArray(menu.submenu)) {
    //Criando ul para submenu
    const ulSubmenu = document.createElement("ul");
    //Adicionando ul submenu ao li de primeiro nivel
    liMain.appendChild(ulSubmenu);

    //Percorrendo a quantidade de itens dentro do submenu
    for (let i = 0; i < menu.submenu.length; i++) {
      console.log(menu.submenu[i].titleSub);

      //Criando li para submenu
      const liSubmenu = document.createElement("li");
      //Criando tag a para li do submenu
      const tagASub = document.createElement("a");

      //Adicionando o titlesub do objeto como conteudo da tag a
      tagASub.innerHTML = menu.submenu[i].titleSub;

      //Adiconando o linksub do objeto no href da tag a
      tagASub.setAttribute("href", menu.submenu[i].linkSub);

      //Adiconando tag a no li de submenu
      liSubmenu.appendChild(tagASub);

      //Adiconando tag li de submenu ao ul
      ulSubmenu.appendChild(liSubmenu);
    }
  }
  //Adicionando o li de primeiro nivel ao ul-main do html
  document.querySelector("#ul-main").appendChild(liMain);
});
