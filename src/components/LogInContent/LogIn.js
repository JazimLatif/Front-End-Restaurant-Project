import Form from './Form.js';

const LogIn = ({ onLogIn }) => {

    return(
        <div>
        <Form onLogIn={onLogIn}/>
        </div>
    )
    
}

export default LogIn;