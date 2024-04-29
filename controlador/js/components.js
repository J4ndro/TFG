const pages = [Home, Alimentos, MiPerfil, Suscripcion];

const components = [Header, Banner, Stats, AsidePerfil];

export { pages, components };

//!! PAGES
function Home() {
  return {
    view: () => [m(Header), m(Banner), m(Stats)],
  };
}

function Alimentos() {
  return {
    view: () => [m(Header)],
  };
}

function MiPerfil() {
  return {
    view: () => [m(Header), m(AsidePerfil)],
  };
}

function Suscripcion() {
  return {
    view: () => [m(Header), m(Suscripciones)],
  };
}
//!! COMPONENTS
function Header() {
  return {
    model: {
      topHeader:
        " Oferta Black Friday: Ahorra hasta un 60% de descuento con el codigo BLACKFRIDAY ",
      itemsMenu: [
        {
          href: "#",
          item: {
            label: "Home",
            options: [],
          },
        },
        /*         {
          href: null,
          item: {
            label: "Tienda",
            options: [
              {
                label: "Productos",
                items: [
                  { label: "Producto v1", href: "#" },
                  { label: "Producto v2", href: "#" },
                  { label: "Video", href: "#" },
                  { label: "Agrupado", href: "#" },
                  { label: "Variable", href: "#" },
                  { label: "Externo", href: "#" },
                  { label: "Tarjeta Regalo", href: "#" },
                  { label: "Rebajas", href: "#" },
                  { label: "Nuevo", href: "#" },
                  { label: "Sold out", href: "#" },
                ],
              },
              {
                label: "Catalogo",
                items: [
                  { label: "Catalogo v1", href: "#" },
                  { label: "Catalogo v2", href: "#" },
                  { label: "Filtro Izq", href: "#" },
                  { label: "Filtro Dch", href: "#" },
                ],
              },
              {
                label: "Catalogo Columnas",
                items: [
                  { label: "2 columnas", href: "#" },
                  { label: "3 columnas", href: "#" },
                  { label: "4 columnas", href: "#" },
                  { label: "5 columnas", href: "#" },
                ],
              },
              {
                label: "Paginas tienda",
                items: [
                  { label: "Mi cuenta", href: "#" },
                  { label: "Lista deseados", href: "#" },
                  { label: "Carro", href: "#" },
                  { label: "Pagar", href: "#" },
                  { label: "Localizar tu pedido", href: "#" },
                ],
              },
            ],
          },
        }, */
        {
          href: "#!/Alimentos",
          item: {
            label: "Alimentos",
            options: [],
          },
        },
        {
          href: "#",
          item: {
            label: "Rutina",
            options: [
              { label: "Ejercicios", items: "", href: "#" },
              { label: "Comidas", items: "", href: "#" },
            ],
          },
        },
        {
          href: "#!MiPerfil",
          item: {
            label: "Mi Perfil",
            options: [
              { label: "Configuracion", items: "", href: "#" },
              { label: "Historial", items: "", href: "#" },
              { label: "Estadisticas", items: "", href: "#" },
              { label: "Perfil", items: "", href: "#!MiPerfil" },
            ],
          },
        },
        {
          href: "#",
          item: {
            label: "Otros",
            options: [
              { label: "Contacto", items: "", href: "#" },
              { label: "Proximamente", items: "", href: "#" },
              { label: "Envios y devoluciones", items: "", href: "#" },
              { label: "FAQ", items: "", href: "#" },
              { label: "Terminos y Conidiciones", items: "", href: "#" },
              { label: "Politica y privacidad", items: "", href: "#" },
            ],
          },
        },
        {
          href: "#!Suscripcion",
          item: {
            label: "Mi Suscripcion",
            options: [],
          },
        },
      ],
    },
    view: () => [
      m(
        "div",
        {
          style: {
            height: "81px",
            left: "0px",
            padding: "0px 50px",
            position: "relative",
            width: "100%",
            "z-index": "1",
            "box-sizing": "border-box",
            margin: "0px",
            outline: "rgb(0, 0, 0) none 0px",
            transition: "all 0.4s ease",
            display: "flex",
            justifyContent: "space-between",
          },
        },
        [
          m(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
              },
            },
            m("img", {
              src: "images/logo.png",
              style: {
                width: "70px",
                height: "70px",
              },
            })
          ),
          m(
            "ul",
            {
              onmouseenter: (e) => {
                e.target.style.background = "white";
                e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
              },
              onmouseleave: (e) => {
                e.target.style.background = null;
                e.target.style.boxShadow = null;
              },
              style: {
                "-webkit-box-align": "center",
                "align-items": "center",
                display: "flex",
                "-webkit-box-pack": "center",
                height: "82px",
                "justify-content": "center",
                "margin-bottom": "-1px",
                "box-sizing": "border-box",
                margin: "0px 0px -1px",
                padding: "0px",
                outline: "rgb(0, 0, 0) none 0px",
                transition: "all 0.4s ease",
                borderRadius: "33px",
              },
            },
            [this.state.model.itemsMenu.map((i) => m(Menu, i))]
          ),
          m(
            "div",
            {
              style: {
                "-webkit-box-align": "center",
                "align-items": "center",
                display: "flex",
                position: "relative",
                "z-index": "10",
                "box-sizing": "border-box",
                margin: "0px",
                padding: "0px",
                outline: "rgb(0, 0, 0) none 0px",
                borderRadius: "33px",
                transition: "all 0.4s ease",
              },
              onmouseenter: (e) => {
                e.target.style.background = "white";
                e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
              },
              onmouseleave: (e) => {
                e.target.style.background = null;
                e.target.style.boxShadow = null;
              },
            },
            [
              m(
                "a",
                {
                  style: {
                    "margin-right": "20px",
                    "margin-left": "33px",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out 0s",
                    "align-items": "center",
                    display: "flex",
                    "box-sizing": "border-box",
                    padding: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                  },
                },
                m("img", {
                  src: "images/search.svg",
                  alt: "Search icon",
                  style: {
                    "border-style": "none",
                    display: "block",
                    "box-sizing": "border-box",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                  },
                })
              ),

              m(
                "a",
                {
                  style: {
                    "margin-right": "33px",
                    "margin-left": "20px",
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out 0s",
                    "align-items": "center",
                    display: "flex",
                    "box-sizing": "border-box",
                    padding: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                  },
                },
                m("img", {
                  src: "images/search-2.svg",
                  alt: "Authorization icon",
                  style: {
                    "border-style": "none",
                    display: "block",
                    "box-sizing": "border-box",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                  },
                })
              ),
            ]
          ),
        ]
      ),
    ],
  };

  function Menu() {
    const dropdownState = {
      isVisible: false,
      toggleVisibility: function () {
        dropdownState.isVisible = !dropdownState.isVisible;
      },
    };
    return {
      view: ({ attrs }) => [
        m(
          "li",
          {
            onmouseenter: () => {
              dropdownState.isHovered = true; // Cuando el mouse entra en el menú desplegable
              attrs.item.isDropdownVisible = true;
            },
            onmouseleave: () => {
              dropdownState.isHovered = false;
              // Cerrar el menú desplegable solo si el mouse no está dentro de él
              if (!dropdownState.isHovered) {
                dropdownState.isVisible = false;
                attrs.item.isDropdownVisible = false;
              }
            },
            style: {
              "margin-right": "40px",
              "margin-left": "40px",
              position: "relative",
              height: "82px",
              "list-style": "outside none none",
              "align-items": "center",
              display: "flex",
              "box-sizing": "border-box",
              padding: "0px",
              outline: "rgb(0, 0, 0) none 0px",
            },
          },
          [
            m(
              "a",
              {
                href: attrs.href,
                onmouseenter: (e) => {
                  e.target.style.textDecoration = "underline";
                },
                onmouseleave: (e) => {
                  e.target.style.textDecoration = "none";
                },
                style: {
                  "border-bottom": "1px solid rgba(0, 0, 0, 0)",
                  color: "rgb(0, 0, 0)",
                  "font-size": "15px",
                  "font-style": "normal",
                  "font-weight": "700",
                  "letter-spacing": "0.6px",
                  "line-height": "19px",
                  padding: "3px 0px",
                  "text-align": "center",
                  transition: "all 0.2s ease-in-out 0s",
                  "background-color": "rgba(0, 0, 0, 0)",
                  "text-decoration": "none solid rgb(0, 0, 0)",
                  "box-sizing": "border-box",
                  margin: "0px",
                  outline: "rgb(0, 0, 0) none 0px",
                },
              },
              [
                attrs.item.label,
                m("img", {
                  src: "https://firstsight.design/levre/mono/wp-content/themes/levre/assets/img/chevron.svg",
                  alt: "Chevron icon",
                  style: {
                    display: "none",
                    "border-style": "none",
                    "box-sizing": "border-box",
                    margin: "0px",
                    padding: "0px",
                    outline: "rgb(0, 0, 0) none 0px",
                  },
                }),
              ]
            ),
            attrs.item.options.length > 0
              ? m(
                  "ul",
                  {
                    onmouseenter: () => {
                      dropdownState.isHovered = true;
                    },
                    onmouseleave: () => {
                      dropdownState.isHovered = false;
                      if (!dropdownState.isHovered) {
                        dropdownState.isVisible = false;
                        attrs.item.isDropdownVisible = false;
                      }
                    },
                    style: {
                      /* display:
                        dropdownState.isVisible || dropdownState.isHovered
                          ? "flex"
                          : "none", */
                      display: "flex",
                      flexDirection:
                        attrs.item.label === "Tienda" ? "row" : "column",
                      "background-color": "rgb(255, 255, 255)",
                      left: "-16px",
                      borderRadius: "33px",
                      opacity:
                        dropdownState.isVisible || dropdownState.isHovered
                          ? "1"
                          : "0",

                      transform:
                        dropdownState.isVisible || dropdownState.isHovered
                          ? "scale(1)"
                          : "scale(0)",

                      margin: "auto",
                      padding: "0px",
                      position: "absolute",
                      top: "99%",
                      transition: "opacity 0.4s ease-in-out 0s",
                      width: "200px",
                      "z-index": "10",
                      "box-sizing": "border-box",
                      margin: "0px",
                      outline: "rgb(0, 0, 0) none 0px",
                    },
                  },
                  [
                    attrs.item.options.map((option, index) =>
                      m(
                        "ul",
                        {
                          onmouseenter: () => {
                            attrs.item.isDropdownVisible = true;
                          },
                          onmouseleave: () => {
                            attrs.item.isDropdownVisible = false;
                          },
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            "border-bottom-left-radius": "33px",
                            "border-bottom-right-radius": "33px",
                            // padding: "0px",
                            left: "0px",
                            padding: "16px",
                            margin: "0px",
                            "max-width": "100%",
                            "min-width": "100%",
                            "padding-bottom": "0px",
                            width: "100% !important",
                            display: "flex",
                            "flex-wrap": "wrap",
                            "flex-direction": "column",
                            position: "relative",
                            "background-color": "rgb(255, 255, 255)",
                            "margin-left": "auto",
                            "margin-right": "auto",
                            right: "0px",
                            transition: "all 0.2s ease-in-out 0s",
                            "z-index": "10",
                            "box-sizing": "border-box",
                            outline: "rgb(0, 0, 0) none 0px",
                          },
                        },
                        option.items.length > 0
                          ? m(
                              "ul",
                              {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                  padding: "0px",
                                  left: "0px",
                                  margin: "0px",
                                  "max-width": "100%",
                                  "min-width": "100%",
                                  "padding-bottom": "0px",
                                  width: "100% !important",
                                  display: "flex",
                                  "flex-wrap": "wrap",
                                  "flex-direction": "column",
                                  position: "relative",
                                  "background-color": "rgb(255, 255, 255)",
                                  "margin-left": "auto",
                                  "margin-right": "auto",
                                  right: "0px",
                                  transition: "all 0.2s ease-in-out 0s",
                                  "z-index": "10",
                                  "box-sizing": "border-box",
                                  outline: "rgb(0, 0, 0) none 0px",
                                },
                              },
                              m(
                                "li",
                                {
                                  style: {
                                    "margin-right": "0px",
                                    "margin-bottom": "20px",
                                    width: "100%",
                                    height: "20px",
                                    "list-style": "outside none none",
                                    "-webkit-box-align": "center",
                                    "align-items": "center",
                                    display: "flex",
                                    "box-sizing": "border-box",
                                    padding: "0px",
                                    outline: "rgb(0, 0, 0) none 0px",
                                  },
                                },
                                m(
                                  "a",
                                  {
                                    href: "#",
                                    style: {
                                      fontWeight:
                                        index === 0 ? "bold" : "normal",
                                      "-webkit-box-pack": "justify",
                                      border: "0px none rgb(0, 0, 0)",
                                      display: "flex",
                                      "font-size": "14px",
                                      "font-style": "normal",
                                      "font-weight": "500",
                                      "justify-content": "space-between",
                                      "letter-spacing": "0.28px",
                                      "line-height": "20px",
                                      padding: "0px 16px",
                                      width: "100%",
                                      "text-align": "left",
                                      "border-bottom": "0px none rgb(0, 0, 0)",
                                      color: "rgb(0, 0, 0)",
                                      transition: "all 0.2s ease-in-out 0s",
                                      "background-color": "rgba(0, 0, 0, 0)",
                                      "text-decoration":
                                        "none solid rgb(0, 0, 0)",
                                      "box-sizing": "border-box",
                                      margin: "0px",
                                      outline: "rgb(0, 0, 0) none 0px",
                                      cursor: "pointer",
                                    },
                                    onmouseenter: (e) => {
                                      e.target.style.textDecoration =
                                        "underline";
                                    },
                                    onmouseleave: (e) => {
                                      e.target.style.textDecoration = "none";
                                    },
                                  },
                                  option.label
                                )
                              ),
                              option.items.map((item) =>
                                m(
                                  "li",
                                  {
                                    style: {
                                      "margin-right": "0px",
                                      "margin-bottom": "20px",
                                      width: "100%",
                                      height: "20px",
                                      "list-style": "outside none none",
                                      "-webkit-box-align": "center",
                                      "align-items": "center",
                                      display: "flex",
                                      "box-sizing": "border-box",
                                      padding: "0px",
                                      outline: "rgb(0, 0, 0) none 0px",
                                    },
                                  },
                                  m(
                                    "a",
                                    {
                                      href: "#",
                                      style: {
                                        "-webkit-box-pack": "justify",
                                        border: "0px none rgb(0, 0, 0)",
                                        display: "flex",
                                        "font-size": "14px",
                                        "font-style": "normal",
                                        "font-weight": "500",
                                        "justify-content": "space-between",
                                        "letter-spacing": "0.28px",
                                        "line-height": "20px",
                                        padding: "0px 16px",
                                        width: "100%",
                                        "text-align": "left",
                                        "border-bottom":
                                          "0px none rgb(0, 0, 0)",
                                        color: "rgb(0, 0, 0)",
                                        transition: "all 0.2s ease-in-out 0s",
                                        "background-color": "rgba(0, 0, 0, 0)",
                                        "text-decoration":
                                          "none solid rgb(0, 0, 0)",
                                        "box-sizing": "border-box",
                                        margin: "0px",
                                        outline: "rgb(0, 0, 0) none 0px",
                                        cursor: "pointer",
                                      },
                                      onmouseenter: (e) => {
                                        e.target.style.textDecoration =
                                          "underline";
                                      },
                                      onmouseleave: (e) => {
                                        e.target.style.textDecoration = "none";
                                      },
                                    },
                                    item.label
                                  )
                                )
                              )
                            )
                          : m(
                              "li",
                              {
                                style: {
                                  "margin-right": "0px",
                                  "margin-bottom": "20px",
                                  width: "100%",
                                  height: "20px",
                                  "list-style": "outside none none",
                                  "align-items": "center",
                                  display: "flex",
                                  "box-sizing": "border-box",
                                  padding: "0px",
                                  outline: "rgb(0, 0, 0) none 0px",
                                },
                              },
                              m(
                                "a",
                                {
                                  style: {
                                    border: "0px none rgb(0, 0, 0)",
                                    display: "flex",
                                    "font-size": "14px",
                                    "font-style": "normal",
                                    "font-weight": "500",
                                    "justify-content": "space-between",
                                    "letter-spacing": "0.28px",
                                    "line-height": "20px",
                                    padding: "0px 16px",
                                    width: "100%",
                                    "text-align": "left",
                                    "border-bottom": "0px none rgb(0, 0, 0)",
                                    color: "rgb(0, 0, 0)",
                                    transition: "all 0.2s ease-in-out 0s",
                                    "background-color": "rgba(0, 0, 0, 0)",
                                    "text-decoration":
                                      "none solid rgb(0, 0, 0)",
                                    margin: "0px",
                                    outline: "rgb(0, 0, 0) none 0px",
                                    cursor: "pointer",
                                  },
                                  onmouseenter: (e) => {
                                    e.target.style.textDecoration = "underline";
                                  },
                                  onmouseleave: (e) => {
                                    e.target.style.textDecoration = "none";
                                  },
                                },
                                option.label
                              )
                            )
                      )
                    ),
                  ]
                )
              : null,
          ]
        ),
      ],
    };
  }
}

