import React, { useState, useEffect, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PropertyContext from '../context/propertyContext';
import Data from "../data/data.json";
import Header from '../components/header';

const Explore = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { PropertyData, setPropertyData } = useContext(PropertyContext);
    // const [PropertyData, setPropertyData] = useState([]);

    const handleCart = (name) => {
        navigate('/checkout', { state: { name } });
    }

    const fetchProperty = async () => {
        try {
            setPropertyData(Data.properties);
            setLoading(false);
        } catch (error) {
            toast.error('Failed to fetch properties');
        }
    }

    useEffect(() => {
        fetchProperty();
    }, [loading]);

    return (
        <>
            <Header />
            <Toaster position="top-center" />
            <div className="hero h-full pt-12 pb-5">
                <h2 className="text-4xl font-bold mt-8 text-center">Featured Properties</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-4 mx-10">
                    {PropertyData.map((property, index) => (
                        <div
                            key={index}
                            className="property-card bg-white rounded-lg p-4"
                        >
                            <img
                                className="cursor-pointer"
                                src={property.image}
                                alt="property-image"
                                width={500}
                                height={100}
                            />
                            <h3 className="text-xl font-bold mt-2">{property.title}</h3>
                            <p className="text-md text-gray-500">
                                {property.description}
                            </p>
                            <p className="text-md font-semibold text-gray-800">
                                {property.location}
                            </p>
                            <p className="text-md font-semibold text-gray-800">
                                {property.bedrooms}
                            </p>
                            <p className="text-lg font-semibold text-gray-500">
                                {`$${property.price}/night`}
                            </p>
                            <button onClick={() => handleCart(property.title)} className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-6 rounded mt-1">
                                Book Now!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Explore;
