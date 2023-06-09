import React, {useEffect, useState} from "react";
import PopulationReportExample from "./PopulationReportExample";

export default function Home(){

    /**
     * Construct state for maximum performance
     */
    const [count, setCount] = useState("Loading")
    const [butOpa, setOpa] = useState(0.0)
    const [hidden, setHidden] = useState('');
    /**
     * Connection to Spring Backend Server Docker
     * useEffect to maximum performance
     */
    useEffect(()=>{
        fetch('/api/wPopulation').then(async res => {
            setCount(await res.text());
            setOpa(1.0);
            setHidden('hidden');
        })
    })

    const showModal =() => {
        var x=  document.getElementById('xox');
        x!.style.opacity = '1.0';
        x!.style.height = 'calc( 100% - 50px )';
        x!.style.visibility = 'visible';
    }

    const hideModal =() => {
        var x=  document.getElementById('xox');
        x!.style.opacity = '0.0';
        x!.style.height = '0.0px';
        x!.style.visibility = 'hidden';
    }

    return(
        <div className='page'>
            <div style={{width:'100%', height:'100%',  justifyContent:'center', display:'flex'}}>
                <div style={{position:'absolute', visibility: 'hidden', width:'100%', height:'0%',
                    display:'flex', flex:1, alignItems:'center', justifyContent:'center', transition:'1s ease'
                }}
                     id='xox' onClick={hideModal}>
                    <PopulationReportExample />
                </div>
                <div style={{margin:'50px', marginTop:'100px', opacity:butOpa, transition:'1s ease'}}>
                    <p style={{fontSize:43, fontWeight:'bold', textShadow:'2px 2px 12px #555', color:'#de94d7'}}>WELCOME</p>
                    <p style={{textShadow:'2px 2px 12px #777', fontSize:'19px',color:'#bccde8', lineHeight:1.5}}>Do you know that there are
                        <br style={{marginBottom:10}}/>
                        <span className='BIG-TEXT' style={{fontWeight:'bold', textShadow:'none', background:'#eee', borderRadius:10, paddingRight:8,
                        paddingLeft:8, color:'#4f5656', margin:'17px', transition:'0.4s ease', alignItems:'center', display:'flex', justifyContent: 'center'
                        }}><span className="material-symbols-outlined" style={{marginRight: 8, color:'#777', transition:'0.4s ease' }}>
                        person
                        </span>
                            {count}
                        </span>
                        <br/>
                        of us on Planet EARTH?
                    </p>

                    <button className='orangex shOrange' style={{padding:10, opacity:butOpa, alignItems:'center'}}
                    onClick={showModal}
                    >
                        <div style={{display:'flex', alignItems:'center'}}>
                        Load More Population Reports
                        <span className="material-symbols-outlined" style={{marginLeft: 8}}>
                        summarize
                        </span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}