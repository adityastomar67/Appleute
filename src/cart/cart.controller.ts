import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) { }

    @Get()
    getCart() {
        return this.cartService.getItems();
    }

    @Post()
    addToCart(@Body() item) {
        this.cartService.addItem(item);
        return { message: 'Item added to cart successfully' };
    }

    @Post('/order')
    placeOrder() {
        const order = this.cartService.placeOrder();
        return { message: 'Order placed successfully', order };
    }

    @Get('/orders')
    getOrders() {
        return this.cartService.getOrders();
    }
}
