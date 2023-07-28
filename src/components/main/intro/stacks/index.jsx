import Stack from "./stack"
import styles from "./Stacks.module.scss"
export default function Stacks(){
return (
    <div className={styles.skills}>
        <h4>Tech Stacks</h4>
        <ul>
            <Stack name="HTML5"/>
            <Stack name="CSS3"/>
            <Stack name="Javascript"/>
            <Stack name="React"/>
            <Stack name="SASS"/>
        </ul>
    </div>
)
}