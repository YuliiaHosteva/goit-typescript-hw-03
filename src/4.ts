class Key {
    private signature: number = Math.random();

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;
    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    constructor(protected key: Key) {};
    protected tenants: Person[] = [];
    abstract openDoor(key: Key): void;
    comeIn(tenants: Person): void {
        if (this.door) {
            this.tenants.push(tenants);
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};