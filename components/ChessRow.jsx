import ChessTile from "./ChessTile";

import styles from '../styles/ChessRow.module.css'

export default function ChessRow(props) {

    const parity = props.parity

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ChessTile black={parity}/>
            <ChessTile black={!parity}/>
            <ChessTile black={parity}/>
            <ChessTile black={!parity}/>
            <ChessTile black={parity}/>
            <ChessTile black={!parity}/>
            <ChessTile black={parity}/>
            <ChessTile black={!parity}/>
        </div>
    )
}