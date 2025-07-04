<template>
  <q-page class="q-pa-md bg-amber-50">
    <q-responsive :ratio="16 / 9" class="q-mb-md" style="max-height: 400px">
      <q-img src="/src/img/banner.png" />
    </q-responsive>

    <div class="q-gutter-md row items-stretch justify-center">
      <!-- Producto 1 -->
      <q-card class="my-card" style="width: 300px" @click="modal1 = true">
        <q-img src="/src/img/pollo_broaster.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Pollo Broaster Clásico</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 25.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 1 -->
      <q-dialog v-model="modal1">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/pollo_broaster.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Pollo Broaster Clásico</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">Pollo crocante, especias, aceite premium.</div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- Producto 2 -->
      <q-card class="my-card" style="width: 300px" @click="modal2 = true">
        <q-img src="/src/img/combo_familiar+.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Combo Familiar</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 70.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal2">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/combo_familiar+.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Combo Familiar</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">
              8 piezas de pollo, papas fritas, gaseosa de 2L.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal3 = true">
        <q-img src="/src/img/alitas.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Combo alitas</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 30.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal3">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/alitas.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Combo Alitas</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">
              8 piezas de Alitas, papas fritas, gaseosa de 2L.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal4 = true">
        <q-img src="/src/img/Piernitas-1.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Combo Piernitas</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 40.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal4">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/Piernitas-1.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Combo Piernitas</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">
              8 piezas de piernitas, papas fritas, gaseosa de 2L.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal5 = true">
        <q-img src="/src/img/papas_fritas+.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Porcion de papas</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 6.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal5">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/papas_fritas+.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Porcion de papas</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">
              Porcion de papas fritas, sazonadas con especias.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal6 = true">
        <q-img src="/src/img/salsas.jpg" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Salsas</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 3.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal6">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/salsas.jpg" style="height: 200px" />
            <div class="text-h5 q-mt-md">Salsas</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">Salsa de ají, mayonesa, ketchup, mostaza.</div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal7 = true">
        <q-img src="/src/img/coca_cola.png" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Coca Cola</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 11.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal7">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/coca_cola.png" style="height: 200px" />
            <div class="text-h5 q-mt-md">Coca Cola "lt"</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">Gaseosa de 2L.</div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card class="my-card" style="width: 300px" @click="modal8 = true">
        <q-img src="/src/img/sprite.png" style="height: 200px" />
        <q-card-section class="text-center">
          <div class="text-h6">Sprite</div>
          <div class="text-subtitle1 text-deep-orange-8">Bs 11.99</div>
        </q-card-section>
      </q-card>

      <!-- Modal 2 -->
      <q-dialog v-model="modal8">
        <q-card style="min-width: 400px">
          <q-card-section>
            <q-img src="/src/img/sprite.png" style="height: 200px" />
            <div class="text-h5 q-mt-md">Sprite</div>
            <div class="text-subtitle1 text-grey-7">Ingredientes:</div>
            <div class="q-mb-md">Gaseosa de 2L.</div>
          </q-card-section>

          <q-separator />

          <q-card-section class="flex flex-center">
            <q-btn flat icon="remove" color="deep-orange" size="lg" />
            <div class="q-mx-md text-h6">1</div>
            <q-btn flat icon="add" color="deep-orange" size="lg" />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="Pedir" color="deep-orange-6" rounded size="lg" />
            <q-btn flat label="Cancelar" color="grey" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- AQUÍ seguirías copiando el mismo patrón para los demás productos -->
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
const modal5 = ref(false);
const modal6 = ref(false);
const modal7 = ref(false);
const modal8 = ref(false);

// Luego crearás modal3, modal4, etc. según tus productos
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
