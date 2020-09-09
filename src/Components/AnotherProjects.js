import React from 'react';
import sombraIndustrial from "../assets/anotherprojects/sombra-industrial.png"
import sombraEngineering from "../assets/anotherprojects/sombra-engineering.jpg"

const AnotherProjects = () => {
    return (
        <div className='mt-5 mb-5'>
            <h4 className='mb-3'>Возможно, Вас заинтересуют наши другие проекты:</h4>
            <a href="https:sombra-industrial.ru" className='pl-2'><img src={sombraIndustrial} alt="Sombra-industrial"/></a>
            <a href="/" className='pl-5'><img src={sombraEngineering} alt="Sombra-engineering"/></a>

        </div>
    )
}

export default AnotherProjects