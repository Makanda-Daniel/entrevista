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
                    <span>InterviewFlow</span>
                </div>
            </section>

            <section className={styles.texto}>
                <div className={styles.txtg}>
                    Pratice real InterviewFlow <span> before de real on</span>
              
                </div>
                <div className={styles.txtp}>
                    simule real job InterviewFlow with IA and get hired faster with expert feedback
                </div>

            </section>

            <section className={styles.bt}>

               <Link to="/Inter"> <Bthome/></Link>
            </section>

            <section className={styles.tt}>
                <div>
                    EXPERT MODULES
                </div>
            </section>
          
            <section className={styles.expert}>
                <article>
                    <div><FaRobot /></div>
                    <div className={styles.energy}>real IA InterviewFlow</div>
                    <div><IoIosArrowForward /></div>
                </article>
            </section>
            
            <section className={styles.expert}>
                <article>
                    <div><SlEnergy /></div>
                    <div className={styles.energy}>Instant feedback</div>
                    <div><IoIosArrowForward /></div>
                </article>
            </section>
        </main>


    )
}

export default Home