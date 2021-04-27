import {useEffect, useState} from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=386a2d49891223d5453f16845705606e&query=${address}`;
    
    useEffect(async ()=> {
        const response = await axios(API);
        setMap(response.data.data[0])
        
    }, []);
    return map;
}

export default useGoogleAddress;