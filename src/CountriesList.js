import {
	Route, BrowserRouter as Router, Switch, Link,
  } from 'react-router-dom';
  import AllCountries from './components/AllCountries';
  import EuCountries from './components/EuCountries';
  import SearchName from './components/SearchName';
  import Countries from './assets/countries.png';
  import './styles/index.css'


const CountriesList = () => (

	<Router>	
	  <header className="menu">
			<div className="contain">
			<img src={Countries} className="world" alt="World"/>
		<Link to="/allcountries"className="section">All countries</Link> 
		<Link to="/eucountries"className="section">Region Eu countries</Link> 
		<Link to="/searchname"className="section">Search by name</Link>
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
		<main className="boxcontain">
			<div className="principal">
			<a href="/allcountries"><h1> -{'>'} Clic on the menu or Start the project </h1></a></div>
		</main>
	  <footer  className="menu">
		  <div className="footcontain">
		  	<div className="box">Contact: <br/>
		  	info@allcountries.com </div>
		  	<div className="box">
			  <a href="/allcountries">All Countries</a> <br/>
		  		<a href="/eucountries">Eu Countries</a> <br/>
		  		<a href="/searchname">Search by Name</a>
			</div>
		  </div>
		</footer>
	</Router>
  );
  export default CountriesList;