const pages = [
  Home,
  Platos,
  Menus,
  Perfil,
  Suscripcion,
  AboutUs,
  PaymentInfo,
  InsertarPlato,
];

const components = [Header, Hero, Info, PerfilSection];

export { pages, components };

let s_id;
let s_user;

//!! PAGES
function Home() {
  // Obtener el nombre de usuario de la URL
  const urlParams = new URLSearchParams(window.location.search);
  console.log("Parámetros de la URL:", urlParams);

  // Verificar si el parámetro 'username' está presente en la URL
  if (urlParams.has("username")) {
    const username = urlParams.get("username");
    console.log("Nombre de usuario:", username);
    s_user = username;
  } else {
    console.log("No se encontró el parámetro 'username' en la URL");
  }

  return {
    view: () => [m(Header), m(Hero), m(Info), m(HeroFooter), m(Footer)],
  };
}

function Platos() {
  const urlParams = new URLSearchParams(window.location.search);
  const id_usuario = urlParams.get("id_usuario");

  console.log("ID de usuario:", id_usuario);
  s_id = id_usuario;
  return {
    view: () => [m(Header), m(SectionPlatos, { s_id }), m(Footer)],
  };
}

function Menus() {
  return {
    view: () => [m(Header), m(Seccion), m(Footer)],
  };
}

function Perfil() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get("username");
  const id_usuario = urlParams.get("id_usuario");

  console.log("Nombre de usuario:", username);

  return {
    view: () => [m(Header), m(PerfilSection, { username, id_usuario }), m(Footer)],
  };
}

function Suscripcion() {
  return {
    view: () => [m(Header), m(Suscripciones), m(Footer)],
  };
}

function AboutUs() {
  return {
    view: () => [m(Header), m(About), m(Footer)],
  };
}

//!! COMPONENTS

