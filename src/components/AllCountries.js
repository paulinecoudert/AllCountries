import '../styles/cart.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

function AllCountries() {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);// creation de ma variable modalvisible et son etat set de base caché
    const closeModalHandler = () =>setModalVisible(false);

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
        
            {data.map(item =>(
                <li key={item.id}>
                    { modalVisible ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
                    <button className="bg-pink-200 text-black" onClick={AllCountries}>{item.name}</button>
                    
        <Modal close title="le signe est:" visible={modalVisible} hideModal={() => setModalVisible(false)}>
          <h3 >{item.alpha2Code}</h3>
         

        </Modal>
  
                    <p>{item.id}</p>
                    Country: {item.name}{item.aplha2Code} 
                </li>
    ))}
        
        </ul>
       
    
        </div>

  )
}
export default AllCountries