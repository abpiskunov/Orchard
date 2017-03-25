declare module Backbone {
    export class Model {
        constructor(attr?, opts?);
        get(name: string): any;
        set(name: string, val: any): void;
        set(obj: any): void;
        save(attr?, opts?): void;
        destroy(): void;
        bind(ev: string, f: Function, ctx?: any): void;
        toJSON(): any;
    }
    export class Collection<T> {
        constructor(models?, opts?);
        bind(ev: string, f: Function, ctx?: any): void;
        length: number;
        create(attrs, opts?): any;
        each(f: (elem: T) => void): void;
        fetch(opts?: any): void;
        last(): T;
        last(n: number): T[];
        filter(f: (elem: T) => boolean): T[];
        without(...values: T[]): T[];
    }
}

// Our basic **Todo** model has `content`, `order`, and `done` attributes.
class TodoSmall extends Backbone.Model {

    // Default attributes for the todo.
defaults() {
return {
    content: "empty todo...",
    done: false
}
}

// Ensure that each todo created has `content`.
initialize() {
if (!this.get("content")) {
    this.set({ "content": this.defaults().content });
}
}

    // Toggle the `done` state of this todo item.
    toggle() {
        
        this.save({ done: !this.get("done") });
    }

    // Remove this Todo from *localStorage* and delete its view.
    clear() {
        this.destroy();
    }

}

class TodoSmall1 extends Backbone.Model {

    // Default attributes for the todo.
    defaults() {
        return {
            content: "empty todo...",
            done: false
        }
    }

    // Ensure that each todo created has `content`.
    initialize() {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    }

    // Toggle the `done` state of this todo item.
    toggle() {

        this.save({ done: !this.get("done") });
    }

    // Remove this Todo from *localStorage* and delete its view.
    clear() {
        this.destroy();
    }
}