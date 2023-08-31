import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color:"red", fontSize: "48px", textTransform: "uppercase" }
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {
        numPizzas > 0 ? ( //ternery operator
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : <p>We're still working on our menu. Please come later.</p>
      }


      {/* rendering the pizza data list by using the map method here */}
      {/* map method is bsically a method which work on each of the array list(pizzaData) 
      and do some opeartion and return the new array list */}
      {/* Inside the ul element with class "pizzas," the map method is used to iterate over the pizzaData array 
      and generate a Pizza component for each pizza object in the array.
      Each Pizza component is passed a pizzaObj prop containing the details of the specific pizza. */}
      
      

      {/* so after implementing the map we are getting something similar like the below one which has an extra element pizzaobj */}
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photo="pizzas/prosciutto.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        photo="pizzas/salamino.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (

    // and after that we are passing that pizzaObj props in it 
    // which I have got from using map a pizzaobj array of specific pizza obj
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour>=openHour && hour<=closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {isOpen ? ( //conditional rendering if the openhour and closehour value is accordingly set 
        <Order closeHour={closeHour}/>
        // ternery operator
      ) : (
      <p>We're happy to welcome you betwen {openHour}:00 and {closeHour}:00</p>
      )}
    </footer>
  );
}

function Order(props){
  return (
    <div className="order">
      <p>We're open until {props.closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
