import React from "react";
import "./style.scss";
import PropTypes from 'prop-types'

const Login = ({
    opened, 
    loading,
    loginData, 
    errorMessage,
    username,
    isLogged,
    onOpenClick, 
    onLoginInputChange,
    onLoginSubmit,
  }) => {
    
    const handleInputChange = (evt)=>{
        const {name, value} = evt.target;
        onLoginInputChange({
            [name]:value,
        });
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault()
        onLoginSubmit()
    }

  return (
    <div className="settings">
      
       { !isLogged && <div className="settings-button" onClick={onOpenClick}>
            +
        </div>}
        {username && <p className="login-username">Connected as {username}</p>}
        {opened && loading && <div className="loading">Connexion...</div>}
        {opened && !loading && !isLogged && (

        <form className="settings-form" onSubmit={handleSubmit}>
        <input 
        name="email"
        type="email"
        placeholder="email"
        value={loginData.email}
        onChange={handleInputChange}
        />
        <input 
        name="password"
        type="password"
        placeholder="password"
        value={loginData.password}
        onChange={handleInputChange}
        />
        <button type="submit">Se connecter</button>
       {errorMessage && <p className="login-error">{errorMessage}</p>}
        </form>
        )}
       
    </div>
  )
};

Login.propTypes = {
    opened: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    onOpenClick: PropTypes.func.isRequired,
    loginData: PropTypes.object.isRequired,
    onLoginInputChange: PropTypes.func.isRequired,
    onLoginSubmit: PropTypes.func.isRequired,

  };

export default Login;