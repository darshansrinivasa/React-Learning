import './App.css'

const App = () => {
  const name = "Darshan S";
  const year = new Date().getFullYear();
  return (
    <>
      <p>Created by {name}</p>
      <p>Copyright {year}</p>
    </>
  )
}

export default App
