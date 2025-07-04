<template>
  <q-page class="flex flex-center bg-amber-50">
    <q-card
      class="q-pa-lg shadow-10"
      style="max-width: 800px; border-radius: 16px"
    >
      <q-card-section class="text-center">
        <q-img
          src="../img/crispy_crujiente.png"
          alt="Kripi Crujiente"
          class="rounded-borders"
          style="border-radius: 16px"
        />
      </q-card-section>

      <q-card-section class="text-center">
        <div class="text-h4 text-brown-9">Bienvenido a Krispi Crujiente</div>
        <div class="text-subtitle1 text-grey-8 q-mt-sm">
          El mejor pollo broaster de la ciudad, crocante y delicioso.
        </div>
        <div class="text-subtitle2 text-grey-7 q-mt-sm">
          Dirección: Calle Lanza #123, Ciudad Cochabamba, Cochabamba
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-gutter-sm flex flex-center q-mt-md">
        <q-btn
          label="Iniciar Sesión"
          color="deep-orange-6"
          rounded
          size="lg"
          @click="abrirLogin = true"
        />
        <q-btn
          label="Registrarse"
          color="orange-5"
          rounded
          size="lg"
          @click="abrirRegistro = true"
        />
        <q-btn label="Ver Menú" color="amber-8" rounded size="lg" />
      </q-card-section>

      <q-separator />

      <q-card-section class="text-center text-grey-7 q-mt-md">
        <div>Síguenos en nuestras redes</div>
        <div>Instagram: @kripicrujiente</div>
        <div>Tel: +55 11 99999-9999</div>
      </q-card-section>
    </q-card>

    <!-- Modal de Login -->
    <q-dialog v-model="abrirLogin">
      <q-card style="min-width: 400px">
        <q-card-section class="text-center">
          <div class="text-h5">Iniciar Sesión</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="login.usuario"
            label="Usuario"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="login.password"
            type="password"
            label="Contraseña"
            outlined
            dense
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="grey" v-close-popup />
          <q-btn label="Iniciar Sesión" color="deep-orange-6" rounded />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Modal de Registro -->
    <q-dialog v-model="abrirRegistro">
      <q-card style="min-width: 400px">
        <q-card-section class="text-center">
          <div class="text-h5">Registrarse</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="registro.nombre"
            label="Nombre Completo"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="registro.telefono"
            label="Teléfono"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="registro.usuario"
            label="Usuario"
            outlined
            dense
            class="q-mb-sm"
          />
          <q-input
            v-model="registro.password"
            type="password"
            label="Contraseña"
            outlined
            dense
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="grey" v-close-popup />
          <q-btn label="Registrar" color="orange-5" rounded />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const abrirLogin = ref(false);
const abrirRegistro = ref(false);

const login = ref({
  usuario: "",
  password: "",
});

const registro = ref({
  nombre: "",
  telefono: "",
  usuario: "",
  password: "",
});
</script>

<style scoped>
body {
  background-color: #fff8e1;
}
</style>
