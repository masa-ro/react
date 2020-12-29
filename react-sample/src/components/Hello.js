
export default function Hello({displayName, inputName, clickButton, inputText}){
    return (
        <div>
            <h1>Hello, {displayName}</h1>
            <input onChange={(e) => {inputText(e.target.value)}} type="text" value={inputName}/>
            <button onClick={() => {clickButton(inputName)}}>変更</button>
        </div>
    );
}