<template>
  <q-page class="q-pa-md bg-black">
    <!-- Banner superior -->
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 200px">
      <q-img src="/img/mafia2.jpg" style="width: auto" />
    </q-responsive>

    <!-- Seção: energizante -->
    <div class="text-h5 text-center q-my-md text-weight-bold text-white">
      TABACARIA
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
    name: "vaso vgod alexandria branco",
    price: "R$80,00",
    image: "/img/tabacaria/1.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "vaso vgod alexandria azul",
    price: "R$80,00",
    image: "/img/tabacaria/2.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso mdi 15cm preto",
    price: "R$55,00",
    image: "/img/tabacaria/3.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso mdi 15cm rose",
    price: "R$55,00",
    image: "/img/tabacaria/4.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso Mdi 15 cm azul bb",
    price: "R$55,00",
    image: "/img/tabacaria/5.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso Elegancy 14cm",
    price: "R$55,00",
    image: "/img/tabacaria/6.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso Canelado 14cm -fume",
    price: "R$32,00",
    image: "/img/tabacaria/7.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso Simples King 14cm rose",
    price: "R$25,00",
    image: "/img/tabacaria/8.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Vaso Simples King 14cm azul bb",
    price: "R$25,00",
    image: "/img/tabacaria/9.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "tubos papelito tradicional preto",
    price: "R$11,00",
    image: "/img/tabacaria/10.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tesoura dobrável cabo de metal Prata",
    price: "R$15,00",
    image: "/img/tabacaria/11.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tesoura dobrável cabo de metal Dourada",
    price: "R$15,00",
    image: "/img/tabacaria/12.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Telinha Arabe Fechada da Ibra",
    price: "R$10,00",
    image: "/img/tabacaria/13.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Tabaco Crazy Dogs Terp Lemon Sk 25g",
    price: "R$22,00",
    image: "/img/tabacaria/14.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Stem Narguile Triton Zip - Verde",
    price: "R$145,00",
    image: "/img/tabacaria/15.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Stem Narguile Triton Zip - Bronze",
    price: "R$145,00",
    image: "/img/tabacaria/16.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Stem de Alumínio Judith",
    price: "R$75,00",
    image: "/img/tabacaria/17.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Stem de Alumínio triton hookah",
    price: "R$145,00",
    image: "/img/tabacaria/18.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Slick Sadhu 9 ML colorido",
    price: "R$22,00",
    image: "/img/tabacaria/19.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Slick Sadhu 5ML colorido",
    price: "R$15,00",
    image: "/img/tabacaria/20.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Slick Sadhu 11ML",
    price: "R$25,00",
    image: "/img/tabacaria/21.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Slick De Silicone Lego",
    price: "R$42,00",
    image: "/img/tabacaria/22.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "seda aleda ouro",
    price: "R$7,50",
    image: "/img/tabacaria/23.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Seven Premium",
    price: "R$55,00",
    image: "/img/tabacaria/24.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh mini Dubai preto",
    price: "R$25,00",
    image: "/img/tabacaria/25.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh mini Dubai verde",
    price: "R$25,00",
    image: "/img/tabacaria/26.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Free rosa",
    price: "R$17,00",
    image: "/img/tabacaria/27.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Free azul bb",
    price: "R$17,00",
    image: "/img/tabacaria/28.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "lion rolling circus seda",
    price: "R$5,00",
    image: "/img/tabacaria/29.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "100 bill rolling papers",
    price: "R$1,00",
    image: "/img/tabacaria/30.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "ROSH ALUMINIO branco",
    price: "R$15,00",
    image: "/img/tabacaria/31.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "ROSH ALUMINIO AZUL",
    price: "R$15,00",
    image: "/img/tabacaria/32.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Caveira preto",
    price: "R$17,00",
    image: "/img/tabacaria/33.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Beta Marmore preto/rosa",
    price: "R$37,00",
    image: "/img/tabacaria/34.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Beta Marmore bb/branco",
    price: "R$37,00",
    image: "/img/tabacaria/35.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Rosh Beta Marmore branco",
    price: "R$45,00",
    image: "/img/tabacaria/36.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "respiro universal  pk",
    price: "R$15,00",
    image: "/img/tabacaria/37.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "prato zenith mini flush cobre",
    price: "R$60,00",
    image: "/img/tabacaria/38.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Prato Zenith Kicker Fosco",
    price: "R$20,00",
    image: "/img/tabacaria/39.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Prato Simples GC",
    price: "R$18,00",
    image: "/img/tabacaria/40.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Prato diamond love",
    price: "R$80,00",
    image: "/img/tabacaria/41.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Prato Coroa Anodizado Soberano – 20cm",
    price: "R$55,00",
    image: "/img/tabacaria/42.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Pote Hermético Vidro MR063",
    price: "R$18,00",
    image: "/img/tabacaria/43.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Pote Hermético Vidro MR064 BambooWoods ",
    price: "R$25,00",
    image: "/img/tabacaria/44.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Piteiras de Vidro J POTE DE MEL",
    price: "R$16,00",
    image: "/img/tabacaria/45.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "piteira de vidro canudo",
    price: "R$15,00",
    image: "/img/tabacaria/46.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "piteira to na bê pequena",
    price: "R$14,00",
    image: "/img/tabacaria/47.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Piteira Raise Zenith",
    price: "R$20,00",
    image: "/img/tabacaria/48.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "piteira lion rolling-silver tips Grande",
    price: "R$15,00",
    image: "/img/tabacaria/49.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Pegador dourado e rosa",
    price: "R$15,00",
    image: "/img/tabacaria/50.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Pegador muni",
    price: "R$12,00",
    image: "/img/tabacaria/51.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "pegador cetro wire",
    price: "R$27,00",
    image: "/img/tabacaria/52.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Fogareiro de carvao",
    price: "R$33,00",
    image: "/img/tabacaria/53.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Fogareiro grande",
    price: "R$38,00",
    image: "/img/tabacaria/54.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Narguile Turbo Fulgore",
    price: "R$80,00",
    image: "/img/tabacaria/55.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Narguile Floop Zenith",
    price: "R$140,00",
    image: "/img/tabacaria/56.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Mangueira Helix",
    price: "R$27,00",
    image: "/img/tabacaria/57.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Mangueira de Silicone Fina",
    price: "R$19,00",
    image: "/img/tabacaria/58.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "MAÇARICO",
    price: "R$15,00",
    image: "/img/tabacaria/59.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "maçarico mcon",
    price: "R$12,00",
    image: "/img/tabacaria/60.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Kit Mangueira Nick Elegancy",
    price: "R$35,00",
    image: "/img/tabacaria/61.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Kit Mangueira Dom Hookah",
    price: "R$13,00",
    image: "/img/tabacaria/62.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "garfinho furador mr zord colors",
    price: "R$12,00",
    image: "/img/tabacaria/63.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "garfinho furador mr luky",
    price: "R$10,00",
    image: "/img/tabacaria/64.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "furador simples colors",
    price: "R$3,00",
    image: "/img/tabacaria/65.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "furador rainbow",
    price: "R$10,00",
    image: "/img/tabacaria/66.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "flavor balls",
    price: "R$25,00",
    image: "/img/tabacaria/67.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "filtro papelito slim",
    price: "R$10,00",
    image: "/img/tabacaria/68.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "escova stem ibra pequena 53cm",
    price: "R$15,00",
    image: "/img/tabacaria/69.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "escova clipper fibra pequena 13 cm",
    price: "R$15,00",
    image: "/img/tabacaria/70.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador To Na Be",
    price: "R$18,00",
    image: "/img/tabacaria/71.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador de Coco",
    price: "R$12,00",
    image: "/img/tabacaria/72.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "dichavador metal grande",
    price: "R$44,00",
    image: "/img/tabacaria/73.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "DICHAVADOR METAL - TAMBOR",
    price: "R$42,00",
    image: "/img/tabacaria/74.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador Furta cor 3 Partes",
    price: "R$35,00",
    image: "/img/tabacaria/75.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "dichavador metal na boca",
    price: "R$32,00",
    image: "/img/tabacaria/76.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador de Metal Na Boa",
    price: "R$40,00",
    image: "/img/tabacaria/77.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador de Metal Escovado Tambor Gold",
    price: "R$55,00",
    image: "/img/tabacaria/78.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador / Triturador Gold De Alho E S",
    price: "R$37,00",
    image: "/img/tabacaria/79.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador mrbaba",
    price: "R$15,00",
    image: "/img/tabacaria/80.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "cuia silicone grande",
    price: "R$12,00",
    image: "/img/tabacaria/81.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "cuia abdz alpha",
    price: "R$15,00",
    image: "/img/tabacaria/82.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "contra piteira de borracha",
    price: "R$10,00",
    image: "/img/tabacaria/83.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "cinzeiro de vidro na boa",
    price: "R$35,00",
    image: "/img/tabacaria/84.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Charuto Titan chocolate",
    price: "R$75,00",
    image: "/img/tabacaria/85.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Charuto Cacau Brasil",
    price: "R$12,00",
    image: "/img/tabacaria/86.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Cesto de ferro Safe to Safing",
    price: "R$25,00",
    image: "/img/tabacaria/87.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case To Na Bê mago verde",
    price: "R$40,00",
    image: "/img/tabacaria/88.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case To Na Bê Cabeço P",
    price: "R$35,00",
    image: "/img/tabacaria/89.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case To Na Bê AVATAR TATTOO G",
    price: "R$40,00",
    image: "/img/tabacaria/90.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case flor roxo",
    price: "R$27,00",
    image: "/img/tabacaria/91.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case ibra G",
    price: "R$20,00",
    image: "/img/tabacaria/92.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Case p",
    price: "R$16,00",
    image: "/img/tabacaria/93.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "carvao RAINBOW coco jumbo",
    price: "R$1,50",
    image: "/img/tabacaria/94.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "carvao RAINBOW coco cubic",
    price: "R$1,00",
    image: "/img/tabacaria/95.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Blunt Cone Budmaster Gelato seda",
    price: "R$30,00",
    image: "/img/tabacaria/96.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "borracha para vaso 26 cm",
    price: "R$11,00",
    image: "/img/tabacaria/97.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "borracha para rosh",
    price: "R$5,00",
    image: "/img/tabacaria/98.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "bong de vidro pequeno",
    price: "R$23,00",
    image: "/img/tabacaria/99.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "bong acrilico",
    price: "R$35,00",
    image: "/img/tabacaria/100.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "bolinha de respiro narguile",
    price: "R$10,00",
    image: "/img/tabacaria/101.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "bong cabera",
    price: "R$30,00",
    image: "/img/tabacaria/102.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Blunt Natural Lion chocolate seda",
    price: "R$15,00",
    image: "/img/tabacaria/103.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Blunt Natural Lion terpenes gelato seda",
    price: "R$15,00",
    image: "/img/tabacaria/104.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Blunt Natural Lion manga seda",
    price: "R$15,00",
    image: "/img/tabacaria/105.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Blunt Natural Lion grape seda",
    price: "R$15,00",
    image: "/img/tabacaria/106.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "blunt lion natura seda",
    price: "R$15,00",
    image: "/img/tabacaria/107.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "bastidor de carvao gc com cabo narguile",
    price: "R$24,00",
    image: "/img/tabacaria/108.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Bandeja",
    price: "R$32,00",
    image: "/img/tabacaria/109.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Bandeja rik",
    price: "R$20,00",
    image: "/img/tabacaria/110.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "aluminio stam alto relevo CAIXA",
    price: "R$17,00",
    image: "/img/tabacaria/111.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "aluminio kavalera CAIXA",
    price: "R$12,00",
    image: "/img/tabacaria/112.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Abraçadeira",
    price: "R$11,00",
    image: "/img/tabacaria/113.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Abafador Narguile",
    price: "R$35,00",
    image: "/img/tabacaria/114.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "abafador wire",
    price: "R$45,00",
    image: "/img/tabacaria/115.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "seda fresa",
    price: "R$0,50",
    image: "/img/tabacaria/116.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "SEDA HONEYPUFF DOLLAR CONE",
    price: "R$1,50",
    image: "/img/tabacaria/117.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "mini gorilla rolling stars",
    price: "R$6,00",
    image: "/img/tabacaria/118.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Piteira de Vidro Bong",
    price: "R$16,00",
    image: "/img/tabacaria/119.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "PITEIRA TO NA BÊ GRANDE",
    price: "R$15,00",
    image: "/img/tabacaria/120.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Piteira to na bê média",
    price: "R$15,00",
    image: "/img/tabacaria/121.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Bandeja de Metal Mini",
    price: "R$12,00",
    image: "/img/tabacaria/122.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "BIC PEQUENO",
    price: "R$7,00",
    image: "/img/tabacaria/123.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "12BIC GRANDE",
    price: "R$12,00",
    image: "/img/tabacaria/124.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "ISQUEIRO GTI",
    price: "R$5,50",
    image: "/img/tabacaria/125.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Carvao COCO PRIME",
    price: "R$15,00",
    image: "/img/tabacaria/126.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Aluminio rainbow CAIXA",
    price: "R$20,00",
    image: "/img/tabacaria/127.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Carvão RAINBOW caixa",
    price: "R$45,00",
    image: "/img/tabacaria/128.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "SEDA DE DÓLAR CAIXA",
    price: "R$25,00",
    image: "/img/tabacaria/129.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "SEDA DOLAR SOLTA",
    price: "R$1,00",
    image: "/img/tabacaria/129.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Isqueiro clipper reusable",
    price: "R$15,00",
    image: "/img/tabacaria/130.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Dichavador tony cointry",
    price: "R$40,00",
    image: "/img/tabacaria/131.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "ABRIDOR CARTA DE BARALHO",
    price: "R$10,00",
    image: "/img/tabacaria/132.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Piteira de vidro pequena reta",
    price: "R$14,00",
    image: "/img/tabacaria/133.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Cesto de carvao",
    price: "R$25,00",
    image: "/img/tabacaria/134.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Pegador seven",
    price: "R$25,00",
    image: "/img/tabacaria/135.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Aluminio Karavela UNIDADE",
    price: "R$1,50",
    image: "/img/tabacaria/136.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Aluminio Qatar UNIDADE",
    price: "R$0,50",
    image: "/img/tabacaria/137.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Aluminio stan alto relevo UNIDADE",
    price: "R$2,00",
    image: "/img/tabacaria/138.jpeg",
    description: "",
    modal: false,
    quantity: 1,
  },
  {
    name: "Display Piteira O2",
    price: "R$6,00",
    image: "/img/tabacaria/139.jpeg",
    description: "",
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
