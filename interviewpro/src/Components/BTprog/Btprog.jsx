import styles from "../BTprog/btprog.module.css"
function Btprog ({curso, area, data, nota, nivel}) {
    return (
        <section className={styles.btprog}>
            <article>
                <div>
                    <span> {curso} </span>
                    <h3> {area} </h3>
                    <span>{data} </span> <span> {nivel} </span> 
                </div>
                <div className={styles.pontuacao}>
                    <h3>{nota} </h3>
                </div>
            </article>
        </section>

    )
}
export default Btprog