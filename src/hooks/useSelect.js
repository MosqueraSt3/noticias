import React, { useState } from 'react'

const useSelect = (stateInicial, opts) => {

    // STATE
    const [ state, actualizarState ] = useState(stateInicial)
    const SelectNoticias = () => (
        <select 
            className="browser-default"
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opts.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )

    return [state, SelectNoticias]
}

export default useSelect