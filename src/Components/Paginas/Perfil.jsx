import styles from "../PaginaEstilos/perfil.module.css"
import { FiUser } from "react-icons/fi";
function Perfil () {
    return(
        <main>
            <section className= {styles.perfil} >
                <div>
                    <FiUser />
                    <p>makanda daniel - engineer</p>
                </div>
            </section>

            <section className={styles.cardd}>
                <article>
                    <div>platform settings</div>
                    <div>security & privacy</div>
                    <div>connected accounts</div>
                </article>
            </section>
        </main>
       

    )
}

export default Perfil