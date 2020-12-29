function Numbers(){
    const list =(
        <ul>
            {[1, 2, 3].map(num => <li>{num}</li>)}
        </ul>
    )
    return list
}

export default Numbers;