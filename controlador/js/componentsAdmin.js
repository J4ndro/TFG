const pages = [Home, Platos, Menus];

const components = [Header, ListaUser, Modal, DetallesModal, ModificarModal];

export { pages, components };

//!! PAGES
function Home() {
  return {
    view: () => [
      m(Header),
      m(mainUser),
      m(Modal),
      m(DetallesModal),
      m(ModificarModal),
    ],
  };
}

function Platos() {
  return {
    view: () => [
      m(Header),
      m(mainPlatos),
      m(ModalPlatos),
      m(DetallesModalPlatos),
      m(ModificarModalPlatos),
    ],
  };
}

function Menus() {
  return {
    view: () => [
      m(Header),
      m(mainMenus),
      m(ModalMenus),
      m(DetallesModalMenus),
      m(ModificarModalMenus),
    ],
  };
}

//!! COMPONENTS
$(document).ready(function () {
  // Manejar el evento submit del formulario de inserción
  $("#miFormulario").submit(function (e) {
    e.preventDefault();
    console.log(e);
    Insertar(e); // Llamar a la función de inserción
  });
  $("#FormularioPlatos").submit(function (e) {
    // e.preventDefault();
    console.log(e);
    InsertarPlato(e); // Llamar a la función de inserción
  });
  $("#FormularioMenus").submit(function (e) {
    e.preventDefault();
    console.log(e);
    InsertarMenu(e); // Llamar a la función de inserción
  });

  // Manejar el evento submit del formulario de modificación
  $("#form-modificar").submit(function (e) {
    e.preventDefault();
    var id = $("#id_usuario").val();
    console.log(id);
    Modificar(id);
    ocultarModificarModal();

    // Mostrar mensaje de éxito en el contenedor de detalles
    $("#detallesContainer").html("El cliente se ha modificado correctamente");

    // Modificar el título del modal
    $(".modal-title").html("Cliente Insertado");

    // Mostrar el modal de detalles
    $("#detallesModal").modal("show");

    window.location.reload();
  });
  $("#form-modificarPlatos").submit(function (e) {
    e.preventDefault();
    var id = $("#id_plato").val();
    console.log(id);
    ModificarPlatos(id);
    ocultarModificarModalPlatos();

    // Mostrar mensaje de éxito en el contenedor de detalles
    $("#detallesContainer").html("El plato se ha modificado correctamente");

    // Modificar el título del modal
    $(".modal-title").html("Plato Insertado");

    // Mostrar el modal de detalles
    $("#detallesModal").modal("show");

    window.location.reload();
  });
});

