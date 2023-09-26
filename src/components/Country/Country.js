import React from 'react'
import classes from "./Country.module.css"
const Country = ({ name, population, flag, region, capital, code, showInfo, darkmode }) => {

    const showAllDetails = () => {
        showInfo(code);
    }

    return (
        <div className={classes.state} onClick={showAllDetails}>
            <div className={classes.flag_wrapper}>
                <img src={flag} alt="Country flag" className={classes.flag} />
            </div>
            <div className={classes.info}>
                <h2 className={classes.country_name } style={{color : darkmode ? "black" : "fff"}}>{name}</h2>
                <p className={classes.content} style={{color : darkmode ? "black" : "fff"}}>Population : <span style={{color : darkmode ? "black" : "fff"}}>{population}</span></p>
                <p className={classes.content} style={{color : darkmode ? "black" : "fff"}}>Region : <span style={{color : darkmode ? "black" : "fff"}}>{region}</span></p>
                <p className={classes.content} style={{color : darkmode ? "black" : "fff"}}>Capital : <span style={{color : darkmode ? "black" : "fff"}}>{capital}</span></p>
            </div>
        </div>
    )
}

export default Country