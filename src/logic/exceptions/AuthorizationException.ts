export class AuthorizationException extends Error{
    constructor(msg: string) {
        super(msg);
    }
}