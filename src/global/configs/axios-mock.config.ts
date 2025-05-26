import MockAdapter from 'axios-mock-adapter';
import { api } from './api.config';

export const MockAdapterInstance = new MockAdapter(api, { delayResponse: 500 });

// Para rotas não definidas, é possível retornar um erro 404 genérico
// MockAdapterInstance.onAny().reply(404);
