import React, {useState} from 'react'
import Message from './Message'

const NewBudget = ({ budget, setBudget, setValidBudget}) => {
    
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!budget || budget <= 0){
            setMessage('Invalid budget')    
            return
        }

        setMessage('')
        setValidBudget(true)
    }  

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form className='formulario' onSubmit={handleSubmit}>
            <div className='campo'>
                <label>Enter Budget</label>
                <input 
                    className='nuevo-presupuesto'
                    type="number" 
                    placeholder='Add your budget'
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}/>
            </div>    
            <input type="submit" value='Add' />

            {message && <Message type='error'>{message}</Message>}  
            {/* <Message type={type}> Invalid Budget </Message>
            <div className='error'> Invalid Budget </div>
            <div className='ok'> Invalid Budget </div>
            <Message> Budget is alright </Message> */}
        </form>
    </div>
  )
}

export default NewBudget