import React from 'react'

const Login = ({userName,setUserName,userPass,setUserPass}) => {
  return (
    <div className='form-cont'>
     <div className='login-cnt'>
        <div>
            <p className='form-title'>Login</p>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className='u-name input-field'>
                <label htmlFor='usr-name'>User Name :</label>
                <input
                    type ="text"
                    id='usr-name'
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                />
            </div>
            <div className='u-pass input-field'>
                <label htmlFor='usr-pass'>Password :</label>
                <input
                    type ="text"
                    id='usr-pass'
                    value={userPass}
                    onChange={(e)=>setUserPass(e.target.value)}
                />
            </div>
            <div className='btn-part'>
                <button className='login-btn form-btn'>Login</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login