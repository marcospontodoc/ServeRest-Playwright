import { test, expect } from '@playwright/test';
import { generateUser } from '../utils/dataGenerator';
import { createUser } from '../utils/apiClient';

test('Criar usuário via API', async () => {

    const user = generateUser();

    const response = await createUser(user);

    console.log('Status:', response.status());
    console.log('Usuário criado:', user);

    expect(response.status()).toBe(201);
});