import Form from './Form.js';

const LogIn = ({ onLogIn }) => {

    return(
        <div className="LoginPage">
        <Form onLogIn={onLogIn}/>
        <img id="chefPic" src='https://cdn.discordapp.com/attachments/913726718169194496/914897116453826620/unknown.png'/>
        </div>

        
    )
    
}

export default LogIn;