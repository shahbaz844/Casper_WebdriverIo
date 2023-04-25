import {ProductCard} from "./productCard.po";

export class ProductCards {

    private productCardContext = ".mattress-card"

    async getCard(): Promise<ProductCard> {
        return new ProductCard(browser, this.productCardContext);
    }

}