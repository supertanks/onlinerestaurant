import React from 'react';
import './AppContent.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Introduction from './Introduction/Introduction';
import Footer from './Footer/Footer';
import Department from './Department/Department';
import Menu from './Menu/Menu';

class App extends React.Component {
   	render() {
      	return (
         	<div>
            	<Header/>
            	<Main/>
				<Footer/>
         	</div>
      	);
   	}
}

export default App; 
