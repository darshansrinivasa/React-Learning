import './App.css'

const App = () => {

  let greetText;
  const date = new Date("January 01, 2025 18:00:00"); // update time to check different conditions
  const time = date.getHours();
  const customStyle = {
    color: ""
  }

  if (time >= 0 && time < 12) {
    greetText = 'Good Morning';
    customStyle.color = 'red'
  } else if (time > 12 && time < 18) {
    greetText = 'Good Afternoon';
    customStyle.color = 'green'
  } else {
    greetText = 'Good Night';
    customStyle.color = 'blue'
  }

  return (
    <div>
      <div>
        <h1 style={customStyle}> { greetText } </h1>
        { time }
      </div>
    </div>
  )
}

export default App
