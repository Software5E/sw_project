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
    
    componentDidMount() {
        axios.get('/signup')
            .then(res => {
                this.setState({ usersCollection: res.data });
                //console.log(res.data[1].created_at);
                //console.log(new Date(res.data[1].created_at).getMonth());

            })
            .catch(function (err) {
                console.log(err);
            })
    }
    
    render() {
        let usersPerMonth = [0,0,0,0,0,0,0,0,0,0,0,0];
        this.state.usersCollection.forEach((item) => {
            console.log(item.name);
            var index = new Date(item.created_at).getMonth();
            usersPerMonth[index]++;
        });
        console.log(usersPerMonth);

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
        <div className="root-container">
            <div className="head">
                <h1>Admin Console</h1>
                <p>View Newsletter and statistics</p>
            </div>
            <div className="row">
                <div className="left-collumn">
                    <div className="list">
                        <h5><b>Mailing List</b></h5>
                        <p>List of Newsletter emails in an easy to view style</p>
                        <ul>
                            <li>Email1@gmail.com</li>
                            <li>Email2@hotmail.com</li>
                            <li>Email3@aol.com</li>
                        </ul>
                    </div>
                </div>
                <div className ="right-collumn">
                    
                </div>
            </div>
            <div>
                <ZingChart data={graphConfig}></ZingChart>
            </div>
        </div>
        
    );
        // <div className="list">
        //     <h1>Newsletter List</h1>
        //     <p>List of Newsletter emails in an easy to view style</p>
        //     <ul>
        //         <li>Email1@gmail.com</li>
        //         <li>Email2@hotmail.com</li>
        //         <li>Email3@aol.com</li>
        //     </ul>
        //     <div>
        //         <ZingChart data={graphConfig}></ZingChart>
        //     </div>
        // </div>
        // );
    }
}

export default AdminList;
