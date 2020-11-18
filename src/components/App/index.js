// == Import npm
import React from "react";

// == Import
import "./styles.css";
import MessagesList from "../../containers/MessagesList";
import MessageForm from "../../containers/MessageForm";
import Login from "../../containers/Login"



// == Composant
const App = () => (
  <div className="app">
    <Login/>
    <MessagesList  />
    <MessageForm  />
  </div>
);

// == Export
export default App;
