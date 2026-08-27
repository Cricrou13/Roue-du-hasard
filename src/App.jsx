import Wheel from './components/Wheel';

function App() {
  const testOptions = ['Pizza', 'Sushi', 'Pâtes', 'Burger'];

  return (
    <div className="App">
      <h1>Roue du hasard</h1>
      <Wheel options={testOptions} />
    </div>
  );
}

export default App;