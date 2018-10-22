import { Meteor } from 'meteor/meteor';

import { image, helpers } from 'faker';
import _ from 'lodash';

import { Employees } from "../imports/collection/Employees";

/* El servidor publica los nuevos resultados y el frontend (app react)
recibe estos cambios y los renderiza */
Meteor.startup(() => {
	const numberRecord = Employees.find({}).count();
	if (numberRecord < 2) {
		_.times(5000, () => {
			const {name, email, phone} = helpers.createCard();
			Employees.insert({
				name, email, phone,
				avatar: image.avatar()
			});
		});
	}
	Meteor.publish(
		'employees',
		(per_page) => Employees.find({}, {limit: per_page})
	);
});
