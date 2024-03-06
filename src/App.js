import MyRoutes from "./MyRoutes";
import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
