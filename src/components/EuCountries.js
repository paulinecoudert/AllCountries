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
        <h3>List of Region Eu Countries</h3>
        <ul>
            {data.map(item =>(
                <li key={item.name} className="list">
                    <div className="ligncontain">
                    <p>Country: {item.name} <br/>Capital: {item.capital}<br/> Code: {item.alpha2Code} </p>
                    </div>
                    <div className="ligncontain"><p>Region: {item.region}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>

  )
}
export default EuCountries