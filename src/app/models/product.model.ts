/**
 * Created by boss on 18/10/2017.
 */
export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
    ) {
    }
}