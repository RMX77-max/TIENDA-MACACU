<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: energizante -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      TABACO
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in gelo" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
            style="height: 200px; width: 170px; display: block; margin: 0 auto"
          />
          <q-card-section class="text-center">
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-subtitle1 text-deep-orange-8">
              {{ item.price }}
            </div>
          </q-card-section>
        </q-card>

        <q-dialog v-model="item.modal">
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
                style="
                  height: 200px;
                  width: 170px;
                  display: block;
                  margin: 0 auto;
                "
              />
              <div class="text-h5 q-mt-md">{{ item.name }}</div>
              <div class="text-subtitle1 text-grey-7">Descrição:</div>
              <div class="q-mb-md">{{ item.description }}</div>
            </q-card-section>

            <q-separator />

            <q-card-section class="flex flex-center">
              <q-btn
                flat
                icon="remove"
                color="deep-orange"
                size="lg"
                @click="item.quantity > 1 && item.quantity--"
              />
              <div class="q-mx-md text-h6">{{ item.quantity }}</div>
              <q-btn
                flat
                icon="add"
                color="deep-orange"
                size="lg"
                @click="item.quantity++"
              />
            </q-card-section>

            <q-card-actions align="center">
              <q-btn
                label="Pedir"
                color="deep-orange-6"
                rounded
                size="lg"
                @click="
                  () => {
                    cart.addToCart(item);
                    item.modal = false;
                    item.quantity = 1;
                  }
                "
              />

              <q-btn flat label="Cancelar" color="grey" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <!-- Repite esta estructura para las demás secciones: Copos com Vibes, Combos com Red Bull, etc. -->
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "src/stores/cart";

const cart = useCartStore();

//
const gelo = ref([
  {
    name: "Tabaco To Na Bê 25g",
    price: "R$17,00",
    image: "/img/tabaco/1.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabaco Natural Amsterdam 25g",
    price: "R$15,00",
    image: "/img/tabaco/2.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabaco Crazy Dogs 25g Golden Virginia",
    price: "R$22,00",
    image: "/img/tabaco/3.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabaco Crazy Dogs Beagle Mint 25g",
    price: "R$22,00",
    image: "/img/tabaco/4.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabacco Crazy Dogs - Pug Peach - 25g",
    price: "R$22,00",
    image: "/img/tabaco/5.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Acrema Blend Original",
    price: "R$14,50",
    image: "/img/tabaco/6.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira uva",
    price: "R$23,00",
    image: "/img/tabaco/7.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira white mint",
    price: "R$23,00",
    image: "/img/tabaco/8.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira tangerina",
    price: "R$23,00",
    image: "/img/tabaco/9.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira menta",
    price: "R$23,00",
    image: "/img/tabaco/10.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira intense explosion",
    price: "R$23,00",
    image: "/img/tabaco/11.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Paiol´s s/piteira cigarro de palha",
    price: "R$23,00",
    image: "/img/tabaco/12.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabaco dublin purple",
    price: "R$15,00",
    image: "/img/tabaco/13.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "tabaco dublin pink",
    price: "R$15,00",
    image: "/img/tabaco/14.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "tabaco dublin ice mint",
    price: "R$15,00",
    image: "/img/tabaco/15.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack palha white mint",
    price: "R$23,00",
    image: "/img/tabaco/16.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "MARLBORO FILTRO BRANCO",
    price: "R$15,00",
    image: "/img/tabaco/17.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "MARLBORO SABOR MELANCIA",
    price: "R$15,50",
    image: "/img/tabaco/18.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "MARLBORO FILTRO VERMELHO",
    price: "R$15,00",
    image: "/img/tabaco/19.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rothmans filtro branco",
    price: "R$10,00",
    image: "/img/tabaco/20.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Marlboro vermelho SOLTO",
    price: "R$2,00",
    image: "/img/tabaco/21.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rothmans filtro branco SOLTO",
    price: "R$1,00",
    image: "/img/tabaco/22.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Marlboro vermelho SOLTO",
    price: "R$1,50",
    image: "/img/tabaco/23.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Marlboro branco SOLTO",
    price: "R$1,50",
    image: "/img/tabaco/24.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
]);
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}
.my-card:hover {
  transform: scale(1.05);
}
</style>
