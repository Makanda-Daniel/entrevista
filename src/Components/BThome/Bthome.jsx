import styles from "./bthome.module.css"
function Bthome () {
    return (
            <section>
                <div>
                    <button className={styles.start}>Começar a simulação</button>
                </div>
                <div>
                    <button className={styles.expo}>Explore Componentes</button>
                </div>
            </section>

    )
}

export default Bthome