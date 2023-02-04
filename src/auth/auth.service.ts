import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    private readonly users = [
        {
            username: 'user1',
            password: 'password',
        },
    ];

    async validateUser(username: string, pass: string): Promise<any> {
        const user = this.users.find(
            u => u.username === username && u.password === pass,
        );
        if (!user) {
            return null;
        }
        const { password, ...result } = user;
        return result;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: jwt.sign(payload, 'secretKey', { expiresIn: '1h' }),
        };
    }
}
