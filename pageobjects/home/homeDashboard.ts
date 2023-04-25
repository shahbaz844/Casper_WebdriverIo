import { Header } from "./header.po";
import { Home } from "./home.po";

export class HomeDashboard {

    private headerSearchContext = ".header-wrapper";
    private homeSearchContext = ".full-background-image";

    async waitForReadiness() {
        await browser.$(this.headerSearchContext).waitForDisplayed();
    }

    async getHeader(): Promise<Header> {
        return new Header(browser,this.headerSearchContext);
    }

    async getHome(): Promise<Home> {
        return new Home(browser,this.homeSearchContext);
    }

}