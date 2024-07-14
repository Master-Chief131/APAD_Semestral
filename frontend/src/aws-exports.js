const awsconfig = {
    Auth: {
      region: 'us-west-2',  // Ajusta la región a la que estás utilizando
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolWebClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID',
      identityPoolId: 'YOUR_IDENTITY_POOL_ID'
    },
    API: {
      endpoints: [
        {
          name: "Reservation_API",
          endpoint: "https://ub9tvpu9lk.execute-api.us-west-2.amazonaws.com/Prod",
          region: "us-west-2"
        }
      ]
    }
  };
  
  export default awsconfig;
  