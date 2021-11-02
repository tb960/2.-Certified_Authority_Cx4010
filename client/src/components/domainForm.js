import React from 'react';
import { useState } from 'react';

const domainForm = () =>{
    const [domain, setDomain] = useState("");

    return(
        <div>
            <h1>The domain name is {domain}</h1>

            <input type='text' value={domain} onChange={e => setDomain(e.target.value)}></input>
            <button onClick={() => console.log(domain)}>Submit Domain for checking</button>
        </div>
    );
}

export default domainForm;