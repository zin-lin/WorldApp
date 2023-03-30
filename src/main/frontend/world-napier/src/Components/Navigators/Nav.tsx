import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import {useAuthDispatch} from "../../redux/hook";
import {toHome, toEvent, toShop, toProfile, resetAllVs} from "../../redux/authState";

const navSty = {
    fontSize:16, margin:10
}

const napierColor = {
    color:"#FF5757"
}

export default function Nav () {
    const dispatch = useAuthDispatch();
    return (
        <nav>
            <div>
                <p style={{marginLeft:'20px', fontSize:23, fontWeight:'bold'}}>WorldNapier2013</p>
            </div>
            <div className='hider' style={{right:10, position:'absolute', display:'flex', height:'100%', alignItems:'center'}}>
                <Link onClick={()=> dispatch(toHome())} to='/'><p style={{fontSize:16, margin:12 }}>Home</p></Link>
                <Link onClick={()=> dispatch(toHome())} to='/'><p style={{fontSize:16, margin:12 }}>Countries</p></Link>
                <Link onClick={()=> dispatch(toHome())} to='/'><p style={{fontSize:16, margin:12 }}>Capitals</p></Link>
                <Link onClick={()=> dispatch(toHome())} to='/'><p style={{fontSize:16, margin:12 }}>Cities</p></Link>

            </div>
            <div className = "hider-reverse" style={{marginTop:'6px', right:0, position:'absolute' }}>
                <Link onClick={()=> dispatch(resetAllVs())} to='/'><p style={{fontSize:16, margin:12 }}><span className="material-symbols-outlined">
                    search
                    </span></p>
                </Link>
            </div>
        </nav>
    );
}