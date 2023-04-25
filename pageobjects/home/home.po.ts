import { IHome } from "./home.in";
import { BaseComponent } from "../base/baseComponent";

export class Home extends BaseComponent implements IHome {

    private shopMattressButton = " .link";

    async getShopMattresses(): Promise<void> {
        await this.getElement(this.shopMattressButton).click();
    }

}