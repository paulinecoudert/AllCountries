import '../styles/pagination.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import ReactPaginate from "react-paginate";
import FunctionModale from './FunctionModale';

function AllCountries() {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

 
    const {show,toogle} = FunctionModale();

    const usersPerPage = 20
    const pagesVisited = pageNumber * usersPerPage

    const pageCount = Math.ceil(data.length /usersPerPage);

    const changePage = ({selected}) =>{
      setPageNumber(selected)
    };

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

    <div  className='lmj-cart'>
    
    <ReactPaginate
        previousLabel = {"Previous"}
        nextLabel = {"next"}
        pageCount = {pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"previousBttn"}
        disabledClassName={"disabledBttn"}
        activeClassName={"paginationActive"}
        />
        <h3>list of all Countries</h3>
        <ul>
            {data
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map(item =>(
                <li key={item.name} className="list">
                  <div className="ligncontain">
                   <p>Country: {item.name}
                   <br/>Capital: {item.capital}
                   <br/>Code: {item.alpha2Code}
                   </p>
                   </div>
                   <div className="ligncontain">
                   <button className="button" onClick={toogle}> More infos</button>
                   </div>
                   <Modal show = {show}
                    cache = {toogle}
                    >
                    </Modal >
                </li>
            ))}
        </ul>

        </div>

  )
}
export default AllCountries