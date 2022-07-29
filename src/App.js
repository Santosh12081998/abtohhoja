// import logo from './logo.svg';
// import app from "./firebase";
// import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';
// import './App.css';
// import GoogleLogin from 'react-google-login';
// import { useEffect, useState } from 'react';
// import Home from './component/Home';
// // let clientId = "1098019005957-m2sjfa61abn8dsb8tk0eplog0dbsqi5d.apps.googleusercontent.com";
// let clientId = "1098019005957-m2sjfa61abn8dsb8tk0eplog0dbsqi5d.apps.googleusercontent.com";
// const db = getFirestore(app);

// function App() {

// 	const [insertedValue, setInsertedValue] = useState('');
// 	const [allData, setAllData] = useState([]);

// 	useEffect(()=>{
// 		getData();
// 	}, [])

// 	const responseGoogle = (a) =>{
		
// 		console.log("Hello1", a)
		
// 		// return cityList;
// 	}

// 	const AddNewRow = async () =>{
// 		if(insertedValue==""){
// 			alert('kidhar chale. Kuch likh lo.');
// 			return;
// 		}
// 		await addDoc(collection(db, "users"), {
// 			name: insertedValue,
// 			state: "CA",
// 			country: "USA"
// 		});
// 		setInsertedValue('');
// 		getData();
// 		console.log("Added user")
// 	}

// 	const UpdateRow = async () =>{
// 		await setDoc(doc(db, "users", "LA"), {
// 			name: "Los Angeles",
// 			state: "CA",
// 			country: "USA"
// 		});
// 		console.log("Updating user")
// 	}

// 	const getData = async () =>{
// 		const citiesCol = collection(db, 'users');
// 		const citySnapshot = await getDocs(citiesCol);
// 		const cityList = citySnapshot.docs.map(doc => doc.data());
// 		setAllData(cityList);
// 		console.log("All Data", cityList);
// 	}

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				{/* <p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a> */}
// 				{/* e.target.value */}

// 				{allData.map((item, index)=><div key={index}>{item.name}</div>)}

// 				<input type="text" value={insertedValue} onChange={(text)=>{
// 					setInsertedValue(text.target.value);
// 					// console.log("value", text.target.value)
// 				}}/>
// 				<a
// 					className="App-link"
// 					href="./component/Home"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<button onClick={AddNewRow} title="Insert" >Insert</button>
// 				{/* <GoogleLogin
// 					clientId={clientId}
// 					buttonText="Login"
// 					onSuccess={responseGoogle}
// 					onFailure={responseGoogle}
// 					cookiePolicy={'single_host_origin'}
// 				/> */}
// 			</header>
// 		</div>
// 	);
// }

// export default App;
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Videos from './pages/videos';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' exact element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/videos' element={<Videos/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>
);
}

export default App;
