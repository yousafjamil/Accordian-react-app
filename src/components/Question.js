import React, { useState } from 'react'

function Question({ ans }) {
    const [toggle, setToggle] = useState(true);
    const { info, title } = ans;
    return (
        <div className='container'>
            <div className='jumbotron'>
                <div>
                    <div class="card">  <pre><button className='btn btn-info w-25' onClick={() => setToggle(!toggle)}>{toggle? "-":"+"}</button></pre>
                        <h4>{title} </h4>
                        <div class="card-body">
                            <p>{toggle && info}</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Question