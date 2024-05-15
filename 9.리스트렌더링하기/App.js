import React from 'react';
//import Hello from './Hello';
import Todo from './Todo'
import { Paper, List } from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){ //매개변수 생성자
    super(props); //매개변수 초기화
    this.state ={ //item에 item.id, item.title, item.done 매개변수 이름/값 할당
      items :[
        { id: 0, title: "Todo 1", done: true },
        { id: 1, title: "Todo 2", done: false },
      ],
    };
  }



  render() { //map 함수 이용해 <Todo/> 컴포넌트 여러개 생성
    //조건선택문 ? 사용
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item = {item} key = {item.id}/>
          ))}
        </List>
      </Paper>
    )
    //생성된 컴포넌트 JSX를 리턴
    return <div className='App'>{todoItems}</div>;
  }
}

export default App;