import React from 'react'
import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'
import SingUp from './SingUp'
function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-url.com/login', { username, password });
      console.log(response.data);
      // handle successful login
    } catch (error) {
      console.error(error.response.data);
      // handle error
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>


<SingUp />
    </div>

  )
}

export default Login