function Header() {
  return {
    view: () => [
      m("aside.main-sidebar.sidebar-dark-primary.elevation-4", [
        // Brand Logo
        m(
          "a.brand-link.d-flex.justify-content-between",
          { href: "../index.php" },
          [
            m("img.brand-image.img-circle.elevation-3", {
              src: "../images/logo.png",
              alt: "Admin Logo",
              style: "opacity: .8",
              PointerEvent: "none",
            }),
            m("span.brand-text.font-weight-light", "Vita"),
            m("img.mx-3", {
              src: "../images/door.svg",
              style: "opacity: .8",
            }),
          ]
        ),

        // Sidebar
        m("div.sidebar", [
          // Sidebar user (optional)
          m("div.user-panel.mt-3.pb-3.mb-3.d-flex", [
            m("div.image", [
              m("img.img-circle.elevation-2", {
                src: "../images/logo.png",
                alt: "User Image",
              }),
            ]),
            m("div.info", [m("a", { href: "#" }, "Admin")]),
          ]),

          // Sidebar Menu
          m("nav.mt-2", [
            m(
              "ul.nav.nav-pills.nav-sidebar.flex-column",
              {
                "data-widget": "treeview",
                role: "menu",
                "data-accordion": "false",
              },
              [
                // Add your menu items here
                // Example:
                m("li.nav-item", [
                  m("a.nav-link", { href: "#" }, [
                    m("i.nav-icon.fas.fa-tachometer-alt"),
                    m("p", ["Usuarios", m("i.right.fas.fa-angle-left")]),
                  ]),
                ]),
                m("li.nav-item", [
                  m("a.nav-link", { href: "#!Platos" }, [
                    m("i.nav-icon.fas.fa-tachometer-alt"),
                    m("p", ["Platos", m("i.right.fas.fa-angle-left")]),
                  ]),
                ]),
                m("li.nav-item", [
                  m("a.nav-link", { href: "#!Menus" }, [
                    m("i.nav-icon.fas.fa-tachometer-alt"),
                    m("p", ["Menus", m("i.right.fas.fa-angle-left")]),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ],
  };
}

//VARIABLES

var ocultar;

//!! USUARIOS

//MODALES

var Modal = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalInsercion",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Insertar Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de inserción
              m(
                "form#miFormulario",
                {
                  method: "post",
                },
                [
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "apellido" }, "apellido: "),
                  m("input", {
                    type: "text",
                    id: "apellido",
                    name: "apellido",
                  }),
                  m("br"),
                  m("label", { for: "email" }, "email: "),
                  m("input", { type: "text", id: "email", name: "email" }),
                  m("br"),
                  m("label", { for: "pwd" }, "pwd: "),
                  m("input", { type: "text", id: "pwd", name: "pwd" }),
                  m("br"),
                  m("input[type=submit]", { id: "enviar" }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};

var DetallesModal = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "detallesModal",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Detalles del Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: () => {
                    vnode.attrs.ocultarModal;
                    ocultar = true;
                  },
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body#detallesContainer", [
              // Aquí se mostrarán los detalles del cliente
              // Puedes agregar contenido dinámico aquí si lo necesitas
            ]),
          ]),
        ]),
      ]
    );
  },
};

var ModificarModal = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalModificar",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Modificar Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de modificación
              m(
                "form#form-modificar",
                {
                  method: "post",
                  // action: "../controlador/Usuarios/modificar.php",
                },
                [
                  m("input[type=hidden]", {
                    id: "id_usuario",
                    name: "id_usuario",
                  }),
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "apellido" }, "apellido: "),
                  m("input", {
                    type: "text",
                    id: "apellido",
                    name: "apellido",
                  }),
                  m("br"),
                  m("label", { for: "email" }, "email: "),
                  m("input", { type: "text", id: "email", name: "email" }),
                  m("br"),
                  m("label", { for: "pwd" }, "pwd: "),
                  m("input", { type: "text", id: "pwd", name: "pwd" }),
                  m("br"),
                  m("br"),
                  m("input[type=submit]", {
                    id: "enviar2",
                    onclick: () => {
                      Modificar();
                    },
                  }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};

function mostrarModalInsercion() {
  $("#modalInsercion").modal("show");
}

function ocultarInsertarModal() {
  $("#modalInsercion").modal("hide");
}

function mostrarModalModificar(id_usuario, nombre, apellido, email, pwd) {
  console.log(id_usuario);
  $("#modalModificar").find('input[name="id_usuario"]').val(id_usuario);
  $("#modalModificar").find('input[name="nombre"]').val(nombre);
  $("#modalModificar").find('input[name="apellido"]').val(apellido);
  $("#modalModificar").find('input[name="email"]').val(email);
  $("#modalModificar").find('input[name="pwd"]').val(pwd);
  $("#modalModificar").modal("show");
  // Modificar(id_usuario);
}

function ocultarModificarModal() {
  $("#modalModificar").modal("hide");
}

//FUNCIONES

function ListaUser() {
  let showModal = false;
  return {
    view: () => [
      m(
        "button",
        {
          class: "btn btn-primary mt-5 mx-5 ",
          onclick: () => {
            mostrarModalInsercion();
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
          class: " table table-striped mt-2 px-5 mx-auto  ",
        },
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, "Id Usuario"),
            m("th", { scope: "col" }, "Nombre"),
            m("th", { scope: "col" }, "Apellido"),
            m("th", { scope: "col" }, "Email"),
            m("th", { scope: "col" }, "Contraseñas"),
            m("th", { scope: "col" }, "Acciones"),
          ])
        ),
        m("tbody", [m(Listar)])
      ),
    ],
  };
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
            m("td", i.pwd),
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
                  },
                  "Detalles"
                ),
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    "data-toggle": "modal",
                    "data-target": "#modalModificar",
                    onclick: () => {
                      console.log(i.id_usuario);
                      mostrarModalModificar(
                        i.id_usuario,
                        i.nombre,
                        i.apellido,
                        i.email,
                        i.pwd
                      );
                    },
                  },
                  "Modificar"
                ),
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
}

