<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/img/fumando.jpg" />
    </q-responsive>

    <!-- Seção:LICOR 🍸 -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Sedas
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in seda" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
            style="height: 200px"
          />
          <q-card-section class="text-center">
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-subtitle1 text-deep-orange-8">
              {{ item.price }}
            </div>
          </q-card-section>
        </q-card>

        <q-dialog v-model="item.modal">
          <q-card style="min-width: 400px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
                style="height: 200px"
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

// Licor
const seda = ref([
  {
    name: "Seda Papelito",
    price: "R$7,00",
    image: "/img/papelito.jpg",
    description: "Tradicional, ideal para o dia a dia.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda Zomo alfafa",
    price: "R$7,00",
    image: "/img/zomo.png",
    description: "Natural e resistente.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda zomo natural",
    price: "R$5,00",
    image: "/img/natural.png",
    description: "Papel ecológico e suave.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda Dólar solta",
    price: "R$1,00",
    image: "/img/dolar.jpg",
    description: "Econômica e prática.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda lion rolling circus",
    price: "R$5,00",
    image: "/img/circus.jpg",
    description: "Alternativa estilosa e moderna.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda fresa cereja",
    price: "R$5,00",
    image: "/img/dolar.jpg",
    description: "Saborizada para uma experiência diferente.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Seda Dólar já bolada",
    price: "R$1,50",
    image: "/img/dolar.jpg",
    description: "Simples e pronta para usar.",
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
