import './Tabs.sass'
import { useState } from 'react';

const Tabs = () => {

    const [ activeButton, setActiveButton ] = useState('button1')

    return (
        <div className='tabs'>
            <button className={`tabButtons ${activeButton === 'button1' ? 'active':'inactive'}`}
            onClick={() => setActiveButton('button1')}>
                Sobre o Livro
            </button>
            <button className={`tabButtons ${activeButton === 'button2' ? 'active':'inactive'}`}
            onClick={() => setActiveButton('button2') }>
                Sobre o autor
            </button>

        </div>
    )
}

export default Tabs