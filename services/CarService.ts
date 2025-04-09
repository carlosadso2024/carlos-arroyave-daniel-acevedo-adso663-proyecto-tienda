import Cart from "../Dto/CartDto";
import CartRepository from "../repositories/CartRepository";

class CartService {
    static async addToCart(cart: Cart) {
        return await CartRepository.addToCart(cart);
    }

    static async get(userId: number) {
        return await CartRepository.get(userId);
    }
}

export default CartService;