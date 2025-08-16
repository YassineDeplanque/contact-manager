import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
  return (
    <div className="App">
      <h1>Contact manager</h1>
      <ContactList />
      <AddContact />
    </div>
  );
}

export default App;
