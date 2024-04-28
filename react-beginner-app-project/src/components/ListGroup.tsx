import { Fragment, useState } from "react";
import { MouseEvent } from "react";
//to dyanmically pass ListGroup objs into the jsx markup block
//pass an obj with two props : {items: [], heading: string}
// interface ListGroupProps for exactness but by convention
// we use this v
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void 
  //^ means () function takes string as arg and return(=>) void
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: Props) {
// destructure ^ to this v
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // ^ has turned dyanmic

  // v Hook - can tap into built in features of react
  // const arr = useState(-1); //arr has two elements
  //arr[0] //variable (selectedIndex)
  //arr[1] //updater function
  // ^ instead of working with two individual elements, destructure arr
  // into two elements like this v
  //v structure: const [stateVariable, setFunctionForThatStateVariable]
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event)

  //v this code works like a for loop and shows all elements in items array
  //items.map((item) => <li>{item}</li>);

  // Conditional rendering logic before putting into jsx expression
  // if (items.length == 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items found</p>
  //     </>
  //   ); //for after see in jsx markup block

  //v to avoid polluting the fragment (jsx mark up) element,
  //express logic as constants or variables or functions
  //conditional logic as const or let v
  const message = items.length == 0 ? <p>No items found</p> : null;

  //Conditional logic as func v
  //Arrow function syntax
  const getMessage = () => {
    return items.length == 0 ? <p>No items found</p> : null;
  };

  //v jsx expression only here (jsx markup block)
  return (
    //want header component but line 4 not allowed
    ///<h1>List</h1>
    //because ^ gets translated to javascript e.g.  React.createElement('h1');
    //v this means by default <Fragment>
    <>
      {/* <h1>List</h1> has turned dynamic v */}
      <h1>{heading}</h1>

      {/* {items.length == 0 ? <p>No items found</p> : null} */}
      {/* v shorter form of ^ a.k.a short circuiting*/}
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className="list-group-item active"
            //^ Not highlighting only active index
            //v to highlight only active index //also v adding classes dynamically
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            //onClick={(event) => console.log(event)}
            //v tidied up version of this^
            // onClick={handleClick}
            //^ static, to have dynamic management of active state,
            //v pass in an arrow function and define with
            //the set function of the state variable
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //^ this means by default </Fragment>
  );
}

export default ListGroup;
