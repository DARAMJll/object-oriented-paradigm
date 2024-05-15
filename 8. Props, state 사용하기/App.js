import React from 'react';
//import Hello from './Hello';
import Todo from './Todo'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props); //매개변수 초기화
    this.state ={ //item에 item.id, item.title, item.done 매개변수 이름/값 할당
      item : {id:0, title:"Hello World 1", done:true},
    };
  }



  render(){
    return (
      <div className="App">
        <Todo item = {this.state.item}/>
      </div>
    );
  }
}

export default App;