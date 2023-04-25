import {BasePage} from "../base/basePage";
import {AddToCart} from "./addToCart.po";
import {Timeout} from "../utils/enums";

export class ProductDetail extends BasePage {

    private productDetailContext = ".product-details";

    async waitForReadiness() {
        await this.getElement(this.productDetailContext).waitForDisplayed({timeout: Timeout.LONG});
    }

    async addToCart(): Promise<AddToCart> {
        return new AddToCart(browser,this.productDetailContext);
    }

}