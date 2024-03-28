class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() { return this.#id; }
    set id(id) { this.#id = id; }
    get name() { return this.#name; }
    set name(name) { this.#name = name; }
    get userName() { return this.#userName; }
    set userName(userName) { this.#userName = userName; }
    get email() { return this.#email; }
    set email(email) { this.#email = email; }

    getInfo() {
        return `Hello ${this.userName}! `;
    }
}

export default User;