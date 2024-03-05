import './Accordion.css'
import data from '../Accordion/data'
import { useState } from 'react';

const Accordion = () => {

    const [selected, setSelected] = useState(null);

    const handleSelect = (getId) => {
        setSelected(getId === selected ? null : getId)
        // alert(`${getId} selected `)
    }

    return (
        <div className="base">
            {
                data.map(item => {
                    return (
                        <div key={item.id}>
                            <div key={item.id} className='icon' onClick={() => {handleSelect(item.id)}}>
                                <h3>{item.agent}</h3>
                                <span className='plus'>+</span>
                            </div>
                            <p className='line'></p>
                            {
                                selected === item.id ? <p className='ans'>{item.description}</p> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Accordion;