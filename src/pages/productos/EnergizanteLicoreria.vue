<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: energizante -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      ENERGÉTICOS
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
    name: "red bull frutas tropicais 250ml",
    price: "R$13,00",
    image: "/img/red_frutas.jpeg",
    description:
      "Energia com sabor exótico! O Red Bull Frutas Tropicais combina a clássica fórmula energética com notas refrescantes de frutas tropicais, perfeito para te manter em alta nos dias mais quentes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "monster tradicional 473ml",
    price: "R$12,00",
    image: "/img/monster.jpeg",
    description:
      "Potência pura em cada gole! O Monster Tradicional traz aquela explosão de energia com sabor marcante e intensidade máxima, ideal para quem precisa de foco e disposição por horas.",
    modal: false,
    quantity: 1,
  },
  {
    name: "monster mango loco 473ML",
    price: "R$11,99",
    image: "/img/monster_mango.jpeg",
    description:
      "Sabor tropical com atitude! O Mango Loco mistura o doce da manga com toques cítricos e vibrantes. Um energético diferente, delicioso e perfeito pra quem curte ousar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "red bull tradicional 250ML",
    price: "R$12,00",
    image: "/img/redbull.jpeg",
    description:
      "O clássico que não falha! O Red Bull Tradicional é a escolha certa pra dar aquele up no dia, com sabor levemente adocicado e efeito rápido de energia.",
    modal: false,
    quantity: 1,
  },
  {
    name: "red bull melancia 250ml",
    price: "R$13,00",
    image: "/img/redbull_sandia.jpeg",
    description:
      "Refrescância e sabor em alta! O Red Bull Melancia entrega uma explosão de sabor frutado com energia vibrante. Ideal pra drinks ou pra curtir gelado.",
    modal: false,
    quantity: 1,
  },
  {
    name: "mister hemp melancia prezada 473",
    price: "R$10,00",
    image: "/img/mister_sandia.jpeg",
    description:
      "Um mix refrescante e ousado! Essa versão traz o sabor leve da melancia com o toque herbal característico da linha Mister Hemp. Ideal para momentos de relax.",
    modal: false,
    quantity: 1,
  },
  {
    name: "mister hemp maça dexavada",
    price: "R$10,00",
    image: "/img/mister_sebada.jpeg",
    description:
      "Sabor intenso e frutado! A Mister Hemp Maçã traz o equilíbrio entre o doce e o ácido da maçã verde com um fundo suave e aromático. Ideal pra saborear gelado.",
    modal: false,
    quantity: 1,
  },
  {
    name: "mister hemp bomba original 473",
    price: "R$10,00",
    image: "/img/mister_bomba.jpeg",
    description:
      "A original que conquistou geral! Sabor marcante com notas herbais e um leve amargor, perfeita pra quem busca uma bebida diferente e cheia de personalidade.",
    modal: false,
    quantity: 1,
  },
  {
    name: "mister hemp tangerina loka spicy 473ML",
    price: "R$10,00",
    image: "/img/mister_naranja.jpeg",
    description:
      "Explosão cítrica com um toque picante! A tangerina encontra o spice nessa versão ousada da Mister Hemp. Refrescante, inusitada e super saborosa.",
    modal: false,
    quantity: 1,
  },
  {
    name: "mister hemp fininho de maracuja spicy 47",
    price: "R$10,00",
    image: "/img/mister_maracuya.jpeg",
    description:
      "O azedinho do maracujá com uma pitada de spice! Um sabor único que mistura intensidade e refrescância, ideal pra quem gosta de experiências diferentes.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vibe 2l",
    price: "R$17,00",
    image: "/img/vibe.jpeg",
    description:
      "Pra animar qualquer rolê! A Vibe 2L é a bebida energética que junta sabor marcante, alta concentração de cafeína e aquele gás pra te manter no ritmo a noite toda.",
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
