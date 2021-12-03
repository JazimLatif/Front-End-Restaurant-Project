import { useState } from "react";
import { useHistory } from "react-router";

const Form = ({ onLogIn }) => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [incorrectEmail, setIncorrectEmail] = useState(null)
    const [password, setPassword] = useState("");
    const [incorrectPassword, setIncorrectPassword] = useState(null)

    const emailPlaceholder = !incorrectEmail ? "Enter email..." : "Email not found!"
    const passwordPlaceholder = !incorrectPassword ? "Enter password..." : "Incorrect password!"

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogIn = async (event) => {
        event.preventDefault();

        let users;
        await fetch("http://localhost:8080/customer")
        .then(response => response.json())
        .then(data => users = data)

        const userFound = users.find(user => user.email === email);
        if (!userFound) {
            setEmail("")
            setIncorrectEmail(true)
        } else if (userFound.number !== parseInt(password)) {
            setPassword("")
            setIncorrectPassword(true)
        } else {
            onLogIn(userFound);
            history.push("/")
        }
    }

    return(
        <div>
            <form onSubmit={handleLogIn}>
                <div className="formElement">
                    <label><h1>Username</h1></label>
                    <input type="text" id="email" placeholder={emailPlaceholder} 
                        value={email} onChange={handleEmailChange} />
                </div>
                <div className="formElement">
                    <label><h1>Password</h1></label>
                    <input type="password" id="password" placeholder={passwordPlaceholder} 
                        value={password} onChange={handlePasswordChange}/>
                </div>
                <div className="formElement">
                    <input type="submit" value="Next" />
                </div>   
            </form>
        </div>
    )
}

export default Form;
