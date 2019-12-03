import React from 'react';
import './AdminList.css';
import ZingChart from 'zingchart-react';
import axios from "axios";

class AdminList extends React.Component {
    constructor() {
        super();
        this.state = {
            /*config: {
                type: 'bar',
                series: [{
                    values: [4,5,3,4,5,3,5,4,11]
                }]
            },*/
            users: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        console.log('function entered');
        this.getUsers();
    }

    getUsers = () => {
        axios.get('/')
        .then(res => {
            this.setState({ users: res.data });
            //console.log(res.data);
        })
        .catch(function (err) {
            console.log(err);
        })
        console.log('getUsers entered');
    }

    render() {
    const usersignup = this.state.users.filter(user => user.display)
    const numUsers = usersignup.length

    return (
        <div className="list">
            <h1>Newsletter List</h1>
            <p>List of Newsletter emails in an easy to view style</p>
            <ul>
                <li>Email1@gmail.com</li>
                <li>Email2@hotmail.com</li>
                <li>Email3@aol.com</li>
            </ul>
            <div>
        <p>Number of rows = {numUsers}</p>
        {
          usersignup.map((user, index) => {
            return <p key={index}>{ user.name }</p>
          })
        }
      </div>
            {/*}
            <div>
                <ZingChart data={this.state.users}/>
            </div>*/}
        </div>
        );
    }
}

export default AdminList;
