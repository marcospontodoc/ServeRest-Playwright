import { test as base } from '@playwright/test';
import { generateUser } from '../utils/dataGenerator';
import { createUser } from '../utils/apiClient';

type User = {
    nome: string;
    email: string;
    password: string;
    administrador: string;
};

type TestFixtures = {
    testUser: User;
    commonUser: User;
};

export const test = base.extend<TestFixtures>({

    testUser: async ({}, use) => {
        const user = generateUser('true');

        const response = await createUser(user);

        if (response.status() !== 201) {
            throw new Error(
                `Não foi possível criar o administrador. Status: ${response.status()}`
            );
        }

        await use(user);
    },

    commonUser: async ({}, use) => {
        const user = generateUser('false');

        const response = await createUser(user);

        if (response.status() !== 201) {
            throw new Error(
                `Não foi possível criar o usuário comum. Status: ${response.status()}`
            );
        }

        await use(user);
    },
});

export { expect } from '@playwright/test';