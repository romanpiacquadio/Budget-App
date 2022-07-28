import React from 'react';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"

import { generateDate } from '../helpers';

import IconExpenses from '../img/icono_gastos.svg'
import IconSavings from '../img/icono_ahorro.svg'
import IconHouse from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'

const IconsDictionary = {
    food : IconFood,
    healthcare : IconHealth,
    housing : IconHouse,
    leisure : IconLeisure,
    saving : IconSavings,
    subscriptions : IconSubscriptions
}


const Expense = ({expense, setEditExpense, deleteExpense}) => {
  const { name, amount, category, date, id } = expense
  
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
                onClick={() => deleteExpense(id)} 
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className='gasto sombra'>
                <div className="contenido-gasto">
                        <img
                        src={IconsDictionary[category]}
                        />
                    <div className="descripcion-gasto">
                        <p className='categoria'>{category}</p>
                        <p className='nombre-gasto'>{name}</p>
                        <p className='fecha-gasto'>Added: {''}
                            <span>{generateDate(date)}</span>
                        </p>
                    </div>
                </div>
                <p className='cantidad-gasto'>${amount}</p>

            </div>
        </SwipeableListItem>     
    </SwipeableList>
  )
}

export default Expense