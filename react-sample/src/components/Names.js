const fullnames = ['坂本龍馬', '西郷隆盛', '勝海舟'];

//ulタグで名前の配列をリスト表示するコンポーネントを作成する
function Names(props){
    const list = [];
    for(let i = 0; i < props.arrayValue.length; i++){
        list.push(<li>{props.arrayValue[i]}</li>);
    }
    return <ul>{list}</ul>
}

export default Names;