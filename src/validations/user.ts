import { ValidationSchema, registerSchema } from 'class-validator'

const email = [
	{
		type: 'isEmail',
		constraints: [{}],
		message: 'Your email is invalid.'
	}
]

const password = [
	{
		type: 'minLength', // validation type. All validation types are listed in ValidationTypes class.
		constraints: [1],
		message: 'Your password must be between 1 and 8 characters.'
	},
	{
		type: 'maxLength',
		constraints: [8],
		message: 'Your password must be between 1 and 8 characters.'
	}
]

const createUserValidation: ValidationSchema = {
	// using interface here is not required, its just for type-safety
	name: 'createUserRegister', // this is required, and must be unique
	properties: {
		email,
		password
	}
}

const updateUserValidation: ValidationSchema = {
	// using interface here is not required, its just for type-safety
	name: 'updateUserRegister', // this is required, and must be unique
	properties: {
		password
	}
}

export const loginUserValidation: ValidationSchema = {
	name: 'loginUserRegister',
	properties: {
		email,
		password
	}
}

registerSchema(createUserValidation)
registerSchema(updateUserValidation)
registerSchema(loginUserValidation)
