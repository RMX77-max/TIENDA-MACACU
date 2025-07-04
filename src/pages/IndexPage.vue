<template>
  <div class="q-pa-md column q-gutter-xl items-center text-dark">
    <!-- SOBRE -->
    <q-card
      class="card-transparente q-mx-auto"
      style="max-width: 100%; width: 100%; max-width: 1000px"
    >
      <q-card-section>
        <div class="q-pa-md">
          <div class="q-gutter-md">
            <q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              control-color="white"
              navigation
              padding
              arrows
              height="600px"
              class="bg-black text-white shadow-1 rounded-borders"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <div class="q-mt-md text-center">
                  <img
                    src="/img/puertaTienda.jpeg"
                    style="width: 100%; border-radius: 12px"
                  />
                </div>
              </q-carousel-slide>
              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <div class="q-mt-md text-center">
                  <img
                    src="/img/InteriorTienda.jpeg"
                    style="width: 100%; border-radius: 12px"
                  />
                </div>
              </q-carousel-slide>
              <q-carousel-slide
                name="layers"
                class="column no-wrap flex-center"
              >
                <div class="q-mt-md text-center">
                  <img
                    src="/img/Tienda.jpeg"
                    style="width: 100%; border-radius: 12px"
                  />
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
        <div
          class="text-h2 text-center text-weight-bold text-white"
          style="padding-top: 50px"
        >
          Adega Al Capone
        </div>
        <div class="text-subtitle1 q-mt-sm text-center text-white">
          Uma adega com alma mafiosa, tradição e as melhores bebidas direto para
          você. Atendimento personalizado e entrega rápida em Cidade Dutra.
        </div>
      </q-card-section>
    </q-card>

    <!-- LOCALIZAÇÃO -->
    <q-card
      class="card-transparente q-mx-auto"
      style="max-width: 100%; width: 100%; max-width: 800px"
    >
      <q-card-section>
        <div class="text-h3 text-center text-weight-bold text-white">
          Localização
        </div>
        <div class="text-subtitle1 q-mt-sm text-center text-white">
          Rua Acuti 452 – Cidade Dutra, SP
        </div>
        <div class="q-mt-md">
          <img
            src="/img/Licoreria.png"
            alt="Mapa da loja"
            style="width: 100%; border-radius: 12px"
          />
        </div>
        <div class="q-mt-md flex flex-center">
          <q-btn
            label="Ver no Google Maps"
            color="black"
            text-color="white"
            no-caps
            href="https://www.google.com/maps/place/Tabacaria+e+Adega+Al+Capone/@-23.7110772,-46.7026638,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x94ce4fb0857935df:0x77981a037a818b19!2sR.+Acuti,+452+-+Cidade+Dutra,+S%C3%A3o+Paulo+-+SP,+04810-160,+Brasil!3b1!8m2!3d-23.7110821!4d-46.7000889!16s%2Fg%2F11cpfxb68b!3m5!1s0x94ce4f34acedb8ad:0x3f56c9bf4c89020!8m2!3d-23.7110821!4d-46.7000889!16s%2Fg%2F11ydkt8g7f?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            icon="location_on"
          />
        </div>
      </q-card-section>
    </q-card>

    <!-- CONTATO -->
    <q-card
      class="card-transparente q-mx-auto"
      style="max-width: 100%; width: 100%; max-width: 400px"
    >
      <q-card-section class="flex flex-center column q-gutter-md">
        <div class="text-h5 text-weight-bold text-white text-center">
          Fale Conosco
        </div>

        <div class="iconos" style="display: flex; gap: 24px">
          <!-- Ícone Instagram com link -->
          <a
            href="https://instagram.com/adega_e_tabacaria_al_capone"
            target="_blank"
            class="bg-white q-pa-sm flex flex-center"
            style="
              border-radius: 50%;
              width: 60px;
              height: 60px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
              />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </a>

          <a
            href="https://wa.me/5511967411626"
            target="_blank"
            class="bg-white q-pa-sm flex flex-center"
            style="
              border-radius: 50%;
              width: 60px;
              height: 60px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path
                d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
              />
            </svg>
          </a>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>

<style scoped>
.card-transparente {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px);
  padding: 24px;
}
</style>