function mainUser() {
  return {
    view: function () {
      return m(".content-wrapper", [
        // Encabezado
        m("section.content-header", [
          m(".container-fluid", [
            m(".row.mb-2", [
              m(".col-sm-6", [m("h1", "Usuarios")]),
              m(".col-sm-6", [
                m("ol.breadcrumb.float-sm-right", [
                  m("li.breadcrumb-item", [m("a", { href: "#" }, "Home")]),
                  m("li.breadcrumb-item.active", "Usuarios"),
                ]),
              ]),
            ]),
          ]),
        ]),

        // Contenido principal
        m("section.content", [
          m(".container-fluid", [
            m(".row", [
              m(".col-12", [
                // Primera tabla con DataTables
                m(".card", [
                  m(".card-header.d-flex.justify-content-between", [
                    m("h3.card-title", "Tabla de Usuarios"),
                    m(
                      "button",
                      {
                        class: "btn btn-dark ",
                        onclick: () => {
                          mostrarModalInsercion();
                        },
                      },
                      "AÑADIR"
                    ),
                  ]),
                  m(".card-body", [
                    m("table#example2.table.table-bordered.table-hover", [
                      m("thead", [
                        m("tr", [
                          m("th", "ID"),
                          m("th", "Nombre"),
                          m("th", "Apellido(s)"),
                          m("th", "Email"),
                          m("th", "Contraseña"),
                          m("th", "Suscripción"),
                          m("th", "Acciones"),
                        ]),
                      ]),
                      m("tbody", m(Listar)),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]);
    },
  };
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
            m("td", i.pwd),
            m(
              "td",
              i.suscripcion === "0"
                ? "Vita Basic"
                : i.suscripcion === "1"
                ? "Vita Premium"
                : "Vita Family"
            ),
            m(
              "td",
              m("div", { class: "d-flex justify-content-around" }, [
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    "data-toggle": "modal",
                    "data-target": "#modalModificar",
                    onclick: () => {
                      console.log(i.id_usuario);
                      mostrarModalModificar(
                        i.id_usuario,
                        i.nombre,
                        i.apellido,
                        i.email,
                        i.pwd
                      );
                    },
                  },
                  "Modificar"
                ),
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
}

function Detalles(id) {
  let datos;
  console.log(id);
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
      var detallesHtml = `
            <p>ID: ${datos.id_usuario}</p>
            <p>Nombre: ${datos.nombre}</p>
            <p>Apellido: ${datos.apellido}</p>
            <p>Email: ${datos.email}</p>
            <p>Pwd: ${datos.pwd}</p>
          `;
      console.log(detallesHtml);
      $(".modal-header").html("Detalles Clientes");

      // Mostrar los detalles del cliente en el contenedor
      $("#detallesContainer").html(detallesHtml);

      // Modificar el título del modal
      $(".modal-title").html("Detalles Clientes");

      // Mostrar el modal de detalles
      $("#detallesModal").modal("show");
    });
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
      $("#detallesContainer").html("El cliente se ha borrado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Borrado Exitoso");

      // Mostrar el modal de detalles
      $("#detallesModal").modal("show");

      if (ocultar === true) {
        ocultar = false;
        window.location.reload();
      }
      m.redraw();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function Insertar() {
  var formulario = $("#miFormulario");
  console.log(formulario);

  $.ajax({
    type: "POST",
    url: "../controlador/Usuarios/insertar.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      if (response.error) {
        console.log("Error en la solicitud AJAX:", response.error);
      } else {
        ocultarInsertarModal();
        window.location.reload();
        m(ListaUser);
      }
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      ocultarInsertarModal(); // Ocultar el modal de inserción

      // Mostrar mensaje de éxito en el contenedor de detalles
      $("#detallesContainer").html("El cliente se ha insertado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Cliente Insertado");

      // Mostrar el modal de detalles
      $("#detallesModal").modal("show");
    },
  });
}

function Modificar(id) {
  var formulario = $("#form-modificar");
  var ids = formulario.find('input[name="id_usuario"]').val();
  console.log(ids);
  $.ajax({
    type: "POST",
    url: "../controlador/Usuarios/modificar.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      console.log(response);
      window.location.reload();
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      window.location.reload();
    },
  });
}

//!!PLATOS

//Modales

var ModalPlatos = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalInsercionPlatos",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Insertar Plato"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de inserción
              m(
                "form#FormularioPlatos",
                {
                  method: "post",
                },
                [
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "ingredientes" }, "ingredientes: "),
                  m("input", {
                    type: "text",
                    id: "ingredientes",
                    name: "ingredientes",
                  }),
                  m("br"),
                  m("label", { for: "foto" }, "foto: "),
                  m("input", {
                    type: "text",
                    id: "foto",
                    name: "foto",
                  }),
                  m("br"),
                  m("label", { for: "calorias" }, "calorias: "),
                  m("input", {
                    type: "text",
                    id: "calorias",
                    name: "calorias",
                  }),
                  m("br"),
                  m("label", { for: "proteinas" }, "proteinas: "),
                  m("input", {
                    type: "text",
                    id: "proteinas",
                    name: "proteinas",
                  }),
                  m("br"),
                  m("label", { for: "carbohidratos" }, "carbohidratos: "),
                  m("input", {
                    type: "text",
                    id: "carbohidratos",
                    name: "carbohidratos",
                  }),
                  m("br"),
                  m("label", { for: "grasas" }, "grasas: "),
                  m("input", {
                    type: "text",
                    id: "grasas",
                    name: "grasas",
                  }),
                  m("br"),
                  m("label", { for: "descripcion" }, "descripcion: "),
                  m("input", {
                    type: "textarea",
                    id: "descripcion",
                    name: "descripcion",
                  }),
                  m("br"),
                  m("label", { for: "complejidad" }, "complejidad: "),
                  m("select", { id: "complejidad", name: "complejidad" }, [
                    m(
                      "option",
                      { value: "Sencillo", selected: true },
                      "Sencillo"
                    ),
                    m("option", { value: "Intermedio" }, "Intermedio"),
                    m("option", { value: "Dificil" }, "Difícil"),
                  ]),
                  m("br"),
                  m("input[type=submit]", { id: "Insertar" }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};
var DetallesModalPlatos = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalDetallesPlatos",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Detalles del Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: () => {
                    vnode.attrs.ocultarModal;
                    ocultar = true;
                  },
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body#detallesContainer", [
              // Aquí se mostrarán los detalles del cliente
              // Puedes agregar contenido dinámico aquí si lo necesitas
            ]),
          ]),
        ]),
      ]
    );
  },
};
var ModificarModalPlatos = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalModificarPlatos",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Modificar Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de modificación
              m(
                "form#form-modificarPlatos",
                {
                  method: "post",
                  // action: "../controlador/Usuarios/modificar.php",
                },
                [
                  m("label", { for: "id_plato" }, "id_plato: "),
                  m("input[type=text]", {
                    readonly: "readonly",
                    id: "id_plato",
                    name: "id_plato",
                  }),
                  m("br"),
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "ingredientes" }, "ingredientes: "),
                  m("input", {
                    type: "text",
                    id: "ingredientes",
                    name: "ingredientes",
                  }),
                  m("br"),
                  m("label", { for: "foto" }, "foto: "),
                  m("input", {
                    type: "text",
                    id: "foto",
                    name: "foto",
                  }),
                  m("br"),
                  m("label", { for: "calorias" }, "calorias: "),
                  m("input", {
                    type: "text",
                    id: "calorias",
                    name: "calorias",
                  }),
                  m("br"),
                  m("label", { for: "proteinas" }, "proteinas: "),
                  m("input", {
                    type: "text",
                    id: "proteinas",
                    name: "proteinas",
                  }),
                  m("br"),
                  m("label", { for: "carbohidratos" }, "carbohidratos: "),
                  m("input", {
                    type: "text",
                    id: "carbohidratos",
                    name: "carbohidratos",
                  }),
                  m("br"),
                  m("label", { for: "grasas" }, "grasas: "),
                  m("input", {
                    type: "text",
                    id: "grasas",
                    name: "grasas",
                  }),
                  m("br"),
                  m("label", { for: "descripcion" }, "descripcion: "),
                  m("input", {
                    type: "textarea",
                    id: "descripcion",
                    name: "descripcion",
                  }),
                  m("br"),
                  m("input[type=submit]", { id: "enviar" }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};

