import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';

import headerStyles from './header.module.scss';

const Header = ( props ) => {

  console.log( props.cart ) //tablica obiektow

  let price;
  const getSum = (total, elem) => {
    return total + elem.price;
  }

  if( props.cart.length === 0 ) price = 0;
  else if(props.cart.length === 1) price = props.cart[0].price
  else{
    price = props.cart.reduce( getSum, 0)
    price = (Math.round(price * 100) / 100).toFixed(2);
  }

  let length = props.cart.length;

  console.log(price)

  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <div className="navbar navbar-light navbar-expand-lg navbar-fixed-top sticky-header p-0">
       
        <div className='container-fluid p-0 overflow-hidden'>
          <Navbar.Brand className={`banner navbar-header col-sm-4 ${headerStyles.banner}`}>
            <a className="navbar-brand" href="https://www.gatsbyjs.org/">
              <i className="material-icons">
                local_mall
              </i>  
              <p className='mb-0'>Spożywczy24h</p>
            </a>
          </Navbar.Brand>
          <div className="col-sm-4 "></div>
          <Nav className={`navbar-nav ml-auto col-sm-4 text-dark border-0 ${headerStyles.koszyk}`}>

            <div className="float-left my-auto pb-1 pl-4 border-left">
              <span className="material-icons">
                shopping_cart
              </span>
            </div>

            <div className="float-left my-auto col-sm-5 p-0 pl-2">

              <p className='align-middle my-auto font-weight-bold text-dark'>
                Koszyk ({length}) 
                <span className="pl-2">{price}zł</span>
              </p>

            </div>

            <div className="col-sm-5 text-dark text-right p-0 border-left my-auto float-left text-center">
              <p className="m-0 float-right pr-2 pl-2">Twoje konto</p>
              <i className="material-icons text-dark p-0 float-right">
                person
              </i>
            </div>
          </Nav>
        </div>


        
      </div>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

const mapStateToProps = (state) => {
  return{
    cart: state.cartReducer.cartProducts
  }
}

export default connect(mapStateToProps)(Header);

