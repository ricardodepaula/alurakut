import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {

        const TOKEN = '400902104ee1674cef67ebe3dff877';
        const client = new SiteClient(TOKEN);

        console.log(TOKEN);
        console.log('Após o concole log do TOKEN');

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "967698", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            //title: "Comunidade de Teste II via API",
            //imageUrl: "https://github.com/ricardodepaula.png",
            //creatorslug: "ricardodepaula"
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })

} 