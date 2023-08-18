import "./App.css"
// import Counter from "./components/counter/Counter";
import MuiMode from "./components/mui/MuiMode"
import AppProviders from "./components/providers/app-providers"

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App
