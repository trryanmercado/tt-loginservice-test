const App = () => {
  const loginServiceParams = new URLSearchParams({
    success: `${window.location.protocol}${window.location.host}/login`,
    fail: `${window.location.protocol}${window.location.host}/unauthorized`,
  });

  const loginServiceURL = `https://uat.tooltwist.io/loginservice/v2/oauth2/initiate/API1EFFST6IE2ZZKU8L5TFSN1LFJR/google?${loginServiceParams}`;

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
