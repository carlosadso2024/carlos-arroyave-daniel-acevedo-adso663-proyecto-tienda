import ProductRepository from '../repositories/ProductRepository';
import Products from '../Dto/ProductsDto';




class ProductService {
    
    static async register(product: Products) {
        return await ProductRepository.add(product);
    }

    static async update(product: Products, id: number) {
        return await ProductRepository.update(product, id);
    }

    static async delete(id: number) {
        return await ProductRepository.delete(id);
    }
}

export default ProductService;