function Banner() {
  return {
    view: () => [
      m(
        "div",
        {
          class: "carousel slide col-12 mx-auto px-auto h-10",
          "data-bs-ride": "carousel",
          style: {
            height: "500px",
          },
        },
        m(
          "div",
          {
            class: "carousel-inner h-100 bg-dark",
          },
          m(
            "div",
            {
              class:
                "carousel-item justify-content-center align-items-center active h-100",
            },
            m("img", {
              class: "img-fluid col-12 h-120 ",
              src: "images/carrusel1.jpg",
            })
          ),
          m(
            "div",
            {
              class:
                "carousel-item justify-content-center align-items-flex-start h-100",
            },
            m("img", {
              class: "img-fluid col-12 h-120 ",
              src: "images/carrusel2.jpg",
            })
          ),
          m(
            "div",
            {
              class:
                "carousel-item justify-content-center align-items-center h-100",
            },
            m("img", {
              class: "img-fluid col-12 h-120 ",
              src: "images/carrusel3.jpg",
            })
          )
        )
      ),
    ],
  };
}

function Stats() {
  let aria1 = true;
  let backgroundColor = "white"; // Estado inicial del fondo

  return {
    view: () => [
      m(
        "div",
        {
          class: "card text-center",
        },
        m(
          "div",
          {
            class: "card-header",
          },
          m(
            "ul",
            {
              class: "nav nav-tabs card-header-tabs",
            },
            [
              m(
                "li",
                {
                  class: "nav-item",
                },
                m(
                  "a",
                  {
                    onclick: (e) => {
                      e.target.setAttribute("aria-selected", aria1);
                    },
                    class: "nav-link active",
                    href: "#",
                    id: "home-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#home",
                    type: "button",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true",
                  },
                  "Macros"
                )
              ),
              m(
                "li",
                {
                  class: "nav-item",
                },
                m(
                  "a",
                  {
                    onclick: (e) => {
                      e.target.setAttribute("aria-selected", aria1);
                    },
                    class: "nav-link",
                    href: "#",
                    id: "profile-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#profile",
                    type: "button",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false",
                  },
                  "Estadisticas"
                )
              ),
            ]
          )
        ),
        m(
          "div",
          {
            class: "card-body",
          },
          m(
            "div",
            {
              class: "tab-content",
              id: "myTabContent",
            },
            m(
              "div",
              {
                class: "tab-pane fade show active py-5 h1",
                id: "home",
                role: "tabpanel",
                "aria-labelledby": "home-tab",
              },
              "Aqui estan las macros",
              m(
                "div",
                {
                  class: "progress my-5",
                  style: {
                    height: "100px",
                  },
                },
                [
                  m(
                    "div",
                    {
                      class: "progress-bar h4",
                      "aria-valuenow": "33",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      style: {
                        width: "33%",
                        margin: 0,
                      },
                    },
                    "Proteinas"
                  ),
                  m(
                    "div",
                    {
                      class: "progress-bar bg-success h4",
                      "aria-valuenow": "13",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      style: {
                        width: "13%",
                        margin: 0,
                      },
                    },
                    "Carbohidratos"
                  ),
                  m(
                    "div",
                    {
                      class: "progress-bar bg-info h4",
                      "aria-valuenow": "23",
                      "aria-valuemin": "0",
                      "aria-valuemax": "100",
                      style: {
                        width: "23%",
                        margin: 0,
                      },
                    },
                    "Grasas"
                  ),
                ]
              ),
              m(
                "a",
                {
                  class:
                    "btn btn-primary d-flex align-items-center justify-content-center mx-auto w-25",
                  href: "#",
                  style: {
                    width: "100%",
                    height: "55px",
                    marginTop: "20px",
                  },
                },
                "Ir al perfil"
              )
            ),
            m(
              "div",
              {
                class: "tab-pane fade show py-5",
                id: "profile",
                role: "tabpanel",
                "aria-labelledby": "profile-tab",
              },
              "Aqui estan las stats"
            )
          )
        )
      ),
    ],
  };
}

