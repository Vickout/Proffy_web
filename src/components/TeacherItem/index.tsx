import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/59877525?s=460&u=d8d19588903f5aba525696106eec09054d1eeff3&v=4" alt="Victor Lourenço" />
                <div>
                    <strong>Victor Lourenço</strong>
                    <span>Artes</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br /><br />
                Temporibus, commodi adipisci quae maiores tenetur consequuntur, soluta dolore laudantium atque quam tempore
                placeat quaerat explicabo iusto omnis, exercitationem officia maxime quisquam.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsappp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}