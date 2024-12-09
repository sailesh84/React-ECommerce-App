import axios from "axios";
import React, { useState, useEffect } from "react";
import { random, commerce } from "faker";
import myData from "./pexels.json";
import CartItems from "./CartItems";

const apiKey = 'INSERT_YOUR_KEY_HERE';
const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1';

const Buy = ({ addInCart }) => {

    //state for hold products in cart
    const [product, setProduct] = useState([]);

    //making api request to fetch photos by pexel-api
    // const fetchPhotos = async () => {
    //   const response = await axios.get(url, {
    //     header: {
    //       Authorization: apiKey
    //     }
    //   });
    // }

    //making request to fetch photos from pexels.json file
    const fetchPhotos = async () => {

        //fetching photos-array out of the data (response)
        const { photos } = myData;
        console.log("response-photos", photos);

        //creating new photo-object with new values
        const allProducts = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }));

        setProduct(allProducts);
    };


    useEffect(() => {
        fetchPhotos();
    }, []);

    return (
        <div className="container">
            <h1 className="text-success">
                Buy Page
            </h1>
            <div className="row">
                {product.map(product => (
                    <div className="col-4" key={product.id}>
                        <CartItems product={product} addInCart={addInCart} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Buy;
