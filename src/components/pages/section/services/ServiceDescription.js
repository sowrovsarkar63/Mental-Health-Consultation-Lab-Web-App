import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDescription = () => {
    let { id } = useParams();
    const [ServiceDetail, setServiceDetails] = useState([]);
    const [singleService, setsingleService] = useState({});
    useEffect(() => {
        fetch("/Services.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);

    useEffect(() => {
        const FoundService = ServiceDetail.find(
            (demoService) => demoService.id == id
        );
        setsingleService(FoundService);
    }, [ServiceDetail]);

    return (
        <div>
            <h2>Service Details Page</h2>

            <h4>Name {singleService?.name}</h4>
        </div>
    );
};

export default ServiceDescription;
