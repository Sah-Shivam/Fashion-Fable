import React from 'react'
import Products from './Products'; 


const Home = () => {
    return (
        <div className="hero">
            <div class="card text-bg-dark">
                <img src="/assets/bg3.jpg" class="card-img" alt="Background" 
                height="650px"  width="450px" />
                <div class="card-img-overlay d-flex flex-column justify-content">
                    <div className="container">
                    <h5 class="card-title display-2 fw-bolder mb-3">
                        Chase TRENDS <br/>With Fashion<br/>Fable<br />New Styles</h5>
                    <p class="card-text lead fs-2"><br/>
                    FIND YOUR STYLE !
                     </p>
                    </div>  
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home;
