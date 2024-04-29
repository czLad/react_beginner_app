//import Message from './Message';
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let city_items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let food_items = [
    "NY Hot Dog",
    "Gotham Food",
    "Sashimi",
    "English Muffins",
    "Croissant",
  ];
  //<Message ></Message> == <Message /> (called self closing component syntax)
  // convention for event handler funcs is to start with handleEventName
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleButtonClick = () => {
    console.log("handleButton");
    <Alert >
      Hello <span>World</span>
    </Alert>;
  };

  return (
    <div>
      <ListGroup
        items={city_items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={food_items}
        heading="Foods"
        onSelectItem={handleSelectItem}
      />
      {/* use this v or dynamic rendering */}
      {alertVisibility && (
        <Alert 
          onClose={() => setAlertVisibility(false)}
        >Been Alerted
        </Alert>
      )}
      {/* passing text as a child to this component? */}
      <Button
        onClick={
          alertVisibility
            ? () => setAlertVisibility(false)
            : () => setAlertVisibility(true)
        }
      >
        <span>Press Me</span>
      </Button>
    </div>
  );
}

//Have to export react components to be used
export default App;
