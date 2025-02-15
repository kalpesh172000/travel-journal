import "./App.css";
import Header from "./components/header";
import Entry from "./components/entry";
import Locations from "./data/locations";

function App() {
    return (
        <>
            <Header />
            <main>
                {Locations.map((loc, index) => (
                    <Entry
                        key={index}
                        loc={loc}
                    />
                ))}
            </main>
        </>
    );
}

export default App;
