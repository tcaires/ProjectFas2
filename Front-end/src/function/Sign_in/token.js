import axios from 'axios';

//função que cria token e repassa para o express

export default async function criaToken() {
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', '7f522efb-d91e-4c6d-88ba-d8d545a4d379');
    data.append('client_secret', '80f65353-3565-4c5e-ab92-497376a3ba02');
    data.append('username', '******');
    data.append('password', '*******');

    const accessURL = 'https://ec2-18-224-170-21.us-east-2.compute.amazonaws.com:8443/auth/oauth/v2/token';

    try {
        const response = await axios.post(accessURL, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        // Verifique se a resposta contém o access_token
        if (response.data && response.data.access_token) {
            const accessToken = response.data.access_token;
            
            // Armazene o access token na Local Storage
            localStorage.setItem("accessToken", accessToken);
        } else {
            console.error("Token de acesso não encontrado na resposta.");
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}
criaToken();