const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "InicioLicoreria",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "productos",

        component: () => import("pages/MenuBroasteria.vue"),
      },
      {
        path: "whisky", // acceso completo será /produtos/whisky
        component: () => import("pages/productos/WiskyLicoreria.vue"),
      },
      {
        path: "gin",
        component: () => import("pages/productos/GinLicoreria.vue"),
      },
      {
        path: "cervejas",
        component: () => import("pages/productos/CervezaLicoreria.vue"),
      },
      {
        path: "licor",
        component: () => import("pages/productos/LicorLicoreria.vue"),
      },
      {
        path: "seda",
        component: () => import("pages/productos/SedaLicoreria.vue"),
      },
      {
        path: "batido",
        component: () => import("pages/productos/BatidoHielo.vue"),
      },
      {
        path: "gelo",
        component: () => import("pages/productos/HieloSabor.vue"),
      },
      {
        path: "energizante",
        component: () => import("pages/productos/EnergizanteLicoreria.vue"),
      },
      {
        path: "bebidasinalcohol",
        component: () => import("pages/productos/BebidaSin.vue"),
      },
      {
        path: "tabacaria",
        component: () => import("pages/productos/TabacariaLico.vue"),
      },
      {
        path: "tabaco",
        component: () => import("pages/productos/TabacoLicoreria.vue"),
      },
      {
        path: "carrito",
        component: () => import("pages/CarritoBr.vue"),
      },
      // Agrega más si necesitas
    ],
  },
];

export default routes;
