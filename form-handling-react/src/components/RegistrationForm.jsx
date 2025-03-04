import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');


const handleSubmit = (e) => {
  e.preventDefault(); 
  console.log({username, email, password});
}
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {q
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password) {
//       alert("All fields are required!");
//       return;
//     }
//     console.log("Form submitted:", formData);
//   };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
