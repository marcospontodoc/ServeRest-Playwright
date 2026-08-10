import { test as base } from '@playwright/test';
import { generateUser } from '../utils/dataGenerator';
import { createUser } from '../utils/apiClient';

type TestFixtures = {
    testUser: {
        nome: string;
        email: string;
        password: string;
        administrador: string;
    };
};

export const test = base.extend<TestFixtures>({
    testUser: async ({}, use) => {
        const user = generateUser();

        const response = await createUser(user);

        if (response.status() !== 201) {
            throw new Error(
                `Não foi possível criar o usuário. Status: ${response.status()}`
            );
        }

        await use(user);
    },
});

export { expect } from '@playwright/test';