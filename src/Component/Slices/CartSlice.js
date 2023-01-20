import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

const initialState = {
  cartItems: localStorage.getItem("cart_items")
    ? JSON.parse(localStorage.getItem("cart_items"))
    : [],
  cartTotalTax: 0,
  cartTotalAmount: 0,
  cartPackagingAmount:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    getTotals(state, action) {

      var SelectedItems = JSON.parse(localStorage.getItem('cart_items'));
      if (SelectedItems == null) {
        return;
      }

      let { total, tax,packaging  } = SelectedItems.reduce(
        (product, cartItem) => {
          const itemTotal = cartItem.salePrice * cartItem.selectedQty;
          product.total += itemTotal;
          product.tax += cartItem.itemTax * cartItem.selectedQty;
          product.packaging += cartItem.selectedPackingPrice * cartItem.selectedQty;
          return product;
        },
        {
          total: 0,
          tax: 0,
          packaging:0,
        }
      );
      total = parseInt(Math.ceil(total));
      tax = parseInt(Math.ceil(tax));
      packaging = parseInt(Math.ceil(packaging));

      state.cartTotalAmount = total;
      state.cartTotalTax = tax;
      state.cartPackagingAmount = packaging;
    },
    clearCart(state, action) {
      localStorage.removeItem("cart_items");

    },

    handleAddCart(state, action) {

      var selectedItem = action.payload;
      var itemList = [];
      selectedItem.selectedQty = 1;
      selectedItem.selectedPackingType = "";
      selectedItem.selectedPackingPrice = 0;
      itemList.push(selectedItem);
      var cartItems = JSON.parse(localStorage.getItem('cart_items'));
      if (cartItems == null) {
        localStorage.setItem('cart_items', JSON.stringify(itemList))
      }
      else {

        var index = _.findIndex(cartItems, function (o) { return o.id == selectedItem.id; });
        if (index == -1) {
          cartItems.push(selectedItem);
          localStorage.removeItem('cart_items');
          localStorage.setItem('cart_items', JSON.stringify(cartItems));
        }

      }


    },


  },
});

export const { getTotals, clearCart, handleAddCart } =
  cartSlice.actions;

export default cartSlice.reducer;