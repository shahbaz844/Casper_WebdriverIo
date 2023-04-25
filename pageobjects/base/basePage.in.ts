export interface IBasePage {

    waitForReadiness(element: any): Promise<void>;
}