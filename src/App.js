
import { useState } from 'react';
import './App.css';
import Home from './Home';

function App() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    contact:''
  })

  const handleState = (e, property) => {
    if(property === 'name'){
      setFormData({
        ...formData,
        name: e.target.value
      })
    }
    else if(property === 'email'){
      setFormData({
        ...formData,
        email: e.target.value
      })
    }
    else{
      setFormData({
        ...formData,
        contact: e.target.value
      })
    }
  }
  console.log(formData)

  console.log(formData)
  const [showDetails,setShowDetails]=useState(false)
  const handleSubmit=(e)=>{
    console.log("form submitted")
    e.preventDefault()
    setShowDetails(true)
  }
  return (
    <div className="App">
     <h1>Contact us</h1>
     <form onSubmit={(e)=>handleSubmit(e)}>
      <div><input type='text' placeholder='Enter your name' onChange={(e)=>setFormData({...formData,
        name:e.target.value
      })}/></div>
      <div><input type='email' placeholder='enter your email' onChange={(e)=>setFormData({...formData,
        email:e.target.value})}/></div>
      <div><input type='number' placeholder='Enter your phonenumber'onChange={(e)=>setFormData({...formData,
        contact:e.target.value})} /></div>
      <div><input type='submit' value='submit'/></div>
     </form>
     {showDetails&&
     <div>
      <h2>Submitted Details</h2>
      <h4>Name:{formData.name}</h4>
      <h4>Email:{formData.email}</h4>
      <h4>Contact:{formData.contact}</h4>
     </div>}
     <Home data = {handleState}/>
      
    </div>
  );
}

export default App;
//steps for validating forms in react:
//1.create input tag for name,contact and email.
//2.wrap them inside form tag.
//3.provide onSubmit event on form and use e.preventDefault to prevent it from auto submission.
//4.Register onChange event on input and provide setFormData function from useState hook.
//5.pass name,email and contact as object in useState hook.
//6.set the attributes of setFormData as ...formData,name/contact/email:e.target.value as in lin 19,22 and 24.
//step 6 will capture user input from form.


//steps to show formData on ui:
//1.set useState to false having values const[showDetails,setShowDetails].
//2.make setShowDetails function true on handleSubmit function.
//3.set if showDetails true display values in ui as in from line 31 to 37.