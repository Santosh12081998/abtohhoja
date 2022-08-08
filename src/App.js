import logo from './logo.svg';
import app from "./firebase";
import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';
import './App.css';
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
// import YoutubeSubscribeButton from 'deku-youtube-subscribe-button';
// import Home from './component/Home';
// let clientId = "1098019005957-m2sjfa61abn8dsb8tk0eplog0dbsqi5d.apps.googleusercontent.com";
let clientId = "1098019005957-m2sjfa61abn8dsb8tk0eplog0dbsqi5d.apps.googleusercontent.com";
const db = getFirestore(app);


function App() {

	const [insertedValue, setInsertedValue] = useState('');
	const YoutubeLink = "https://www.youtube.com/c/EducationMantra19";
	const [selClass, setSelClass] = useState('');
	const [allData, setAllData] = useState([]);
	const [allVideo, setAllVideo] = useState([]);
	const [allClass, setAllClass] = useState([]);
	const [loading, setLoading] = useState(true);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [contactDetail, setContactDetail] = useState({});
	const [name, setName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [subject, setSubject] = useState(''); 
	const [message, setMessage] = useState('');

	useEffect(() => {
		getData();
		// https://stackoverflow.com/questions/47552876/multiple-firestore-queries-single-promise-callback
	}, []);

	const changeVideo = (value) => {
		setSelClass(value)
		let newVideos = allVideo.filter(item => item.class == value);
		console.log("LOGS", newVideos);
	}

	const responseGoogle = (a) => {

		console.log("Hello1", a)

		// return cityList;
	}

	const AddNewRow = async () => {
		if (insertedValue == "") {
			alert('kidhar chale. Kuch likh lo.');
			return;
		}
		await addDoc(collection(db, "users"), {
			name: insertedValue,
			state: "CA",
			country: "USA"
		});
		setInsertedValue('');
		getData();
		console.log("Added user")
	}

	const UpdateRow = async () => {
		await setDoc(doc(db, "users", "LA"), {
			name: "Los Angeles",
			state: "CA",
			country: "USA"
		});
		console.log("Updating user")
	}

	const getData = async () => {
		const citiesCol = collection(db, 'users');
		const citySnapshot = await getDocs(citiesCol);
		const cityList = citySnapshot.docs.map(doc => doc.data());
		setAllData(cityList);
		const contactCol = collection(db, 'ContactDetail');
		const contactSnapshot = await getDocs(contactCol);
		const contact = contactSnapshot.docs.map(doc => doc.data());
		setContactDetail(contact[0].Data);
		const classCol = collection(db, 'Class');
		const classSnapshot = await getDocs(classCol);
		const classD = classSnapshot.docs.map(doc => doc.data());
		setAllClass(classD);
		const videoCol = collection(db, 'videos');
		const videoSnapshot = await getDocs(videoCol);
		const video = videoSnapshot.docs.map(doc => doc.data());
		setAllVideo(video);
		setLoading(false);
		// console.log("All Data", contact[0].Data);
	}

	const AddEnquiry = async() =>{
		console.log('hello', name, email, subject, message);
		
		if(name=="" || email=="" || subject=="" || message==""){
			alert('All Fields Are Required');
			return;
		}

		if(subject=="-"){
			alert('Select One Subject');
			return;
		}

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
		{
			alert('Email Address is not Valid');
			return;
		}

		await addDoc(collection(db, "contactForm"), {
			name: name,
			email: email,
			subject: subject,
			message: message,
			createdAt: new Date()
		});

		setFormSubmitted(true);
		alert("Thank you. We Will Contact You Soon...");
		
		console.log("Added Enquiry")
	}

	return (
		// loading?
		// <div></div>
		// :
		<div class="container-fluid">

			<div class="row">
				{/*  */}
				<div id="tm-sidebar" class="tm-sidebar">
					<nav class="tm-nav">
						<button class="navbar-toggler" type="button" aria-label="Toggle navigation">
							<i class="fas fa-bars"></i>
						</button>
						<div>
							<div class="tm-brand-box">
								<h1 class="tm-brand">Education Mantra</h1>
							</div>
							<ul id="tm-main-nav">
								<li class="nav-item">
									<a href="#home" class="nav-link current">
										<div class="triangle-right"></div>
										<i class="fas fa-home nav-icon"></i>
										Home
									</a>
								</li>
								<li class="nav-item">
									<a href="#gallery" class="nav-link">
										<div class="triangle-right"></div>
										<i class="fas fa-images nav-icon"></i>
										Videos
									</a>
								</li>
								<li class="nav-item">
									<a href="#about" class="nav-link">
										<div class="triangle-right"></div>
										<i class="fas fa-user-friends nav-icon"></i>
										About
									</a>
								</li>
								<li class="nav-item">
									<a href="#contact" class="nav-link">
										<div class="triangle-right"></div>
										<i class="fas fa-envelope nav-icon"></i>
										Contact
									</a>
								</li>
								<li class="nav-item">
									<a href={YoutubeLink} class="nav-link external" target="_parent" rel="sponsored">
										<div class="triangle-right"></div>
										<i class="fas fa-video nav-icon"></i>
										Youtube
									</a>
								</li>
							</ul>
						</div>
						{/* <footer class="mb-3 tm-mt-100">
							Design: <a href="https://templatemo.com" target="_parent" rel="sponsored">TemplateMo</a>
						</footer> */}
					</nav>
				</div>

				<div class="tm-main">
					<div class="tm-section-wrap">
						<div class="tm-parallax" data-parallax="scroll" data-image-src="/img/buddhaThought.jpg"></div>
						<section id="home" class="tm-section">
							<h2 class="tm-text-primary">Welcome to Education Mantra</h2>
							<hr class="mb-5" />
							<div class="row">
								<div class="col-lg-6 tm-col-home mb-4">
									<div class="tm-text-container">
										<div class="tm-icon-container mb-5 mr-0 ml-auto">
											<i class="fas fa-book fa-4x tm-text-primary"></i>
										</div>
										<p>
											It helps people become better citizens, get a better-paid job, shows the difference between good and bad.
										</p>
										<p>
											<b>Education</b> shows us the importance of hard work and, at the same time, helps us grow and develop. Thus, we are able to shape a better society to live in by knowing and respecting rights, laws, and regulations.
										</p>
									</div>
								</div>
								<div class="col-lg-6 tm-col-home mb-4">
									<div class="tm-text-container">
										<div class="tm-icon-container mb-5 mr-0 ml-auto">
											{/* <i class="fa-regular fa-graduation-cap"></i> */}
											<i class="fas fa-graduation-cap fa-4x tm-text-primary"></i>
										</div>
										<p>
											“<b>Education</b> is the most powerful weapon which you can use to change the world.”
										</p>
										<p>
											“<b>Education</b> is one thing no one can take away from you.”
										</p>
										<p>
											“Check Out Recorded Videos On <b>YOUTUBE</b>.”
										</p>
										<div class="text-right">
											{/* <div class="g-ytsubscribe" data-channel="GoogleDevelopers" data-layout="full" data-count="hidden"></div> */}
											<a href={YoutubeLink} target="_blank" class="btn btn-primary tm-btn-next">Watch Videos</a>
										</div>
									</div>
								</div>
							</div>
							<hr class="tm-hr-short mb-5" />
							{/*  */}
						</section>
					</div>
					{/* <!-- Gallery section --> */}
					<div class="tm-section-wrap">
						<div class="tm-parallax" data-parallax="scroll" data-image-src="/img/img-01.jpg"></div>
						<section id="gallery" class="tm-section">
							<h2 class="tm-text-primary">Education Mantra Videos</h2>
							<hr class="mb-5" />
							<ul class="tm-gallery-links">
								<li onClick={() => changeVideo('')}>
									<a href="javascript:void(0);" class={selClass == '' ? "tm-gallery-link active" : "tm-gallery-link"} data-filter="*">
										<i class="fas fa-layer-group tm-gallery-link-icon"></i>
										All
									</a>
								</li>
								{allClass.map((item, idx) => {
									return (
										<li onClick={() => changeVideo(item.title)}>
											<a href="javascript:void(0);" class={selClass == item.title ? "tm-gallery-link active" : "tm-gallery-link"} data-filter={item.title}>
												<i class="fas fa-graduation-cap tm-gallery-link-icon"></i>
												{item.name}
											</a>
										</li>
									)
								})}
							</ul>
							{/* <div class="tm-gallery"> */}
							<div class="row">
								{/* {(allVideo.length==0)&&
									[1,2,3,4,5,6,7,8,9,10].map((item, idx) => {
										return(
										<div class="col-lg-6 my-3" key={idx}>
											<div class="embed-responsive embed-responsive-16by9">
												<iframe class="embed-responsive-item" src={"https://www.youtube.com/embed/caPXrnAbGcA"} frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
											</div>
										</div>);
									})
								} */}
								{allVideo.map((item, idx) => {
									if (selClass != item.class && selClass != '') {
										return;
									}
									return (
										!idx ?
											<div class="col-lg-6 my-3" key={idx}>
												<div class="embed-responsive embed-responsive-16by9">
													<iframe class="embed-responsive-item" src={item.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
												</div>
											</div>
											// <figure class={"effect-honey tm-gallery-item "+item.class+" 1"}>
											// 	<img src="/img/gallery/tn/portrait-01.jpg" alt="Image" />
											// 	<figcaption>
											// 		<h2><i>Dreamy Honey</i></h2>
											// 		<a href="/img/gallery/portrait-01.jpg">View more</a>
											// 	</figcaption>
											// </figure>
											:
											<div class="col-lg-6 my-3" key={idx}>
												<div class="embed-responsive embed-responsive-16by9">
													<iframe class="embed-responsive-item" src={item.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowFullScreen></iframe>
												</div>
											</div>
										// <figure class={"effect-honey tm-gallery-item "+item.class}>
										// 	<img src="/img/gallery/tn/portrait-01.jpg" alt="Image" />
										// 	<figcaption>
										// 		<h2><i>Dreamy Honey</i></h2>
										// 		<a href="/img/gallery/portrait-01.jpg">View more</a>
										// 	</figcaption>
										// </figure>
									)
								})}
							</div>
						</section>
					</div>
					{/* <!-- About section --> */}
					<div class="tm-section-wrap">
						<div class="tm-parallax" data-parallax="scroll" data-image-src="/img/img-03.jpg"></div>
						<section id="about" class="tm-section">
							<h2 class="tm-text-primary">About Education Mantra</h2>
							<hr class="mb-5" />

							<div class="row tm-row-about">
								<div class="tm-col-about tm-col-about-l">
									<p class="mb-4">
										<strong>EDUCATION</strong> means "STUDY OF SKILLS MANTRA".
										{/* If you want to support TemplateMo, you can contribute <a rel="sponsored" href="https://paypal.me/templatemo" target="_parent">a small donation via <strong>PayPal</strong></a>. This will be very helpful. Thank you.  */}
									</p>
									<p class="mb-4">
										The word <strong>MANTRA</strong> is derived from two Sanskrit words — <b>MANAS</b> (mind) and <b>TRA</b> (tool).
									</p>
									<p class="mb-4">
										<strong>MANTRA</strong> literally means “a tool for the mind,”
										{/* Aliquam ornare varius erat vel aliquet. Proin ac neque a tortor tristique semper eget eget sapien. Morbi vitae diam a odio lobortis mattis sed nec justo. */}
									</p>

								</div>
								<div class="tm-col-about tm-col-about-r">
									<img src="/img/img-about-01.jpg" alt="Image" class="img-fluid mb-5 tm-img-about" />

								</div>

							</div>
							<div class="row tm-row-about">
								<div class="tm-col-about tm-col-about-l">
									<p>
										<h2 class="tm-text-primary">Vision</h2>
										<hr class="mb-5" />
										Our <b>VISION</b> is to promote students achivement and prepration for global competitiveness by fostering educational excellence and ensuring equal access.
										{/* Duis fringilla eget purus luctus sodales. Sed auctor odio quis ligula dignissim efficitur vitae vitae quam. */}
									</p>
								</div>
								<div class="tm-col-about tm-col-about-r">
									<p>
										<h2 class="tm-text-primary">Mission</h2>
										<hr class="mb-5" />
										Our Main Goal at <b>EDUCATION MANTRA</b> is to ensure that we create an environment that to will be inspiring to ours students an can provide them with the confindence enthusiasm attane the highest possible result. Our teachers are experinced, highly academic and strive to offer the best quality education.
										{/* Duis fringilla eget purus luctus sodales. Sed auctor odio quis ligula dignissim efficitur vitae vitae quam. */}
									</p>
								</div>
							</div>
							<div class="mt-5">
							</div>
						</section>
					</div>

					{/* <!-- Contact section --> */}
					<div class="tm-section-wrap">
						<div class="tm-parallax" data-parallax="scroll" data-image-src="/img/img-04.jpg"></div>
						<div id="contact" class="tm-section">
							<h2 class="tm-text-primary">Contact Education Mantra</h2>
							<hr class="mb-5" />
							<div class="row">
								<div class="col-xl-6 tm-contact-col-l mb-4">
									{formSubmitted?
									<div>
										Thank you. We Will Contact You Soon...
									</div>
									:
									<form id="contact-form" action="#" method="POST" class="tm-contact-form">
										<div class="form-group">
											<input onChange={(text)=> setName(text.target.value)} value={name} type="text" name="name" class="form-control rounded-0" placeholder="Name" required />
										</div>
										<div class="form-group">
											<input onChange={(text)=> setEmail(text.target.value)} value={email} type="email" name="email" class="form-control rounded-0" placeholder="Email" required />
										</div>
										<div class="form-group">
											<select onChange={(text)=> setSubject(text.target.value)} class="form-control" id="contact-select" name="inquiry">
												<option value="-">Subject</option>
												<option value="admission">Admission</option>
												<option value="other">Other</option>
											</select>
										</div>
										<div class="form-group">
											<textarea onChange={(text)=> setMessage(text.target.value)} value={message} rows="8" name="message" class="form-control rounded-0" placeholder="Message" required="true"></textarea>
										</div>

										<div class="form-group tm-text-right">
											<button onClick={()=>AddEnquiry()} type="button" class="btn btn-primary">Send</button>
										</div>
									</form>}
								</div>
								<div class="col-xl-6 tm-contact-col-r">
									{/* <!-- Map --> */}
									<div class="mapouter mb-4">
										<div class="gmap_canvas">
										{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1851808025067!2d72.83142591636228!3d21.145027547536184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05158f2c8ce95%3A0x4a7e9ee005900685!2sEducation%20MANTRA!5e0!3m2!1sen!2sin!4v1659872202188!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
										{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14884.93008147954!2d72.83973144999999!3d21.1431429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1659872405085!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
											<iframe width="100%" height="520" id="gmap_canvas"
												src="https://maps.google.com/maps?q=Education%20Mantra,Pandesara,Surat&t=&z=13&ie=UTF8&iwloc=&output=embed"
												// src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
												frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
										</div>
									</div>

									{/* <!-- Address --> */}
									<address class="mb-4">
										179, Aakash Row House, Near, Navijivan <br />
										Palace, Pandesara, Surat - 394221
									</address>

									{/* <!-- Links --> */}
									<ul class="tm-contact-links mb-4">
										<li class="mb-2">
											<a href={"tel:" + contactDetail.Contact}>
												<i class="fas fa-phone mr-2 tm-contact-link-icon"></i>
												Tel: {contactDetail.Contact}
											</a>
										</li>
										<li>
											<a href={"mailto:" + contactDetail.Email}>
												<i class="fas fa-at mr-2 tm-contact-link-icon"></i>
												Email: {contactDetail.Email}
											</a>
										</li>
									</ul>
									<ul class="tm-contact-social">
										<li><a href="https://fb.com/" class="tm-social-link"><i class="fab fa-facebook"></i></a></li>
										<li><a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter"></i></a></li>
										<li><a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram"></i></a></li>
										<li><a href={YoutubeLink} class="tm-social-link"><i class="fab fa-youtube"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* <!-- Copyright -->                 */}
					<div class="tm-section-wrap tm-copyright row">
						<div class="col-12">
							<div class="text-right">
								Copyright 2020 Education Mantra | All Right Reserved
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		{/* <p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a> */}
		// 		{/* e.target.value */}

		// 		{allData.map((item, index)=><div key={index}>{item.name}</div>)}

		// 		<input type="text" value={insertedValue} onChange={(text)=>{
		// 			setInsertedValue(text.target.value);
		// 			// console.log("value", text.target.value)
		// 		}}/>
		// 		<button onClick={AddNewRow} title="Insert" >Insert</button>
		// 		{/* <GoogleLogin
		// 			clientId={clientId}
		// 			buttonText="Login"
		// 			onSuccess={responseGoogle}
		// 			onFailure={responseGoogle}
		// 			cookiePolicy={'single_host_origin'}
		// 		/> */}
		// 	</header>
		// </div>
	);
}

// export default App;
// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Routes, Route}
// 	from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import SignUp from './pages/signup';
// import Contact from './pages/contact';
// import Videos from './pages/videos';

// function App() {
// return (
// 	<Router>
// 	{/* <Navbar /> */}
// 	<Routes>
// 		<Route exact path='/' exact element={<Home />} />
// 		<Route path='/about' element={<About/>} />
// 		<Route path='/contact' element={<Contact/>} />
// 		<Route path='/videos' element={<Videos/>} />
// 		<Route path='/sign-up' element={<SignUp/>} />
// 	</Routes>
// 	</Router>
// );
// }

export default App;
