import React, { useState} from 'react';


const Pdv_Attack = () => {
    const [pdv, setPdv] = useState(100)
    const [pointsDegats, setPointsDegats] = useState(10)
    return (
        <div className='pdvAttack'>
            <h2 className='pdv'>Points de vies ❤️ : {pdv}</h2> 
            <h2 className='pointsDegats'>Points de dégats ⚔ : {pointsDegats}</h2>
        </div>
    );
};

export default Pdv_Attack;