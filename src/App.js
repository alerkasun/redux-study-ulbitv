import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (customerName) => {
    const customer = {
      name: customerName,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{fontSize: "20px"}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button style={{marginRight: '10px', width: "120px"}} onClick={() => addCash(Number(prompt()))}>Поповтити рахунок</button>
        <button style={{marginRight: '10px', width: "120px"}} onClick={() => getCash(Number(prompt()))}>Зняти з рахунку</button>
        <button style={{marginRight: '10px', width: "120px"}} onClick={() => addCustomer(prompt())}>Додати кліента</button>
      </div>
      <div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
              <div key={customer.id} onClick={()=> removeCustomer(customer)} style={{fontSize: "2rem", border: "1px black solid", padding: "10px", marginTop: 5}}>{customer.name}</div>
            )}
          </div>
        :
        <div>Немає кліентів!!!</div>
        }
      </div>
    </div>
  );
}

export default App;
