import React, {useState, useEffect} from 'react'

function Counter()
{

    const [count, setCount] = useState(0) 

    useEffect(() => 
        {
            document.title = `Clicou aqui ${count} vezes `;
        }
    )

    return(
        <div>
            <p>Clicou aqui {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button> 
        </div>
    )
}

export default Counter;