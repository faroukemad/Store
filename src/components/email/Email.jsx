import {React} from 'react'
import './email.scss'
import {Close} from '@material-ui/icons';

export default function Email({menuOpen,setMenuOpen,load,setLoad}) {
///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/
 // const [error,setError]=useState(false);
 // const [firstName, setFirstName] = useState('');
  //const [lastName, setLastName] = useState('');
  //const [email, setEmail] = useState('');
 // const [message, setMessage] = useState('');

  

 // const handleChange=(val)=>{
  //  if(val.match(/\S+@\S+\.\S+/)){
  //    setError(false);
  //  }else{
   //   setError(true);
   // }
 // }




  return (
    <div className={"menu  " +(menuOpen && "active")}>
        <Close className="close" onClick={()=>setMenuOpen(false)} />
        <div className="container" >
           
           <div className="textDivs">
           <a href="#projects" className="texta1">  <div className="textDiv1 soc" onClick={()=>setMenuOpen(false)}>History</div></a>
           <a href="#about" className="texta1"> <div className="textDiv2 soc" onClick={()=>setMenuOpen(false)}>About</div></a>
           <a href="#menu" className="texta1"> <div className="textDiv2 soc" onClick={()=>setMenuOpen(false)}>Beans</div></a>

           <a href="http://faroukworks.epizy.com/" target="_blank" rel="noreferrer" className="texta1"> <div className="textDiv3 soc" onClick={()=>setMenuOpen(false)}>Portfolio</div></a>
           <div className="textDiv2 soc pad" onClick={()=>setMenuOpen(false)}>Close</div>

           </div>
        </div>
        
    </div>
  )
}
//