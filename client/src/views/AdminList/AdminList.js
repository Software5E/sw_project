import React from 'react';
import './AdminList.css';
import DataTable from './DataTable';
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
        axios.get('/')
            .then(res => {
                this.setState({ usersCollection: res.data });
                console.log('users added to array!');
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
    return (
        <div className="list">
            <h1>Newsletter List</h1>
            <p>List of Newsletter emails in an easy to view style</p>
            <ul>
                <li>Email1@gmail.com</li>
                <li>Email2@hotmail.com</li>
                <li>Email3@aol.com</li>
            </ul>
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
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
