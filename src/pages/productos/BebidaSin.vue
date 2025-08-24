<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: energizante -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      BEBIDAS SEM ÁLCOOL
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
    name: "agua de coco ducoco 200ML",
    price: "R$4,99",
    image: "/img/agua_coco.jpeg",
    description:
      "Naturalmente hidratante e leve, a água de coco Ducoco é ideal para refrescar nos dias quentes. Rica em eletrólitos e sem adição de açúcar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "agua de coko maracujá 200ML",
    price: "R$2,99",
    image: "/img/agua_maracuya.jpeg",
    description:
      "Combinação perfeita entre frescor e o sabor suave do maracujá. Uma opção tropical e deliciosa para hidratação natural.",
    modal: false,
    quantity: 1,
  },
  {
    name: "agua de coko morango 200ML",
    price: "R$2,99",
    image: "/img/agua_frutilla.jpeg",
    description:
      "Refrescante e adocicada, essa água de coco com morango é perfeita para quem busca uma bebida leve com um toque frutado irresistível.",
    modal: false,
    quantity: 1,
  },
  {
    name: "coca cola 600ml",
    price: "R$7,99",
    image: "/img/coca600.jpeg",
    description:
      "A clássica Coca-Cola de sempre, em um tamanho ideal para compartilhar ou matar a sede com muito sabor e gás.",
    modal: false,
    quantity: 1,
  },
  {
    name: "suco ponchito laranja acerola 450ML",
    price: "R$4,00",
    image: "/img/ponchito_naranja.jpeg",
    description:
      "Refrescante e rico em vitamina C, esse suco combina a doçura da laranja com a acidez da acerola. Sabor equilibrado e nutritivo.",
    modal: false,
    quantity: 1,
  },
  {
    name: "coca cola 2L",
    price: "R$16,00",
    image: "/img/coca2.jpeg",
    description:
      "Ideal para dividir com a galera! A Coca-Cola 2L é presença garantida em qualquer ocasião, com o sabor que todo mundo conhece.",
    modal: false,
    quantity: 1,
  },
  {
    name: "suco ponchito maracuja",
    price: "R$4,00",
    image: "/img/ponchito_maracuya.jpeg",
    description:
      "Azedinho na medida certa, o suco de maracujá Ponchito é ótimo para refrescar e relaxar. Uma escolha tropical e saborosa.",
    modal: false,
    quantity: 1,
  },
  {
    name: "fanta uva 350ml",
    price: "R$6,50",
    image: "/img/fanta_uva.jpeg",
    description:
      "Clássica e divertida, a Fanta Uva traz um sabor marcante e doce, com aquele toque gaseificado que agrada em qualquer momento.",
    modal: false,
    quantity: 1,
  },
  {
    name: "Agua 500ML",
    price: "R$4,00",
    image: "/img/agua500.jpeg",
    description:
      "Água mineral natural para manter a hidratação ao longo do dia. Essencial, pura e refrescante, direto da fonte.",
    modal: false,
    quantity: 1,
  },
  {
    name: "fanta laranja 350ml",
    price: "R$6,50",
    image: "/img/fanta_naranja.jpeg",
    description:
      "Com seu sabor cítrico e vibrante, a Fanta Laranja é perfeita para acompanhar lanches, churrascos ou apenas se refrescar.",
    modal: false,
    quantity: 1,
  },
  {
    name: "coca lata 350ml",
    price: "R$6,50",
    image: "/img/cocalata.jpeg",
    description:
      "A versão prática e geladinha da Coca-Cola. Ideal para levar onde quiser e matar a sede com muito estilo.",
    modal: false,
    quantity: 1,
  },
  {
    name: "coca lata 350ml zero",
    price: "R$4,50",
    image: "/img/cocalata_zero.jpeg",
    description:
      "Todo o sabor da Coca-Cola com zero açúcar. Refrescante, equilibrada e perfeita para quem quer manter o controle.",
    modal: false,
    quantity: 1,
  },
  {
    name: "del valle goiaba 290ML",
    price: "R$7,00",
    image: "/img/valle_guayaba.jpeg",
    description:
      "Suco cremoso e doce, com o sabor marcante da goiaba. Uma opção nutritiva para quem curte frutas tropicais.",
    modal: false,
    quantity: 1,
  },
  {
    name: "del valle maracuja",
    price: "R$7,00",
    image: "/img/valle_maracuya.jpeg",
    description:
      "Sabor intenso e levemente ácido, o suco de maracujá Del Valle é ótimo para qualquer momento do dia. Refrescância garantida.",
    modal: false,
    quantity: 1,
  },
  {
    name: "del valle manga 290ml",
    price: "R$7,00",
    image: "/img/valle_manga.jpeg",
    description:
      "A doçura da manga em forma líquida. Delicioso e suave, esse suco Del Valle é perfeito para quem ama sabores tropicais.",
    modal: false,
    quantity: 1,
  },
  {
    name: "lindoya agua com gas",
    price: "R$4,00",
    image: "/img/aguagas.jpeg",
    description:
      "Água com gás natural Lindoya, ideal para acompanhar refeições ou preparar drinks leves. Refrescância com elegância.",
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
