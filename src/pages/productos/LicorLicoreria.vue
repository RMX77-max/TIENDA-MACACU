<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/src/img/mafia3.jpg" />
    </q-responsive>

    <!-- Seção:LICOR 🍸 -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      LICOR 🍸
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in licor" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/src/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 400px">
            <q-card-section>
              <q-img
                :src="item.image || '/src/img/product_placeholder.jpg'"
                style="
                  height: 200px;
                  width: 150px;
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
const licor = ref([
  {
    name: "Ballena 750",
    price: "R$149,99",
    image: "/src/img/ballena.jpeg",
    description: "Intenso, exótico e marcante.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Licor Iara 750",
    price: "R$89,99",
    image: "/src/img/lara.jpg",
    description: "Sabor nacional com personalidade.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Licor 43 700ml",
    price: "R$169,99",
    image: "/src/img/43.jpeg",
    description: "Espanhol, doce e sofisticado.",
    modal: false,
    quantity: 1,
  },
]);
</script>

<style scoped>
.my-card {
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(3, 1, 1, 0.2);
  transition: transform 0.3s;
}
.my-card:hover {
  transform: scale(1.05);
}
</style>
