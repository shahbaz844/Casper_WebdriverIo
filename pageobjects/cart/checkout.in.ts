export interface ICheckout {
    getSubTotal(): Promise<string>;

    getCheckoutButton(): Promise<void>;
}