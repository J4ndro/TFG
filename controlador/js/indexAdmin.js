import { components, pages } from "./componentsAdmin.js";
import { CatalogoComponentes } from "./util.js";

const routes = Object.assign(
  {
    "/Catalogo": {
      view: () =>
        m(CatalogoComponentes, {
          components,
          pages,
        }),
    },
    "/Menu": {
      view: () => m(Menu),
    },
  },

  /// Añadimos las propiedades dinámicas

  ...pages.map((p) => ({
    ["/" + p.name]: {
      view: () => m(p),
      // view:()=>m(Menu,m(p))
    },
  })),

  {
    "/": {
      onmatch: (e) => console.log(e),
      view: () => m(pages[0]), // La primera página es la página por defecto
    },
  }
);

m.route(document.body, "/", routes);
