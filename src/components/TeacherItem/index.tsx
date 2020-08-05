import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/37718377?s=460&u=02d9a01ac8e84f7e6c460bd05e7572d6b1b5f348&v=4" alt="Juarez Goulart"/>
            <div>
                <strong>Juarez Goulart</strong>
                <span>Matemática</span>
            </div>
        </header>

        <p>
            Matemático que só sabe fazer conta de mais e menos.
            <br /><br />
            Só tem ensinarei se parar de abafar e respirar fundo pra entender que números não são nada mais que números.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 1000,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;