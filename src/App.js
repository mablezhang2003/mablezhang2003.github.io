import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from "./components/Education";
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <About/>
                <Education/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
