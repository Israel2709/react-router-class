import styles from './style.module.css'

function PageTitle(props){
    return(
        <h1 className = { `${styles.heading} ${styles.class}` }>{props.title}</h1>
    )
}

export default PageTitle