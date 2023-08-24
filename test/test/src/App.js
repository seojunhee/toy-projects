import './App.css';
import SearchInput from './SearchInput.js'
import { fetchLanguages } from './api.js'
import Suggestion from './Suggestion.js'


function App() {
  

  return (
    <div className="App">
       <SearchInput />
    </div>
  );
}

export default App;
