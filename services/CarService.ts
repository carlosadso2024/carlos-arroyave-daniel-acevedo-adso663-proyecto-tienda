import Cart from "../Dto/CartDto";
import CartRepository from "../repositories/CartRepository";

class CartService {
    static async addToCart(cart: Cart) {
        return await CartRepository.addToCart(cart);
    }

    static async get() {
        return await CartRepository.get();
    }
}

export default CartService;