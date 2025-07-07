<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: CERVEJAS 🍻 -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      SMOOTHIES
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in batido" :key="index">
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
          <q-card style="min-width: 400px">
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

    <!-- Seção: CERVEJA LONG NECK  -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      GELO
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in caipirinha" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/product_placeholder.jpg'"
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
          <q-card style="min-width: 400px">
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

// Cervezas
const batido = ref([
  {
    name: "Batida de morango",
    price: "R$25,00",
    image: "/img/batidos.jpeg",
    description:
      "Uma explosão de sabor! Morangos frescos batidos com uma dose generosa de bebida e um toque de leite condensado para deixar tudo mais cremoso. Refrescante e irresistível.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Batida de Maracujá",
    price: "R$25,00",
    image: "/img/batidos.jpeg",
    description:
      "Refrescância tropical! O sabor azedinho do maracujá combinado com a suavidade da batida cria uma experiência única para os amantes de drinks exóticos.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Batida de limão",
    price: "R$25,00",
    image: "/img/batidos.jpeg",
    description:
      "Cítrica na medida certa! Uma mistura equilibrada entre o azedinho do limão e a cremosidade da batida, perfeita para quem quer um drink leve e marcante.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Batida de abacaxi",
    price: "R$25,00",
    image: "/img/batidos.jpeg",
    description:
      "Verão em cada gole! Feita com suco natural de abacaxi e bebida geladinha, essa batida é ideal para refrescar os dias mais quentes com muito sabor.",
    modal: false,
    quantity: 1,
  },
]);

// CERVEJA LONG NECK
const caipirinha = ref([
  {
    name: "Caipirinha de limão",
    price: "R$15,00",
    image: "/img/cai-limon.jpg",
    description:
      "A clássica que nunca sai de moda! Limão fresco, açúcar e gelo combinados com uma dose caprichada para um sabor autêntico e equilibrado.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Caipirinha de maracujá",
    price: "R$15,00",
    image: "/img/cai-maracuja.jpeg",
    description:
      "Sabor marcante e exótico! A fruta tropical traz um toque diferenciado à tradicional caipirinha, surpreendendo com sua intensidade e frescor.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Caipirinha de abacaxi",
    price: "R$15,00",
    image: "/img/cai-piña.jpeg",
    description:
      "Leve e tropical! A doçura natural do abacaxi dá um toque especial ao drink, tornando a experiência ainda mais refrescante e saborosa.",
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
