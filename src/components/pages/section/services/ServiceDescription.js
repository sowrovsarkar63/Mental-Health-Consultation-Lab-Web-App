import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDescription = () => {
    let { id } = useParams();
    const [ServiceDetails, setServiceDetails] = useState([]);
    const [singleService, setsingleService] = useState([]);
    useEffect(() => {
        fetch("/Services.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);

    useEffect(() => {
        const details = ServiceDetails.find((service) => service.id === id);
        setsingleService(details);
    }, [ServiceDetails]);
    console.log(singleService);
    return (
        <div>
            <h2>Service Details Page</h2>
            <h2>Id {id}</h2>
        </div>
    );
};

export default ServiceDescription;
