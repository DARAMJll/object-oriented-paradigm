import React from 'react';
//import Hello from './Hello';
import Todo from './Todo'
import AddTodo from './AddTodo';
import { Paper, List, Container } from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){ //매개변수 생성자
    super(props); //매개변수 초기화
    this.state ={ //item에 item.id, item.title, item.done 매개변수 이름/값 할당
      items :[
        { id: "todo0", title: "Todo 1", done: true },
        { id: "todo1", title: "Todo 2", done: false },
      ],
    };
  }

  //add 함수 추가
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length; //key를 위한 id 추가
    item.done = false;
    thisItems.push(item);
    this.setState({ items: thisItems }); //update state
    console.log("items:", this.state.items);
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

    //add 함수 연결
    return (
      <div className='App'>
        <Container maxWidth='md'>
          <AddTodo add={this.add} />
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );

  }
}

export default App;