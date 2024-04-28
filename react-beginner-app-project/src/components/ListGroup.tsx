import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
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
      <h1>List</h1>

      {/* {items.length == 0 ? <p>No items found</p> : null} */}
      {/* v shorter form of ^ a.k.a short circuiting*/}
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    //^ this means by default </Fragment>
  );
}

export default ListGroup;
