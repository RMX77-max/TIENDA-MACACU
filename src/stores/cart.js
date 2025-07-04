import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find((item) => item.name === product.name);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        this.items.push({ ...product });
      }
    },
    decreaseQuantity(productName) {
      const item = this.items.find((item) => item.name === productName);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart(productName) {
      this.items = this.items.filter((item) => item.name !== productName);
    },
    clearCart() {
      this.items = [];
    },
  },
  getters: {
    totalPrice: (state) =>
      state.items
        .reduce(
          (acc, item) =>
            acc +
            item.quantity *
              parseFloat(item.price.replace("R$", "").replace(",", ".")),
          0
        )
        .toFixed(2),
  },
});
