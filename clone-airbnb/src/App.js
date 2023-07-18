import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/Contact';
import dataCard from "./data/card/data";
import dataContact from "./data/contact/data";

function App() {
  const cards = dataCard.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
  })
  
  const contact = dataContact.map(item => {
    return (
        <Contact
            key={item.id}
            item={item}
        />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <div><h2>Example Card Contact</h2></div>
      <div className="contacts">
        {contact}
      </div>
    </div>
  );
}

export default App;