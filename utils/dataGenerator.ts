export function generateUser(administrador: string = 'false') {
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    return {
        nome: `Usuario Teste ${uniqueId}`,
        email: `teste${uniqueId}@teste.com`,
        password: `Teste@${uniqueId}`,
        administrador
    };
}