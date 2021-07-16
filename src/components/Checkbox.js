import React, { useState } from 'react';

const Checkbox = ({id}) => {
    const [value, setValue] = useState(false)
    const chenge = () => setValue(!value)
    return (
        <input
            id={id} 
            className="form-check-input"
            type="checkbox"
            value={value}
            onChange={chenge}
        />
    )
}

export default Checkbox