function AsidePerfil() {
  return {
    view: () => [
      m(
        "div",
        {
          class: "col-12",
        },
        [
          m("div", {
            class: "col-4",
          }),
          m("div", {
            class: "col-8",
          }),
        ]
      ),
    ],
  };
}

function Suscripciones() {
  return {
    view: () => [
      m(".pricing-header.p-3.pb-md-4.mx-auto.text-center.col-8", [
        m("h1.display-4.fw-normal", "Suscripcion"),
        m(
          "p.fs-5.text-muted",
          "Podras suscribirte a nuestro servicio para poder acceder a nuestro contenido gratuitamente o pagando una cuota mensual."
        ),
      ]),
      m(".row.row-cols-1.row-cols-md-3.mb-3.text-center.mx-auto.col-8", [
        m(".col", [
          m(".card.mb-4.rounded-3.shadow-sm", [
            m(".card-header.py-3", [m("h4.my-0.fw-normal", "Plan Gratuito")]),
            m(".card-body", [
              m(
                "h1.card-title.pricing-card-title",
                "$0",
                m("small.text-muted.fw-light", "/mes")
              ),
              m("ul.list-unstyled.mt-3.mb-4", [
                m("li", "Acceso a tu perfil"),
                m("li", "Seguimiento de tus alimentos"),
                m("li", "Listado de menus"),
                m("li", "Help center access"),
              ]),
              m(
                "button.w-100.btn.btn-lg.btn-outline-primary",
                {
                  onclick: function () {
                    /* Handle sign up for free click event */
                  },
                },
                "Tu plan actual"
              ),
            ]),
          ]),
        ]),
        m(".col", [
          m(".card.mb-4.rounded-3.shadow-sm", [
            m(".card-header.py-3", [m("h4.my-0.fw-normal", "Vita Pro")]),
            m(".card-body", [
              m(
                "h1.card-title.pricing-card-title",
                "$15",
                m("small.text-muted.fw-light", "/mes")
              ),
              m("ul.list-unstyled.mt-3.mb-4", [
                m("li", "20 users included"),
                m("li", "10 GB of storage"),
                m("li", "Priority email support"),
                m("li", "Help center access"),
              ]),
              m(
                "button.w-100.btn.btn-lg.btn-primary",
                {
                  onclick: function () {
                    /* Handle get started click event */
                  },
                },
                "Get started"
              ),
            ]),
          ]),
        ]),
        m(".col", [
          m(".card.mb-4.rounded-3.shadow-sm.border-primary", [
            m(".card-header.py-3.text-white.bg-primary.border-primary", [
              m("h4.my-0.fw-normal", "Vita Family"),
            ]),
            m(".card-body", [
              m(
                "h1.card-title.pricing-card-title",
                "$29",
                m("small.text-muted.fw-light", "/mes")
              ),
              m("ul.list-unstyled.mt-3.mb-4", [
                m("li", "30 users included"),
                m("li", "15 GB of storage"),
                m("li", "Phone and email support"),
                m("li", "Help center access"),
              ]),
              m(
                "button.w-100.btn.btn-lg.btn-primary",
                {
                  onclick: function () {
                    /* Handle contact us click event */
                  },
                },
                "Contact us"
              ),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}
