import {BasePage} from "../base/basePage";
import {Checkout} from "./checkout.po";

export class Cart extends BasePage {

    private checkoutContext = ".totals"

    waitForReadiness() {
        this.getElement(this.checkoutContext);
    }

    async getCheckoutDetail(): Promise<Checkout> {
        return new Checkout(browser,this.checkoutContext);
    }

}