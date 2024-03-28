import User from "./User.js";

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() { return this.#pages; }
    set pages(pages) { this.#pages = pages; }
    get groups() { return this.#groups; }
    set groups(groups) { this.#groups = groups; }
    get canMonetize() { return this.#canMonetize; }
    set canMonetize(canMonetize) { this.#canMonetize = canMonetize; }

    getInfo() {
        return `${super.getInfo()} You have ${this.#pages.length} pages, ${this.#groups.length} groups.`;
    }
}

export default Subscriber;