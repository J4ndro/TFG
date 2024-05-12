const pages = [Home, Menus, Perfil, Suscripcion];

const components = [Header, Hero, Info, PerfilSection];

export { pages, components };

//!! PAGES
function Home() {
  // Obtener el nombre de usuario de la URL
  const urlParams = new URLSearchParams(window.location.search);
  console.log("Parámetros de la URL:", urlParams);

  // Verificar si el parámetro 'username' está presente en la URL
  if (urlParams.has("username")) {
    const username = urlParams.get("username");
    console.log("Nombre de usuario:", username);
  } else {
    console.log("No se encontró el parámetro 'username' en la URL");
  }

  return {
    view: () => [m(Header), m(Hero), m(Info), m(HeroFooter), m(Footer)],
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

  console.log("Nombre de usuario:", username);

  return {
    view: () => [m(Header), m(PerfilSection, { username }), m(Footer)],
  };
}

function Suscripcion() {
  return {
    view: () => [m(Header), m(Suscripciones), m(Footer)],
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
                      m("li", { class: "dropdown" }, [
                        m("a", { href: "#" }, [
                          m("span", {}, "About Us"),
                          m("i", { class: "bi bi-chevron-right" }),
                        ]),
                        m("ul", {}, [
                          m("li", {}, [
                            m("a", { href: "#" }, "Deep Drop Down 1"),
                          ]),
                          m("li", {}, [
                            m("a", { href: "#" }, "Deep Drop Down 2"),
                          ]),
                          m("li", {}, [
                            m("a", { href: "#" }, "Deep Drop Down 3"),
                          ]),
                          m("li", {}, [
                            m("a", { href: "#" }, "Deep Drop Down 4"),
                          ]),
                          m("li", {}, [
                            m("a", { href: "#" }, "Deep Drop Down 5"),
                          ]),
                        ]),
                      ]),
                      // m("li", {}, [m("a", { href: "#" }, "Drop Down 2")]),
                      // m("li", {}, [m("a", { href: "#" }, "Drop Down 3")]),
                      // m("li", {}, [m("a", { href: "#" }, "Drop Down 4")]),
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
  let userData = null;
  let inputsHabilitados = false;
  const username = vnode.attrs.username;
  console.log(username);
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
    },
    view: () => {
      if (!userData) {
        return m("div", "Cargando...");
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
                      m("p", { class: "mb-0" }, "Numero"),
                    ]),
                    m("div", { class: "col-sm-9" }, [
                      m("p", { class: "text-muted mb-0" }, "634-545-666"),
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
            class: "py-5 px-5 col-12 d-flex flex-column mt-5", // Agregué flex-column para que los elementos se apilen verticalmente
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
