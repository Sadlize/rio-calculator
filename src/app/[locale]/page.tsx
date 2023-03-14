"use client"
// import styles from '../Page.module.css'
import styles from "../Page.module.css"
import {TParams} from "./layout";

const Home = ({params}: TParams) => {
  const { locale } = params;
  return (
      <main className={styles.main}>{locale}</main>
  )
}

export default Home
