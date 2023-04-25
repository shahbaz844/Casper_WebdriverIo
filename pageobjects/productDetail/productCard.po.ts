import { BaseComponent } from "../base/baseComponent";
import { IProductCard } from "./productCard.in";
import { browser } from "@wdio/globals";

export class ProductCard extends BaseComponent implements IProductCard {

    private productName = ".product-name";
    protected productPrice = ".sales";
    private cards = ".mattress-card";

    async getCardProductName(): Promise<string> {
        return await this.getElement(this.productName).getText();
    }

    async getCardProductPrice(): Promise<string> {
        return await this.getElement(this.productPrice).getText();
    }

    async getProductCard(): Promise<any> {
        return browser.$(this.cards).click();
    }

    async waitForPageReadiness(): Promise<void> {
        await this.waitForReadiness(this.cards);
    }

    async getValuesOfCard(): Promise<any> {
        let values = []
        values.push(await this.getCardProductName());
        let price = await this.getCardProductPrice();
        values.push(price.split("$").pop());
        return values
    }

}