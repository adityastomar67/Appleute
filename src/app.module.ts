import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ProductModule, CartModule, AuthModule],
    controllers: [AppController],
    providers: [AppService],

})
export class AppModule { }