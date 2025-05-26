import { MockAdapterInstance } from '@/global/configs/axios-mock.config';
import { AUTH_ENDPOINTS } from '../constants/endpoints.constants';
import { LoginResponseDto } from '../../@types/login-response.dto';

MockAdapterInstance.onAny(AUTH_ENDPOINTS.login).reply<LoginResponseDto>(200, {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  user: {
    id: '123',
    email: 'teste@mail.com',
    name: 'Usuario Fake',
    avatar: {
      content: '/images/user-logged-fake.png',
      createdAt: '2024-01-01T00:00:00Z',
      description: 'Main entrance',
      identifier: 1,
      title: 'Entrance',
      updatedAt: null,
    },
  },
});

MockAdapterInstance.onAny(AUTH_ENDPOINTS.loadSession).reply<LoginResponseDto>(200, {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  user: {
    id: '123',
    email: 'teste@mail.com',
    name: 'Usuario Fake',
    avatar: {
      content: '/images/user-logged-fake.png',
      createdAt: '2024-01-01T00:00:00Z',
      description: 'Main entrance',
      identifier: 1,
      title: 'Entrance',
      updatedAt: null,
    },
  },
});
