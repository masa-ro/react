// Storeの情報をコンポーネントに渡す役割「必要な分だけ」

import {connect} from "react-redux";
import Hello from '../components/Hello';
import {clickButton, inputText} from '../actions/Hello';

// mapStateToPropsで返した値がコンポーネントに送られる
function mapStateToProps({displayName, inputName}){
    // Helloコンポーネントで必要なものだreturnすればOK
    return{
        displayName,
        inputName,
    };
}
// function mapStateToProps(store){
//     return{
//         displayName: store.displayName,
//         inputName: store.inputName,
//     };
// } の省略形


function mapDispatchToProps(dispatch){
    return{
        clickButton(value){
            dispatch(clickButton(value));
        },
        inputText(value){
            dispatch(inputText(value));
        }
    };
}

// 上記のメソッドを持ったHelloコンポーネントをエクスポート
export default connect(mapStateToProps, mapDispatchToProps)(Hello);