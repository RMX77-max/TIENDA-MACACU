<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/img/mafia3.jpg" />
    </q-responsive>

    <!-- Seção: CERVEJAS 🍻 -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      CERVEJAS 🍻
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in cerveja" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
            style="height: 200px; width: 100px; display: block; margin: 0 auto"
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
                  width: 100px;
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

    <!-- Seção: CERVEJA LONG NECK  -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      CERVEJA LONG NECK
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in cerveja_longneck" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/product_placeholder.jpg'"
            style="height: 200px; width: 100px; display: block; margin: 0 auto"
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
                  width: 100px;
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

// Cervezas
const cerveja = ref([
  {
    name: "Heineken 269ml",
    price: "R$8,00",
    image: "/img/heineken.jpeg",
    description: "Puro malte e frescor.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Budweiser 269mls",
    price: "R$7,00",
    image: "/img/budweiser.jpeg",
    description: "Sabor equilibrado e bem gelada.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Eisenbanh 269ml",
    price: "R$7,00",
    image: "/img/eisenban.jpg",
    description: "Artesanal, perfeita para relaxar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Eisenbanh 350ml",
    price: "R$9,00",
    image: "/img/eisenban350.jpg",
    description: "Artesanal, perfeita para relaxar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Amstel 269ml",
    price: "R$7,00",
    image: "/img/amstel.png",
    description: "Suave e fácil de beber.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Itaipava 350ml",
    price: "R$6,00",
    image: "/img/itaipava.jpeg",
    description: "Econômica e tradicional.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Cerveja império 269ml",
    price: "R$7,00",
    image: "/img/imperio2.jpg",
    description: "Pilsen forte com ótimo custo-benefício.",
    modal: false,
    quantity: 1,
  },
]);

// CERVEJA LONG NECK
const cerveja_longneck = ref([
  {
    name: "Heineken 330ml",
    price: "R$12,00",
    image: "/img/heineken-botella.jpg",
    description: "Clássica e sempre presente.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Corona  330ml",
    price: "R$14,00",
    image: "/img/corona.jpg",
    description: "Mexicana refrescante e leve.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Coronita 210ml",
    price: "R$10,00",
    image: "/img/coronita.jpg",
    description: "Mexicana refrescante e leve.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Stella 330ml",
    price: "R$10,00",
    image: "/img/estela.jpeg",
    description: "Belga, refinada e suave.",
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
