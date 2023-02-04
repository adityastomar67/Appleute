import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
    private readonly items = [];
    private readonly orders = [];

    addItem(item) {
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    placeOrder() {
        const order = {
            items: this.items,
            date: new Date(),
        };
        this.orders.push(order);
        this.items.length = 0;
        return order;
    }

    getOrders() {
        return this.orders;
    }
}
