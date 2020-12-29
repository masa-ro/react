import {connect} from 'react-redux';
import {inputTask, addTask, fetchTasks} from '../actions/tasks';
import TodoApp from '../components/TodoApp';

// StoreのStateを引数に受け取る
function mapStateToProps({task, tasks}){
    // コンポーネントのpropsに必要なものをreturn
    return {
        task, 
        tasks,
    };
}

// Storeのdispatchメソッドを受け取る
// dispatchをコンポーネントで書かなくてよくなる
function mapDispatchToProps(dispatch){
    // アクションの発行をreturn
    return {
        addTask(task){ // addTaskという名前をつけているだけ
            dispatch(addTask(task)); // addTaskアクションの発行
        },
        inputTask(task){
            dispatch(inputTask(task));
        },
        async fetchTasks(){
            // リクエストを送る
            // 非同期処理
            const response = await fetch("http://localhost:3000/todos");
            const tasks = await response.json();
            dispatch(fetchTasks(tasks));
        },
    }
}

// mapStateToPropsとmapDispatchToPropsの結果をTodoAppのpropsに渡す
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);