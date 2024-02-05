import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }

            
        
        }

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
               <div className="col-mod-3">
                <Skeleton  height={350}/>
               </div>
               <div className="col-mod-3">
                <Skeleton  height={350}/>
               </div>
               <div className="col-mod-3">
                <Skeleton  height={350}/>
               </div>
               <div className="col-mod-3">
                <Skeleton  height={350}/>
               </div>
            </>
        );
        
    };

    const filterProduct = (cat) => {
        // console.log(cat);
        console.log(data);
        let updatedList = data.filter((x) => {
        // console.log(x.category,cat)
        return (x.category === cat);});
        // console.log(updatedList);
        setFilter(updatedList)
        // console.log("ye chala ");
        // console.log(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="button d-flex justify-content-center mb-5 pb-5">
                    <button className="button btn btn-outline-dark me-2" onClick={()=> setFilter(data)}>All</button>
                    <button className="button btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="button btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="button btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>Jewellery</button>
                    <button className="button btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((Product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div class="card h-100 text-center p-4" key={Product.id} >
                                    <img src={Product.image} class="card-img-top"
                                     alt= {Product.title}  height="250px"/>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{Product.title.substring(0,12)}...</h5>  
                                        <p class="card-text lead fw-bold">
                                            ${Product.price}
                                        </p>
                                        <a href="#" class="btn btn-outline-dark">
                                          Buy Now
                                          </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>

        </div>
    );
}
