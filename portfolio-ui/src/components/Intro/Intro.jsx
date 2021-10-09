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
                            <div className={styles.titleItem}>Cloud Consultant</div>
                            <div className={styles.titleItem}>Big Data Engineer</div>
                            <div className={styles.titleItem}>Cloud & DevOps Trainer</div>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        Highly skilled AWS Cloud Engineer with exceptional development ability and extensive knowledge of
                        programming in Java/J2EE and Python. Solid foundation in data structures, algorithms and software design with strong analytical and debugging skills.
                        Good understanding of public cloud design considerations and limitations in the area of virtualization and global infrastructure,
                        distributed systems, load balancing, networking, massive data storage and security. Has strong ability to work with minimal
                        supervision.
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