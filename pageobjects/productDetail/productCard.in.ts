export interface IProductCard {
    getCardProductName(): Promise<string>;

    getCardProductPrice(): Promise<string>;

    getProductCard(): Promise<any>;
}