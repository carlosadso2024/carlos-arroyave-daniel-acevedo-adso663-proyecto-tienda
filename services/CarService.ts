import Cart from "../Dto/CartDto";
import CartRepository from "../repositories/CartRepository";

class CartService {
    static async addToCart(cart: Cart) {
        return await CartRepository.addToCart(cart);
    }

    static async get(userId: number) {
        return await CartRepository.get(userId);
    }
    static async delete(id: number) {
        // Podrías verificar si existe antes de eliminar
        const exists = await CartRepository.findById(id);
        if (!exists) {
            throw new Error(`Product with ID ${id} does not exist in the cart`);
        }

        return await CartRepository.delete(id);
    }
}

export default CartService;