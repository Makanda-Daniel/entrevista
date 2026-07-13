import styles from "../PaginaEstilos/pro.module.css"
import Btprog from "../BTprog/Btprog"
function Pro () {
    return(
        <main>
            <section className={styles.progtxt}>
                <div>
                    <h2>Painel De Progresso</h2>
                    <p>
                        visualize a sua evolução em cada área
                    </p>
                </div>
            </section>

            <section className={styles.progcard}>
                <article>
                    <div className={styles.cem}>100</div>
                    <div>75</div>
                    <div>50</div>
                    <div>25</div>
                    <div>0</div>
                    <div className={styles.baixo}>
                        <span>05/1</span>
                        <span>05/3</span>
                        <span>05/5</span>
                        <span>05/7</span>
                        <span>05/10</span>
                    </div>
                </article>
            </section>
            <section>
                <Btprog area="front end developer" curso="engenharia" data="21/07/2026" nivel="senior"nota="92%">
                </Btprog>

                <Btprog area="back end developer" curso="engenharia" data="21/07/2026" nivel="medio" nota="85%">
                </Btprog>

                <Btprog area="enfermagem" curso="saude" data="21/07/2026" nivel="junior" nota="68%">
                </Btprog>


                <Btprog area="cultura geral" curso="conhecimento" data="21/07/2026" nivel="junior" nota="72%" >
                </Btprog>
                
            </section>
        </main>
    )
}

export default Pro