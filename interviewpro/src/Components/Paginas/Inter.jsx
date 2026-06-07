import styles from "../PaginaEstilos/inter.module.css"
import { useState } from "react"
import Btinter from "../BTinter/Btinter"

function Inter () {

    const [ estado, setEstado] = useState(0)
    return (
        <main>
           <section className={styles.escolha}>
            <div>
                <h2>Choose your Interview path</h2>
                <p>
                    Select your career track and experience level
                </p>
            </div>
           </section>

           <section className={styles.level}>
            <article className={styles.jms}>
                <div onClick={ ()=> setEstado(0)} className={ estado === 0 ? "azu" : "normal"}>junior</div>
                <div onClick={ ()=> setEstado(1)} className={ estado === 1 ? "azu" : "normal"}>medio</div>
                <div onClick={ ()=> setEstado(2)} className={ estado === 2 ? "azu" : "normal"}>senior</div>
            </article>
           </section>

           <section className={styles.curso}> 
            <Btinter/>

            

           </section>
        </main>

    )
}

export default Inter