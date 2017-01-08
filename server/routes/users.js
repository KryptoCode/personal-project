import express from 'express';
import validateInput from '../shared/validations/signupValid';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import User from '../models/user';

let router = express.Router();



router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);

	if (isValid) {
		const { firstName, lastName, email, password } = req.body;
		const password_digest = bcrypt.hashSync(password, 10);

		User.forge({
			firstName, lastName, email, password_digest
		}, { hasTimestamps: true }).save()
		.then(user => res.json({ success: true }))
		.catch(err => res.status(500).json({ error: err}));

	} else {
		res.status(400).json(errors);
	}
});

// router.get('/:identifier', (req, res) => {
// 	User.query({
// 		select: ['email'],
// 		where: { email: req.params.identifier }
// 	}).fetch().then(user => {
// 		console.log(res.json({ user }));
// 	});
// });

export default router;