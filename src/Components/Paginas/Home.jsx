import styles from "../PaginaEstilos/home.module.css"
import { RiFocus2Line } from "react-icons/ri";
import Bthome from "../BThome/Bthome";
import { FaRobot } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


function Home (){
    return (
        <main>
            <section className={styles.icone} >
                <div>
                    <span><RiFocus2Line /></span>
                    <span>InterviewPro</span>
                </div>
            </section>

            <section className={styles.texto}>
                <div className={styles.txtg}>
                    Pratica com o InterviewPro <span> antes da entrevista real.</span>
              
                </div>
                <div className={styles.txtp}>
                    simule uma entrevista de emprego real com IA e seja contratado mais rápido com feedback de especialista.

                </div>

            </section>

            <section className={styles.bt}>

               <Link to="/Inter"> <Bthome/></Link>
            </section>

            <section className={styles.tt}>
                <div>
                    MÓDULOS ESPECIAIS
                </div>
            </section>
          
            <section className={styles.expert}>
                <article>
                    <div><FaRobot /></div>
                    <div className={styles.energy}>IA com InterviewPro</div>
                    <div><IoIosArrowForward /></div>
                </article>
            </section>
            
            <section className={styles.expert}>
                <article>
                    <div><SlEnergy /></div>
                    <div className={styles.energy}>Feedback Instantâneo</div>
                    <div><IoIosArrowForward /></div>
                </article>
            </section>
        </main>


    )
}

export default Home