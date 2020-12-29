const initialState = {
    task:'',
    tasks:[],
};

// --------------
// ● Reducer
// --------------
// Storeの操作（Actionの週類によって操作を切り替える）
function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'INPUT_TASK':
        // storeに保存したい内容をreturn
        // stateの中身を全てStoreに保存してください
        // ただし、taskだけはaction.payload.task（ユーザーの入力値）
            return{
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            return{
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        case 'FETCH_TASKS':
            return{
                ...state,
                tasks: action.payload.tasks
            };
            
        default:
            return state;
    }
}
 
export default tasksReducer;