import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Route} from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Store from './Pages/Store';
import Contacts from './Pages/Contacts';


function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <Route exact path='/'
                       render={() => <Home/>}/>
                <Route path='/gallery'
                       render={() => <Gallery/>}/>
                <Route path='/store'
                       render={() => <Store/>}/>
                <Route path='/contacts'
                       render={() => <Contacts/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
