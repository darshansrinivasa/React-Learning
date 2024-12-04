import './App.css'
import indian from './assets/Indian.jpeg'
import italian from './assets/Italian.jpeg'
import french from './assets/french.jpeg'

const App = () => {
  const name = "Darshan S";
  const year = new Date().getFullYear();
  const customStyle = {
    fontSize: "50px",
    color: "#f0f0f0",
    border: "1px solid #f0f0f0"
  }

  customStyle.color = "yellow";

  return (
    <div>
      <div>
        <h1 style={customStyle}>Hello World</h1>
        <h2 className='heading'>My favourite Food</h2>
        <ul>
          <li>South Indian <span>-</span> <img className='image' src={ indian } /> </li>
          <li>French <span>-</span> <img className='image' src={italian} /></li>
          <li>Italian <span>-</span> <img className='image' src={french} /></li>
        </ul>
      </div>
      <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
      </div>
    </div>
  )
}

export default App
