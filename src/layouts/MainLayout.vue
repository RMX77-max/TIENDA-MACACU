<template>
  <q-layout view="lHh Lpr lFf" style="background-image: url('/img/mafia1.jpg')">
    <!-- BARRA SUPERIOR -->
    <q-header elevated class="bg-transparent text-white">
      <q-toolbar
        class="row items-center justify-around full-width q-py-sm"
        style="background-color: black; height: 150px"
      >
        <!-- Botones izquierda - solo desktop -->
        <div
          class="col-4 row items-center q-gutter-sm justify-center"
          v-if="$q.screen.gt.sm"
        >
          <q-btn
            flat
            label="COMEÇAR"
            @click="$router.push('/InicioLicoreria')"
            style="font-size: 20px"
          />

          <!-- Botón Produtos con menú desplegable que no se cierra al salir -->
          <div style="position: relative">
            <!-- Área que activa el menú al pasar el mouse -->
            <div
              @mouseenter="menuProdutos = true"
              @mouseleave="menuProdutos = false"
            >
              <q-btn
                flat
                label="PRODUTOS"
                style="font-size: 20px"
                no-caps
                class="text-white"
              />
            </div>

            <!-- Menú desplegable -->
            <q-menu
              v-model="menuProdutos"
              anchor="bottom middle"
              self="top middle"
              transition-show="jump-down"
              transition-hide="jump-up"
              :offset="[0, 5]"
              persistent
            >
              <!-- Detectar si el mouse entra o sale del menú también -->
              <div
                @mouseenter="menuProdutos = true"
                @mouseleave="menuProdutos = false"
              >
                <q-list style="min-width: 180px">
                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/Whisky')"
                  >
                    <q-item-section>WHISKY</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup @click="$router.push('/gin')">
                    <q-item-section>GIN</q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/cervejas')"
                  >
                    <q-item-section>CERVEJAS</q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/licor')"
                  >
                    <q-item-section>LICOR</q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/seda')"
                  >
                    <q-item-section>SEDAS</q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/batido')"
                  >
                    <q-item-section>SMOOTHIES E CAIPIRINHA</q-item-section>
                  </q-item>

                  <q-item
                    clickable
                    v-close-popup
                    @click="$router.push('/batido')"
                  >
                    <q-item-section>GELO</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-menu>
          </div>
        </div>

        <!-- Menú hamburguesa - solo móvil -->
        <div class="col-4 row items-center justify-start" v-else>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>

        <!-- Logo centro -->
        <div class="col-4 row justify-center">
          <img
            src="/img/logo_macacu.jpeg"
            alt="Logo"
            class="logo-flotante"
            style="height: 100px; width: 100px"
          />
        </div>

        <!-- Carrito (ambos: desktop y móvil) -->
        <div class="col-4 row items-center justify-end q-gutter-sm">
          <q-btn
            flat
            round
            icon="shopping_cart"
            @click="$router.push('/carrito')"
            style="font-size: 20px; position: relative"
          >
            <!-- Badge se muestra si hay productos -->
            <q-badge
              v-if="cart.totalQuantity > 0"
              floating
              color="red"
              text-color="white"
              rounded
              transparent
              style="top: 0; right: 0"
            >
              {{ cart.totalQuantity }}
            </q-badge>
          </q-btn>
        </div>

        <!-- Placeholder derecha en móvil -->
      </q-toolbar>
    </q-header>

    <!-- MENÚ LATERAL (móvil) -->
    <q-drawer v-model="leftDrawerOpen" :show-if-above="false" bordered>
      <div style="padding: 20px">
        <img
          src="/img/logo_macacu.jpeg"
          alt=""
          style="width: 250px; height: 250px; border-radius: 50%"
        />
      </div>

      <!-- Começar -->
      <router-link
        to="/InicioLicoreria"
        exact-active-class="q-item-active-selected"
        class="q-item q-item-type row no-wrap custom-link"
        style="text-decoration: none"
      >
        <q-item-section class="menu-item">
          <div class="flex-row" style="display: flex; align-items: center">
            <q-icon name="home" size="md" color="black" />
            <span
              style="
                margin-left: 10px;
                font-family: Arial, Helvetica, sans-serif;
              "
              >COMEÇAR</span
            >
          </div>
        </q-item-section>
      </router-link>

      <!-- Produtos com submenu (móvil) -->
      <q-expansion-item
        expand-separator
        icon="list"
        label="PRODUTOS"
        class="text-black"
        style="font-family: Arial, Helvetica, sans-serif"
      >
        <q-item clickable v-ripple @click="$router.push('Whisky')">
          <q-item-section>WHISKY</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('gin')">
          <q-item-section>GIN</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('cervejas')">
          <q-item-section>CERVEJA</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('licor')">
          <q-item-section>LICOR</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('seda')">
          <q-item-section>SEDAS</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('batido')">
          <q-item-section>SMOOTHIES E CAIPIRINHA</q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="$router.push('batido')">
          <q-item-section>GELO</q-item-section>
        </q-item>
      </q-expansion-item>

      <!-- Carrinho -->
      <router-link
        to="/carrito"
        exact-active-class="q-item-active-selected"
        class="q-item q-item-type row no-wrap custom-link"
        style="text-decoration: none"
      >
        <q-item-section class="menu-item">
          <div class="flex-row" style="display: flex; align-items: center">
            <q-icon name="shopping_cart" size="md" color="black" />
            <span
              style="
                margin-left: 10px;
                font-family: Arial, Helvetica, sans-serif;
              "
              >CARRINHO</span
            >
          </div>
        </q-item-section>
      </router-link>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useCartStore } from "src/stores/cart";

const cart = useCartStore();
defineOptions({ name: "MainLayout" });

const leftDrawerOpen = ref(false);
const menuProdutos = ref(false);
const $q = useQuasar();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped>
.logo-flotante {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  transform: translateY(10px);
  z-index: 10;
}
</style>
