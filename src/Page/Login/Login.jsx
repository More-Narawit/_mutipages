
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import { verifyUser } from '../../data/users'

import './Login.css'

function Login({setToken, setRole}) {
    const userRef = useRef()
    const passwordRef = useRef()



    return (
        <div className='login-container mt-5'>
            <Form.Label htmlFor="username"><b>Username</b></Form.Label>
            <Form.Control
                type="text"
                id="username"
                style={{textAlign: 'center'}}
                placeholder='user'
                ref={userRef}
            />
            <Form.Label htmlFor="password"><b>Password</b></Form.Label>
            <Form.Control
                type="password"
                id="password"
                style={{textAlign: 'center'}}
                placeholder='password'
                ref={passwordRef}
            />
            <button className='btn btn-primary mt-3' onClick={()=>{
                const user = userRef.current.value.trim()
                const password = passwordRef.current.value.trim()
                const userInfo = verifyUser(user, password)

                if (userInfo == null) {
                    alert('Wrong username or password')
                    userRef.current.value = ''
                    passwordRef.current.value = ''
                    userRef.current.focus()
                }else{
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }

            }}>Login</button>

        </div>
    )
}

export default Login