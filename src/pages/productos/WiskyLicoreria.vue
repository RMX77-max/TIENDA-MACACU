<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/img/mafia2.jpg" />
    </q-responsive>
    <!-- Seção: BEBIDAS ESPECIALES -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      DRINKS ESPECIAIS
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in vasoespecial" :key="index">
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
            style="height: 200px; width: 180px; display: block; margin: 0 auto"
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
                  width: 180px;
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

    <!-- Seção: garrafas -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      Garrafas
    </div>
    <div class="q-gutter-md row items-stretch justify-center">
      <div v-for="(item, index) in garrafas" :key="index">
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

// Copas especiales
const vasoespecial = ref([
  {
    name: "Copo Black Label + Red Bull + sabor gelo + remessa",
    price: "R$49,00",
    image: "/img/especial.jpeg",
    description: "Sabor marcante do Black Label...",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Buchanan's + Red Bull + sabor gelo + remessa",
    price: "R$49,00",
    image: "/img/especial.jpeg",
    description:
      "A sofisticação do Buchanan’s com gelo de frutas e Red Bull. Uma mistura elegante e marcante que refresca e surpreende.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Old Parr + Red Bull + sabor gelo + remessa",
    price: "R$44,00",
    image: "/img/especial.jpeg",
    description:
      "O clássico Old Parr ganha uma nova vida com gelo saborizado e o impulso do Red Bull. Perfeito para quem gosta de tradição com atitude.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Jack Daniels + Red Bull + sabor gelo + remessa",
    price: "R$44,00",
    image: "/img/especial.jpeg",
    description:
      "O sabor inconfundível de Jack Daniels com gelo aromático e energia de Red Bull. Um drink ousado para momentos especiais.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Jack Daniels de Mel + Red Bull + sabor gelo + remessa",
    price: "R$54,00",
    image: "/img/especial.jpeg",
    description:
      "A doçura natural do Jack Honey se mistura ao gelo saborizado e Red Bull, criando um drink equilibrado e irresistível.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Chivas + Red Bull + sabor gelo + remessa",
    price: "R$39,00",
    image: "/img/especial.jpeg",
    description:
      "Chivas Regal com gelo de frutas e Red Bull: um clássico escocês com uma pegada tropical e vibrante. Refinado e refrescante.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: " Copo Red Label + Red Bull + sabor gelo + remessa",
    price: "R$39,00",
    image: "/img/especial.jpeg",
    description:
      "Red Label com gelo saborizado e Red Bull é a combinação ideal para quem quer sabor marcante e energia na medida certa.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
  {
    name: "Copo Passport + Red Bull + sabor gelo + remessa",
    price: "R$31,00",
    image: "/img/especial.jpeg",
    description:
      "O Passporte traz leveza e suavidade ao seu drink, com o toque refrescante do gelo de sabor e a vibração do Red Bull. Preço especial, experiência única.",
    modal: false,
    quantity: 1,
    gelosSelecionados: gelosBase.map((g) => ({ ...g })),
  },
]);

// Copas com Red Bull
const redBullCups = ref([
  {
    name: "Copo Red Bull com Black Label",
    price: "R$45,00",
    image: "/img/vasoconredbull.jpg",
    description: "Um blend refinado com Red Bull, ideal para noites intensas.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Buchanan's",
    price: "R$45,00",
    image: "/img/vasoconredbull.jpg",
    description: "Suavidade e elegância com a energia do Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Old Parr",
    price: "R$40,00",
    image: "/img/vasoconredbull.jpg",
    description:
      "Sabor marcante equilibrado com Red Bull para um drink poderoso.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Jack Daniels",
    price: "R$40,00",
    image: "/img/vasoconredbull.jpg",
    description: "O clássico americano com um toque energético.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Jack Daniels de Mel",
    price: "R$50,00",
    image: "/img/vasoconredbull.jpg",
    description: "Adoçado com mel e elevado com Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Chivas",
    price: "R$35,00",
    image: "/img/vasoconredbull.jpg",
    description: "Whisky escocês premium com uma explosão energética.",
    modal: false,
    quantity: 1,
  },
  {
    name: " Copo Red Bull com Red Label",
    price: "R$35,00",
    image: "/img/vasoconredbull.jpg",
    description: "Um whisky vibrante que combina perfeitamente com Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Copo Red Bull com Passport",
    price: "R$27,00",
    image: "/img/vasoconredbull.jpg",
    description: "Nacional, forte e energético, ideal para começar a festa.",
    modal: false,
    quantity: 1,
  },
]);

// Copas com Vibes
const vibesCups = ref([
  {
    name: "Vibe com Passport",
    price: "R$20,00",
    image: "/img/vasovibe.png",
    description: "Whisky nacional com a suavidade do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe com Red Label",
    price: "R$30,00",
    image: "/img/vasovibe.png",
    description: "Um toque ousado de Vibes com um whisky de presença.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe com Chivas",
    price: "R$30,00",
    image: "/img/vasovibe.png",
    description: "Elegância escocesa suavizada com o sabor tropical do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe com Old Parr",
    price: "R$15,00",
    image: "/img/vasovibe.png",
    description: "Robusto e refrescante com notas leves do Vibes.",
    modal: false,
    quantity: 1,
  },
]);
// Combos con redbull
const combos_con_redbull = ref([
  {
    name: "Black Label com Red Bull",
    price: "R$260,00",
    image: "/img/redbull_blacklabel.jpg",
    description: "Combinação de respeito para quem quer impressionar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Buchaman's com Red Bull",
    price: "R$260,00",
    image: "/img/redbull_buchanans.jpg",
    description: "Refinado, potente e com energia de sobra.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Old Parr com Red Bull",
    price: "R$225,00",
    image: "/img/redbull_oldparr.jpeg",
    description: "Uma dupla perfeita para noites duradouras.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Daniels com Red Bull",
    price: "R$230,00",
    image: "/img/redbull_jackdaniels.jpg",
    description: "O sabor clássico com toda a energia do Red Bull.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Chivas com Red Bull",
    price: "R$200,00",
    image: "/img/redbullchivas.jpeg",
    description: "Qualidade escocesa e energia vibrante.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Red Label com Red Bull",
    price: "R$150,00",
    image: "/img/redbull_redlabel.jpeg",
    description: "O equilíbrio ideal entre custo e sabor.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Passport com Red Bull",
    price: "R$150,00",
    image: "/img/redbull_passport.jpg",
    description: " Simples e eficaz, o combo perfeito pro rolê.",
    modal: false,
    quantity: 1,
  },
]);
// Combo com Vibes
const combo_vibe = ref([
  {
    name: "Vibe com Red Label",
    price: "R$130,00",
    image: "/img/vibe_redlabel.jpg",
    description: "Whisky vibrante com um toque descontraído do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe com Passport",
    price: "R$130,00",
    image: "/img/vibe_passport.jpg",
    description: "Econômico e saboroso, com a refrescância do Vibes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe com Chivas",
    price: "R$150,00",
    image: "/img/vibe_chivas.jpeg",
    description: "Luxo e leveza num combo inesquecível.",
    modal: false,
    quantity: 1,
  },
]);

// garrafas
const garrafas = ref([
  {
    name: "Black Label",
    price: "R$200,00",
    image: "/img/black_label.jpeg",
    description: "Blend icônico e encorpado.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Buchanan's",
    price: "R$200",
    image: "/img/BUCHANANS.jpg",
    description: "Elegância em cada gole.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Old Parr",
    price: "R$155",
    image: "/img/old-parr.jpg",
    description: "Tradicional, com sabor forte e marcante.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Jack Daniels",
    price: "R$139,99",
    image: "/img/Jack-Daniels.png",
    description: "O americano mais famoso do mundo.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Chivas",
    price: "R$140,00",
    image: "/img/chivas.png",
    description: "Sofisticado e equilibrado.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Red Label",
    price: "R$105,00",
    image: "/img/red_label.jpeg",
    description: "Versátil e acessível.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Passport",
    price: "R$65",
    image: "/img/paspporte.jpeg",
    description: "Nacional, potente e econômico.",
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
