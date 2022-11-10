import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';

const SectionWrapper = ({title, description,showBtn,mockupImg}) => {
  return (
    <div className={`min-h-screen ${styles.section}`}>{/*чтобы передать реальные переменные */}
    <h1>{title}</h1>
    <h1>{description}</h1>
    <img src={mockupImg} alt="mockup"/>
    </div>
  )
}

export default SectionWrapper
