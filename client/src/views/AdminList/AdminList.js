import React from 'react';
import './AdminList.css';
//import DataTable from './DataTable';
import ZingChart from 'zingchart-react';
import axios from "axios";

class AdminList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            usersCollection: [] 
        };
    }
    
    //function gets database information and stores it in the usersCollection array
    componentDidMount() {
        axios.get('/signup')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    
    render() {
      //array starts with zero users for each month
        let usersPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
        let emails = [];
        this.state.usersCollection.forEach((item) => {
            console.log(item.name);
            emails.push(item.email);
            //gets the month from the date and iincrements the corresponding month
            var index = new Date(item.created_at).getMonth();
            usersPerMonth[index]++;
        });

        //zingchart bar graph configuration 
        let graphConfig = {
            type: 'bar',
            title: {
                text: 'User Subscriptions per Month',
                fontSize: 24,
              },
              legend: {
                draggable: true,
              },
              scaleX: {
                // Set scale label
                label: { text: 'Month' },
                // Convert text on scale indices
                labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              },
              scaleY: {
                // Scale label with unicode character
                label: { text: 'Number of User Subscriptions' }
              },
              plot: {
                // Animation docs here:
                // https://www.zingchart.com/docs/tutorials/styling/animation#effect
                animation: {
                  effect: 'ANIMATION_EXPAND_BOTTOM',
                  method: 'ANIMATION_STRONG_EASE_OUT',
                  sequence: 'ANIMATION_BY_NODE',
                  speed: 275,
                }
              },
              series: [
                {
                  // plot 1 values, linear data
                  values: usersPerMonth,
                  text: 'Data'
                }
              ]
        };

    return (
        <div className="list">
            <h1>Newsletter List</h1>
            <p>List of Newsletter emails in an easy to view style</p>
            <div>
              {emails.map(function(e, id){
              return (<li key={id}>{e}</li>)
              })}
            </div>
            <div>
                <ZingChart data={graphConfig}></ZingChart>
            </div>
        </div>
        );
    }
}

export default AdminList;
