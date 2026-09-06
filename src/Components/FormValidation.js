import { useState } from "react"

export default function FormValidation()
{
    const [User] = useState([
      {userId: 'john'},
      {userId: 'john12'},
      {userId: 'david'},
      {userId: 'john_nit'}
    ]);
    const [UserMsg,setUserMsg] = useState("");
    const [isuserValid,setuserValid] = useState(false);
    const [PwdMsg,setPwdMsg] = useState("");
    const [CapStatus,setcapStatus] = useState(false);
    const [CityMsg,setCityMsg] = useState("");
    const [userDetails,setuserDetails] = useState({userId: "",Password: "",City: ""});
    function VerifyUserId(){
        for(var user of userId){
            if(user.userId== e.target.value){
                setUserMsg('userId Taken-tryAnother');
                setuserValid(false)
                break;
            }else{
                setUserMsg('userId Avaiable');
                setuserValid(true);
            }
        }
    }
    function HidepasswordMsg(e){
        if(e.target.value==""){
            setUserMsg('userId Required');
        }else{
            setUserMsg("");
        }
    }
    function Verifypassword(e){
     if(e.target.value.match())
     {
    setPwdMsg('Strong Password');
     }else{
        if(e.target.value.length<4){
            setPwdMsg('Poor Password');
        }else{
            setPwdMsg('Weak Password');
        }
     }
     function HidepasswordMsg(){
        setPwdMsg('');
        setcapStatus(false);
     }
     function VerifyCaps(e){
     if(e.keyCode >=65 && e.keyCode <=65 || e.which >=65 && e.which <=90){
        setcapStatus(true);
     }else{
        setcapStatus(false);
     }
     }
    }
    function VerifyCity(e){
   if(e.target.value=="notCity"){
    setCityMsg('please select a city');
   }else{
    setCityMsg('');
   }
    }
    function HandleUserChange(e){
   setuserDetails({
    userId: e.target.value,
    Password: userDetails.Password,
    City: userDetails.City
   })
    }
    function HandlepasswordChange(e){
     setPwdMsg({
        userId: userDetails.userId,
        Password: e.target.value,
        City: userDetails.City
     })
    }
    function RegisterClick(e){
        alert(JSON.stringify(userDetails));
    }
    return(
        <div className="container-fluid">
            <h2>Register user</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={HandleUserChange} onKeyUp={VerifyUserId} onBlur={HideuserId} /></dd>
                <dd className={(isuserValid==true)?'text-success':'text-danger'}>{UserMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onChange={HandlepasswordChange} onKeyUp={Verifypassword} onKeyPress={VerifyCaps} onBlur={HidepasswordMsg} />
                    </dd>
                    <dd>{PwdMsg}</dd>
                    <dd className={(CapStatus==true)?'d-block':'d-none'}>
                        <span className="text-warning"><span className="bi bi-exclamation"></span>Caps ON</span>
                    </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={VerifyCity}>
                        <option value={notCity}>Select Your City</option>
                        <option value={Hyd}>Hyd</option>
                        <option value={Delhi}>Delhi</option>
                    </select>
                </dd>
                <dd className="text-danger">{CityMsg}</dd>
            </dl>
            <button className="btn btn-danger" onClick={RegisterClick}>Register</button>
        </div>
    )
}