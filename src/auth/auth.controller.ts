import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    async login(@Body() loginData) {
        const user = await this.authService.validateUser(
            loginData.username,
            loginData.password,
        );
        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        return this.authService.login(user);
    }
}
