<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/img/mafia5.jpg" />
    </q-responsive>

    <!-- Seção: BEBIDAS ESPECIALES -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      DRINKS ESPECIAIS
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in especial" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
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

            <!-- Seleção de Sabores de Gelo -->
            <q-card-section>
              <div class="text-subtitle2 text-grey-8 q-mb-sm">
                Escolha os sabores de gelo:
              </div>
              <div
                v-for="(gelo, i) in item.gelosSelecionados"
                :key="i"
                class="row items-center justify-between q-mb-sm"
              >
                <div>{{ gelo.nome }}</div>
                <div class="row items-center">
                  <q-btn
                    dense
                    flat
                    icon="remove"
                    color="deep-orange"
                    :disable="gelo.quantidade <= 0"
                    @click="diminuirGelo(item, gelo)"
                  />

                  <div class="q-mx-sm">{{ gelo.quantidade }}</div>
                  <q-btn
                    dense
                    flat
                    icon="add"
                    color="deep-orange"
                    :disable="totalGelos(item) >= item.quantity"
                    @click="incrementarGelo(item, gelo)"
                  />
                </div>
              </div>
            </q-card-section>

            <!-- Quantidade total -->
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
                @click="pedirDrinkEspecial(item)"
              />
              <q-btn flat label="Cancelar" color="grey" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>

    <!-- Seção: Copos com Red Bull -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Copos com Red Bull
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in redBullCups" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
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

    <!-- Seção: Copos con vibes -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Copos com Vibes
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in vibesCups" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
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
            :src="item.image || '/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
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

    <!-- Seção: Combo con Vibe-->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Combo com Vibe
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in combo_vibe" :key="index">
        <q-card class="my-card" style="width: 300px" @click="item.modal = true">
          <q-img
            :src="item.image || '/img/product_placeholder.jpg'"
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
          <q-card style="min-width: 280px">
            <q-card-section>
              <q-img
                :src="item.image || '/img/product_placeholder.jpg'"
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

// Función para aumentar el sabor de gelo, hasta el máximo permitido (cantidad del producto)
function incrementarGelo(item, gelo) {
  if (totalGelos(item) < item.quantity) {
    gelo.quantidade++;
  }
}

// Función para disminuir el sabor de gelo
function diminuirGelo(item, gelo) {
  if (gelo.quantidade > 0) {
    gelo.quantidade--;
  }
}

// Función para agregar al carrito
function pedirDrinkEspecial(item) {
  const saboresSelecionados = item.gelosSelecionados
    .filter((g) => g.quantidade > 0)
    .map((g) => `${g.nome} (x${g.quantidade})`);

  const itemCarrinho = {
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
    sabores: saboresSelecionados, // 🔽 los sabores van como arreglo separado
  };

  cart.addToCart(itemCarrinho);

  // Resetar modal
  item.modal = false;
  item.quantity = 1;
  item.gelosSelecionados = gelosBase.map((g) => ({ ...g }));
}

function totalGelos(item) {
  return item.gelosSelecionados.reduce((acc, gelo) => acc + gelo.quantidade, 0);
}

const gelosBase = [
  { nome: "Gelo de coco", quantidade: 0 },
  { nome: "Gelo de maracujá", quantidade: 0 },
  { nome: "Gelo de melancia", quantidade: 0 },
  { nome: "Gelo de frutas tropicais", quantidade: 0 },
  { nome: "Gelo de frutas vermelhas", quantidade: 0 },
];

// Copas especiais
const especial = ref([
  {
    name: "Copo de Rocks de melancia + Red Bull + sabor gelo + remessa",
    price: "R$30,00",
    image: "/img/especial.jpeg",
    description: "Refrescância da melancia com energia pura.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Doses de Rocks + Red Bull + sabor gelo + remessa",
    price: "R$29,00",
    image: "/img/especial.jpeg",
    description: "Clássico e direto, um gin intenso com Red Bull.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Doses Eternity + Tradicional Red Bull + sabor gelo + remessa",
    price: "R$22,00",
    image: "/img/especial.jpeg",
    description: "Floral e energético, para os mais ousados.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Doses Eternity + Sabor Red Bull + sabor gelo + remessa",
    price: "R$23,00",
    image: "/img/especial.jpeg",
    description: "Floral e energético, para os mais ousados.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Doses RM's + Red Bull + sabor gelo + remessa",
    price: "R$23,00",
    image: "/img/especial.jpeg",
    description: "Variado, colorido e com energia para a noite inteira.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Doses de Tanquery + Red Bull + sabor gelo + remessa",
    price: "R$46,00",
    image: "/img/especial.jpeg",
    description: "Tradicional com um toque moderno energético.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
]);

// Copas com Red Bull
const redBullCups = ref([
  {
    name: "Doses de Red Bull com Rocks de melancia",
    price: "R$26,00",
    image: "/img/vasoconredbull.jpg",
    description: "Refrescância da melancia com energia pura.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Rocks",
    price: "R$25,00",
    image: "/img/vasoconredbull.jpg",
    description: "Clássico e direto, um gin intenso com Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Eternity",
    price: "R$22,00",
    image: "/img/vasoconredbull.jpg",
    description: "Floral e energético, para os mais ousados.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull/Sabor com Eternity",
    price: "R$23,00",
    image: "/img/vasoconredbull.jpg",
    description: "Floral e energético com sabor, para os mais ousados.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com RM's",
    price: "R$22,00",
    image: "/img/vasoconredbull.jpg",
    description: "Variado, colorido e com energia para a noite inteira.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de Red Bull com Tanquery",
    price: "R$42,00",
    image: "/img/vasoconredbull.jpg",
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
    image: "/img/vasovibe.png",
    description: "Simples e saboroso com o toque leve do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com Eternity",
    price: "R$15,00",
    image: "/img/vasovibe.png",
    description: "Suavidade floral com frescor do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com RM's",
    price: "R$13,00",
    image: "/img/vasovibe.png",
    description: "Um mix divertido e tropical.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Doses de vibe com Tanquery",
    price: "R$37,00",
    image: "/img/vasovibe.png",
    description: "Elegância em forma de drink refrescante.",
    modal: false,
    quantity: 1,
  },
]);
// Combos con Vibe
const combo_vibe = ref([
  {
    name: "Combo Eternity com Vibe",
    price: "R$60,00",
    image: "/img/vibe-eternity.png",
    description: "Um combo delicado e tropical.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Combo Tanquery com Vibe",
    price: "R$155,00",
    image: "/img/vibe_tanqueria.jpg",
    description: "Para quem exige sofisticação e frescor.",
    modal: false,
    quantity: 1,
  },
]);
// Combo com Red bull
const combos_con_redbull = ref([
  {
    name: "Combo Tanquery com Red Bull",
    price: "R$190,00",
    image: "/img/tanquery-redbull.png",
    description: "Premium, com a dose certa de energia.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Combo Eternity com Red Bull",
    price: "R$90,00",
    image: "/img/eternity_redbull.jpg",
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
