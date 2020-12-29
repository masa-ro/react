import React from 'react';

// --------------
// ● Component
// --------------
// ContainerのmapStateToPropsとmapDispatchToPropsの値を受け取る
class TodoApp extends React.Component{
  // Storeから値を取り出すのはContainerの役割のため不要
  // const {task, tasks} = store.getState();
  // store.dispatchで、Actionを発行する

  // コンポーネントが読み込まれた直後に実行される
  async componentDidMount(){
    // データをrailsサーバーから取得して、Storeに代入したい
    await this.props.fetchTasks();
  }

  render(){
    const{
      task,
      tasks,
      inputTask,
      addTask
    } = this.props;
    return(
      <div>
        <input type="text" onChange={(e) => inputTask(e.target.value)} />
        <input type="button" value="add" onClick={() => addTask(task)} />
        <ul>
          {
            tasks.map(function(task){
              return (
                <li key={task.id}>{task.task}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoApp;