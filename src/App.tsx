import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Home />
            </div>
            <Footer />
        </div>
    );
}

export default App;
