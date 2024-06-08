//add함수를 props.add로 전달받음
//onInputChange : 텍스트 필드에 키보드로 입력받은 물자를 item.title에 저장
//onButtonClick : 버튼이 클릭되면 호출 . enterKeyEventHandler : 엔터키 입력되면..

import React from "react";
import { TextField, Paper, Button, Grid } from '@material-ui/core';
//import { AddToHomeScreen } from "@material-ui/icons";

class AddTdo extends React.Component{
    constructor(props) {
        super(props);
        this.state = { item: { title: "" } };
        this.add = props.add; //props 함수를 this.add에 연결, props에는 상위 컴포넌트(App.js)의 함수, 매개변수 있음
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem });
        //console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({ item: { title: "" } }); //text 값 추가, 입력 필드 초기화
    }

    enterKeyEventHandler = (e) => {
        
        if (e.key == 'Enter') {
            this.onButtonClick();
        }
    }

    render() {
        return (
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placehoder="Add Todo here"
                            fullWidth
                            onChange={this.onInputChange}
                            value={this.state.item.title}
                            onKeyDown={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button
                            fullWidth
                            color="secondary"
                            variant='outlined'
                            onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTdo;