declare module BackboneLarge {
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
class Todo0 extends BackboneLarge.Model {

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
class Todo1 extends BackboneLarge.Model {

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

class Todo2 extends BackboneLarge.Model {

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

class Todo3 extends BackboneLarge.Model {

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

class Todo4 extends BackboneLarge.Model {

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

class Todo5 extends BackboneLarge.Model {

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

class Todo6 extends BackboneLarge.Model {

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

class Todo7 extends BackboneLarge.Model {

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

class Todo8 extends BackboneLarge.Model {

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

class Todo9 extends BackboneLarge.Model {

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

class Todo10 extends BackboneLarge.Model {

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

class Todo11 extends BackboneLarge.Model {

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

class Todo12 extends BackboneLarge.Model {

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

class Todo13 extends BackboneLarge.Model {

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

class Todo14 extends BackboneLarge.Model {

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

class Todo15 extends BackboneLarge.Model {

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

class Todo16 extends BackboneLarge.Model {

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
class Todo17 extends BackboneLarge.Model {

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

class Todo18 extends BackboneLarge.Model {

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

class Todo19 extends BackboneLarge.Model {

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

class Todo20 extends BackboneLarge.Model {

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

class Todo21 extends BackboneLarge.Model {

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

class Todo22 extends BackboneLarge.Model {

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

class Todo23 extends BackboneLarge.Model {

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

class Todo24 extends BackboneLarge.Model {

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

class Todo25 extends BackboneLarge.Model {

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

class Todo26 extends BackboneLarge.Model {

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

class Todo27 extends BackboneLarge.Model {

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

class Todo28 extends BackboneLarge.Model {

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

class Todo29 extends BackboneLarge.Model {

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

class Todo30 extends BackboneLarge.Model {

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

class Todo31 extends BackboneLarge.Model {

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
class Todo32 extends BackboneLarge.Model {

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
class Todo33 extends BackboneLarge.Model {

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

class Todo34 extends BackboneLarge.Model {

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

class Todo35 extends BackboneLarge.Model {

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

class Todo36 extends BackboneLarge.Model {

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

class Todo37 extends BackboneLarge.Model {

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

class Todo38 extends BackboneLarge.Model {

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

class Todo39 extends BackboneLarge.Model {

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

class Todo40 extends BackboneLarge.Model {

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

class Todo41 extends BackboneLarge.Model {

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

class Todo42 extends BackboneLarge.Model {

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

class Todo43 extends BackboneLarge.Model {

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

class Todo44 extends BackboneLarge.Model {

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

class Todo45 extends BackboneLarge.Model {

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

class Todo46 extends BackboneLarge.Model {

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

class Todo47 extends BackboneLarge.Model {

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
class Todo48 extends BackboneLarge.Model {

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
class Todo49 extends BackboneLarge.Model {

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

class Todo50 extends BackboneLarge.Model {

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

class Todo51 extends BackboneLarge.Model {

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

class Todo52 extends BackboneLarge.Model {

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

class Todo53 extends BackboneLarge.Model {

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

class Todo54 extends BackboneLarge.Model {

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

class Todo55 extends BackboneLarge.Model {

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

class Todo56 extends BackboneLarge.Model {

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

class Todo57 extends BackboneLarge.Model {

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

class Todo58 extends BackboneLarge.Model {

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

class Todo59 extends BackboneLarge.Model {

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

class Todo60 extends BackboneLarge.Model {

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

class Todo61 extends BackboneLarge.Model {

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

class Todo62 extends BackboneLarge.Model {

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

class Todo63 extends BackboneLarge.Model {

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

class Todo64 extends BackboneLarge.Model {

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
class Todo65 extends BackboneLarge.Model {

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

class Todo66 extends BackboneLarge.Model {

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

class Todo67 extends BackboneLarge.Model {

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

class Todo68 extends BackboneLarge.Model {

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

class Todo69 extends BackboneLarge.Model {

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

class Todo70 extends BackboneLarge.Model {

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

class Todo71 extends BackboneLarge.Model {

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

class Todo72 extends BackboneLarge.Model {

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

class Todo73 extends BackboneLarge.Model {

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

class Todo74 extends BackboneLarge.Model {

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

class Todo75 extends BackboneLarge.Model {

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

class Todo76 extends BackboneLarge.Model {

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

class Todo77 extends BackboneLarge.Model {

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

class Todo78 extends BackboneLarge.Model {

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

class Todo79 extends BackboneLarge.Model {

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