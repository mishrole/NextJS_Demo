import Link from 'next/link'
import styles from '../../styles/Timeline.module.css'

export default function Timeline() {
    return (
     <>
         <h1 className={styles.title}>This is a timeline</h1>
         <Link href='/'>Go home</Link>
{/* 
         <style jsx> {
             `
             h1 {
                 font-size: 36px;
                 color: red;
             }
             `
         } </style> */}
     </>   
    )
}