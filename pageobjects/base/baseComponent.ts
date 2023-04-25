import {Component} from "./component.in";
import {browser} from "@wdio/globals";
import {Timeout} from "../utils/enums";

export class BaseComponent implements Component {

    private searchContext: string;

    constructor(browser,searchContext) {
        this.searchContext = searchContext;
    }

    getElement(selector: string) {
        return browser.$(this.searchContext).$(selector);
    }

    getAllElement(selector:string) {
        return browser.$$(this.searchContext);
    }

    async getElementText(selector: string): Promise<string> {
        return this.getElement(selector).getText();
    }

    async clickOnElement(selector: string) {
        return this.getElement(selector).click();
    }

    waitForReadiness(selector:string): Promise<void> {
        return browser.$(selector).waitForClickable({timeout:Timeout.LONG});
    }

}