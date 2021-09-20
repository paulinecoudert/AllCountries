import '../styles/search.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


// import ManageSearchIcon from '@mui/icons-material/ManageSearch';
function SearchName() {
 
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
            'https://restcountries.eu/rest/v2/all',
        );
        setData(result.data) ;
    };
    fetchData();
  }, [])

const handleFilter = (event) => {
  const value = event.target.value;
  value.length > 2 && setSearchName(value);

  };

  return (

    <div className="search">
        <div className="searchInputs">
            <input
            type="text"
            placeholder="Search by name ..." 
            name= "search"
            id= "search"
            onChange={handleFilter}/>
            </div>
            <ul>
            {data
            .filter((value) => {
              return  value.name.toLowerCase().includes(searchName.toLowerCase());
            })
            .map(item =>(
                <li key={item.name} className="list">
                    <div className="ligncontain">
                    <p>Country: {item.name} 
                    <br/>Capital: {item.capital}
                    <br/> Code: {item.alpha2Code}
                    <br/> Region: {item.region} 
                    <br/> Population: {item.population}
                    </p>
                    
                    </div>
                </li>
            ))}
        </ul>
            {/* <div className="dataResults">
              {data.filter((value) => {
                return  value.name.toLowerCase().includes(searchName.toLowerCase());
              })
              .map((value) =>{
                return (
                  <div className="list">
                  <div className="ligncontain" key={value.id}>
                  <p>Country: {value.name} <br/>
                  Capital: {value.capital}<br/>
                  Code: {value.alpha2Code}<br/>
                  Region: {value.region}<br/>
                  Population: {value.population}<br/></p>
                  </div>
                  </div>
                );
              })
              }
            </div> */}

        </div>    );

            }



export default SearchName