import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    // makes the axios call a post request to my node.js server so
    // http, and correct data, which in this case is username and secret
    // then trigger than (it's a promise) and can call that onAuth callback
    axios.post('https://nodejs-reactjs-chat-app.onrender.com/authenticate',
      {username: value}
    ).then(r => {
      props.onAuth({ ...r.data, secret: value });
    }).catch(e => console.log('error', e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;