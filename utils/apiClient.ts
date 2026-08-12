import { request } from '@playwright/test';

export async function createUser(user: {
    nome: string;
    email: string;
    password: string;
    administrador: string;
}) {
    const apiContext = await request.newContext({
        baseURL: process.env.API_URL
    });

    try {
        const response = await apiContext.post('/usuarios', {
            data: user
        });
        return response;
    } finally {
        await apiContext.dispose();
    }
}