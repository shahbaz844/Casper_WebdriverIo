export interface Component{

    waitForReadiness(element: any): Promise<void>;
}