//Funciones Modales

function mostrarModalInsercionPlatos() {
  $("#modalInsercionPlatos").modal("show");
}
function ocultarInsertarModalPlatos() {
  $("#modalInsercionPlatos").modal("hide");
}
function mostrarModalModificarPlatos(
  id_plato,
  nombre,
  ingredientes,
  foto,
  calorias,
  proteinas,
  carbohidratos,
  grasas,
  descripcion
) {
  console.log(id_plato);
  $("#modalModificarPlatos").find('input[name="id_plato"]').val(id_plato);
  $("#modalModificarPlatos").find('input[name="nombre"]').val(nombre);
  $("#modalModificarPlatos")
    .find('input[name="ingredientes"]')
    .val(ingredientes);
  $("#modalModificarPlatos").find('input[name="foto"]').val(foto);
  $("#modalModificarPlatos").find('input[name="calorias"]').val(calorias);
  $("#modalModificarPlatos").find('input[name="proteinas"]').val(proteinas);
  $("#modalModificarPlatos")
    .find('input[name="carbohidratos"]')
    .val(carbohidratos);
  $("#modalModificarPlatos").find('input[name="grasas"]').val(grasas);
  $("#modalModificarPlatos").find('input[name="descripcion"]').val(descripcion);
  $("#modalModificarPlatos").modal("show");
  // Modificar(id_usuario);
}
function ocultarModificarModalPlatos() {
  $("#modalModificarPlatos").modal("hide");
}

//Funciones

