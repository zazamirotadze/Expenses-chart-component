import Rectangle from "./Rectangle";
import data from './data.json';
import { useState, useEffect } from "react";
//{ return {...element, height: heightIndex} }
function App() {
  const [data1, setData1] = useState(data)
  useEffect(() => {
    setData1( prevData => {
    const amountNumbers = prevData.map(element => element.amount)
    const maxAmountNumber = Math.max.apply(null, amountNumbers);

    const newData = prevData.map( element => {
      const heightIndex = element.amount / maxAmountNumber * 100
      return {...element, height: heightIndex, isHighest:element.amount===maxAmountNumber?true:false}  })
    return newData
    })
  }, []); 

  const renderChart = data1.map(element => 
    <Rectangle 
      key={element.day} 
      day={element.day} 
      amount={element.amount} 
      height={element.height} 
      isHighest={element.isHighest}
    />)
 
  return (
    <div className="App">
      <div className="component-div">
        <div className="header-div">
            <div className="header-div-balance-div">
              <h4>My balance</h4>
              <h3>$921.48</h3>
            </div>
            <div className="header-div-img-div">
              <img src="./images/logo.svg" />
            </div>
        </div>
        <div className="chart-div">
            <div className="chart-div-figures-div">
              <h3>Spending - Last 7 days</h3>
              <div className="chart-div-figures-div-rectangles-div">
                  {renderChart}
              </div>
            </div>
            <div className="chart-div-total-div">
                <div className="chart-div-total-div-price-div">
                  <p>Total this month</p>
                  <h2>$478.33</h2>
                </div>
                <div className="chart-div-total-div-percent-div">
                  <p>+2.4%</p>
                  <p>from last month</p>
                </div>
            </div>
        </div>
      </div>

  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Zaza Mirotadze</a>.
  </div>
    </div>
  );
}

export default App;
