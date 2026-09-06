import { useState } from "react"


export default function LoginsComponent()
{
    const [Theme,setTheme] = useState({});
    function handleThemeChange(e){
         if(e.target.checked){
           setTheme("bg-dark text-white p-2 w-25")
    } else{
      setTheme("bg-light text-dark p-2 w-25")
    }
}
    return(
        <div className="container-fluid d-flex text-center mt-3">
            <div className={Theme}>
                <h2>User Login</h2>
                <div className="form-switch">
                    <input onChange={handleThemeChange} className="form-check-input" type="checkbox" /> Dark Theme
                </div>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="Password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}