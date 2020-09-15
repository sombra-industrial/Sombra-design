import React from 'react';
import sombraIndustrial from "../assets/anotherprojects/sombra-industrial.jpg"
import sombraEngineering from "../assets/anotherprojects/sombra-engineering.jpg"
import {NavLink} from 'react-router-dom';

const AnotherProjects = () => {
    return (
        <div className='mt-5 mb-5'>
            <h4 className='mb-3'>Возможно, Вас заинтересуют наши другие проекты:</h4>
            <a to="www.sombra-industrial.ru" className='pl-2'>
                <img
                    src={sombraIndustrial}
                    alt="Sombra-industrial"
                    height='150'
                />
            </a>
            <a to="/" className='pl-5'>
                <img
                    src={sombraEngineering}
                    alt="Sombra-engineering"
                    height='80'
                />
            </a>

        </div>
    )
}

export default AnotherProjects