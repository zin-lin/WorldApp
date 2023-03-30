import React, {useEffect, useState} from "react";

export default function PopulationReportExample(){
    const [bt, setBt] = useState("0")
    const [db, setDb] = useState("0")
    const [ca, setCa] = useState("0")
    const [ar, setAr] = useState("0")
    const [lm, setLm] = useState("0")

    useEffect(() => {
        fetch('/api/cPopulation/64')
            .then(async (res) => setDb(await res.text()))
        fetch('/api/ctryPopulation/GBR')
            .then(async (res) => setBt(await res.text()))
        fetch('/api/contPopulation/Africa')
            .then(async (res) => setAr(await res.text()))
        fetch('/api/dPopulation/Limburg')
            .then(async (res) => setLm(await res.text()))
        fetch('/api/rPopulation/Caribbean')
            .then(async (res) => setCa(await res.text()))
    }, []);

    return (
        <div style={{position:"absolute", margin:'auto', borderRadius:23, width:'80%', height:'50%', background:'white',
            minHeight:500,
          boxShadow:'3px 3px 18px 8px rgba(0,0,0,0.1)', overflow:'auto', display:'flex', justifyContent:'center', alignItems: 'center'
        }}  className='none-scroll' >
            <div>
                <p className='large-black' style={{fontWeight:'bold'}}>Population Reports Samples</p>
                <p className='mid-gray'>Britain's population: <span className='highlight'>{bt}</span></p>
                <p className='mid-gray'>Dubai City's population: <span className='highlight'>{db}</span></p>
                <p className='mid-gray'>Caribbean's population: <span className='highlight'>{ca}</span></p>
                <p className='mid-gray'>Africa's population: <span className='highlight'>{ar}</span></p>
                <p className='mid-gray'>Limburg's population: <span className='highlight'>{lm}</span></p>
            </div>
        </div>
    )

}