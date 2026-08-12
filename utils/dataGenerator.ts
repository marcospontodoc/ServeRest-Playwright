export function generateUser(administrador: string = 'false') {
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    return {
        nome: `Usuario Teste ${uniqueId}`,
        email: `teste${uniqueId}@teste.com`,
        password: `Teste@${uniqueId}`,
        administrador
    };
}

export function generateProduct() {
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;

    return {
        nome: `Produto Teste ${uniqueId}`,
        preco: `${Math.floor(Math.random() * 999) + 1}`,
        descricao: `Descrição do Produto Teste ${uniqueId}`,
        quantidade: `${Math.floor(Math.random() * 99) + 1}`
    };
}