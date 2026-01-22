import Constants from 'expo-constants';

// Função para descobrir o IP
const getLocalHost = () => {
    // Tenta apanhar o IP automaticamente do Expo
    const debuggerHost = Constants.expoConfig?.hostUri;
    const localhost = debuggerHost?.split(':')[0];

    // Se não conseguir detetar (ou se der erro), usa o TEU IP DO HOTSPOT:
    if (!localhost) {
        return '172.20.10.4'; 
    }

    // Opcional: Se quiseres FORÇAR sempre o Hotspot, descomenta a linha abaixo:
    // return '172.20.10.4'; 

    return localhost;
}

// O Docker está na porta 80, por isso é só http://IP/api
export const API_BASE_URL = `http://${getLocalHost()}/api`;

console.log('🔌 Conectado ao Backend em:', API_BASE_URL);