<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/src/img/mafia5.jpg" />
    </q-responsive>

    <!-- Seção: Copos com Red Bull -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Copos com Red Bull
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in redBullCups" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/src/img/product_placeholder.jpg'"
            style="height: 250px"
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
                style="height: 250px"
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

    <!-- Seção: Copos con vibes -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Copos com Vibes
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in vibesCups" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/src/img/product_placeholder.jpg'"
            style="height: 250px"
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
                style="height: 250px"
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

    <!-- Seção: Combos -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Combos com Red Bull
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in combos_con_redbull" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/src/img/product_placeholder.jpg'"
            style="height: 250px"
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
                style="height: 250px"
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

    <!-- Seção: Combo con Vibe-->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Combo com Vibe
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in combo_vibe" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/src/img/product_placeholder.jpg'"
            style="height: 200px; width: 150px; display: block; margin: 0 auto"
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

// Copas com Red Bull
const redBullCups = ref([
  {
    name: "Doses de Red Bull com Rocks de melancia",
    price: "R$26,00",
    image: "/src/img/vasoconredbull.jpg",
    description: "Refrescância da melancia com energia pura.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Rocks",
    price: "R$25,00",
    image: "/src/img/vasoconredbull.jpg",
    description: "Clássico e direto, um gin intenso com Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Eternity",
    price: "R$20,00",
    image: "/src/img/vasoconredbull.jpg",
    description: "Floral e energético, para os mais ousados.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com RM's",
    price: "R$19,00",
    image: "/src/img/vasoconredbull.jpg",
    description: "Variado, colorido e com energia para a noite inteira.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Tanquery",
    price: "R$50,00",
    image: "/src/img/vasoconredbull.jpg",
    description: "Tradicional com um toque moderno energético.",
    modal: false,
    quantity: 1,
  },
]);

// Copas com Vibes
const vibesCups = ref([
  {
    name: "Doses de vibe com Rocks",
    price: "R$20,00",
    image: "/src/img/vasovibe.png",
    description: "Simples e saboroso com o toque leve do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com Eternity",
    price: "R$15,00",
    image: "/src/img/vasovibe.png",
    description: "Suavidade floral com frescor do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com RM's",
    price: "R$10,00",
    image: "/src/img/vasovibe.png",
    description: "Um mix divertido e tropical.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com Tanquery",
    price: "R$38,00",
    image: "/src/img/vasovibe.png",
    description: "Elegância em forma de drink refrescante.",
    modal: false,
    quantity: 1,
  },
]);
// Combos con Vibe
const combo_vibe = ref([
  {
    name: "Combo Eternity com Vibe",
    price: "R$55,00",
    image: "/src/img/vibe-eternity.png",
    description: "Um combo delicado e tropical.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Combo Tanquery com Vibe",
    price: "R$155,00",
    image: "/src/img/vibe_tanqueria.jpg",
    description: "Para quem exige sofisticação e frescor.",
    modal: false,
    quantity: 1,
  },
]);
// Combo com Red bull
const combos_con_redbull = ref([
  {
    name: "Combo Tanquery com Red Bull",
    price: "R$250,00",
    image: "/src/img/tanquery-redbull.png",
    description: "Premium, com a dose certa de energia.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Combo Eternity com Red Bull",
    price: "R$85,00",
    image: "/src/img/eternity_redbull.jpg",
    description: "Elegante e vibrante, ideal para noites longas.",
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
