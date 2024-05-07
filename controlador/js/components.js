const pages = [Home, Alimentos, Perfil, Suscripcion];

const components = [Header, Banner, Stats, PerfilSection];

export { pages, components };

//!! PAGES
function Home() {
  return {
    view: () => [m(Header), m(Banner), m(Stats), m(Seccion)],
  };
}

function Alimentos() {
  return {
    view: () => [m(Header), m(Seccion)],
  };
}

function Perfil() {
  return {
    view: () => [m(Header), m(PerfilSection)],
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
      itemsMenu: [
        {
          href: "#",
          item: {
            label: "Home",
            options: [],
          },
        },

        {
          href: "#!Alimentos",
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
              src: "../images/logo.png",
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
                  onclick: () => {
                    window.location.href = "../controlador/login/logout.php";
                  },
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
                  src: "../images/search.svg",
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
                  href: "#!Perfil",
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
                  src: "../images/search-2.svg",
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
              src: "../images/carrusel1.jpg",
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
              src: "../images/carrusel2.jpg",
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
              src: "../images/carrusel3.jpg",
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

function PerfilSection() {
  return {
    view: () => [
      m("section", { style: "background-color: #eee;" }, [
        m("div", { class: "container py-5" }, [
          m("div", { class: "row" }, [
            m("div", { class: "col" }, [
              m(
                "nav",
                {
                  "aria-label": "breadcrumb",
                  class: "bg-body-tertiary rounded-3 p-3 mb-4",
                },
                [
                  m("ol", { class: "breadcrumb mb-0" }, [
                    m("li", { class: "breadcrumb-item" }, [
                      m("a", { href: "#" }, "Home"),
                    ]),
                    m("li", { class: "breadcrumb-item" }, [
                      m("a", { href: "#" }, "Perfil"),
                    ]),
                    m(
                      "li",
                      {
                        class: "breadcrumb-item active",
                        "aria-current": "page",
                      },
                      "Mi Perfil"
                    ),
                  ]),
                ]
              ),
            ]),
          ]),
          m("div", { class: "row" }, [
            m("div", { class: "col-lg-4" }, [
              m("div", { class: "card mb-4" }, [
                m("div", { class: "card-body text-center" }, [
                  m("img", {
                    src: "../images/perfil.jpg",
                    alt: "avatar",
                    class: "rounded-circle img-fluid",
                    style: "width: 150px;",
                  }),
                  m("h5", { class: "my-3" }, "Juan Muñoz"),
                  m("p", { class: "text-muted mb-1" }, "Id: 1"),

                  m("div", { class: "d-flex justify-content-center mb-2" }, [
                    m(
                      "button",
                      {
                        type: "button",
                        "data-mdb-button-init": "",
                        "data-mdb-ripple-init": "",
                        class: "btn btn-primary",
                      },
                      "Modificar"
                    ),
                    m(
                      "button",
                      {
                        type: "button",
                        "data-mdb-button-init": "",
                        "data-mdb-ripple-init": "",
                        class: "btn btn-danger ms-1",
                      },
                      "Eliminar Cuenta"
                    ),
                  ]),
                ]),
              ]),
              m("div", { class: "card mb-4 mb-lg-0" }, [
                m("div", { class: "card-body p-0" }, [
                  m("ul", { class: "list-group list-group-flush rounded-3" }, [
                    m(
                      "li",
                      {
                        class:
                          "list-group-item d-flex justify-content-between align-items-center p-3",
                      },
                      [
                        m("i", { class: "fas fa-globe fa-lg text-warning" }),
                        m("p", { class: "mb-0" }, "Altura: 1,80cm"),
                      ]
                    ),
                    m(
                      "li",
                      {
                        class:
                          "list-group-item d-flex justify-content-between align-items-center p-3",
                      },
                      [
                        m("i", {
                          class: "fab fa-github fa-lg",
                          style: "color: #333333;",
                        }),
                        m("p", { class: "mb-0" }, "Peso: 80kg"),
                      ]
                    ),
                    m(
                      "li",
                      {
                        class:
                          "list-group-item d-flex justify-content-between align-items-center p-3",
                      },
                      [
                        m("i", {
                          class: "fab fa-twitter fa-lg",
                          style: "color: #55acee;",
                        }),
                        m("p", { class: "mb-0" }, "Edad: 21 años"),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
            m("div", { class: "col-lg-8" }, [
              m("div", { class: "card mb-4" }, [
                m("div", { class: "card-body" }, [
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Nombre completo"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("p", { class: "text-muted mb-0" }, "Juan Muñoz"),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Email"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m(
                        "p",
                        { class: "text-muted mb-0" },
                        "juanmuñoz@gmail.com"
                      ),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Numero"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("p", { class: "text-muted mb-0" }, "634-545-666"),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Direccion"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m(
                        "p",
                        { class: "text-muted mb-0" },
                        "Calle Alcala derecha 1"
                      ),
                    ]),
                  ]),
                ]),
              ]),
              m("div", { class: "row" }, [
                m("div", { class: "col-md-6" }, [
                  m("div", { class: "card mb-4 mb-md-0" }, [
                    m("div", { class: "card-body" }, [
                      m("p", { class: "mb-4" }, [
                        m(
                          "span",
                          { class: "text-primary font-italic me-1" },
                          "Macros"
                        ),
                        " Actuales ",
                      ]),
                      m(
                        "p",
                        { class: "mb-1", style: "font-size: .77rem;" },
                        "Calorias"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 80%",
                            "aria-valuenow": "80",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Proteinas"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 72%",
                            "aria-valuenow": "72",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Carbohidratos"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 89%",
                            "aria-valuenow": "89",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Grasas"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 55%",
                            "aria-valuenow": "55",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                m("div", { class: "col-md-6" }, [
                  m("div", { class: "card mb-4 mb-md-0" }, [
                    m("div", { class: "card-body" }, [
                      m("p", { class: "mb-4" }, [
                        m(
                          "span",
                          { class: "text-primary font-italic me-1" },
                          "Macros"
                        ),
                        " Objetivo ",
                      ]),
                      m(
                        "p",
                        { class: "mb-1", style: "font-size: .77rem;" },
                        "Calorias"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 80%",
                            "aria-valuenow": "80",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Proteinas"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 72%",
                            "aria-valuenow": "72",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Carbohidratos"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 89%",
                            "aria-valuenow": "89",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                      m(
                        "p",
                        { class: "mt-4 mb-1", style: "font-size: .77rem;" },
                        "Grasas"
                      ),
                      m(
                        "div",
                        { class: "progress rounded", style: "height: 5px;" },
                        [
                          m("div", {
                            class: "progress-bar",
                            role: "progressbar",
                            style: "width: 55%",
                            "aria-valuenow": "55",
                            "aria-valuemin": "0",
                            "aria-valuemax": "100",
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
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

function Seccion() {
  return {
    model: {
      menus: [{}, {}, {}],
      items: [{}, {}, {}, {}, {}],
    },
    view: () => [
      this.state.model.menus.map((c) =>
        m(
          "div",
          {
            class: "py-5 px-5 col-12 d-flex flex-column", // Agregué flex-column para que los elementos se apilen verticalmente
          },
          m(
            "p",
            {
              class: "h1 col-12 py-3",
              style: {
                borderBottom: "1px solid rgba(0,0,0,0.2)",
              },
            },
            "Menu 1"
          ),
          // Aquí empieza el div para las cards
          m(
            "div",
            { class: "col-12 mt-5 d-flex" },
            this.state.model.items.map((i) =>
              m(
                "div",
                {
                  class: "card",
                  style: "width: 18rem;",
                },
                [
                  m("img", {
                    class: "card-img-top",
                    src: "../images/arroz.jpg", // Aquí inserta la ruta de la imagen
                    alt: "Card image cap",
                  }),
                  m("div", { class: "card-body" }, [
                    m("h5", { class: "card-title" }, "Arroz con Tomate"),
                    m(
                      "p",
                      { class: "card-text" },
                      "Esta es una receta simple de un arroz a la cubana"
                    ),
                  ]),
                  m("ul", { class: "list-group list-group-flush" }, [
                    m("li", { class: "list-group-item" }, "Calorias: 457/kcal"),
                    m("li", { class: "list-group-item" }, "Proteina: 45g/100g"),
                    m(
                      "li",
                      { class: "list-group-item" },
                      "Carbohidratos: 60g/100g"
                    ),
                    m("li", { class: "list-group-item" }, "Grasas: 5g/100g"),
                  ]),
                  m("div", { class: "card-body" }, [
                    m("a", { href: "#", class: "card-link" }, "Modificar"),
                    m("a", { href: "#", class: "card-link" }, "Eliminar"),
                  ]),
                ]
              )
            )
          ) // Aquí termina el div para las cards
        )
      ),
    ],
  };
}
