import React from 'react';
import {Link} from 'react-router-dom';
//import './MainPage.css';
//import imageBg from './Main_bg.jpg';
import logo from './Logo.svg';
import About from './About';
import Footer from './Footer';
import CoffeeService from '../../service/shopService';


export default class MainPage extends React.Component {
    coffeeService = new CoffeeService();
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            error: false,
            loading: true
        }
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    

    componentDidMount() {
        
        // coffeeService.getAllItems()
        // .then((itemList) => {
        //     this.setState({
        //         itemList,
        //         loading: false
        //     })
        // })
    }

    onError = () => {
        this.setState({
          error: true,
          loading: false
        });
      };

    renderItems = (arr) => {
        
        return arr.map((item) => {
            const {name, url, price} = item;
            //const label = renderItem(item);
            return (
                <div className="best__item">
                    <img src={url} alt="coffee"/>
                    <div className="best__item-title">
                        {name}
                    </div>
                    <div className="best__item-price">{price}$</div>
                </div>
            )
        })
    }




    render () {
        return (
            <>
        <div className="preview">
       <div className="container">
           <div className="row">
               <div className="col-lg-6">
                    <header>
                        <ul className="header">
                            <li className="header__item">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/OurCoffee">Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/ItemPage">For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
               </div>
           </div>
           <div className="row">
               <div className="col-lg-10 offset-lg-1">
                   <h1 className="title-big">Everything You Love About Coffee</h1>
                    <img className="beanslogo" src={logo} alt="Beans logo" />
                    <div className="preview__subtitle">We makes every day full of energy and taste</div>
                    <div className="preview__subtitle">Want to try our beans?</div>
                    <Link to="/OurCoffee" className="preview__btn">More</Link>
               </div>
           </div>
       </div>
    </div>
    <About />
    
    <section className="best">
        <div className="container">
            <div className="title">Our best</div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="best__wrapper">
                        ------
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    
    </>
        )
        
    }
}