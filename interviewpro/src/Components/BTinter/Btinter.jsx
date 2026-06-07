import styles from "../BTinter/btinter.module.css"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Btinter ({curso,nome,descr}) {

    const navega = useNavigate()




    const [status, setStatus] = useState ("")
    return (

       
        <section>
            <article onClick={()=> setStatus(1)} className={status === 1 ? "borda" : "normal"}>
                <span className={styles.c}> engineering </span>
                <h3> front end Developer</h3>
                <span> HTML, CSS, JS, REACT e NEXT </span>
            </article>

            <article onClick={()=> setStatus(2)} className={status === 2 ? "borda" : "normal"}>
                <span className={styles.c}> engineering</span>
                <h3> back end  Developer </h3>
                <span> BANCO DE DADOS, SEGURANÇA, APIs </span>
            </article>

            <article onClick={()=> setStatus(3)} className={status === 3 ? "borda" : "normal"}>
                <span className={styles.c}> cybersecurity</span>
                <h3> Ethical hackear </h3>
                <span>  </span>
            </article>

            <article onClick={()=> setStatus(4)} className={status === 4 ? "borda" : "normal"}>
                <span className={styles.c}> cybersecurity</span>
                <h3> Enfermagem </h3>
                <span>  </span>
            </article>

            <article onClick={()=> setStatus(5)} className={status === 5 ? "borda" : "normal"}>
                <span className={styles.c}> cybersecurity</span>
                <h3> CulturaGeral </h3>
                <span>  </span>
            </article>

            <article className={styles.btstart}>
            <button onClick={status > 0 ? ()=> navega("/") :"normal"} >start sisseon</button>
            </article>
        </section> 



     



    )
}
export default Btinter