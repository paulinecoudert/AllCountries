import '../styles/cart.css'
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
            placeholder="Search" 
            name= "search"
            id= "search"
            onChange={handleFilter}/>
            </div>

            <div className="dataResults">
              {data.filter((value, key) => {
                return  value.name.toLowerCase().includes(searchName.toLowerCase());
              })
              .map((value) =>{
                return (
                  <div className="dataResult" key={value.id}>
                  {value.name}
                  </div>
                );
              })
              }
              </div>
           
        </div>    );
        
            }



export default SearchName