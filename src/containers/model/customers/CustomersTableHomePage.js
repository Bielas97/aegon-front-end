import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from '../../../store/actions';

class CustomersTableHomePage extends Component {

    state = {
        isMouseInside: false
    };

    componentDidMount() {
        this.props.onFetchCustomers()
    }

    render() {
        const sortedCustomers = this.props.customers.sort((c1, c2) => c2.modifedDate.localeCompare(c1.modifedDate));

        const tbody = sortedCustomers.slice(0, 5).map(el => {
            const fullName = el.firstName.concat(" ").concat(el.lastName);
            const index = el.index === true ? <span className="text-success fa fa-thumbs-o-up"/> :
                <span className="text-danger fa fa-thumbs-o-down"/>;
            return (
                <tbody key={el.id}>
                <tr>
                    <th scope="row">{el.id}</th>
                    <td>{fullName}</td>
                    <td>{el.kvAppearance}</td>
                    <td>{index}</td>
                    <td>{el.kvTable.name}</td>
                </tr>
                </tbody>
            )
        });

        return (
            <div className="container">
                <br/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number of KV</th>
                        <th scope="col">Index</th>
                        <th scope="col">KV table</th>
                    </tr>
                    </thead>
                    {tbody}
                </table>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customers.customers,
        loading: state.customers.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchCustomers: () => dispatch(actions.fetchCustomers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTableHomePage);
