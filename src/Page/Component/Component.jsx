import './Component.css'
import Counter from './Counter/counter.jsx'
import Timer from './Timer/Timer.jsx'
import Add from './add/add.jsx'
import Temperatures from './Temperatures/Temperatures.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

function Component() {

  return (
    <div className='main-container'>
      <h1 className='Top'>
        React Componants
      </h1>
      <div className="componants-container">

        <div className='componant1-container'>

          <Counter name={'More'} value={0} />
          <Timer name={'Much'} />

        </div>


        <div className='componant2-container'>

          <Add name={'Many'} aValue={0} bValue={0} />

        </div>
        
      </div>
      <Temperatures name={"Very much"} initCelsius={0} />
      <span className='footer'>นายนราวิชญ์ หาญสุวรรณชัย รหัสประจําตัว 66080017</span>

    </div>
  )
}

export default Component
