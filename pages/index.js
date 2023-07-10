import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ChessTile from '@/components/ChessTile'
import ChessRow from '@/components/ChessRow'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.main}>
        <ChessRow parity/>
        <ChessRow />
        <ChessRow parity/>
        <ChessRow />
        <ChessRow parity/>
        <ChessRow />
        <ChessRow parity/>
        <ChessRow />
    </div>
  )
}
