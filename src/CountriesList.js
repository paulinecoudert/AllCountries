import {
	Route, BrowserRouter as Router, Switch, Link,
  } from 'react-router-dom';
  import AllCountries from './components/AllCountries';
  import EuCountries from './components/EuCountries';
  import SearchName from './components/SearchName';

// import { plantList } from './datas/plantList'



const CountriesList = () => (

	<Router>
	  <header className="bg-blue-800 text-white">
		{/* <Link to="/" className="red">accueil</Link> | */}
		<Link to="/" className="red">accueil</Link> |
		<Link to="/allcountries">allcountries</Link> |
		<Link to="/eucountries">eucountries</Link> |
		<Link to="/searchname">searchname</Link>
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