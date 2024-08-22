export const environment: any = {
  production: false,
  environment: 'local',
  apiStdLogin: {
    mock: true,
    ip: 'http://10.0.50.10:80/',
    api_info_canal: 'api/mf/v1/login/info',
    api_authentication: 'api/mf/v1/login/authentication',
    api_update_password: 'api/mf/v1/login/password/update',
    api_retrieve_password: 'api/mf/v1/login/password/retrieve',
    api_send_otp: 'api/mf/v1/login/otp',
    api_send_otp_validate: 'api/mf/v1/login/otp/validate',
    api_generating_from_email_otp: 'api/mf/v1/login/otp/from_email',
    api_refresh_token: 'api/mf/v1/login/token/refresh',
    api_disable_token: 'api/mf/v1/login/token/disable'
  },
  apiStdHome: {
    mock: true,
    ip: 'http://10.0.50.10:80/',
    positionacc: 'mf/positionacc',
    api_home_shell: 'api/mf/v1/home/session'
  },
  OcpApimSubscriptionKey: '14bf1deb-60c4-46c1-a2f1-adb501fe759e'
};
