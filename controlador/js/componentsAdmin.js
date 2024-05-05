const pages = [Home];

const components = [Header, ListaUser];

export { pages, components };

//!! PAGES
function Home() {
  return {
    view: () => [m(Header), m(ListaUser)],
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
        /* {
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
        }, */
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

function ListaUser() {
  let showModal = false;
  return {
    view: () => [
      m(
        "button",
        {
          class: "btn btn-primary my-5 mx-5 ",
          onclick: () => {
            showModal = true;
          },
        },
        "AÑADIR"
      ),
      showModal &&
        m(ModalForm, {
          showModal: showModal,
          onClose: function () {
            showModal = false; // Ocultar el modal cuando se llame a onClose
          },
        }),
      m(
        "table",
        {
          class: " table table-striped my-5 px-5 mx-auto  ",
        },
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, "Id Usuario"),
            m("th", { scope: "col" }, "Nombre"),
            m("th", { scope: "col" }, "Apellido"),
            m("th", { scope: "col" }, "Email"),
            m("th", { scope: "col" }, "Administrador"),
            m("th", { scope: "col" }, "Acciones"),
          ])
        ),
        m("tbody", [m(Listar)])
      ),
    ],
  };
}
function Listar() {
  let datos = []; // Inicializa datos como un array vacío

  // Realiza la solicitud fetch y actualiza datos cuando se reciban los datos
  fetch("../controlador/Usuarios/mostrar.php", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      datos = data; // Actualiza datos cuando se reciban los datos
      m.redraw(); // Vuelve a dibujar el componente para mostrar los datos actualizados
    });

  // Devuelve un componente que muestra los datos
  return {
    view: () => [
      datos.map((i) => [
        m(
          "tr",
          m("th", i.id_usuario),
          m("td", i.nombre),
          m("td", i.apellido),
          m("td", i.email),
          m("td", i.administrador),
          m(
            "td",
            m("div", { class: "d-flex justify-content-around" }, [
              m(
                "button",
                {
                  class: "btn btn-success",
                  "data-toggle": "modal",
                  "data-target": "#modalDetalles",
                  onclick: () => {
                    Detalles(i.id_usuario);
                  },
                  onInsert: function (data) {
                    Insertar(data);
                    showModal = false; // Ocultar el modal después de insertar los datos
                  },
                },
                "Detalles"
              ),
              m("button", { class: "btn btn-primary" }, "Modificar"),
              m(
                "button",
                {
                  class: "btn btn-danger",
                  "data-toggle": "modal",
                  "data-target": "#modalDetalles",
                  onclick: () => {
                    Borrar(i.id_usuario);
                  },
                },
                "Eliminar"
              ),
            ])
          )
        ),
      ]),
    ],
  };
}

function Detalles(id) {
  let datos = [];
  fetch("../controlador/Usuarios/detalle.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return response.json();
      }
    })
    .then((data) => {
      // m.redraw();
      console.log(data);
      datos = data;
      console.log(datos);
      // m.redraw();
    });

  return {
    view: () => [
      datos.map((i) =>
        m(
          "div#modalDetalles",
          { tabindex: "-1", class: "modal", role: "dialog" },
          [
            m("div", { class: "modal-dialog", role: "document" }, [
              m("div", { class: "modal-content" }, [
                m("div", { class: "modal-header" }, [
                  m("h5.modal-title", console.log(i.nombre)),
                  m(
                    "button.close",
                    { type: "button", "aria-label": "Close", class: "close" },
                    [m("span", { "aria-hidden": "true" }, "x")]
                  ),
                ]),
                m("div", { class: "modal-body" }, [
                  m("p", "ID:" + i.id_usuario),
                ]),
                m("div", { clas: "modal-footer" }, [
                  m(
                    "button.btn.btn-primary",
                    { type: "button" },
                    "Guardar Cambios"
                  ),
                  m(
                    "button.btn.btn-secondary",
                    { type: "button", "data-dismiss": "modal" },
                    "Cerrar"
                  ),
                ]),
              ]),
            ]),
          ]
        )
      ),
    ],
  };
}

function Borrar(id) {
  fetch("../controlador/Usuarios/borrar.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      window.location.reload();
      m.redraw();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Insertar(data) {
  console.log(data);
  fetch("../controlador/Usuarios/insertar.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      window.location.reload();
      m.redraw();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return {};
}

const ModalForm = {
  view: (vnode) => {
    let nombre = "";
    let apellido = "";
    let email = "";
    let pwd = "";
    let isAdmin = false;

    return m(
      ".modal.fade.show",
      {
        style: {
          display: vnode.attrs.showModal ? "block" : "none",
        },
      },
      [
        m(".modal-dialog", [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Añadir Usuario"),
              m(
                "button.close",
                {
                  "data-dismiss": "modal",
                  ariaLabel: "Close",
                  onclick: function () {
                    vnode.attrs.onClose(); // Llama a la función onClose del padre para cerrar el modal
                  },
                },
                m("span", { "aria-hidden": "true" }, "×")
              ),
            ]),
            m(".modal-body", [
              m(
                "form",
                {
                  onsubmit: function (event) {
                    event.preventDefault(); // Evitar el envío del formulario por defecto
                    // Llamar a la función Insertar con los datos del formulario
                    vnode.attrs.onInsert({
                      nombre: nombre,
                      apellido: apellido,
                      email: email,
                      pwd: pwd,
                      isAdmin: isAdmin,
                    });
                  },
                },
                [
                  // Definición de campos del formulario
                  m(".form-group", [
                    m("label", { for: "nombre" }, "Nombre"),
                    m("input.form-control", {
                      type: "text",
                      id: "nombre",
                      value: nombre,
                    }),
                  ]),
                  m(".form-group", [
                    m("label", { for: "apellido" }, "Apellido"),
                    m("input.form-control", {
                      type: "text",
                      id: "apellido",
                      value: apellido,
                    }),
                  ]),
                  m(".form-group", [
                    m("label", { for: "email" }, "Email"),
                    m("input.form-control", {
                      type: "email",
                      id: "email",
                      value: email,
                    }),
                  ]),
                  m(".form-group", [
                    m("label", { for: "pwd" }, "Contraseña"),
                    m("input.form-control", {
                      type: "password",
                      id: "pwd",
                      value: pwd,
                    }),
                  ]),
                  m(".form-group", [
                    m("label", { for: "admin" }, "Administrador"),
                    m("input.form-check-input", {
                      type: "checkbox",
                      id: "admin",
                    }),
                  ]),
                ]
              ),
            ]),
            m(".modal-footer", [
              m(
                "button.btn.btn-secondary",
                {
                  "data-dismiss": "modal",
                  onclick: function () {
                    vnode.attrs.onClose();
                  },
                },
                "Cancelar"
              ),
              m(
                "button.btn.btn-primary",
                {
                  type: "submit", // Cambiar el tipo de botón a submit para activar el controlador de eventos del formulario
                },
                "Guardar"
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};
