export class NotFoundError {
	type: string = 'NotFoundError';
	constructor(public message: string) {
	}
}