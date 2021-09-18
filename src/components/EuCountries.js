import '../styles/cart.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function EuCountries() {
    const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              'https://restcountries.eu/rest/v2/regionalbloc/eu',
        );
        setData(result.data) ;
    };
    fetchData();
  
  }, [])

  

  return (

    <div  className='lmj-cart'>
        
<h2>Eu Countries</h2>
        <ul>
            {data.map(item =>(
                <li key={item.id}>
                    
                    <p>Country: {item.name} Capital: {item.capital} Code: {item.alpha2Code} </p>
                    <p>Region: {item.region}</p>
                </li>
    ))}
        </ul>
        </div>

  )
}
export default EuCountries