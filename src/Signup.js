import React from 'react';
import { useRef, useEffect, useState} from 'react';
import api from "./api/users"

const Mail_REGX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
const Username_REGX = /^([a-zA-Z0-9]{3,20})+([a-z-A-Z0-9-_ ])+([a-zA-Z0-9])$/;
const Pass_REGX =  /^([a-zA-Z0-9]{3,20})+([a-z-A-Z0-9-_ ])+([a-zA-Z0-9])$/g;

const Signup = ({isLogin,setIsLogin,regMail,setRegMail,regUsrName,setRegUsrName,regPass,setRegPass}) => {

    const userRef = useRef();
    const errRef = useRef();
   
    const [users,setUsers] = useState()

    const [mail,setMail] = useState('')
    const [focusMail,setFocusMail] = useState(false);
    const [validMail, setValidMail] = useState(false);

    const [uName,setUName] = useState('')
    const [focusUname,setsFocusUname] = useState(false);
    const [validUname, setValidUname] = useState(false);

    const [pass,setPass] = useState('')
    const [focusPass,setFocusPass] = useState(false);
    const [ValidPass, setvalidPass] = useState(false);

    const [regErr,setRegErr] = useState('')
    const [success,setSuccess] = useState('false')

    useEffect(()=>{
        userRef.current.focus();
       const fetchUsers = async ()=>{
        try{
            const response = await api.get('/users')
            setUsers(response.data);
        }catch(err){
            console.log(err.message)
        }
       }
       fetchUsers()
    }, [])

    useEffect(()=>{
        setValidMail(Mail_REGX.test(mail));
    }, [mail])

    useEffect(()=>{
        setValidUname(Username_REGX.test(uName))
    }, [uName])

    useEffect(()=>{
        setvalidPass(Username_REGX.test(pass))
    }, [pass])
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
       const id = users.length ? (users[users.length - 1].id  + 1) : 1;
       console.log(id)
       let newUser = {id,Email:mail,userName:uName, password:pass}
       console.log(newUser)
       const registerUser = async()=>{
        try{
            const response = await api.post('users',newUser)
            setUsers(...users,newUser);
        }catch(err){
            console.log(err.message)
        }

       }
       registerUser()
    }
  return (
    <div className='form-cont'>
    <div className='signup-cnt'>
    <div>
        <p className='form-title'>Register</p>
    </div> 
    <form onSubmit={handleSubmit}>
        <div className='u-mail input-field'>
            <label htmlFor='usr-mail'>Email :</label>
            <input
                type ="text"
                id='usr-mail'
                ref= {userRef}
                value={regMail}
                onChange={(e)=>setMail(e.target.value)}
            />
        </div>
        <div className='u-name input-field'>
            <label htmlFor='usr-name'>User Name :</label>
            <input
                type ="text"
                id='usr-name'
                value={regUsrName}
                onChange={(e)=>setUName(e.target.value)}
            />
        </div>
        <div className='u-pass input-field'>
            <label htmlFor='usr-pass'>Password :</label>
            <input
                type ="text"
                id='usr-pass'
                value={regPass}
                onChange={(e)=>setPass(e.target.value)}
            />
        </div>
        <div className='btn-part'>
                <button className='signup-btn form-btn' disabled= {validMail && validUname && ValidPass ? false : true} >Register</button>
        </div>
    </form>
  </div>
</div>
  )
}

export default Signup