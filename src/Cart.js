/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";


class Cart {



    //region private attributes
    items = null;

    //endregion private attributes


    /**
     * @brief This method constructs a Cart Object
     * @param items : list of cartItems
     */
    constructor(items = null) {
        this.items = items;
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get items() {
        throw new EmptyCartException();
    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */
    get totalPrice() {
        throw new EmptyCartException();
    }

    addItem(cartItem) {
        this.items.push(cartItem);
    }

    removeItem(cartItem){
        const index = this.items.indexOf(cartItem)
        if(index > -1){
            this.items.splice(index,1)
        }else {
            throw new NotFoundInCartException('Not found in Cart')
        }
    }

    empty(){
        this.items = []
    }

    //endregion public methods

    //region private methods
    //endregion private methods

}

class CartException extends Error {}
class NotFoundInCartException extends CartException {}

module.exports.Cart = Cart
module.exports.CartException = CartException
module.exports.NotFoundInCartException = NotFoundInCartException