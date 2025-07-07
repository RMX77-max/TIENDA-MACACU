<template>
  <q-page class="q-pa-md bg-black">
    <div class="text-h5 text-center q-mb-lg text-black">Carrito de Pedido</div>

    <!-- Lista de productos del carrito -->
    <q-card
      v-if="cart.items.length"
      class="q-mb-xl q-mx-auto"
      style="max-width: 600px; width: 100%"
    >
      <q-card-section class="q-pa-none">
        <div
          v-for="(item, index) in cart.items"
          :key="index"
          class="row items-center justify-between q-pa-sm"
          style="border-bottom: 1px solid #444"
        >
          <!-- Imagen -->
          <q-img
            :src="item.image"
            style="width: 100px; height: 100px"
            class="q-mr-sm"
          />

          <!-- Info del producto -->
          <div class="column" style="flex: 1; min-width: 0">
            <div class="text-h6 text-black ellipsis">{{ item.name }}</div>
            <div class="text-h6 text-deep-orange-5">
              R$
              {{
                (
                  parseFloat(item.price.replace("R$", "").replace(",", ".")) *
                  item.quantity
                ).toFixed(2)
              }}
            </div>
          </div>

          <!-- Botones -->
          <div class="row items-center">
            <q-btn
              round
              dense
              flat
              icon="remove"
              color="red"
              @click="cart.decreaseQuantity(item.name)"
            />
            <div class="q-mx-sm text-black">{{ item.quantity }}</div>
            <q-btn
              round
              dense
              flat
              icon="add"
              color="green"
              @click="cart.addToCart({ ...item, quantity: 1 })"
            />
            <q-btn
              round
              dense
              flat
              icon="delete"
              color="grey"
              class="q-ml-sm"
              @click="cart.removeFromCart(item.name)"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card
      v-else
      class="q-pa-md q-mx-auto"
      style="max-width: 600px; width: 100%; min-height: 200px"
    >
      <div class="column items-center justify-center full-height">
        <q-icon name="shopping_cart" size="48px" color="grey-6" />
        <div class="text-h6 text-black q-mt-sm">
          Nenhum produto no carrinho.
        </div>
      </div>
    </q-card>

    <!-- Barra inferior fixa com total -->
    <q-footer
      class="bg-white q-pa-md shadow-2 q-mx-auto"
      style="
        position: sticky;
        bottom: 0;
        z-index: 10;
        max-width: 600px;
        width: 100%;
      "
    >
      <div class="column">
        <!-- Total -->
        <div
          class="text-h6 text-black q-mb-sm"
          style="display: flex; justify-content: space-between"
        >
          Total:
          <strong class="text-h6 text-deep-orange-6"
            >R$ {{ cart.totalPrice }}</strong
          >
        </div>

        <!-- Botão grande -->
        <q-btn
          label="Fazer Pedido"
          color="deep-orange-6"
          rounded
          size="lg"
          class="full-width"
          @click="enviarPedidoPorWhatsapp"
        />
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>
import { useCartStore } from "src/stores/cart";
const cart = useCartStore();

const enviarPedidoPorWhatsapp = () => {
  let mensagem = "🛒 *Novo Pedido Al Capone*\n\n";

  cart.items.forEach((item) => {
    const preco =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("R$", "").replace(",", "."))
        : item.price;
    const subtotal = (preco * item.quantity).toFixed(2);

    // Si el producto tiene sabores (de drink especial)
    if (item.sabores && item.sabores.length > 0) {
      mensagem += `• ${item.name} (x${
        item.quantity
      }) - R$ ${subtotal}\n  Sabores: ${item.sabores.join(", ")}\n`;
    } else {
      mensagem += `• ${item.name} (x${item.quantity}) - R$ ${subtotal}\n`;
    }
  });

  mensagem += `\n📦 *Total:* R$ ${cart.totalPrice}`;

  const numeroWhatsapp = "5511967411626"; // Coloque seu número com DDI e DDD
  const textoCodificado = encodeURIComponent(mensagem);
  const link = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

  window.open(link, "_blank");

  cart.clearCart();

  setTimeout(() => {
    window.scrollTo(0, 0);
    window.location.href = "/#/InicioLicoreria"; // ajuste se precisar
  }, 500);
};
</script>

<style scoped>
.q-border-b {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
