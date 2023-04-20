// import React, {useState} from 'react'
// import { auth } from '../../utils/firebase/Firebase'
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'

// function SignInWithPhoneNumber() {
//  const [phoneNumber, setPhoneNumber] = useState("");

//   const handleChangePhoneNumber = (event) => {
//     setPhoneNumber(event.target.value)
//   }



//   function onCaptchVerify() {
//     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//       'size': 'invisible',
//       'callback': (response) => {
//         onSignInSubmit();
//       }
//     }, auth);
//   }
  
//   function onSignInSubmit() {
//     onCaptchVerify()

//     const phoneNumber = phoneNumber;
//     const appVerifier = window.recaptchaVerifier;

//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//       console.log(confirmationResult)
//       window.confirmationResult = confirmationResult;

//     }).catch((error) => {
//       console.log(error)
//     });

   
//   }
//   return (
//     <div>
//       <div id='recaptcha-container'></div>
 
//       <label>Enter your Phone Number:
//       <input 
//         type="tel" 
//         name="phonenumber" 
//         value={phoneNumber} 
//         placeholder="Enter your phone number"
//         onChange={handleChangePhoneNumber}
//       />
//       </label>
//         <button onClick={onSignInSubmit} id="sign-in-button">Submit</button>
    
      
//     </div>
    
//   )
// }

// export default SignInWithPhoneNumber