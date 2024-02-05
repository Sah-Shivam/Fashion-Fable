import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const Navbar = () => {
    return (
        <div>
        
            <Nav variant="pills" >

                    <Nav.Item   className='one' >
                     <div class="shop" >FashionFable</div>
                    </Nav.Item>
                    <div class="two">
                    <Nav.Link style={{color:'black', fontSize: '25px',backgroundColor:'#FDF9F9',margin:'10px' }} class="nav-link active" aria-current="page" href="/">
                        Home
                    </Nav.Link>
                
                    <Nav.Link  style={{color:'black', fontSize: '25px',backgroundColor:'#FDF9F9', margin:'10px'}} href="/products">
                        Products
                    </Nav.Link>
                
                
                    <Nav.Link style={{color:'black', fontSize: '25px',backgroundColor:'#FDF9F9',margin:'10px'}} href="/about">
                        About
                    </Nav.Link>
            
            
                    <Nav.Link style={{color:'black', fontSize: '25px',backgroundColor:'#FDF9F9',margin:'10px'}} href="/contact">
                        Contact
                    </Nav.Link>
                            
                    </div> 
                        {/* <div className="buttons">
                            <Nav.Link href="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login</Nav.Link>
                            <Nav.Link href="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</Nav.Link>
                            <Nav.Link href="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart (0)</Nav.Link>
                        </div> */}
            </Nav>
        </div>
    )
}

export default Navbar;



