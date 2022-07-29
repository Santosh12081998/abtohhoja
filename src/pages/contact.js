import React, { useState } from 'react';
import app from "./../firebase";
import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';
const db = getFirestore(app);

const Contact = () => {
	
	const [name, setName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [subject, setSubject] = useState(''); 
	const [message, setMessage] = useState('');

	const AddEnquiry = async() =>{
		console.log('hello', name, email, subject, message)
		if(name==""){
			alert('kidhar chale. Kuch likh lo.');
			return;
		}
		await addDoc(collection(db, "contactForm"), {
			name: name,
			email: email,
			subject: subject,
			message: message
		});
		setName('');
		console.log("Added Enquiry")
	}
	
	return (
		<div>
			{/* <h1>Mail us on feedback@geeksforgeeks.org</h1> */}
			{/* <main class="" style="padding-left: 0px;"> */}
				<div class="container-fluid  mt-2 ">
					<div class="main-tabs-docs">
						<div class="tab-content ">
							<div class="tab-pane fade in show active" id="docsTabsOverview" role="tabpanel">
								<div class="row">
									<div class=" col-lg-12  col-md-12">
										<section class="documentation">
										<section id="html">
											<section>
												<div class="bg-white border rounded-5">
													<section class="section-preview">
														<section class="mb-4">
															<h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
															<p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
																a matter of hours to help you.</p>

															<div class="row">
																<div class="col-md-9 mb-md-0 mb-5">
																	<form id="contact-form" name="contact-form" action="mail.php" method="POST">
																		<div class="row">
																			<div class="col-md-6">
																				<div class="md-form mb-0">
																					<input type="text" id="name" onChange={(text)=> setName(text.target.value)} name="name" class="form-control" />
																					<label for="name" class="">Your name</label>
																				</div>
																			</div>
																			<div class="col-md-6">
																				<div class="md-form mb-0">
																					<input type="text" id="email" onChange={(text)=> setEmail	(text.target.value)} name="email" class="form-control" />
																					<label for="email" class="">Your email</label>
																				</div>
																			</div>
																		</div>
																		<div class="row">
																			<div class="col-md-12">
																				<div class="md-form mb-0">
																					<input type="text" id="subject" onChange={(text)=> setSubject(text.target.value)} name="subject" class="form-control" />
																					<label for="subject" class="">Subject</label>
																				</div>
																			</div>
																		</div>
																		<div class="row">
																			<div class="col-md-12">
																				<div class="md-form">
																					<textarea type="text" id="message" onChange={(text)=> setMessage(text.target.value)} name="message" rows="2" class="form-control md-textarea"></textarea>
																					<label for="message">Your message</label>
																				</div>
																			</div>
																		</div>
																	</form>

																	<div class="text-center text-md-left">
																		<a 
																			class="btn btn-primary"
																			onClick={AddEnquiry}
																			// onclick="document.getElementById('contact-form').submit();"
																		>Send</a>
																	</div>
																	<div class="status"></div>
																</div>
																<div class="col-md-3 text-center">
																	<ul class="list-unstyled mb-0">
																		<li>
																			<i class="fas fa-map-marker-alt fa-2x"></i>
																			<p>San Francisco, CA 94126, USA</p>
																		</li>

																		<li>
																			<i class="fas fa-phone mt-4 fa-2x"></i>
																			<p>+ 01 234 567 89</p>
																		</li>

																		<li>
																			<i class="fas fa-envelope mt-4 fa-2x"></i>
																			<p>contact@mdbootstrap.com</p>
																		</li>
																	</ul>
																</div>

															</div>

														</section>
													</section>
												</div>
											</section>
										</section>
										</section>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* </main> */}
		</div>
	);
};

export default Contact;