function ListaPlatos() {
  let showModal = false;

  // Función para obtener los datos de los platos
  function fetchPlatosData() {
    fetch("../controlador/Platos/mostrar.php", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Devuelve la promesa de los datos JSON
      })
      .then((data) => {
        // Maneja los datos aquí
        renderizarDatos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Función para renderizar los datos obtenidos
  function renderizarDatos(datos) {
    m.render(
      document.getElementById("datos-platos"),
      datos.map((i) => [
        m(
          "tr",
          m("th", i.id_plato),
          m("td", i.nombre),
          m("td", i.ingredientes),
          m("td", i.foto),
          m("td", i.calorias),
          m("td", i.proteinas),
          m("td", i.carbohidratos),
          m("td", i.grasas),
          m("td", i.descripcion),
          m(
            "td",
            m("div", { class: "d-flex justify-content-around" }, [
              m(
                "button",
                {
                  class: "btn btn-success",
                  "data-toggle": "modal",
                  "data-target": "#modalDetallesPlatos",
                  onclick: () => {
                    DetallesPlato(i.id_plato);
                  },
                },
                "Detalles"
              ),
              m(
                "button",
                {
                  class: "btn btn-primary",
                  "data-toggle": "modal",
                  "data-target": "#modalModificarPlatos",
                  onclick: () => {
                    console.log(i.id_plato);
                    mostrarModalModificarPlatos(
                      i.id_plato,
                      i.nombre,
                      i.ingredientes,
                      i.foto,
                      i.calorias,
                      i.proteinas,
                      i.carbohidratos,
                      i.grasas,
                      i.descripcion
                    );
                  },
                },
                "Modificar"
              ),
              m(
                "button",
                {
                  class: "btn btn-danger",
                  "data-toggle": "modal",
                  "data-target": "#modalDetallesPlatos",
                  onclick: () => {
                    BorrarPlatos(i.id_plato);
                  },
                },
                "Eliminar"
              ),
            ])
          )
        ),
      ])
    );
  }

  // Llama a la función para obtener los datos cuando se renderiza el componente
  fetchPlatosData();

  // Renderiza el componente
  return {
    view: () => [
      m(
        "button",
        {
          class: "btn btn-primary mt-5 mx-5 ",
          onclick: () => {
            mostrarModalInsercionPlatos();
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
          class: " table table-striped mt-2 px-5 mx-auto  ",
        },
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, "Id Plato"),
            m("th", { scope: "col" }, "Nombre"),
            m("th", { scope: "col" }, "Ingredientes"),
            m("th", { scope: "col" }, "Foto"),
            m("th", { scope: "col" }, "Calorias"),
            m("th", { scope: "col" }, "Proteinas"),
            m("th", { scope: "col" }, "Caarbohidratos"),
            m("th", { scope: "col" }, "Grasas"),
            m("th", { scope: "col" }, "Descripcion"),
            m("th", { scope: "col" }, "Acciones"),
          ])
        ),
        // Donde se renderizarán los datos
        m("tbody", { id: "datos-platos" })
      ),
    ],
  };
}

