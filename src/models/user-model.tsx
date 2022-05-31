export class UserModel {
    isOk: boolean;

    constructor(
        public name: string,
        public lastName: string,
        public birthday: string,
        public gender: string,
        public email: string
    ) {
        this.isOk = false;
    }
}
