<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: CERVEJAS 🍻 -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      GELO
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
    name: "1 pacote de gelo de coco ",
    price: "R$3,00",
    image: "/img/coco.png",
    description:
      "Refrescante e suave, esse gelo traz o sabor tropical do coco para dar um toque especial a qualquer bebida. Ideal para drinks com whisky, rum ou batidas cremosas.",
    modal: false,
    quantity: 1,
  },
  {
    name: "1 pacote de gelo de maracujá",
    price: "R$3,00",
    image: "/img/maracuya.jpeg",
    description:
      "Levemente ácido e exótico, o gelo de maracujá transforma seu drink com um toque frutado e marcante. Perfeito para equilibrar sabores doces e intensos.",
    modal: false,
    quantity: 1,
  },
  {
    name: "1 pacote de gelo de melancia",
    price: "R$3,00",
    image: "/img/sandia.png",
    description:
      "Doce, refrescante e vibrante, esse gelo é a cara do verão! Combina muito bem com bebidas claras e cítricas, deixando tudo mais leve e gostoso.",
    modal: false,
    quantity: 1,
  },
  {
    name: "1 pacote de gelo de frusta tropicais",
    price: "R$4,00",
    image: "/img/frutas.png",
    description:
      "Uma mistura tropical irresistível! Esse gelo traz um blend de sabores como abacaxi, manga e maracujá, ideal para drinks energéticos e criativos.",
    modal: false,
    quantity: 1,
  },
  {
    name: "1 pacote de gelo de frutas vermelhas",
    price: "R$4,00",
    image: "/img/frutosrojos.jpeg",
    description:
      "Rico e adocicado, com notas de morango, framboesa e amora. Um toque sofisticado que transforma seu copo em uma explosão de sabor.",
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
