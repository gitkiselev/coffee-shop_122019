import React, {Component} from 'react';
import CoffeePage from './components/coffeeItem';
import MainPage from './components/MainPage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import ItemPage from '../ItemPage/index'



export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (

            <Router>


                <div>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/OurCoffee' component={CoffeePage}/>
                    {/* <Route path='/ItemPage' component={ItemPage}/> */}
                </div>

            </Router>

        )
    }
};