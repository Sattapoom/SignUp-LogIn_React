import { Link } from 'react-router-dom';

function FormNav(props) {
    return(
        <div>
            <Link to="/home" class={props.path==="/home" ? "active":"nonactive"}>Home</Link>
            <Link to={localStorage.getItem("token")? "":"/login"} class={props.path==="/login" ? "active":"nonactive"}>Log In</Link>
            <Link to="/register" class={props.path==="/register" ? "active":"nonactive"}>Register</Link>
        </div>
    );
}
  
  export default FormNav;
  