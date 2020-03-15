import React from 'react';

import logo from '.logo.png';

import './NSuperior.css';

class NSuperior extends React.Component{
    render(){
        return(
            <div className = "Começo">
                <img src = {logo} alt='logo' className ='Imagem'/>
                <div className = 'divBtn'>
                    <button className = 'btn'>Linha do Tempo</button>
                    <button className = 'btn'>Perfil</button>
                </div>
                <div className = "login"></div>
            </div>
        )
    }
}

export default NSuperior;