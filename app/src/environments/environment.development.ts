export const environment: any = {
  production: false,
  apiConsPosition: {
    mock: true,
    ip: 'http://10.2.0.10:80/',
    api_feed: 'api/mf/v1/pc/feed',
    search_accounts: 'api/mf/v1/ac/account-operation/search-accounts',
    search_transactions: 'api/mf/v1/ac/account-operation/search-transactions',
    account_status: 'api/mf/v1/ac/account-operation/account-status',
    download_transactions: 'api/mf/v1/ac/account-operation/download-transactions'
  }
};
