import React, { Component } from 'react';

import { Employees } from '../../../../imports/collection/Employees';
import Employee from '../Employee';
import { withTracker } from 'meteor/react-meteor-data';

const PER_PAGE = 20;

class EmployeeList extends Component {

	componentWillMount() {
		this.page = 1;
	}

	paginatorHandler = () => {
		this.page += 1;
		Meteor.subscribe('employees',this.page * PER_PAGE);
	}

	render() {
		const listEmployees = this.props.employees.map(emp => {
			return <Employee key={emp._id} employee={emp}/>
		});

		return (
			<div>
				<div className='employee-list animated fadeIn'>
					{listEmployees}
				</div>
				<button
					onClick={this.paginatorHandler}
					className='btn btn-primary'>Load More...
				</button>
			</div>
		);
	}
}

/*subscriendose al servidor para obtener los
ultimos elementos agregados por el backend */
export default withTracker(() => {
	Meteor.subscribe('employees', PER_PAGE);
	const employees = Employees.find({}).fetch();
	return {employees};
})(EmployeeList);
