// --------------
// ● Action
// --------------
// Storeをどう操作したいか
// 入力のアクション
export const inputTask = (task) => ({
  // typeはアクションの名前
  type: 'INPUT_TASK',

  // payloadはStoreの変更に使いたい値を入れておく
  payload: {
    task
  }
});
// const inputTask = function(task){
//   return{
//     type: 'INPUT_TASK';
//     payload: {
//       task
//     }
//   };
// }

// 追加のアクション
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

// tasksを受け取ってReducerに渡す
// tasksはRailsサーバーから受け取る予定
export const fetchTasks = (tasks) => ({
  type: 'FETCH_TASKS',
  payload: {
    tasks
  }
});