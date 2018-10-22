import React from 'react';

const employee = (props) => {
	const {name, email, phone, avatar} = props.employee;
	return (
		<div className="card thumbnail">
			<img className="card-img-top" src={avatar} alt={name}/>
			<div className="card-body">
				<h3 className="card-title">{name}</h3>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Email: {email}</li>
				<li className="list-group-item">Phone: {phone}</li>
			</ul>
		</div>);
};

export default employee;
