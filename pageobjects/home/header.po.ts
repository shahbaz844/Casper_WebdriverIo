import { IHeader } from "./header.in";
import { BaseComponent } from "../base/baseComponent";

export class Header extends BaseComponent implements IHeader {

    private cartIcon = ".minicart-container .minicart";

    async getCart(): Promise<void> {
        await this.getElement(this.cartIcon).click();
    }

    async waitForPageReadiness(): Promise<void> {
        await this.waitForReadiness(this.cartIcon);
    }

}