const estadosCidades = [
    {
        estado: "São Paulo",
        cidades: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"]
    },
    {
        estado: "Rio de Janeiro",
        cidades: ["Rio de Janeiro", "Niterói", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"]
    },
    {
        estado: "Minas Gerais",
        cidades: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"]
    }
];

// Loop for para obter apenas as cidades de São Paulo
for (let i = 0; i < estadosCidades.length; i++) {
    const estado = estadosCidades[i];
    if (estado.estado === "São Paulo") {
        const cidadesSP = estado.cidades;
        console.log("Cidades de São Paulo:", cidadesSP);
        // Aqui você pode fazer o que precisar com as cidades de São Paulo
        break; // Se você só quer as cidades de São Paulo, você pode sair do loop depois de encontrá-las
    }
}
