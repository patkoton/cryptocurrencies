import React, { useEffect, useState } from 'react'
import { Crypto } from '../Types';

export type AppProps = {
    crypto: Crypto;
    updateOwned: (crypto: Crypto, amount: number) => void; // Update a state not return a value
};

const Cryptosummary = ({ crypto, updateOwned }: AppProps): JSX.Element => {
    const [amount, setAmount] = useState<number>(NaN)

    useEffect(() => {
        console.log(crypto.name, amount, crypto.current_price * (amount));
    })
    return (
        <div>
            <span>{crypto.name + ' $' + crypto.current_price}</span>
            <input  style={{ margin: 10 }} 
                    type="number" 
                    value={amount} 
                    onChange={(e) => {setAmount(parseFloat(e.target.value));
                        // Set a parent state by calling a function passed in as a prop
                        updateOwned(crypto, parseFloat(e.target.value))
                    }}
            />
            <p>{isNaN(amount) ? '$0.00' : '$' + (crypto.current_price * (amount)).toLocaleString(undefined, 
            { minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
    )
}

export default Cryptosummary