function mainPlatos() {
  return {
    view: function () {
      return m(".content-wrapper", [
        // Encabezado
        m("section.content-header", [
          m(".container-fluid", [
            m(".row.mb-2", [
              m(".col-sm-6", [m("h1", "Platos")]),
              m(".col-sm-6", [
                m("ol.breadcrumb.float-sm-right", [
                  m("li.breadcrumb-item", [m("a", { href: "#" }, "Home")]),
                  m("li.breadcrumb-item.active", "Platos"),
                ]),
              ]),
            ]),
          ]),
        ]),

        // Contenido principal
        m("section.content", [
          m(".container-fluid", [
            m(".row", [
              m(".col-12", [
                // Primera tabla con DataTables
                m(".card", [
                  m(".card-header.d-flex.justify-content-between", [
                    m("h3.card-title", "Tabla de Platos"),
                    m(
                      "button",
                      {
                        class: "btn btn-dark ",
                        onclick: () => {
                          mostrarModalInsercionPlatos();
                        },
                      },
                      "AÑADIR"
                    ),
                  ]),
                  m(".card-body", [
                    m("table#example2.table.table-bordered.table-hover", [
                      m("thead", [
                        m("tr", [
                          m("th", "ID"),
                          m("th", "Nombre"),
                          m("th", "Ingrediente(s)"),
                          m("th", "Foto"),
                          m("th", "Calorias"),
                          m("th", "Proteinas"),
                          m("th", "Carbohidratos"),
                          m("th", "Grasas"),
                          m("th", "Descripcion"),
                          m("th", "Complejidad"),
                          m("th", "Acciones"),
                        ]),
                      ]),
                      m("tbody", m(ListarPlatos)),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]);
    },
  };
  function ListarPlatos() {
    let datos = []; // Inicializa datos como un array vacío

    // Realiza la solicitud fetch y actualiza datos cuando se reciban los datos
    fetch("../controlador/Platos/mostrar.php", {
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
            m("th", i.id_plato),
            m("td", i.nombre),
            m("td", i.ingredientes),
            m("td", i.foto),
            m("td", i.calorias),
            m("td", i.proteinas),
            m("td", i.carbohidratos),
            m("td", i.grasas),
            m("td", i.descripcion),
            m("td", i.complejidad),
            m(
              "td",
              m("div", { class: "d-flex justify-content-around" }, [
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    "data-toggle": "modal",
                    "data-target": "#modalModificarPlatos",
                    onclick: () => {
                      console.log(i.id_plato);
                      mostrarModalModificarPlatos(
                        i.id_plato,
                        i.nombre,
                        i.ingredientes,
                        i.foto,
                        i.calorias,
                        i.proteinas,
                        i.carbohidratos,
                        i.grasas,
                        i.descripcion
                      );
                    },
                  },
                  "Modificar"
                ),
                m(
                  "button",
                  {
                    class: "btn btn-danger",
                    "data-toggle": "modal",
                    "data-target": "#modalDetalles",
                    onclick: () => {
                      BorrarPlatos(i.id_plato);
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
}

function InsertarPlato() {
  var formulario = $("#FormularioPlatos");
  console.log(formulario);

  $.ajax({
    type: "POST",
    url: "../controlador/Platos/insertarPlato.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      if (response.error) {
        console.log("Error en la solicitud AJAX:", response.error);
      } else {
        ocultarInsertarModalPlatos();
        // window.location.reload();
        // m(ListaPlatos);
      }
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      ocultarInsertarModalPlatos(); // Ocultar el modal de inserción

      // Mostrar mensaje de éxito en el contenedor de detalles
      $("#detallesContainer").html("El Plato se ha insertado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Plato Insertado");

      // Mostrar el modal de detalles
      $("#detallesModal").modal("show");

      // window.location.reload();
    },
  });
}

function DetallesPlato(id) {
  let datos;
  console.log(id);
  fetch("../controlador/Platos/detallePlato.php", {
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
      var detallesHtml = `
            <p>ID: ${datos.id_plato}</p>
            <p>Nombre: ${datos.nombre}</p>
            <p>Ingredientes: ${datos.ingredientes}</p>
            <p>Foto: ${datos.foto}</p>
            <p>Calorias: ${datos.calorias}</p>
            <p>Proteinas: ${datos.proteinas}</p>
            <p>Carbohidratos: ${datos.carbohidratos}</p>
            <p>Grasas: ${datos.grasas}</p>
            <p>Descripcion: ${datos.descripcion}</p>
          `;
      console.log(detallesHtml);
      $(".modal-header").html("Detalles Platos");

      // Mostrar los detalles del cliente en el contenedor
      $("#detallesContainer").html(detallesHtml);

      // Modificar el título del modal
      $(".modal-title").html("Detalles Platos");

      // Mostrar el modal de detalles
      $("#modalDetallesPlatos").modal("show");
    });
}

function BorrarPlatos(id) {
  fetch("../controlador/Platos/borrarPlato.php", {
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
      $("#detallesContainer").html("El plato se ha borrado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Borrado Exitoso");

      // Mostrar el modal de detalles
      $("#modalDetallesPlatos").modal("show");

      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function ModificarPlatos(id) {
  var formulario = $("#form-modificarPlatos");
  var ids = formulario.find('input[name="id_plato"]').val();
  console.log(ids);
  $.ajax({
    type: "POST",
    url: "../controlador/Platos/modificarPlato.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      console.log(response);
      // window.location.reload();
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      // window.location.reload();
    },
  });
}

//!!MENUS

//Modales

var ModalMenus = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalInsercionMenus",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Insertar Menú"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de inserción
              m(
                "form#FormularioMenus",
                {
                  method: "post",
                },
                [
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "descripcion" }, "descripcion: "),
                  m("input", {
                    type: "text",
                    id: "descripcion",
                    name: "descripcion",
                  }),
                  m("br"),
                  m("input[type=submit]", { id: "enviar" }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};
var DetallesModalMenus = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalDetallesMenus",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Detalles del Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: () => {
                    vnode.attrs.ocultarModal;
                    ocultar = true;
                  },
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body#detallesContainer", [
              // Aquí se mostrarán los detalles del cliente
              // Puedes agregar contenido dinámico aquí si lo necesitas
            ]),
          ]),
        ]),
      ]
    );
  },
};
var ModificarModalMenus = {
  view: function (vnode) {
    return m(
      ".modal",
      {
        id: "modalModificarMenus",
        tabindex: "-1",
        role: "dialog",
        style: "display: none;",
      },
      [
        m(".modal-dialog", { role: "document" }, [
          m(".modal-content", [
            m(".modal-header", [
              m("h5.modal-title", "Modificar Cliente"),
              m(
                "button.close",
                {
                  type: "button",
                  "aria-label": "Close",
                  onclick: vnode.attrs.ocultarModal,
                },
                [m("span", { "aria-hidden": "true" }, "×")]
              ),
            ]),
            m(".modal-body", [
              // Formulario de modificación
              m(
                "form#form-modificarMenus",
                {
                  method: "post",
                  // action: "../controlador/Usuarios/modificar.php",
                },
                [
                  m("label", { for: "id_plato" }, "id_plato: "),
                  m("input[type=text]", {
                    readonly: "readonly",
                    id: "id_plato",
                    name: "id_plato",
                  }),
                  m("br"),
                  m("label", { for: "nombre" }, "nombre: "),
                  m("input", { type: "text", id: "nombre", name: "nombre" }),
                  m("br"),
                  m("label", { for: "ingredientes" }, "ingredientes: "),
                  m("input", {
                    type: "text",
                    id: "ingredientes",
                    name: "ingredientes",
                  }),
                  m("br"),
                  m("label", { for: "foto" }, "foto: "),
                  m("input", {
                    type: "text",
                    id: "foto",
                    name: "foto",
                  }),
                  m("br"),
                  m("label", { for: "calorias" }, "calorias: "),
                  m("input", {
                    type: "text",
                    id: "calorias",
                    name: "calorias",
                  }),
                  m("br"),
                  m("label", { for: "proteinas" }, "proteinas: "),
                  m("input", {
                    type: "text",
                    id: "proteinas",
                    name: "proteinas",
                  }),
                  m("br"),
                  m("label", { for: "carbohidratos" }, "carbohidratos: "),
                  m("input", {
                    type: "text",
                    id: "carbohidratos",
                    name: "carbohidratos",
                  }),
                  m("br"),
                  m("label", { for: "grasas" }, "grasas: "),
                  m("input", {
                    type: "text",
                    id: "grasas",
                    name: "grasas",
                  }),
                  m("br"),
                  m("label", { for: "descripcion" }, "descripcion: "),
                  m("input", {
                    type: "textarea",
                    id: "descripcion",
                    name: "descripcion",
                  }),
                  m("br"),
                  m("input[type=submit]", { id: "enviar" }),
                ]
              ),
            ]),
          ]),
        ]),
      ]
    );
  },
};

//Funciones Modales

function mostrarModalInsercionMenus() {
  $("#modalInsercionMenus").modal("show");
}
function ocultarInsertarModalMenus() {
  $("#modalInsercionMenus").modal("hide");
}
function mostrarModalModificarMenus(
  id_plato,
  nombre,
  ingredientes,
  foto,
  calorias,
  proteinas,
  carbohidratos,
  grasas,
  descripcion
) {
  console.log(id_plato);
  $("#modalModificarMenus").find('input[name="id_plato"]').val(id_plato);
  $("#modalModificarMenus").find('input[name="nombre"]').val(nombre);
  $("#modalModificarMenus")
    .find('input[name="ingredientes"]')
    .val(ingredientes);
  $("#modalModificarMenus").find('input[name="foto"]').val(foto);
  $("#modalModificarMenus").find('input[name="calorias"]').val(calorias);
  $("#modalModificarMenus").find('input[name="proteinas"]').val(proteinas);
  $("#modalModificarMenus")
    .find('input[name="carbohidratos"]')
    .val(carbohidratos);
  $("#modalModificarMenus").find('input[name="grasas"]').val(grasas);
  $("#modalModificarMenus").find('input[name="descripcion"]').val(descripcion);
  $("#modalModificarMenus").modal("show");
  // Modificar(id_usuario);
}
function ocultarModificarModalMenus() {
  $("#modalModificarMenus").modal("hide");
}

//Funciones

function ListaMenus() {
  let showModal = false;

  // Función para obtener los datos de los platos
  function fetchMenusData() {
    fetch("../controlador/Menus/mostrarMenu.php", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Devuelve la promesa de los datos JSON
      })
      .then((data) => {
        // Maneja los datos aquí
        renderizarDatos(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Función para renderizar los datos obtenidos
  function renderizarDatos(datos) {
    m.render(
      document.getElementById("datos-platos"),
      datos.map((i) => [
        m(
          "tr",
          m("th", i.id_plato),
          m("td", i.nombre),
          m("td", i.ingredientes),
          m("td", i.foto),
          m("td", i.calorias),
          m("td", i.proteinas),
          m("td", i.carbohidratos),
          m("td", i.grasas),
          m("td", i.descripcion),
          m(
            "td",
            m("div", { class: "d-flex justify-content-around" }, [
              m(
                "button",
                {
                  class: "btn btn-primary",
                  "data-toggle": "modal",
                  "data-target": "#modalModificarMenus",
                  onclick: () => {
                    console.log(i.id_menu);
                    mostrarModalModificarMenus(
                      i.id_menu,
                      i.nombre,
                      i.ingredientes,
                      i.foto,
                      i.calorias,
                      i.proteinas,
                      i.carbohidratos,
                      i.grasas,
                      i.descripcion
                    );
                  },
                },
                "Modificar"
              ),
              m(
                "button",
                {
                  class: "btn btn-danger",
                  "data-toggle": "modal",
                  "data-target": "#modalDetallesMenus",
                  onclick: () => {
                    BorrarMenus(i.id_menu);
                  },
                },
                "Eliminar"
              ),
            ])
          )
        ),
      ])
    );
  }

  // Llama a la función para obtener los datos cuando se renderiza el componente
  fetchMenusData();

  // Renderiza el componente
  return {
    view: () => [
      m(
        "button",
        {
          class: "btn btn-primary mt-5 mx-5 ",
          onclick: () => {
            mostrarModalInsercionPlatos();
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
          class: " table table-striped mt-2 px-5 mx-auto  ",
        },
        m(
          "thead",
          m("tr", [
            m("th", { scope: "col" }, "Id Menu"),
            m("th", { scope: "col" }, "Nombre"),
            m("th", { scope: "col" }, "Ingredientes"),
            m("th", { scope: "col" }, "Foto"),
            m("th", { scope: "col" }, "Calorias"),
            m("th", { scope: "col" }, "Proteinas"),
            m("th", { scope: "col" }, "Caarbohidratos"),
            m("th", { scope: "col" }, "Grasas"),
            m("th", { scope: "col" }, "Descripcion"),
            m("th", { scope: "col" }, "Acciones"),
          ])
        ),
        // Donde se renderizarán los datos
        m("tbody", { id: "datos-platos" })
      ),
    ],
  };
}

function mainMenus() {
  return {
    view: function () {
      return m(".content-wrapper", [
        // Encabezado
        m("section.content-header", [
          m(".container-fluid", [
            m(".row.mb-2", [
              m(".col-sm-6", [m("h1", "Menus")]),
              m(".col-sm-6", [
                m("ol.breadcrumb.float-sm-right", [
                  m("li.breadcrumb-item", [m("a", { href: "#" }, "Home")]),
                  m("li.breadcrumb-item.active", "Menus"),
                ]),
              ]),
            ]),
          ]),
        ]),

        // Contenido principal
        m("section.content", [
          m(".container-fluid", [
            m(".row", [
              m(".col-12", [
                // Primera tabla con DataTables
                m(".card", [
                  m(".card-header.d-flex.justify-content-between", [
                    m("h3.card-title", "Tabla de Menus"),
                    m(
                      "button",
                      {
                        class: "btn btn-dark ",
                        onclick: () => {
                          mostrarModalInsercionMenus();
                        },
                      },
                      "Nuevo Menu"
                    ),
                  ]),
                  m(".card-body", [
                    m("table#example2.table.table-bordered.table-hover", [
                      m("thead", [
                        m("tr", [
                          m("th", "Id Menu"),
                          m("th", "Nombre"),
                          m("th", "Descripción"),
                          m("th", "Acciones"),
                        ]),
                      ]),
                      m("tbody", m(ListarMenus)),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]);
    },
  };
  function ListarMenus() {
    let datos = [];
    let datosMenu = [];

    // Realiza la solicitud fetch y actualiza datos cuando se reciban los datos
    function mostrarMenuPlato() {
      fetch("../controlador/Menus/mostrarMenu.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          } else {
            console.log("Conectado");
            // console.log(response.json());
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          datos = data; // Actualiza datos cuando se reciban los datos
          m.redraw(); // Vuelve a dibujar el componente para mostrar los datos actualizados
        });
    }

    fetch("../controlador/Menus/mostrar.php", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          console.log("Conectado");
          // console.log(response.json());
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        datosMenu = data; // Actualiza datos cuando se reciban los datos
        m.redraw(); // Vuelve a dibujar el componente para mostrar los datos actualizados
      });
    // Devuelve un componente que muestra los datos
    return {
      view: () => [
        datosMenu.map((i) => [
          m(
            "tr",
            m("th", i.id_menu),
            m("td", i.nombre),
            m("td", i.descripcion),
            m(
              "td",
              m("div", { class: "d-flex justify-content-around" }, [
                m(
                  "button",
                  {
                    class: "btn btn-primary",
                    "data-toggle": "modal",
                    "data-target": "#modalModificarPlatos",
                    onclick: () => {
                      console.log(i.id_plato);
                      mostrarModalModificarPlatos(
                        i.id_plato,
                        i.nombre,
                        i.ingredientes,
                        i.foto,
                        i.calorias,
                        i.proteinas,
                        i.carbohidratos,
                        i.grasas,
                        i.descripcion
                      );
                    },
                  },
                  "Modificar"
                ),
                m(
                  "button",
                  {
                    class: "btn btn-danger",
                    "data-toggle": "modal",
                    "data-target": "#modalDetalles",
                    onclick: () => {
                      BorrarPlatos(i.id_plato);
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
}

function InsertarMenu() {
  var formulario = $("#FormularioMenus");
  console.log(formulario);

  $.ajax({
    type: "POST",
    url: "../controlador/Menus/insertarMenu.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      if (response.error) {
        console.log("Error en la solicitud AJAX:", response.error);
      } else {
        ocultarInsertarModalMenus();
      }
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      ocultarInsertarModalMenus(); // Ocultar el modal de inserción

      // Mostrar mensaje de éxito en el contenedor de detalles
      $("#detallesContainer").html("El Menú se ha insertado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Menú Insertado");

      // Mostrar el modal de detalles
      $("#detallesModal").modal("show");

      // window.location.reload();
    },
  });
}

function BorrarMenus(id) {
  fetch("../controlador/Menus/borrarPlato.php", {
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
      $("#detallesContainer").html("El plato se ha borrado correctamente");

      // Modificar el título del modal
      $(".modal-title").html("Borrado Exitoso");

      // Mostrar el modal de detalles
      $("#modalDetallesMenus").modal("show");

      window.location.reload();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function ModificarMenus(id) {
  var formulario = $("#form-modificarMenus");
  var ids = formulario.find('input[name="id_plato"]').val();
  console.log(ids);
  $.ajax({
    type: "POST",
    url: "../controlador/Menus/modificarPlato.php",
    data: formulario.serialize(),
    dataType: "json", // Esperar una respuesta en formato JSON
    success: function (response) {
      console.log(response);
      // window.location.reload();
    },
    error: function (error) {
      console.log("Error en la solicitud AJAX:", error.responseText);
      // window.location.reload();
    },
  });
}
