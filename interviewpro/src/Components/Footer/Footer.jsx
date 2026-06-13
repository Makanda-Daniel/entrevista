import styles from "../Footer/footer.module.css"
import { BiHomeAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { RiFocus2Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom"


function Footer () {

    const [clicar, setClicar] = useState(0)
     









    return (
        <footer>
            <div>
                <Link to="/">
                    <p ><BiHomeAlt /></p>
                    <span onClick={ ()=> setClicar(0) } className={clicar === 0 ? "vermelho" : "normal"}>inicio</span>
                </Link>

               <Link  to="/Inter" > 
                <p><RiFocus2Line /></p> 
               <span onClick={ ()=> setClicar(1) } className={clicar === 1 ? "vermelho" : "normal"}> entrevista</span>
               </Link>

               <Link  to="/Pro"> 
                <p><GiProgression /></p> 
               <span onClick={ ()=> setClicar(2) } className={clicar === 2 ? "vermelho" : "normal"}>progresso</span>
               </Link>

               <Link  to="/Perfil" > 
                <p><FiUser /></p> 
               <span onClick={ ()=> setClicar(3) } className={clicar === 3 ? "vermelho" : "normal"}>perfil</span>
               </Link>
            </div>                   
        </footer>
    )
}

export default Footer