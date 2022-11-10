import React from 'react'
import styles from '../styles/Global';
import assets from '../assets';
import Button from '../components/Button'


const SectionWrapper = ({title, description,showBtn,mockupImg, banner}) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>{/*чтобы передать реальные переменные */}
    <div className={`flex item-center ${styles.boxClass}`}>
    <div className={`${styles.descDiv}
    fadeLeftMini`}>
    <h1 className={`${styles.h1Text}`}>
    {title}</h1>
    <p className={`${styles.descriptionText}`}>{description}</p>
    {showBtn &&(
        <Button
        assetUrl={assets.expo}
        link="deployed nft marketplace rn"
        />
    )}
    </div>
    </div>
    
    
    
    
   {/*<img src={mockupImg} alt="mockup"/> */} 
    </div>
  )
}

export default SectionWrapper


//banner появилась плавающая анимация волны и голубоватый фон