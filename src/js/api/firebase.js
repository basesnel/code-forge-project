import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Notify } from "notiflix";

const firebaseConfig = {
  apiKey: "AIzaSyAkwUo6DbQZ45SKLYmVN-WMfwtEZwlR7sE",
  authDomain: "codeforge-eb6aa.firebaseapp.com",
  projectId: "codeforge-eb6aa",
  storageBucket: "codeforge-eb6aa.appspot.com",
  messagingSenderId: "735290516280",
  appId: "1:735290516280:web:72a30be1acfb9b6d32d7cd",
  measurementId: "G-QX1ZX7WVT2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const refs = {
	// inputEmailSignUp: document.querySelector('#input-sign-up-email'),
	// inputPasswordSignUp: document.querySelector('#input-sign-up-password'),
	// inputEmailSignIn: document.querySelector('#input-sign-in-email'),
	// inputPasswordSignIn: document.querySelector('#input-sign-in-password'),
	formOfSignUp: document.querySelector('.form-sign-up'),
	formOfSignIn: document.querySelector('.form-sign-in'),
	btnOfSignOut: document.querySelector('.auth__btn-sign-out'),
}

let email = ''; // sdsds@sdsd.wew
let password = ''; // 123456

refs.formOfSignUp.addEventListener('submit', onSignUpSubmit);
refs.formOfSignIn.addEventListener('submit', onSignInSubmit);

refs.btnOfSignOut.addEventListener('click', onSignOutClick);


function onSignUpSubmit(e) {
	e.preventDefault();
	
	
	email = e.currentTarget.elements[0].value;
	password = e.currentTarget.elements[1].value;

	console.log('Email: ', email);
	console.log('Password: ', password);

	const auth = getAuth();

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			Notify.failure(errorMessage);
			// ..
		});
	
	e.currentTarget.reset();
}

function onSignInSubmit(e) {
	e.preventDefault();
	
	email = e.currentTarget.elements[0].value;
	password = e.currentTarget.elements[1].value;

	console.log('Email: ', email);
	console.log('Password: ', password);

	const auth = getAuth();

	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
		// Signed in 
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			Notify.failure(errorMessage);
		});
	
	e.currentTarget.reset();
}

function onSignOutClick(e) {
	const auth = getAuth();
	signOut(auth).then(() => {
  		// Sign-out successful.
		Notify.success('Sign Out Success!');
	}).catch((error) => {
  		// An error happened.
		Notify.failure(errorMessage);
	});
}









