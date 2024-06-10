export const environment: any = {
  production: false,
  environment: 'local',
  apiStdLogin: {
    mock: false,
    ip: 'http://4.236.220.191:80/',
    api_info_canal: 'api/mf/v1/login/info',
    api_authentication: 'api/mf/v1/login/authentication',
    api_update_password: 'api/mf/v1/login/update-password',
    api_retrieve_password: 'api/mf/v1/login/retrieve-password',
    api_send_otp: 'api/mf/v1/otp',
    api_send_otp_validate: 'api/mf/v1/validate_otp',
    api_refresh_token: 'api/mf/v1/refresh_token',
    api_disable_token: 'api/mf/v1/disable_token',
  },
  apiStdHome: {
    mock: false,
    ip: 'http://4.236.220.191:80/',
    api_home_shell: 'api/mf/v2/shell',
  },
};




//http://4.236.220.191:80/api/mf/v1/login/info
//http://4.236.220.191:80/api/mf/v1/login/authentication
//http://4.236.220.191:80/api/mf/v1/login/update-password
//http://4.236.220.191:80/api/mf/v1/login/retrieve-password
//http://4.236.220.191:80/api/mf/v1/otp
//http://4.236.220.191:80/api/mf/v1/refresh_token
//http://4.236.220.191:80/api/mf/v1/disable_token
//http://4.236.220.191:80/api/mf/v2/shell