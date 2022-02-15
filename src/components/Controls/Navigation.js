import Configuration from "../calibration/Configuration"
import Options from "../calibration/Options"
import Graduation from "../Graduation/Graduation"

import styles from '../Controls/Navigation.module.css';

function Navigation(props){


    
    return(
        <div>

            
            <ul className={styles.ul}>
                <li className={styles.li}><Configuration/></li>
                <li className={styles.li}><Graduation/></li>
                <li className={styles.li}><Options/></li>
            </ul>
        </div>
    )
}

export default Navigation