import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Form = ({ onLogIn }) => {

    const history = useHistory();
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleLogIn = async (event) => {
        event.preventDefault();

        let users;
        await fetch("http://localhost:8080/customer")
        .then(response => response.json())
        .then(data => users = data)
        
        const userFound = users.find(user => user.email === email)
        if (userFound) {
            onLogIn(userFound);
            // setEmail("");
            history.push("/");
        } else {
            setEmail("");
        }

    }

    return(
        <div>
            <form onSubmit={handleLogIn}>
                <div className="formElement">
                    <label > <h1>Username</h1></label>
                    <input type="text" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="formElement">
                    <label > <h1>Password</h1></label>
                    <input type="password" id="password" />
                </div>
                <div className="formElement">
                    <input type="submit" value="Next" />
                </div>
            </form>
        </div>
    )
}

export default Form;
