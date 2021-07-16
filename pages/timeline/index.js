import Link from 'next/link'
import styles from '../../styles/Timeline.module.css'

export default function Timeline({userName}) {
    return (
     <>
         <h1 className={styles.title}>This is a timeline of {userName}</h1>
         <Link href='/'>Go home</Link>
     </>   
    )
}

// Executes on server side BEFORE render
// Only works in "page" components
Timeline.getInitialProps = () => {
    // return { userName: '@mishrole'}
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then( (response) => {
            console.log(response);
            // const {userName} = response
            // return {userName}
            return response
        });
}