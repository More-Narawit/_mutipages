
import'./Variable.css'



function Variable({type, name, value, setValue}) {


    return(
        <div className="variable-container">
            <h2 className='variable-title'>{name || "Counter"}</h2>
            <button className='btn btn-danger' onClick={() => setValue(value - 1)}>-</button>
            <span className='variable-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
            <button className='btn btn-success' onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}

export default Variable