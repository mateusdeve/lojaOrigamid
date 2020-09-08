import React from 'react'
import './styles.css'
import foto from '../../assets/img/contato.png'
import Head from '../Head'

const Contato = () => {
    return (
        <section className="contato animeLeft">
        <Head  title="Contato" description="Entre em contato" />
            <img src={foto} alt=""/>
            <div>
                <h1>Entre em contato.</h1>
                <ul className="dados">
                    <li>
                        mateus.dev.ti@gmail.com
                    </li>
                    <li>
                        99999999
                    </li>
                    <li>
                        Rua ali perto
                    </li>
                </ul> 
            </div>
        </section>
    )
}

export default Contato
