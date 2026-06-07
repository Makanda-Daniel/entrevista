import styles from "./bthome.module.css"
function Bthome () {
    return (
            <section>
                <div>
                    <button className={styles.start}>start simulation</button>
                </div>
                <div>
                    <button className={styles.expo}>Explore Components</button>
                </div>
            </section>

    )
}

export default Bthome