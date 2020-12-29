import React from 'react';

class TodoInput extends React.Component {
    constructor(props){
        super(props);

        // 入力された内容を持つState
        // inputタグの内容と完全に一致させたい
        // 1. inputタグの内容が変更されたら、Stateに反映(handleClick)
        // 2. Stateの内容が変更されたら、inputタグに反映(value={this.state.inputValue})（今回はなくてもいい）
        this.state = {
            inputValue : '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // 入力された内容をStateに反映するメソッド
    // eはイベントを起こしたオブジェクトが代入される
    handleChange(e){
        this.setState({
            inputValue: e.target.value
        });
    }

    handleClick(){
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} value={this.state.inputValue} placeholder="新規TODOを入力してください" />
                <button onClick={this.handleClick}>登録</button>
            </div>
        );
    }
}

export default TodoInput;