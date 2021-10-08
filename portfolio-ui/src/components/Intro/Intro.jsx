import React from "react";
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.leftWrapper}>
                    <h2 className={styles.leftIntro}>Hello, My Name is</h2>
                    <h1 className={styles.leftName}>Vivek Mishra</h1>
                    <div className={styles.leftTitle}>
                        <div className={styles.titleWrapper}>
                            <div className={styles.titleItem}>DevOps Engineer</div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                Right
            </div>

        </div>
    )
}



export default Intro;