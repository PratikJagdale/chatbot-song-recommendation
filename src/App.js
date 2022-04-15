import './App.css';
import Header from "./Components/Header/Header"
import ChatBox from './Components/ChatBox/ChatBox';
import SongsList from './Components/SongsList/SongsList';
import {Provider} from "react-redux"
import store from "./store"

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <div className='App_Layout'>
          <div className='App__Top'>
          <Header/>
          </div>
          <div className='App_Bottom'>
            <SongsList/>
            <ChatBox/>
            <SongsList/>
          </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
