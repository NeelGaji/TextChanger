import React from 'react'

export default function Alert(props) {
    const cap=(word)=>{
        const low=word.toLowerCase();
        return low.charAt(0).toUpperCase()+low.slice(1);
    }
    return (
    <div style={{height:"50px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{cap(props.alert.type)}</strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
