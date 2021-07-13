import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [routes, setRoutes] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/routes")
      .then(
        (result) => {
          result.json()
            .then(
              (res) => {
                setRoutes(res)
              }
            )
        },
        (error) => {
          console.error("routes cannot be loaded", error)
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://events-fullcycle.s3.amazonaws.com/events-fullcycle/static/site/img/logo-fullcycle-3.png" className="App-logo" alt="logo" />
        <p>
          Desafio Rotas :: NestJS + ReactJS
        </p>
        <ul>
          {routes?.map(route => (
            <li key={route.title}>
              {route.title} - start: ({route.startPosition.lati}, {route.startPosition.long}) ; end: ({route.endPosition.lati}, {route.endPosition.long})
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
