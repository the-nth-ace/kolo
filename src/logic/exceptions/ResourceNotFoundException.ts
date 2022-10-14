export class ResourceNotFoundException extends Error{
    constructor(msg: string) {
        super(msg);
    }
}