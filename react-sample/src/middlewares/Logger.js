const logger = store => next => action => {
    // Storeの中身をコンソールに出力
    console.log(store.getState());

    // Actionの中身をコンソールに出力
    console.log(action);

    // まずこれを書く
    // アクションの実行
    const result = next(action);

    console.log(store.getState());

    return result;
}

export default logger;