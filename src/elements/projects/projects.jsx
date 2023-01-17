import React from 'react'
import projectsInfo from '../info/projectsInfo'
import styles from './projects.module.css'

const Projects = () => {
    return (
        <div className={styles.container} id="projects">
            <h1 className={styles.heading}>PROJECTS</h1>
            <div className={styles.scrollDiv}>
                {projectsInfo.map((currentValue) =>
                    <div className={styles.card} data={currentValue.onhover}>
                        <div className={styles.imgDiv}>
                            <img src={currentValue.imgUrl} alt={currentValue.name}/>
                        </div>
                        <h2>{currentValue.name}</h2>
                        <p>{currentValue.text}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Projects