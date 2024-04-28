//import Message from './Message';
import ListGroup from "./components/ListGroup";

function App() {
  let city_items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let food_items = ["NY Hot Dog", "Gotham Food", "Sashimi", "English Muffins", "Croissant"];
  //<Message ></Message> == <Message /> (called self closing component syntax)
  // convention for event handler funcs is to start with handleEventName
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={city_items} heading="Cities" onSelectItem={handleSelectItem} />
      <ListGroup items={food_items} heading="Foods" onSelectItem={handleSelectItem} />
    </div>
  );
}

//Have to export react components to be used
export default App;
