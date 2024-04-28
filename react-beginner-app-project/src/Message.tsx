//PascalCasing : Convention Uppercase all first Letter of words
function Message(){
    //v JSX: JavaScript XML under the hood
    // will change to javascript
    //can create dyanmic content using JSX
    const name = 'Zac';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

//Have to export react components to be used
export default Message;