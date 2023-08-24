import './App.css';

function App() {
  this.$element = document.createElement('form')
  this.$element.className = "SearchInput"
  this.state = initialState

  $target.appendChild(this.$element)


  return (
    <div className="App">
       <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}"/>
    </div>
  );
}

export default App;
