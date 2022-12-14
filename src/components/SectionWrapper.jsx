import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "../components/Button";

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div
      className={`min-h-screen ${styles.section}
      ${reverse ? styles.bgWhite : styles.bgPrimary}
      ${styles.bgWhite} ${banner}`}>
      <div className={`flex item-center
      ${reverse ? styles.boxReverseClass : styles.boxClass} 
      w-11/12 sm:w-full minmd:w-3/4`}>
      <div className={`${styles.descDiv} 
      ${reverse ? " fadeRightMini" : " fadeLeftMini"}
      ${reverse ? styles.textRight : styles.textLeft}
    `}>
    <h1 className={`
    ${reverse ? styles.blackText : styles.whiteText}
    ${styles.h1Text}`}>{title}</h1>
    <p className={`
    ${reverse ? styles.blackText : styles.whiteText}
    ${styles.descriptionText}`}>{description}</p>
    {showBtn && (
            <Button assetUrl={assets.expo} 
            link=" https://expo.dev/accounts/evgeniy_13/projects/Project/builds/954822b5-2f24-4f0f-8037-c9d6e6f7539f" />//вставила ссылку после сборки
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
        <img src={mockupImg} alt="mockup" className={`
        ${reverse ? " fadeLeftMini" : " fadeRightMini"}
       ${styles.sectionImg}`} />
        </div>
        {/*содержится макет */}
      </div>
    </div>
  );
};

export default SectionWrapper;

//banner появилась плавающая анимация волны и голубоватый фон
