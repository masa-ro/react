// Storeに対して操作の種類だけActionを作る
export const clickButton = (value) => ({
    type: 'CLICK_BUTTON',
    payload: {
        value: value,
    }
});
// const clickButton = function(value){
//     return{
//         type: 'CLICK_BUTTON',
//         payload: {
//             value: value
//         },
//     };
// }

export const inputText = (value) => ({
    type: 'INPUT_NAME',
    payload: {
        value
    }
});