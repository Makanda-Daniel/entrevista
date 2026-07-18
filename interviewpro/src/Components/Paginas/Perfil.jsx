import styles from "../PaginaEstilos/perfil.module.css"
import { FiUser } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { RiFocus2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
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
                    <div><RiFocus2Line/></div>
                    <div>Definições da plataforma</div>
                    <div className={styles.fim} >< IoIosArrowForward/></div>

                    <div>< BiHomeAlt/></div>
                    <div>Segurança e Privacidade</div>
                    <div className={styles.fim} >< IoIosArrowForward/></div>

                    <div><FiUser/></div>
                    <div>Criar uma conta</div>
                    <div className={styles.fim} >< IoIosArrowForward/></div>
                  

                </article>
            </section>
        </main>
       

    )
}

export default Perfil