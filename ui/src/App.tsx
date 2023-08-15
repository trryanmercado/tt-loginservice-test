const App = () => {
  const loginServiceAPIKey = "API1EFFST6IE2ZZKU8L5TFSN1LFJR";
  const loginServiceParams = new URLSearchParams({
    // protocol = https:// or http://
    // host = domain (localhost:5173)
    success: `${window.location.protocol}${window.location.host}/login`,
    fail: `${window.location.protocol}${window.location.host}/unauthorized`,
  });

  const loginServiceURL = `https://uat.tooltwist.io/loginservice/v2/oauth2/initiate/${loginServiceAPIKey}/google?${loginServiceParams}`;

  const handleLogin = () => {
    window.location.href = loginServiceURL;
  };

  return (
    <main>
      <button onClick={handleLogin}>Login with Google</button>
    </main>
  );
};

export default App;
