import { browser, expect } from '@wdio/globals'
import {Header} from "../pageobjects/home/header.po";
import {Home} from "../pageobjects/home/home.po";
import {ProductCards} from "../pageobjects/productDetail/productCards";
import {HomeDashboard} from "../pageobjects/home/homeDashboard";
import {ProductDetail} from "../pageobjects/productDetail/productDetail";
import {ProductCard} from "../pageobjects/productDetail/productCard.po";
import {AddToCart} from "../pageobjects/productDetail/addToCart.po";
import {Checkout} from "../pageobjects/cart/checkout.po";
import {Cart} from "../pageobjects/cart/cartPage";
import {Urls} from "../pageobjects/utils/urls";

let home : Home;
let header : Header;
let dashboard: HomeDashboard;
let productCards: ProductCards;
let productDetails: ProductDetail
let productCard: ProductCard;
let productDetail: AddToCart;
let cart : Cart;
let checkout : Checkout;

describe('Add mattress to cart and checkout', () => {
    it('Add mattress to cart and checkout', async () => {
        dashboard = new HomeDashboard();
        productCards = new ProductCards();
        productDetails = new ProductDetail();
        cart = new Cart();

        home = await dashboard.getHome();
        header = await dashboard.getHeader();
        productCard = await productCards.getCard();
        productDetail = await productDetails.addToCart();
        checkout = await cart.getCheckoutDetail();

        await browser.url("");
        await home.getShopMattresses();
        expect(browser).toHaveUrlContaining(Urls.allProducts);

        await productCard.waitForPageReadiness();
        let cardValues = await productCard.getValuesOfCard()
        await productCard.getProductCard();
        await productDetail.waitForPageReadiness();

        expect(browser).toHaveUrlContaining(Urls.product);
        expect(await productDetail.getProductName()).toHaveTextContaining(cardValues[0])
        expect(await productDetail.getPrice()).toHaveTextContaining(cardValues[1])

        let addToCartValues = await productDetail.getValuesOfCard()
        await productDetail.getAddToCart();
        await checkout.waitForPageReadiness();

        expect(browser).toHaveUrlContaining(Urls.cart);
        expect(await checkout.getSubTotal()).toHaveTextContaining(addToCartValues[1])
        await checkout.getCheckoutButton();
        expect(browser).toHaveUrlContaining(Urls.checkout);

    })
})


