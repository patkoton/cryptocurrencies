import React from 'react'
import { Crypto } from '../Types';

export type AppProps = {
    crypto: Crypto;
};

const Cryptosummary = ({ crypto }: AppProps): JSX.Element => {
    return <p>{crypto.name + ' $' + crypto.current_price}</p>
}

export default Cryptosummary
