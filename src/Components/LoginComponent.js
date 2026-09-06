

 export default function LoginComponent(){
    var title = "user Login";
      function LoginClick(){
        alert("Login successfully");
      }
    return(
        <div className="d-flex justify-content-center">
         <div className="w-75">
          <h2 className="mt-3"><span className="bi bi-person-fill"></span>{title}</h2>
          <dl>
            <dt>User Name</dt>
            <dd><input type="text" /></dd>
            <dt>Email</dt>
            <dd><input type="email" /></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
          </dl>
          <button onClick="LoginClick" className="btn btn-primary">Login</button>
          </div> 
        </div>
    )
}