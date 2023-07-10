import styles from '../styles/ChessTile.module.css'

export default function ChessTile(props) {


    return <div className={styles.chesstile}
                style={{
                    backgroundColor: props.black ? "#000" : "#fff"
                }}
    ></div>
}