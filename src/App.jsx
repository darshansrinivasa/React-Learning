import './App.css'
import indian from './assets/Indian.jpeg'
import italian from './assets/Italian.jpeg'
import french from './assets/french.jpeg'

const App = () => {
  const name = "Darshan S";
  const year = new Date().getFullYear();
  return (
    <div>
      <div>
        <h1 className='heading'>My favourite Food</h1>
        <ul>
          <li>Indian <span>-</span> <img className='image' src={ indian } /> </li>
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
