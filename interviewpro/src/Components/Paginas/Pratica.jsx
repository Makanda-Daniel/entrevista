import styles from "../PaginaEstilos/pratica.module.css"
import {useNavigate  } from "react-router-dom"
import { useState, useEffect } from "react"
import { MdOutlineTimeToLeave } from "react-icons/md"
import { FiUser } from "react-icons/fi";

function Pratica () {
  const sair = useNavigate()

  const [tempo, setTempo] = useState(1)

  useEffect(()=>{

    const intervalo = setInterval(() => {
      
        setTempo((valor) => valor + 1 )
        
    }, 2000);

    return () => clearInterval(intervalo)

  }, [] )


  
  


    
  





    return (
        <main>
            <section className={styles.top3}>
                <div>pergunta</div>
                <div> tempo: {tempo} </div>
                <div onClick={()=> sair("/Inter")}>sair</div>
            </section>

            <section className= {styles.pessoa} >
                <div>
                    <FiUser />
                    <p>makanda daniel - engineer</p>
                </div>
            </section>

            <section className={styles.sms}>
                <article>
                    <div>
                        <textarea name="" id=""></textarea>
                    </div>
                    <div>
                        <button>enviar resposta</button>
                    </div>
                </article>


            </section>
        </main>


    )
}

export default Pratica