function Header() {
  return {
    view: () => [
      m(
        "header",
        {
          id: "header",
          class: "fixed-top d-flex align-items-center",
          style: {
            background:
              "linear-gradient(to right,rgba(39, 70, 133, 0.8) 0%,rgba(61, 179, 197, 0.8) 100%) ",
          },
        },
        [
          m(
            "div",
            {
              class:
                "container d-flex justify-content-between align-items-center",
            },
            [
              m("div", { class: "logo" }, [
                m("h1", [
                  m(
                    "a",
                    { href: "#" },
                    m("img", {
                      src: "../images/logo.png",
                      alt: "",
                      class: "img-fluid",
                    })
                  ),
                ]),
              ]),
              m("nav", { id: "navbar", class: "navbar" }, [
                m("ul", {}, [
                  m("li", {}, [m("a", { class: "active", href: "#" }, "Home")]),
                  m("li", {}, [m("a", { href: "#!Menus" }, "Menus")]),
                  m("li", {}, [m("a", { href: "#!Platos" }, "Platos")]),
                  m("li", { class: "dropdown" }, [
                    m("a", { href: "#" }, [
                      m("span", {}, "Otros"),
                      m("i", { class: "bi bi-chevron-down" }),
                    ]),
                    m("ul", {}, [
                      m("li", {}, [m("a", { href: "#" }, "Contacto")]),
                      m("li", {}, [m("a", { href: "#!AboutUs" }, "About Us")]),
                    ]),
                  ]),
                  m("li", {}, [
                    m("a", { href: "#!Suscripcion" }, "Mi Suscripción"),
                  ]),
                  m("li", { class: "dropdown" }, [
                    m("a", { href: "#!Perfil" }, [
                      m("span", {}, "Mi Perfil"),
                      m("i", { class: "bi bi-chevron-down" }),
                    ]),
                    m("ul", {}, [
                      m("li", {}, [m("a", { href: "#!Perfil" }, "Ver Perfil")]),
                      m("li", { class: "dropdown" }, [
                        m("a", { href: "../index.php" }, [
                          m("span", {}, "Cerrar Sesion"),
                          m("i", { class: "bi bi-chevron-right" }),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                m("i", { class: "bi bi-list mobile-nav-toggle" }),
              ]),
            ]
          ),
        ]
      ),
    ],
  };
}

function Hero() {
  return {
    view: () => [
      m("section", { class: "hero-section", id: "hero" }, [
        m("div", { class: "wave" }, [
          m(
            "svg",
            {
              width: "100%",
              height: "355px",
              viewBox: "0 0 1920 355",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              xmlns: "",
              xlink: "http://www.w3.org/1999/xlink",
            },
            [
              m(
                "g",
                {
                  id: "Page-1",
                  stroke: "none",
                  "stroke-width": "1",
                  fill: "none",
                  "fill-rule": "evenodd",
                },
                [
                  m(
                    "g",
                    {
                      id: "Apple-TV",
                      transform: "translate(0.000000, -402.000000)",
                      fill: "#FFFFFF",
                    },
                    [
                      m("path", {
                        d: "M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z",
                        id: "Path",
                      }),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]),
        m("div", { class: "container" }, [
          m("div", { class: "row align-items-center" }, [
            m("div", { class: "col-12 hero-text-image" }, [
              m("div", { class: "row" }, [
                m("div", { class: "col-lg-8 text-center text-lg-start" }, [
                  m(
                    "h1",
                    { "data-aos": "fade-right" },
                    "Tu Página Web Nutricional de confianza"
                  ),
                  m(
                    "p",
                    {
                      class: "mb-5",
                      "data-aos": "fade-right",
                      "data-aos-delay": "100",
                    },
                    "Disfruta de todas las ventajas que te ofrece Vita."
                  ),
                  m(
                    "p",
                    {
                      "data-aos": "fade-right",
                      "data-aos-delay": "200",
                      "data-aos-offset": "-500",
                    },
                    [
                      m(
                        "a",
                        { href: "#", class: "btn btn-outline-white" },
                        "Get started"
                      ),
                    ]
                  ),
                ]),
                m("div", { class: "col-lg-4 iphone-wrap" }, [
                  m("img", {
                    src: "../images/phone_1.png",
                    alt: "Image",
                    class: "phone-1",
                    "data-aos": "fade-right",
                  }),
                  m("img", {
                    src: "../images/phone_2.png",
                    alt: "Image",
                    class: "phone-2",
                    "data-aos": "fade-right",
                    "data-aos-delay": "200",
                  }),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function Info() {
  return {
    view: () => [
      m("section", { class: "section" }, [
        m("div", { class: "container" }, [
          m("div", { class: "row justify-content-center text-center mb-5" }, [
            m("div", { class: "col-md-5", "data-aos": "fade-up" }, [
              m(
                "h2",
                {
                  class: "section-heading",
                  style: {
                    color: "white",
                  },
                },
                "Ahorra tiempo usando Vita"
              ),
            ]),
          ]),
          m("div", { class: "row" }, [
            m(
              "div",
              {
                class: "col-md-4",
                "data-aos": "fade-up",
                "data-aos-delay": "",
              },
              [
                m("div", { class: "feature-1 text-center" }, [
                  m("div", { class: "wrap-icon icon-1" }, [
                    m("i", { class: "bi bi-people" }),
                  ]),
                  m("h3", { class: "mb-3" }, "Aumenta tu productividad"),
                  m(
                    "p",
                    {},
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                  ),
                ]),
              ]
            ),
            m(
              "div",
              {
                class: "col-md-4",
                "data-aos": "fade-up",
                "data-aos-delay": "100",
              },
              [
                m("div", { class: "feature-1 text-center" }, [
                  m("div", { class: "wrap-icon icon-1" }, [
                    m("i", { class: "bi bi-brightness-high" }),
                  ]),
                  m("h3", { class: "mb-3" }, "Mejora tu alimentación"),
                  m(
                    "p",
                    {},
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                  ),
                ]),
              ]
            ),
            m(
              "div",
              {
                class: "col-md-4",
                "data-aos": "fade-up",
                "data-aos-delay": "200",
              },
              [
                m("div", { class: "feature-1 text-center" }, [
                  m("div", { class: "wrap-icon icon-1" }, [
                    m("i", { class: "bi bi-bar-chart" }),
                  ]),
                  m("h3", { class: "mb-3" }, "No pierdas tiempo"),
                  m(
                    "p",
                    {},
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      m("section", { class: "section" }, [
        m("div", { class: "container" }, [
          m(
            "div",
            {
              class: "row justify-content-center text-center mb-5",
              "data-aos": "fade",
            },
            [
              m("div", { class: "col-md-6 mb-5" }, [
                m("img", {
                  src: "../images/undraw_svg_1.svg",
                  alt: "Image",
                  class: "img-fluid",
                }),
              ]),
            ]
          ),
          m("div", { class: "row" }, [
            m("div", { class: "col-md-4" }, [
              m("div", { class: "step" }, [
                m("span", { class: "number" }, "01"),
                m("h3", {}, "Inicia Sesion"),
                m(
                  "p",
                  {},
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m("div", { class: "col-md-4" }, [
              m("div", { class: "step" }, [
                m("span", { class: "number" }, "02"),
                m("h3", {}, "Create un perfil"),
                m(
                  "p",
                  {},
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m("div", { class: "col-md-4" }, [
              m("div", { class: "step" }, [
                m("span", { class: "number" }, "03"),
                m("h3", {}, "Disfruta de las ventajas"),
                m(
                  "p",
                  {},
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      m("section", { class: "section" }, [
        m("div", { class: "container" }, [
          m("div", { class: "row align-items-center" }, [
            m("div", { class: "col-md-4 me-auto" }, [
              m(
                "h2",
                { class: "mb-4" },
                "Disfruta de una organización de tus comidas"
              ),
              m(
                "p",
                { class: "mb-4" },
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
              ),
              m("p", {}, [
                m(
                  "a",
                  { href: "#!Menus", class: "btn btn-primary" },
                  "Ir ahora"
                ),
              ]),
            ]),
            m("div", { class: "col-md-6", "data-aos": "fade-left" }, [
              m("img", {
                src: "../images/undraw_svg_2.svg",
                alt: "Image",
                class: "img-fluid",
              }),
            ]),
          ]),
        ]),
      ]),
      m("section", { class: "section" }, [
        m("div", { class: "container" }, [
          m("div", { class: "row align-items-center" }, [
            m("div", { class: "col-md-4 ms-auto order-2" }, [
              m("h2", { class: "mb-4" }, "Envía tu Feedback"),
              m(
                "p",
                { class: "mb-4" },
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
              ),
              m("p", {}, [
                m("a", { href: "#", class: "btn btn-primary" }, "Ir ahora"),
              ]),
            ]),
            m("div", { class: "col-md-6", "data-aos": "fade-right" }, [
              m("img", {
                src: "../images/undraw_svg_3.svg",
                alt: "Image",
                class: "img-fluid",
              }),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function HeroFooter() {
  return {
    view: () => [
      m("section.section.cta-section", [
        m(".container", [
          m(".row.align-items-center", [
            m(".col-md-6.me-auto.text-center.text-md-start.mb-5.mb-md-0", [
              m("h2", "Si tienes alguna duda. ¡Contáctanos!"),
            ]),
            m(".col-md-5.text-center.text-md-end", [
              m("p", [
                m("a.btn.d-inline-flex.align-items-center[href=#]", [
                  m("i.bx.bxl-play-store"),
                  m("span", "Ir ahora"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function Footer() {
  return {
    view: () => [
      m("footer.footer", { role: "contentinfo" }, [
        m(".container", [
          m(".row", [
            m(".col-md-4.mb-4.mb-md-0", [
              m("h3", "About Vita"),
              m(
                "p",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi."
              ),
              m("p.social", [
                m("a[href=#]", [m("span.bi.bi-twitter")]),
                m("a[href=#]", [m("span.bi.bi-facebook")]),
                m("a[href=#]", [m("span.bi.bi-instagram")]),
                m("a[href=#]", [m("span.bi.bi-linkedin")]),
              ]),
            ]),
            m(".col-md-7.ms-auto", [
              m(".row.site-section.pt-0", [
                m(".col-md-6.mb-6.mb-md-0", [
                  m("h3", "Navegación"),
                  m("ul.list-unstyled", [
                    m("li", [m("a[href=#!Suscripcion]", "Suscripción")]),
                    m("li", [m("a[href=#]", "Comentarios")]),
                    m("li", [m("a[href=#]", "Contacto")]),
                  ]),
                ]),
                m(".col-md-6.mb-6.mb-md-0", [
                  m("h3", "Servicios"),
                  m("ul.list-unstyled", [
                    m("li", [m("a[href=#]", "Equipo")]),
                    m("li", [m("a[href=#]", "Collaboration")]),
                    m("li", [m("a[href=#]", "Todos")]),
                    m("li", [m("a[href=#]", "Events")]),
                  ]),
                ]),
              ]),
            ]),
          ]),
          m(".row.justify-content-center.text-center", [
            m(".col-md-7", [
              m("p.copyright", "© Copyright Vita. All Rights Reserved"),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function Testimonio() {
  return {
    view: () => [
      m("section.section.border-top.border-bottom", [
        m(".container", [
          m(".row.justify-content-center.text-center.mb-5", [
            m(".col-md-4", [m("h2.section-heading", "Review From Our Users")]),
          ]),
          m(".row.justify-content-center.text-center", [
            m(".col-md-7", [
              m(
                ".testimonials-slider.swiper",
                { "data-aos": "fade-up", "data-aos-delay": "100" },
                [
                  m(".swiper-wrapper", [
                    m(".swiper-slide", [
                      m(".review.text-center", [
                        m("p.stars", [
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill.muted"),
                        ]),
                        m("h3", "Excellent App!"),
                        m("blockquote", [
                          m(
                            "p",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi, provident voluptates consectetur maiores quos."
                          ),
                        ]),
                        m("p.review-user", [
                          m("img.img-fluid.rounded-circle.mb-3", {
                            src: "assets/img/person_1.jpg",
                            alt: "Image",
                          }),
                          m("span.d-block", [
                            m("span.text-black", "Jean Doe"),
                            ", — App User",
                          ]),
                        ]),
                      ]),
                    ]),
                    m(".swiper-slide", [
                      m(".review.text-center", [
                        m("p.stars", [
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill.muted"),
                        ]),
                        m("h3", "This App is easy to use!"),
                        m("blockquote", [
                          m(
                            "p",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi, provident voluptates consectetur maiores quos."
                          ),
                        ]),
                        m("p.review-user", [
                          m("img.img-fluid.rounded-circle.mb-3", {
                            src: "assets/img/person_2.jpg",
                            alt: "Image",
                          }),
                          m("span.d-block", [
                            m("span.text-black", "Johan Smith"),
                            ", — App User",
                          ]),
                        ]),
                      ]),
                    ]),
                    m(".swiper-slide", [
                      m(".review.text-center", [
                        m("p.stars", [
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill"),
                          m("span.bi.bi-star-fill.muted"),
                        ]),
                        m("h3", "Awesome functionality!"),
                        m("blockquote", [
                          m(
                            "p",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi, provident voluptates consectetur maiores quos."
                          ),
                        ]),
                        m("p.review-user", [
                          m("img.img-fluid.rounded-circle.mb-3", {
                            src: "assets/img/person_3.jpg",
                            alt: "Image",
                          }),
                          m("span.d-block", [
                            m("span.text-black", "Jean Thunberg"),
                            ", — App User",
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                  m(".swiper-pagination"),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
      m("section.section", [
        m(".container", [
          m(
            ".row.justify-content-center.text-center.mb-5",
            { "data-aos": "fade-up" },
            [
              m(".col-md-5", [
                m("h2.section-heading", "Save your time to using SoftLand"),
              ]),
            ]
          ),
          m(".row", [
            m(".col-md-4", { "data-aos": "fade-up", "data-aos-delay": "" }, [
              m(".feature-1.text-center", [
                m(".wrap-icon.icon-1", [m("i.bi.bi-people")]),
                m("h3.mb-3", "Explore Your Team"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m(".col-md-4", { "data-aos": "fade-up", "data-aos-delay": "100" }, [
              m(".feature-1.text-center", [
                m(".wrap-icon.icon-1", [m("i.bi.bi-brightness-high")]),
                m("h3.mb-3", "Digital Whiteboard"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m(".col-md-4", { "data-aos": "fade-up", "data-aos-delay": "200" }, [
              m(".feature-1.text-center", [
                m(".wrap-icon.icon-1", [m("i.bi.bi-bar-chart")]),
                m("h3.mb-3", "Design To Development"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      m("section.section", [
        m(".container", [
          m(
            ".row.justify-content-center.text-center.mb-5",
            { "data-aos": "fade" },
            [
              m(".col-md-6.mb-5", [
                m("img.img-fluid", {
                  src: "assets/img/undraw_svg_1.svg",
                  alt: "Image",
                }),
              ]),
            ]
          ),
          m(".row", [
            m(".col-md-4", [
              m(".step", [
                m("span.number", "01"),
                m("h3", "Sign Up"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m(".col-md-4", [
              m(".step", [
                m("span.number", "02"),
                m("h3", "Create Profile"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
            m(".col-md-4", [
              m(".step", [
                m("span.number", "03"),
                m("h3", "Enjoy the app"),
                m(
                  "p",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio."
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      m("section.section", [
        m(".container", [
          m(".row.align-items-center", [
            m(".col-md-4.me-auto", [
              m("h2.mb-4", "Seamlessly Communicate"),
              m(
                "p.mb-4",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
              ),
              m("p", [m("a.btn.btn-primary", { href: "#" }, "Download Now")]),
            ]),
            m(".col-md-6", { "data-aos": "fade-left" }, [
              m("img.img-fluid", {
                src: "assets/img/undraw_svg_2.svg",
                alt: "Image",
              }),
            ]),
          ]),
        ]),
      ]),
      m("section.section", [
        m(".container", [
          m(".row.align-items-center", [
            m(".col-md-4.ms-auto.order-2", [
              m("h2.mb-4", "Gather Feedback"),
              m(
                "p.mb-4",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
              ),
              m("p", [m("a.btn.btn-primary", { href: "#" }, "Download Now")]),
            ]),
            m(".col-md-6", { "data-aos": "fade-right" }, [
              m("img.img-fluid", {
                src: "assets/img/undraw_svg_3.svg",
                alt: "Image",
              }),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function PerfilSection(vnode) {
  let nombre = "";
  let apellido = ""; // Estado local para almacenar el nombre completo
  let email = "";
  let pwd = "";
  let altura = "";
  let peso = "";
  let edad = "";
  let userData = null;
  let statData = null;
  let inputsHabilitados = false;
  const username = vnode.attrs.username;
  const id_usuario = vnode.attrs.id_usuario;
  console.log(username);
  console.log(id_usuario);
  // Función para realizar la llamada AJAX y obtener los datos del usuario
  function fetchData() {
    // Realizar la llamada AJAX
    fetch("../controlador/Usuarios/buscarID.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
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
        userData = data;
        console.log(userData.id);
        m.redraw();
      });
  }
  function fetchData2() {
    // Realizar la llamada AJAX
    fetch("../controlador/Caracteristicas/buscarIDStats.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_usuario: id_usuario}),
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
        statData = data;
        console.log(statData.id);
        m.redraw();
      });
  }
  function habilitarInputs() {
    inputsHabilitados = true;
  }
  function deshabilitarInputs() {
    inputsHabilitados = false;
  }

  function handleSubmit() {
    // Aquí puedes acceder a los valores de los inputs desde el estado local
    console.log("Nombre completo:", nombre + " " + apellido);
    console.log("Email:", email);
    // Aquí puedes enviar los datos al servidor o realizar otras acciones
  }
  return {
    oninit() {
      fetchData();
      fetchData2();
    },
    view: () => {
      if (!userData) {
        return m("span", { class: "loader" });
      }
      return m("section", { style: "background-color: #eee;" }, [
        m("div", { class: "container py-5 mt-5" }, [
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
                  m(
                    "h5",
                    { class: "my-3" },
                    userData.nombre + " " + userData.apellido
                  ),
                  m("p", { class: "text-muted mb-1" }, "Id: " + userData.id),

                  m("div", { class: "d-flex justify-content-center mb-2" }, [
                    m(
                      "button",
                      {
                        type: "button",
                        "data-mdb-button-init": "",
                        "data-mdb-ripple-init": "",
                        class: "btn btn-primary",
                        onclick: () => {
                          habilitarInputs();
                        },
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
                        m("div", { class: "row" }, [
                          m("div", { class: "col-sm-3" }, [
                            m("p", { class: "mb-0" }, "Altura: "),
                          ]),
                          m("div", { class: "col-sm-9" }, [
                            m("input", {
                              type: "text",
                              disabled: !inputsHabilitados,
                              class: "text-muted mb-0",
                              placeholder: statData.altura + "cm",
                              value: altura,
                              oninput: (e) => {
                                altura = e.target.value;
                              },
                            }),
                          ]),
                        ]),
                      ]
                    ),
                    m(
                      "li",
                      {
                        class:
                          "list-group-item d-flex justify-content-between align-items-center p-3",
                      },
                      [
                        m("div", { class: "row" }, [
                          m("div", { class: "col-sm-3" }, [
                            m("p", { class: "mb-0" }, "Peso: "),
                          ]),
                          m("div", { class: "col-sm-9" }, [
                            m("input", {
                              type: "text",
                              disabled: !inputsHabilitados,
                              class: "text-muted mb-0",
                              placeholder: statData.peso + "kg",
                              value: peso,
                              oninput: (e) => {
                                peso = e.target.value;
                              },
                            }),
                          ]),
                        ]),
                      ]
                    ),
                    m(
                      "li",
                      {
                        class:
                          "list-group-item d-flex justify-content-between align-items-center p-3",
                      },
                      [
                        m("div", { class: "row" }, [
                          m("div", { class: "col-sm-3" }, [
                            m("p", { class: "mb-0" }, "Edad: "),
                          ]),
                          m("div", { class: "col-sm-9" }, [
                            m("input", {
                              type: "text",
                              disabled: !inputsHabilitados,
                              class: "text-muted mb-0",
                              placeholder: statData.edad,
                              value: edad,
                              oninput: (e) => {
                                edad = e.target.value;
                              },
                            }),
                          ]),
                        ]),
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
                      m("p", { class: "mb-0" }, "Nombre"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("input", {
                        type: "text",
                        disabled: !inputsHabilitados,
                        class: "text-muted mb-0",
                        placeholder: userData.nombre,
                        value: nombre,
                        oninput: (e) => {
                          nombre = e.target.value;
                        },
                      }),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Apellido"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("input", {
                        type: "text",
                        disabled: !inputsHabilitados,
                        class: "text-muted mb-0",
                        placeholder: userData.apellido,
                        value: apellido,
                        oninput: (e) => {
                          apellido = e.target.value;
                        },
                      }),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Email"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("input", {
                        type: "email",
                        disabled: !inputsHabilitados,
                        class: "text-muted mb-0",
                        placeholder: userData.email,
                        value: email,
                        oninput: (e) => {
                          email = e.target.value;
                        },
                      }),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Contraseña"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("input", {
                        class: "text-muted mb-0",
                        placeholder: userData.pwd,
                        oninput: (e) => {
                          pwd = e.target.value;
                        },
                      }),
                    ]),
                  ]),
                  m("hr"),
                  m("div", { class: "row" }, [
                    m("div", { class: "col-sm-3" }, [
                      m("p", { class: "mb-0" }, "Suscripción"),
                    ]),
                    console.log(userData.suscripcion),
                    userData.suscripcion == 0 ?
                    m("div", { class: "col-sm-2" }, [
                      m("span", {
                        class:"badge bg-secondary",
                        type: "text",
                        style: {
                          backgroundColor: "grey",
                          color: "white"
                        }
                      },"Vita Basic"),
                    ])
                    : userData.suscripcion == 1 ?
                    m("div", { class: "col-sm-2" }, [
                      m("span", {
                        class:"badge bg-success",
                        type: "text",
                        style: {
                          backgroundColor: "green",
                          color: "white",
                          borderRadius:"5px"
                        }
                      }, "Vita Premium"),
                    ])
                    : userData.suscripcion == 2 ?
                    m("div", { class: "col-sm-2" }, [
                      m("span", {
                        class:"badge bg-primary",
                        type: "text",
                        value: apellido,
                        style: {
                          backgroundColor: "blue",
                          color: "white"
                        }
                      },"Vita Family"),
                    ])
                    :
                    m("div", { class: "col-sm-9" }, [
                      m("p", {
                        type: "text",
                        value: apellido,
                        style: {
                          backgroundColor: "blue",
                          color: "white"
                        }
                      },"Nada"),
                    ])
                  ]),
                  inputsHabilitados
                    ? m("div", { class: "row" }, [
                        m("input", {
                          type: "submit",
                          class: "btn btn-info",
                          onclick: () => {
                            deshabilitarInputs();
                            handleSubmit();
                            Modificar(
                              userData.id_usuario,
                              nombre,
                              apellido,
                              email,
                              pwd
                            );
                            ModificarStat(
                              statData.id,
                              altura,
                              peso,
                              edad
                            );
                          },
                        }),
                      ])
                    : null,
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
      ]);
    },
  };
  function Modificar(id_usuario, nombre, apellido, email, password) {
    console.log(nombre);
    fetch("../controlador/Usuarios/modificarUser.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario: id_usuario ? id_usuario : userData.id,
        nombre: nombre ? nombre : userData.nombre,
        apellido: apellido ? apellido : userData.apellido,
        email: email ? email : userData.email,
        pwd: password ? password : userData.pwd,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return window.location.reload();
      }
    });
  }

  function ModificarStat(id_usuario, altura, peso, edad) {
    console.log(nombre);
    fetch("../controlador/Caracteristicas/modificarStat.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_usuario: id_usuario ? id_usuario : userData.id,
        altura: altura ? altura : userData.altura,
        peso: peso ? peso : userData.peso,
        edad: edad ? edad : userData.edad,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        return window.location.reload();
      }
    });
  }
}

function PaymentInfo() {
  const urlParams = new URLSearchParams(window.location.search);
  const precio = urlParams.get("precio");
  const user = urlParams.get("user");
  const id = urlParams.get("id");
  console.log(precio);
  console.log(window.location.search);
  return {
    view: () => [
      m(
        ".col-12",
        {
          style: {
            background:
              "linear-gradient(to right, rgba(0, 0, 255, 0.6) 0%, rgba(0, 0, 255, 0.8) 100%)",

            height: "100vh",
          },
        },
        m(".col-md-4.container.py-5", [
          m(
            ".payment-info",
            {
              style: {
                background: "blue",
                padding: "10px",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "20px 20px #000089",
              },
            },
            [
              m(".d-flex.justify-content-between.align-items-center", [
                m("span", "Detalles de Pago"),
                m("img.rounded", {
                  src: "../images/logo.png",
                  width: "30",
                }),
              ]),
              m(
                "span.type.d-block.mt-3.mb-1",
                { style: { fontSize: "10px", fontWeight: "400" } },
                "Método de Pago"
              ),
              m("label.radio", [
                m("input[type=radio][name=card][value=payment][checked]"),
                m("span", [
                  m("img", {
                    width: "30",
                    src: "https://img.icons8.com/color/48/000000/mastercard.png",
                  }),
                ]),
              ]),
              m("label.radio", [
                m("input[type=radio][name=card][value=payment]"),
                m("span", [
                  m("img", {
                    width: "30",
                    src: "https://img.icons8.com/officel/48/000000/visa.png",
                  }),
                ]),
              ]),
              m("label.radio", [
                m("input[type=radio][name=card][value=payment]"),
                m("span", [
                  m("img", {
                    width: "30",
                    src: "https://img.icons8.com/ultraviolet/48/000000/amex.png",
                  }),
                ]),
              ]),
              m("div", [
                m(
                  "label.credit-card-label",
                  { style: { fontSize: "9px", fontWeight: "300" } },
                  "Nombre de la tarjeta"
                ),
                m("input.form-control.credit-inputs", {
                  type: "text",
                  placeholder: "Name",
                  style: {
                    background: "rgb(102,102,221)",
                    color: "#fff !important",
                    borderColor: "rgb(102,102,221)",
                  },
                }),
              ]),
              m("div", [
                m(
                  "label.credit-card-label",
                  { style: { fontSize: "9px", fontWeight: "300" } },
                  "Número de la tarjeta"
                ),
                m("input.form-control.credit-inputs", {
                  type: "text",
                  placeholder: "0000 0000 0000 0000",
                  style: {
                    background: "rgb(102,102,221)",
                    color: "#fff !important",
                    borderColor: "rgb(102,102,221)",
                  },
                }),
              ]),
              m(".row", [
                m(".col-md-6", [
                  m(
                    "label.credit-card-label",
                    { style: { fontSize: "9px", fontWeight: "300" } },
                    "Fecha de caducidad"
                  ),
                  m("input.form-control.credit-inputs", {
                    type: "text",
                    placeholder: "12/24",
                    style: {
                      background: "rgb(102,102,221)",
                      color: "#fff !important",
                      borderColor: "rgb(102,102,221)",
                    },
                  }),
                ]),
                m(".col-md-6", [
                  m(
                    "label.credit-card-label",
                    { style: { fontSize: "9px", fontWeight: "300" } },
                    "CVV"
                  ),
                  m("input.form-control.credit-inputs", {
                    type: "text",
                    placeholder: "342",
                    style: {
                      background: "rgb(102,102,221)",
                      color: "#fff !important",
                      borderColor: "rgb(102,102,221)",
                    },
                  }),
                ]),
              ]),
              m("hr.line", {
                style: { borderBottom: "1px solid rgb(102,102,221)" },
              }),
              m(
                ".d-flex.justify-content-between.information",
                { style: { marginBottom: "5px" } },
                [
                  m(
                    "span",
                    { style: { fontSize: "12px", fontWeight: "500" } },
                    "Subtotal"
                  ),
                  m("span", precio + "€ "),
                ]
              ),
              m(
                "button.btn.btn-primary.btn-block.d-flex.justify-content-between.mt-3",
                { type: "button", onclick:()=>{CambiarSub()}, style: { background: "blue", boxShadow: "5px 5px #000009" } },
                [
                  m("span", precio + "€ "),
                  m("span", { style: { color: "#fff" } }, [
                    " Pagar ",
                    m("i.fa.fa-long-arrow-right.ml-1"),
                  ]),
                ]
              ),
            ]
          ),
        ])
      ),
    ],
  };

  function CambiarSub() {
    console.log(user, precio);
    alert("Pago realizado con exito");
    fetch("../controlador/Usuarios/modificarSub.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ precio: precio, id_usuario: id }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        console.log("Conectado");
        alert("Pago realizado con exito");
        return response.json(); // Asegúrate de manejar la respuesta como JSON
      }
    }).then((data) => {
      console.log(data); // Verificar la respuesta del servidor
      if (data.success) {
        window.location.href = "?id_usuario="+id+"&username="+user+"#!Perfil";
      } else {
        alert("Error al actualizar la suscripción");
      }
    }).catch((error) => {
      console.error("Hubo un problema con la solicitud de fetch:", error);
    });
  }
  
  
}

// Función para enviar el token de Stripe a tu servidor

// Para renderizar el componente en tu página, podrías usar algo como:
// m.mount(document.body, FormularioPago);
function Suscripciones() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id_usuario");
  const user = urlParams.get("username");
  console.log(user)
  return {
    view: () => [
      m(subHero),
      m("section.section", [
        m(".container", [
          m(".row.justify-content-center.text-center.mb-5", [
            m(".col-md-7", [
              m("h2.section-heading", "Elige un plan"),
              m(
                "p",
                "Estas son las suscripciones disponibles para poder adquirir beneficios."
              ),
            ]),
          ]),
          m(".row.align-items-stretch", [
            m(".col-lg-4.mb-4.mb-lg-0", [
              m(".pricing.h-100.text-center", [
                m("span.popularity", "Gratis"),
                m("h3", "Vita Basic"),
                m("ul.list-unstyled", [
                  m("li", "Crea y modifica tus menus favoritos"),
                  m("li", "Añade y modifica tus platos"),
                ]),
                m(".price-cta", [
                  m("strong.price", "Gratis"),
                  m("p", [
                    m("a.btn.btn-white", { href: "#" }, "Tu plan actual"),
                  ]),
                ]),
              ]),
            ]),
            m(".col-lg-4.mb-4.mb-lg-0", [
              m(".pricing.h-100.text-center.popular", [
                m("span.popularity", "Mas Popular"),
                m("h3", "Vita Premium"),
                m("ul.list-unstyled", [
                  m("li", "Create up to 20 forms"),
                  m("li", "Generate 2500 monthly reports"),
                  m("li", "Manage a team of up to 5 people"),
                ]),
                m(".price-cta", [
                  m("strong.price", "9.95€/mes"),
                  m("p", [
                    m(
                      "a.btn.btn-white",
                      {
                        href: "?precio=9.95&user="+ user +"&id="+id+"#!PaymentInfo",
                      },
                      "Suscribirme"
                    ),
                  ]),
                ]),
              ]),
            ]),
            m(".col-lg-4.mb-4.mb-lg-0", [
              m(".pricing.h-100.text-center", [
                m("span.popularity", "Mejor Valorada"),
                m("h3", "Vita Family"),
                m("ul.list-unstyled", [
                  m("li", "Create up to 20 forms"),
                  m("li", "Generate 2500 monthly reports"),
                  m("li", "Manage a team of up to 5 people"),
                ]),
                m(".price-cta", [
                  m("strong.price", "19.95€/mes"),
                  m("p", [m(
                    "a.btn.btn-white",
                    {
                      href: "?precio=19.95&user="+ user +"&id="+ id +"#!PaymentInfo",
                    },
                    "Suscribirme"
                  ),]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
  };
  function subHero() {
    return {
      view: () => [
        m("section.hero-section.inner-page", [
          m(".wave", [
            m(
              "svg[width='1920px'][height='265px'][viewBox='0 0 1920 265'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
              [
                m(
                  "g#Page-1[stroke='none'][stroke-width='1'][fill='none'][fill-rule='evenodd']",
                  [
                    m(
                      "g#Apple-TV[fill='#FFFFFF'][transform='translate(0.000000, -402.000000)']",
                      [
                        m(
                          "path[d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z'][id='Path']"
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          m(".container", [
            m(".row.align-items-center", [
              m(".col-12", [
                m(".row.justify-content-center", [
                  m(".col-md-7.text-center.hero-text", [
                    m(
                      "h1[data-aos='fade-up'][data-aos-delay='']",
                      "Suscripción"
                    ),
                    m(
                      "p.mb-5[data-aos='fade-up'][data-aos-delay='100']",
                      "Listado de suscripciones."
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
    };
  }
}

function Seccion() {
  return {
    model: {
      menus: [{}, {}, {}],
      items: [{}, {}, {}, {}, {}],
    },
    view: () => [
      m(subHero),
      m(
        "div.col-12.row.my-5",

        [
          m(
            "div",
            {
              class: "col-4",
              style: {
                position: "sticky",
                top: "0",
                zIndex: "1",
                top: "100px",
                overflowY: "auto",
              },
            },
            m(Calendar)
          ),
          m(
            "div",
            {
              class: "col-8 container",
              style: {
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                backgroundColor: "#ffffff",
                marginTop: "100px",
              },
            },
            // Mapear los elementos de model.menus
            // y devolver un div para cada uno de ellos
            this.state.model.menus.map((menu) => {
              return m(
                "div",
                {
                  class: "py-5 px-5 col-12 d-flex flex-column",
                },
                [
                  m(
                    "details",
                    {
                      class: "col-12",
                    },
                    [
                      m(
                        "summary",
                        {
                          class: "h1 col-12 py-3",
                          style: {
                            borderBottom: "1px solid rgba(0,0,0,0.2)",
                          },
                        },
                        "Menu 1"
                      ),
                      m(
                        "div",
                        {
                          class: "col-12 mt-5 d-flex fade-up",
                        },
                        this.state.model.items.map((item) =>
                          m(
                            "div",
                            {
                              class: "card",
                              style: "width: 18rem;",
                            },
                            [
                              m("img", {
                                class: "card-img-top",
                                src: "../images/arroz.jpg",
                                alt: "Card image cap",
                              }),
                              m(
                                "div",
                                {
                                  class: "card-body",
                                },
                                [
                                  m(
                                    "h5",
                                    {
                                      class: "card-title",
                                    },
                                    "Arroz con Tomate"
                                  ),
                                  m(
                                    "p",
                                    {
                                      class: "card-text",
                                    },
                                    "Esta es una receta simple de un arroz a la cubana"
                                  ),
                                ]
                              ),
                              m(
                                "ul",
                                {
                                  class: "list-group list-group-flush",
                                },
                                [
                                  m(
                                    "li",
                                    {
                                      class: "list-group-item",
                                    },
                                    "Calorias: 457/kcal"
                                  ),
                                  m(
                                    "li",
                                    {
                                      class: "list-group-item",
                                    },
                                    "Proteina: 45g/100g"
                                  ),
                                  m(
                                    "li",
                                    {
                                      class: "list-group-item",
                                    },
                                    "Carbohidratos: 60g/100g"
                                  ),
                                  m(
                                    "li",
                                    {
                                      class: "list-group-item",
                                    },
                                    "Grasas: 5g/100g"
                                  ),
                                ]
                              ),
                              m(
                                "div",
                                {
                                  class: "card-body",
                                },
                                [
                                  m(
                                    "a",
                                    {
                                      href: "#",
                                      class: "card-link",
                                    },
                                    "Modificar"
                                  ),
                                  m(
                                    "a",
                                    {
                                      href: "#",
                                      class: "card-link",
                                    },
                                    "Eliminar"
                                  ),
                                ]
                              ),
                            ]
                          )
                        )
                      ),
                    ]
                  ),
                ]
              );
            })
          ),
        ]
      ),
    ],
  };

  function Calendar() {
    let selectedDate = null;
    const days = ["L", "M", "X", "J", "V", "S", "D"];
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const currentDate = new Date();

    function handleDateSelect(date) {
      selectedDate = date;
      m.redraw();
    }

    function getFirstDayOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function getDaysInMonth(date) {
      return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    function prevMonth() {
      currentDate.setMonth(currentDate.getMonth() - 1);
    }

    function nextMonth() {
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return {
      view: () => [
        m(
          "div",
          {
            class: "container col-8",
            style: {
              marginTop: "200px",
            },
          },
          [
            m("input#datepicker", {
              type: "text",
              placeholder: "Introduce la fecha",
              oncreate: () => {
                console.log("Datepicker creado");
                $("#datepicker").datepicker({
                  dateFormat: "dd/mm/yy",
                  onSelect: (dateText) => {
                    const [day, month, year] = dateText.split("/");
                    const date = new Date(year, month - 1, day);
                    handleDateSelect(date);
                  },
                });
              },
            }),
            m(
              ".calendar",
              {
                style: {
                  borderRadius: "10px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  backgroundColor: "#ffffff",
                },
              },
              [
                m(".header", [
                  m(
                    "button",
                    {
                      onclick: () => prevMonth(),
                    },
                    "◄"
                  ),
                  m(
                    "span",
                    {
                      style: {
                        fontWeight: "bold",
                        fontSize: "20px",
                      },
                    },
                    months[currentDate.getMonth()] +
                      " " +
                      currentDate.getFullYear()
                  ),
                  m(
                    "button",
                    {
                      onclick: () => nextMonth(),
                    },
                    "►"
                  ),
                ]),
                m(
                  ".row.text-center.text-white.bg-dark",
                  days.map((day) => m(".col.day", day))
                ),
                m(
                  ".row",
                  Array.from(
                    {
                      length: getDaysInMonth(currentDate),
                    },
                    (_, i) =>
                      m(
                        ".col-1.date",
                        {
                          class:
                            i + 1 === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() ===
                              new Date().getFullYear()
                              ? "today"
                              : "",
                          style: {
                            width: "calc(100% / 7)",
                            textAlign: "center",
                            marginBottom: "5px",
                          },
                        },
                        i + 1
                      )
                  )
                ),
              ]
            ),
          ]
        ),
      ],
    };
  }
  function subHero() {
    return {
      view: () => [
        m("section.hero-section.inner-page", [
          m(".wave", [
            m(
              "svg[width='1920px'][height='265px'][viewBox='0 0 1920 265'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
              [
                m(
                  "g#Page-1[stroke='none'][stroke-width='1'][fill='none'][fill-rule='evenodd']",
                  [
                    m(
                      "g#Apple-TV[fill='#FFFFFF'][transform='translate(0.000000, -402.000000)']",
                      [
                        m(
                          "path[d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z'][id='Path']"
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          m(".container", [
            m(".row.align-items-center", [
              m(".col-12", [
                m(".row.justify-content-center", [
                  m(".col-md-7.text-center.hero-text", [
                    m("h1[data-aos='fade-up'][data-aos-delay='']", "Menus"),
                    m(
                      "p.mb-5[data-aos='fade-up'][data-aos-delay='100']",
                      "Listado de Menus."
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
    };
  }
}

function SectionPlatos(vnode) {
  let userData = null;
  const id_usuario = vnode.attrs.id_usuario;
  console.log(s_id);

  function fetchData() {
    fetch("../controlador/Platos/mostrarID.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_usuario: s_id }),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error de red: " + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        if (data.error) {
            throw new Error("Error del servidor: " + data.error);
        }
        console.log(data);
        userData = data;
        m.redraw();
    })
    .catch((error) => {
        console.error('Error:', error.message);
        // Manejar el error adecuadamente, por ejemplo, mostrando un mensaje al usuario
    });
}
  return {
    oninit() {
      fetchData();
    },
    view: () => {
      m(subHero);
      if (!userData) {
        return m("span", { class: "loader" });
      }
      return m("section#menu.menu.py-5.mt-5.col-10.conatiner.mx-auto", [
        m(
          '.container[data-aos="fade-up.py-5.mt-5"]',
          { style: { "max-width": "1300px", marginTop: "100px" } },
          [
            m(
              'ul.nav.nav-tabs.d-flex.justify-content-center[data-aos="fade-up"][data-aos-delay="200"]',
              [
                m("li.nav-item", [
                  m(
                    'a.nav-link.active.show[data-bs-toggle="tab"][data-bs-target="#todos"]',
                    [m("h4", "Todos")]
                  ),
                ]),
                m("li.nav-item", [
                  m(
                    'a.nav-link[data-bs-toggle="tab"][data-bs-target="#sencillos"]',
                    [m("h4", "Sencillos")]
                  ),
                ]),
                m("li.nav-item", [
                  m(
                    'a.nav-link[data-bs-toggle="tab"][data-bs-target="#intermedio"]',
                    [m("h4", "Intermedio")]
                  ),
                ]),
                m("li.nav-item", [
                  m(
                    'a.nav-link[data-bs-toggle="tab"][data-bs-target="#dificil"]',
                    [m("h4", "Complejos")]
                  ),
                ]),
                m("li.nav-item", [
                  m("a.nav-link", { href: "#!InsertarPlato" }, [
                    m("h4", "+ Nuevo"),
                  ]),
                ]),
              ]
            ),
            m('.tab-content[data-aos="fade-up"][data-aos-delay="300"]', [
              m(".tab-pane.fade.active.show#todos", [
                m(".tab-header.text-center", [
                  m("p", "Platos"),
                  m("h3", "Todos"),
                ]),
                m(".row.gy-5", [
                  userData.map((p) => {
                    return m(".col-lg-6.menu-item", [
                      m(
                        "div",
                        {
                          class: "card",
                          // style: "width: 18rem;",
                          style: { width: "100%" },
                        },
                        [
                          m("div", { class: "row no-gutters" }, [
                            m("div", { class: "col-md-6" }, [
                              m("img", {
                                class: "card-img",
                                src: p.foto, 
                                alt: "Card image cap",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  "background-size": "cover",
                                },
                              }),
                            ]),
                            m("div", { class: "col-md-6" }, [
                              m("div", { class: "card-body" }, [
                                m(
                                  "h5",
                                  { class: "card-title" },
                                  p.nombre
                                ),
                                m(
                                  "p",
                                  { class: "card-text" },
                                  p.descripcion 
                                ),
                              ]),
                              m("ul", { class: "list-group list-group-flush" }, [
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Calorias: ",
                                  m("span.text-muted", p.calorias + "/kcal")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Proteina: ",
                                  m("span.text-muted", p.proteinas + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Carbohidratos:",
                                  m("span.text-muted", p.carbohidratos + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Grasas:",
                                  m("span.text-muted", p.grasas + "g/100g")
                                ),
                              ]),
                              m("div", { class: "card-body" }, [
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Modificar"
                                ),
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Eliminar"
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ])
                  })
                ]),
              ]),
              m(".tab-pane.fade#sencillos", [
                m(".tab-header.text-center", [
                  m("p", "Platos"),
                  m("h3", "Sencillos"),
                ]),
                m(".row.gy-5", [
                  userData.map((p) => {
                    if(p.complejidad == "Sencillo") { 
                     return m(".col-lg-6.menu-item", [
                      m(
                        "div",
                        {
                          class: "card",
                          // style: "width: 18rem;",
                          style: { width: "100%" },
                        },
                        [
                          m("div", { class: "row no-gutters" }, [
                            m("div", { class: "col-md-6" }, [
                              m("img", {
                                class: "card-img",
                                src: p.foto, 
                                alt: "Card image cap",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  "background-size": "cover",
                                },
                              }),
                            ]),
                            m("div", { class: "col-md-6" }, [
                              m("div", { class: "card-body" }, [
                                m(
                                  "h5",
                                  { class: "card-title" },
                                  p.nombre
                                ),
                                m(
                                  "p",
                                  { class: "card-text" },
                                  p.descripcion 
                                ),
                              ]),
                              m("ul", { class: "list-group list-group-flush" }, [
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Calorias: ",
                                  m("span.text-muted", p.calorias + "/kcal")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Proteina: ",
                                  m("span.text-muted", p.proteinas + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Carbohidratos:",
                                  m("span.text-muted", p.carbohidratos + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Grasas:",
                                  m("span.text-muted", p.grasas + "g/100g")
                                ),
                              ]),
                              m("div", { class: "card-body" }, [
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Modificar"
                                ),
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Eliminar"
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ])}
                  })
                ]),
              ]),
              m(".tab-pane.fade#intermedio", [
                m(".tab-header.text-center", [
                  m("p", "Platos"),
                  m("h3", "Intermedio"),
                ]),
                m(".row.gy-5", [
                  userData.map((p) => {
                    if(p.complejidad == "Intermedio") { 
                     return m(".col-lg-6.menu-item", [
                      m(
                        "div",
                        {
                          class: "card",
                          // style: "width: 18rem;",
                          style: { width: "100%" },
                        },
                        [
                          m("div", { class: "row no-gutters" }, [
                            m("div", { class: "col-md-6" }, [
                              m("img", {
                                class: "card-img",
                                src: p.foto, 
                                alt: "Card image cap",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  "background-size": "cover",
                                },
                              }),
                            ]),
                            m("div", { class: "col-md-6" }, [
                              m("div", { class: "card-body" }, [
                                m(
                                  "h5",
                                  { class: "card-title" },
                                  p.nombre
                                ),
                                m(
                                  "p",
                                  { class: "card-text" },
                                  p.descripcion 
                                ),
                              ]),
                              m("ul", { class: "list-group list-group-flush" }, [
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Calorias: ",
                                  m("span.text-muted", p.calorias + "/kcal")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Proteina: ",
                                  m("span.text-muted", p.proteinas + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Carbohidratos:",
                                  m("span.text-muted", p.carbohidratos + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Grasas:",
                                  m("span.text-muted", p.grasas + "g/100g")
                                ),
                              ]),
                              m("div", { class: "card-body" }, [
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Modificar"
                                ),
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Eliminar"
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ])}
                  })
                ]),
              ]),
              m(".tab-pane.fade#dificil", [
                m(".tab-header.text-center", [
                  m("p", "Platos"),
                  m("h3", "Complejos"),
                ]),
                m(".row.gy-5", [
                  userData.map((p) => {
                    if(p.complejidad == "Difícil") { 
                     return m(".col-lg-6.menu-item", [
                      m(
                        "div",
                        {
                          class: "card",
                          // style: "width: 18rem;",
                          style: { width: "100%" },
                        },
                        [
                          m("div", { class: "row no-gutters" }, [
                            m("div", { class: "col-md-6" }, [
                              m("img", {
                                class: "card-img",
                                src: p.foto, 
                                alt: "Card image cap",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  "background-size": "cover",
                                },
                              }),
                            ]),
                            m("div", { class: "col-md-6" }, [
                              m("div", { class: "card-body" }, [
                                m(
                                  "h5",
                                  { class: "card-title" },
                                  p.nombre
                                ),
                                m(
                                  "p",
                                  { class: "card-text" },
                                  p.descripcion 
                                ),
                              ]),
                              m("ul", { class: "list-group list-group-flush" }, [
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Calorias: ",
                                  m("span.text-muted", p.calorias + "/kcal")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Proteina: ",
                                  m("span.text-muted", p.proteinas + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Carbohidratos:",
                                  m("span.text-muted", p.carbohidratos + "g/100g")
                                ),
                                m(
                                  "li",
                                  { class: "list-group-item" },
                                  "Grasas:",
                                  m("span.text-muted", p.grasas + "g/100g")
                                ),
                              ]),
                              m("div", { class: "card-body" }, [
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Modificar"
                                ),
                                m(
                                  "a",
                                  { href: "#", class: "card-link" },
                                  "Eliminar"
                                ),
                              ]),
                            ]),
                          ]),
                        ]
                      ),
                    ])}
                  })
                ]),
              ]),
            ]),
          ]
        ),
      ]);
    },
  };
  function subHero() {
    return {
      view: () => [
        m("section.hero-section.inner-page", [
          m(".wave", [
            m(
              "svg[width='1920px'][height='265px'][viewBox='0 0 1920 265'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
              [
                m(
                  "g#Page-1[stroke='none'][stroke-width='1'][fill='none'][fill-rule='evenodd']",
                  [
                    m(
                      "g#Apple-TV[fill='#FFFFFF'][transform='translate(0.000000, -402.000000)']",
                      [
                        m(
                          "path[d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z'][id='Path']"
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          m(".container", [
            m(".row.align-items-center", [
              m(".col-12", [
                m(".row.justify-content-center", [
                  m(".col-md-7.text-center.hero-text", [
                    m("h1[data-aos='fade-up'][data-aos-delay='']", "Platos"),
                    m(
                      "p.mb-5[data-aos='fade-up'][data-aos-delay='100']",
                      "Aqui se mostraran los platos."
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
    };
  }
}

function subHero() {
  return {
    view: () => [
      m("section.hero-section.inner-page", [
        m(".wave", [
          m(
            "svg[width='1920px'][height='265px'][viewBox='0 0 1920 265'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
            [
              m(
                "g#Page-1[stroke='none'][stroke-width='1'][fill='none'][fill-rule='evenodd']",
                [
                  m(
                    "g#Apple-TV[fill='#FFFFFF'][transform='translate(0.000000, -402.000000)']",
                    [
                      m(
                        "path[d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z'][id='Path']"
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
        ]),
        m(".container", [
          m(".row.align-items-center", [
            m(".col-12", [
              m(".row.justify-content-center", [
                m(".col-md-7.text-center.hero-text", [
                  m(
                    "h1[data-aos='fade-up'][data-aos-delay='']",
                    "SoftLand Features"
                  ),
                  m(
                    "p.mb-5[data-aos='fade-up'][data-aos-delay='100']",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
  };
}

function About() {
  return {
    view: () => [
      m(subHero),
      m.fragment({}, [
        m("section.section.pb-0", [
          m(".container", [
            m(".row.align-items-center", [
              m(".col-md-4.me-auto", [
                m("h2.mb-4", "Seamlessly Communicate"),
                m(
                  "p.mb-4",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
                ),
                m("p", [m("a[href='#']", "Read More")]),
              ]),
              m(".col-md-6", { "data-aos": "fade-left" }, [
                m("img.img-fluid", {
                  src: "assets/img/undraw_svg_2.svg",
                  alt: "Image",
                }),
              ]),
            ]),
          ]),
        ]),
        m("section.section", [
          m(".container", [
            m(".row.align-items-center", [
              m(".col-md-4.ms-auto.order-2", [
                m("h2.mb-4", "Gather Feedback"),
                m(
                  "p.mb-4",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
                ),
                m("p", [m("a[href='#']", "Read More")]),
              ]),
              m(".col-md-6", { "data-aos": "fade-right" }, [
                m("img.img-fluid", {
                  src: "assets/img/undraw_svg_3.svg",
                  alt: "Image",
                }),
              ]),
            ]),
          ]),
        ]),
        m("section.section.pb-0", [
          m(".container", [
            m(".row.align-items-center", [
              m(".col-md-4.me-auto", [
                m("h2.mb-4", "Present Designs Inspiration"),
                m(
                  "p.mb-4",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
                ),
                m("p", [m("a[href='#']", "Read More")]),
              ]),
              m(".col-md-6", { "data-aos": "fade-left" }, [
                m("img.img-fluid", {
                  src: "assets/img/undraw_svg_3.svg",
                  alt: "Image",
                }),
              ]),
            ]),
          ]),
        ]),
        m("section.section", [
          m(".container", [
            m(".row.align-items-center", [
              m(".col-md-4.ms-auto.order-2", [
                m("h2.mb-4", "Powerful App Design"),
                m(
                  "p.mb-4",
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae."
                ),
                m("p", [m("a[href='#']", "Read More")]),
              ]),
              m(".col-md-6", { "data-aos": "fade-right" }, [
                m("img.img-fluid", {
                  src: "assets/img/undraw_svg_4.svg",
                  alt: "Image",
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
  };
  function subHero() {
    return {
      view: () => [
        m("section.hero-section.inner-page", [
          m(".wave", [
            m(
              "svg[width='1920px'][height='265px'][viewBox='0 0 1920 265'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink']",
              [
                m(
                  "g#Page-1[stroke='none'][stroke-width='1'][fill='none'][fill-rule='evenodd']",
                  [
                    m(
                      "g#Apple-TV[fill='#FFFFFF'][transform='translate(0.000000, -402.000000)']",
                      [
                        m(
                          "path[d='M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z'][id='Path']"
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]),
          m(".container", [
            m(".row.align-items-center", [
              m(".col-12", [
                m(".row.justify-content-center", [
                  m(".col-md-7.text-center.hero-text", [
                    m("h1[data-aos='fade-up'][data-aos-delay='']", "About Us"),
                    m(
                      "p.mb-5[data-aos='fade-up'][data-aos-delay='100']",
                      "Información sobre Vita."
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
    };
  }
}

function InsertarPlato() {
  var styleInput =
    "outline: none; margin: 0;border: none;-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;width: 100%;font-size: 14px;font-family: inherit; margin-bottom: 32px; border-bottom: 1px solid #e5e5e5;";
  return {
    view: (vnode) => [
      m(
        ".page-wrapper.bg-red.p-t-180.p-b-100",
        {
          style: "background:#2c6ed5; height:100vh",
        },
        [
          m(".wrapper.wrapper--w960.container", [
            m(
              ".card.card-2.col-12.flex-row.d-flex.flex-wrap",
              {
                style:
                  "overflow: hidden; -webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;background: #fff;",
              },
              [
                m(".card-heading.col-3", {
                  style:
                    "background: url('../images/bg-heading-02.jpg') top left/cover no-repeat; display: table-cell; padding-top: 300px; background-position: left center;",
                }),
                m(".card-body.col-9", [
                  m(
                    "h2.title",
                    {
                      style:
                        "text-transform: uppercase;font-weight: 700;margin-bottom: 37px;",
                    },
                    "Insertar Plato"
                  ),
                  m("form[method=POST]", {
                    onsubmit: (e) => {
                      let formData = {
                        name: e.target.name.value,
                        ingredientes: e.target.ingredientes.value,
                        foto: e.target.foto.value,
                        calorias: e.target.calorias.value,
                        proteinas: e.target.proteinas.value,
                        carbohidratos: e.target.carbohidratos.value,
                        grasas: e.target.grasas.value,
                        descripcion: e.target.descripcion.value,
                        complejidad: e.target.complejidad.value,
                        id_usuario: s_id
                      };
                      console.log(formData)

                      fetch("../controlador/Platos/insertarPlatoUser.php", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                      })
                        .then((response) => {
                          if (!response.ok) {
                            throw new Error("Error de red: " + response.statusText);
                          }
                          return response.json();
                        })
                        .then((data) => {
                          if (data.error) {
                            throw new Error("Error del servidor: " + data.error);
                          }
                          console.log(data);
                          window.location.href = "#!Platos";
                          // Manejar la respuesta exitosa, por ejemplo, mostrar un mensaje al usuario
                        })
                        .catch((error) => {
                          console.error('Error:', error.message);
                          // Mostrar la respuesta completa para depuración
                          console.log('Error completo:', error);
                        });
                        e.preventDefault();
                    },
                  }, [
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Nombre del plato",
                        name: "name",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Ingredientes",
                        name: "ingredientes",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Imagen",
                        name: "foto",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Calorias",
                        name: "calorias",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Proteinas",
                        name: "proteinas",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Carbohidratos",
                        name: "carbohidratos",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Grasas",
                        name: "grasas",
                        style: styleInput,
                      }),
                    ]),
                    m(".input-group.col-8", [
                      m("input.input--style-2", {
                        type: "text",
                        placeholder: "Descripcion",
                        name: "descripcion",
                        style: styleInput,
                      }),
                    ]),
                    m(".col-12", [
                      m(".input-group", [
                        m(".rs-select2.js-select-simple.select--no-search", [
                          m("select[name=complejidad]", [
                            m(
                              "option[disabled=disabled][selected=selected]",
                              "Complejidad"
                            ),
                            m("option", "Sencillo"),
                            m("option", "Intermedio"),
                            m("option", "Difícil"),
                          ]),
                          m(".select-dropdown"),
                        ]),
                      ]),
                    ]),
                    m(".p-t-30", [
                      m(
                        "button.btn.btn--radius.btn--green",
                        {
                          type: "submit",
                          style: {
                            "line-height": "40px",
                            display: "inline-block",
                            padding: "0 25px",
                            cursor: "pointer",
                            color: "#fff",
                            "-webkit-transition": "all 0.4s ease",
                            "-o-transition": "all 0.4s ease",
                            "-moz-transition": "all 0.4s ease",
                            transition: "all 0.4s ease",
                            "font-size": "14px",
                            "font-weight": "700",
                            "-webkit-border-radius": "3px",
                            "-moz-border-radius": "3px",
                            "border-radius": "3px",
                            background: "#57b846",
                          },
                        },
                        "Enviar"
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
        ]
      ),
    ],
  };
}


