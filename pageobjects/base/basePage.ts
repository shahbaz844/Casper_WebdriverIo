import { IBasePage } from "./basePage.in";

export abstract class BasePage implements IBasePage {

    abstract waitForReadiness();

    getElement(element: any) {
        return browser.$(element)
    }

}