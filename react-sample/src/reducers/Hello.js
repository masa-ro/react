// 空で良いので初期値としてStoreに保存しておいてほしい情報
const initialState = {
    displayName: 'Sano',
    inputName: 'Taiki',
}

// state：Storeに保存される情報
// action：Storeの操作の種類
// Reducerがreturnした内容がStoreの内容になる
export default function reducer(state = initialState, action){
    switch(action.type){
        case 'CLICK_BUTTON':
            return {
                ...state,
                displayName: action.payload.value,
            }
        case 'INPUT_NAME':
            return {
                ...state,
                inputName: action.payload.value,
            }
        default:
            return state;
    }
}