import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import FriendList from './FriendList';
function App() {
   const [inputText, setInputText] = useState("");
   const [friends, setfriends] = useState([]);
  return (
    <div className="App">
      <header>
     <h1>Friends List</h1>
     </header>  
      <Form friends={friends} inputText={inputText} setfriends={setfriends} setInputText={setInputText} />
      <FriendList friends={friends} setfriends={setfriends} />
    </div>
  );
}

export default App;
