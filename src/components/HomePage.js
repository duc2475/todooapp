
import { click } from "@testing-library/user-event/dist/click";
import "./component.css";
import Todo_List from './todolist';
import { logout } from "../App";
import { async } from "@firebase/util";
import useAuth from "../App"

async function handleLogout() {
    try{
        await logout();
    }
    catch{
        alert("Error!")
    }
}

export const HomePage = () => {
 const currentUser = useAuth();
    return (
        <>
    <div className='section2'>
      <div className='color2'></div>
        <div className='color2'></div>
            <div className='color2'></div>
                 <div className="main-todo">
                    <div class="home_menu">
                        <nav>
                        <h2 class="neon">ToDo</h2>
                        <ul class="menu">
                            <li><a href="/home">Home</a></li>
                            <li><a onClick={handleLogout} href="/login">Log out</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a>{currentUser?.email}</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div>
                        <Todo_List></Todo_List>
                    </div>
                </div>    
    </div>
       </>
    )
}