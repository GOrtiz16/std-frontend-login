import { environment } from 'src/environments/environment';

const baseIp = environment.apiStdLogin.ip;

export const mockResponses: { [key: string]: any } = {
  [`POST ${baseIp}${environment.apiStdLogin.api_generating_from_email_otp}`]: {
    username: 'VSANTINO',
    email: 'ofuscado@mail.test'
  },
  [`POST ${baseIp}${environment.apiStdLogin.api_send_otp_validate}`]: {
    code: '1',
    message: 'Verificación exitosa'
  },
  [`POST ${baseIp}${environment.apiStdLogin.api_info_canal}`]: {
    time: {
      milliseconds: 300000
    },
    channel: {
      code: 'OB',
      name: 'Banca por internet Santander',
      description: 'ingrese una descripcion'
    },
    keyboard: {
      seed: '41f49b46-b937-49bd-b33d-6fa32678f65d',
      keys: [
        {
          value: 'v',
          id: '312ee88a-cb81-4e53-9963-a5fc375ba897'
        },
        {
          value: 'e',
          id: '0fce903a-b573-46e4-8059-2f2af3fa4902'
        },
        {
          value: 'c',
          id: 'c05de136-c319-4cb6-a187-995d1e30dfc7'
        },
        {
          value: 't',
          id: 'abc306ee-7918-4217-8231-89a50cd1f2e0'
        },
        {
          value: 'o',
          id: '203272bf-af27-4104-98eb-6961b8eb1330'
        },
        {
          value: 'r',
          id: '595cea2c-88c9-45dc-9442-6dfd5e59c31a'
        },
        {
          value: '1',
          id: '2b13efb0-d1a6-452e-9854-1229e8e64f17'
        },
        {
          value: '2',
          id: 'cdec5fb0-71f8-4015-925d-cc0914a64ea5'
        }
      ]
    }
  }
};
