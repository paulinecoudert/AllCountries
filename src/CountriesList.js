import {
	Route, BrowserRouter as Router, Switch, Link,
  } from 'react-router-dom';
  import AllCountries from './components/AllCountries';
  import EuCountries from './components/EuCountries';
  import SearchName from './components/SearchName';
  import './styles/index.css'
  

// import { plantList } from './datas/plantList'



const CountriesList = () => (

	<Router>	
	  <header className="menu">
		
		<div className="contain">
		<Link to="/allcountries"className="section">Allcountries</Link> 
		<Link to="/eucountries"className="section">Eucountries</Link> 
		<Link to="/searchname"className="section">Searchname</Link>
		</div>
	  </header>
	  <Switch>
		<Route path="/allcountries">
		  <AllCountries />
		</Route>
		<Route path="/eucountries">
		  <EuCountries />
		</Route>
		<Route path="/searchname" >
		  <SearchName placeholder="Enter a Country Name..."/>
		</Route>
		
	  </Switch>
	  <footer>mon foooooooooooter</footer>
	</Router>
  
  );
  
  export default CountriesList;