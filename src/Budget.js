import React, { Component } from 'react';
import './App.css';

class Budget extends Component {
  render(){
    return (
      <div className="Budget">
      Budget <br />
      Income Streams: <br />
      Paycheck: $2000 2/month <br>
      Alcohol, record & bag sales profit: $400/mo <br>


      Expenses:<br />
      Mortgage: $1300 1/month <br />
      Internet: $60 1/month<br />
      Phone: $120 1/month<br />


      </div>

    );
  }
}

export default Budget;
