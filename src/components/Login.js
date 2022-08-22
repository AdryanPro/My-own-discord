import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/FormInput.css";
import "./css/App.css";
import FormInput from "./FormInput";

export default function Login(){

    const [data, setData] = useState({
        email: "",
        password: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 6-20 characters and include at least 1 letter and 1 number !",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
          required: true,
        },
      ];
    
          const handleSubmit = (index) => {
        index.preventDefault();
        const sendData = {
            email: data.email,
            password: data.password
        }


        console.log(sendData);
        axios.post('http://localhost:80/Clone-discord/API/account/' + data.email + '/' + data.password)
        .then((result)=> {
            console.log(result)
            if(result.data === data.email){
              console.log("hello");
              routeHome();
            }
            
        
          });
            // if (result.status === 200){
            //     navigate('/login');
            // }else{
            //     alert('Invalide Username');
            // }
        };

        const url = 'http://localhost:80/Clone-discord/API/account';
        
        const [donnees, setDonnees] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
          const response = await axios.get(url);

          setDonnees(response);
          console.log(donnees);
          // console.log(response);

  
        };
        fetchData();
          }, [])
          
          

    
      const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      //  console.log(response);

      let navigate = useNavigate(); 
      const routeChange = () =>{ 
        let path = `../register`; 
        navigate(path);
      }
      const routeHome = () =>{ 
        let path = `../home`; 
        navigate(path);
      }


      function verif(){
        if(donnees.data === data.email ){
          console.log("hello")
        }
      }
    return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={data[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
            <div className="phrase">Je n'ai pas de compte. Je me <div id="create" onClick={routeChange}> crée.</div> un compte</div>
          </form>
        </div>
      );
      
    
}