import '../styles/cart.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import ReactPaginate from "react-paginate";
import LogiqueModale from './LogiqueModale';

function AllCountries() {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

 
  const {revele,toogle} = LogiqueModale();

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
    <h2>All Countries</h2>
        <ul>
            {data
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map(item =>(
                <li key={item.name}>
                   <button className="button" onClick={toogle}>{item.name} Open</button>
                   <p>Country: {item.name} Capital: {item.capital} Code: {item.alpha2Code} </p>
                   <Modal revele = {revele}
              cache = {toogle} 
              >
            </Modal >
                </li>
    ))}
        </ul>
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

        </div>

  )
}
export default AllCountries