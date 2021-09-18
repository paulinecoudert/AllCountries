import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';







function App(){
 
    const [data, setData] = useState([]);

  



  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              'https://restcountries.eu/rest/v2/all',
        );
        setData(result.data);
    };
    fetchData();
  
  }, [])

  

  return (

      <Fragment>
<h2>All Countries</h2>
        <ul>
            {data.map(item =>(
                <li key={item.id}>
                    
                    <p>Country: {item.name} Capital: {item.capital} Code: {item.alpha2Code}</p>
                    <p></p>
                </li>
    ))}
        </ul>
        </Fragment>

  )
}

export default App