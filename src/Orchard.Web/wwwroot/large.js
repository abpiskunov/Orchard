var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Our basic **Todo** model has `content`, `order`, and `done` attributes.
var Todo0 = (function (_super) {
    __extends(Todo0, _super);
    function Todo0() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo0.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo0.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo0.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo0.prototype.clear = function () {
        this.destroy();
    };
    return Todo0;
}(BackboneLarge.Model));
var Todo1 = (function (_super) {
    __extends(Todo1, _super);
    function Todo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo1.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo1.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo1.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo1.prototype.clear = function () {
        this.destroy();
    };
    return Todo1;
}(BackboneLarge.Model));
var Todo2 = (function (_super) {
    __extends(Todo2, _super);
    function Todo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo2.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo2.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo2.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo2.prototype.clear = function () {
        this.destroy();
    };
    return Todo2;
}(BackboneLarge.Model));
var Todo3 = (function (_super) {
    __extends(Todo3, _super);
    function Todo3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo3.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo3.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo3.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo3.prototype.clear = function () {
        this.destroy();
    };
    return Todo3;
}(BackboneLarge.Model));
var Todo4 = (function (_super) {
    __extends(Todo4, _super);
    function Todo4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo4.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo4.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo4.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo4.prototype.clear = function () {
        this.destroy();
    };
    return Todo4;
}(BackboneLarge.Model));
var Todo5 = (function (_super) {
    __extends(Todo5, _super);
    function Todo5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo5.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo5.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo5.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo5.prototype.clear = function () {
        this.destroy();
    };
    return Todo5;
}(BackboneLarge.Model));
var Todo6 = (function (_super) {
    __extends(Todo6, _super);
    function Todo6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo6.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo6.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo6.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo6.prototype.clear = function () {
        this.destroy();
    };
    return Todo6;
}(BackboneLarge.Model));
var Todo7 = (function (_super) {
    __extends(Todo7, _super);
    function Todo7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo7.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo7.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo7.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo7.prototype.clear = function () {
        this.destroy();
    };
    return Todo7;
}(BackboneLarge.Model));
var Todo8 = (function (_super) {
    __extends(Todo8, _super);
    function Todo8() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo8.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo8.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo8.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo8.prototype.clear = function () {
        this.destroy();
    };
    return Todo8;
}(BackboneLarge.Model));
var Todo9 = (function (_super) {
    __extends(Todo9, _super);
    function Todo9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo9.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo9.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo9.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo9.prototype.clear = function () {
        this.destroy();
    };
    return Todo9;
}(BackboneLarge.Model));
var Todo10 = (function (_super) {
    __extends(Todo10, _super);
    function Todo10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo10.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo10.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo10.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo10.prototype.clear = function () {
        this.destroy();
    };
    return Todo10;
}(BackboneLarge.Model));
var Todo11 = (function (_super) {
    __extends(Todo11, _super);
    function Todo11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo11.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo11.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo11.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo11.prototype.clear = function () {
        this.destroy();
    };
    return Todo11;
}(BackboneLarge.Model));
var Todo12 = (function (_super) {
    __extends(Todo12, _super);
    function Todo12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo12.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo12.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo12.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo12.prototype.clear = function () {
        this.destroy();
    };
    return Todo12;
}(BackboneLarge.Model));
var Todo13 = (function (_super) {
    __extends(Todo13, _super);
    function Todo13() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo13.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo13.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo13.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo13.prototype.clear = function () {
        this.destroy();
    };
    return Todo13;
}(BackboneLarge.Model));
var Todo14 = (function (_super) {
    __extends(Todo14, _super);
    function Todo14() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo14.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo14.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo14.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo14.prototype.clear = function () {
        this.destroy();
    };
    return Todo14;
}(BackboneLarge.Model));
var Todo15 = (function (_super) {
    __extends(Todo15, _super);
    function Todo15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo15.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo15.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo15.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo15.prototype.clear = function () {
        this.destroy();
    };
    return Todo15;
}(BackboneLarge.Model));
var Todo16 = (function (_super) {
    __extends(Todo16, _super);
    function Todo16() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo16.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo16.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo16.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo16.prototype.clear = function () {
        this.destroy();
    };
    return Todo16;
}(BackboneLarge.Model));
var Todo17 = (function (_super) {
    __extends(Todo17, _super);
    function Todo17() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo17.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo17.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo17.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo17.prototype.clear = function () {
        this.destroy();
    };
    return Todo17;
}(BackboneLarge.Model));
var Todo18 = (function (_super) {
    __extends(Todo18, _super);
    function Todo18() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo18.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo18.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo18.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo18.prototype.clear = function () {
        this.destroy();
    };
    return Todo18;
}(BackboneLarge.Model));
var Todo19 = (function (_super) {
    __extends(Todo19, _super);
    function Todo19() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo19.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo19.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo19.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo19.prototype.clear = function () {
        this.destroy();
    };
    return Todo19;
}(BackboneLarge.Model));
var Todo20 = (function (_super) {
    __extends(Todo20, _super);
    function Todo20() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo20.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo20.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo20.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo20.prototype.clear = function () {
        this.destroy();
    };
    return Todo20;
}(BackboneLarge.Model));
var Todo21 = (function (_super) {
    __extends(Todo21, _super);
    function Todo21() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo21.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo21.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo21.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo21.prototype.clear = function () {
        this.destroy();
    };
    return Todo21;
}(BackboneLarge.Model));
var Todo22 = (function (_super) {
    __extends(Todo22, _super);
    function Todo22() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo22.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo22.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo22.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo22.prototype.clear = function () {
        this.destroy();
    };
    return Todo22;
}(BackboneLarge.Model));
var Todo23 = (function (_super) {
    __extends(Todo23, _super);
    function Todo23() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo23.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo23.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo23.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo23.prototype.clear = function () {
        this.destroy();
    };
    return Todo23;
}(BackboneLarge.Model));
var Todo24 = (function (_super) {
    __extends(Todo24, _super);
    function Todo24() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo24.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo24.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo24.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo24.prototype.clear = function () {
        this.destroy();
    };
    return Todo24;
}(BackboneLarge.Model));
var Todo25 = (function (_super) {
    __extends(Todo25, _super);
    function Todo25() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo25.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo25.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo25.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo25.prototype.clear = function () {
        this.destroy();
    };
    return Todo25;
}(BackboneLarge.Model));
var Todo26 = (function (_super) {
    __extends(Todo26, _super);
    function Todo26() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo26.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo26.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo26.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo26.prototype.clear = function () {
        this.destroy();
    };
    return Todo26;
}(BackboneLarge.Model));
var Todo27 = (function (_super) {
    __extends(Todo27, _super);
    function Todo27() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo27.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo27.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo27.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo27.prototype.clear = function () {
        this.destroy();
    };
    return Todo27;
}(BackboneLarge.Model));
var Todo28 = (function (_super) {
    __extends(Todo28, _super);
    function Todo28() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo28.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo28.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo28.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo28.prototype.clear = function () {
        this.destroy();
    };
    return Todo28;
}(BackboneLarge.Model));
var Todo29 = (function (_super) {
    __extends(Todo29, _super);
    function Todo29() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo29.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo29.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo29.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo29.prototype.clear = function () {
        this.destroy();
    };
    return Todo29;
}(BackboneLarge.Model));
var Todo30 = (function (_super) {
    __extends(Todo30, _super);
    function Todo30() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo30.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo30.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo30.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo30.prototype.clear = function () {
        this.destroy();
    };
    return Todo30;
}(BackboneLarge.Model));
var Todo31 = (function (_super) {
    __extends(Todo31, _super);
    function Todo31() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo31.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo31.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo31.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo31.prototype.clear = function () {
        this.destroy();
    };
    return Todo31;
}(BackboneLarge.Model));
var Todo32 = (function (_super) {
    __extends(Todo32, _super);
    function Todo32() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo32.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo32.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo32.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo32.prototype.clear = function () {
        this.destroy();
    };
    return Todo32;
}(BackboneLarge.Model));
var Todo33 = (function (_super) {
    __extends(Todo33, _super);
    function Todo33() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo33.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo33.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo33.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo33.prototype.clear = function () {
        this.destroy();
    };
    return Todo33;
}(BackboneLarge.Model));
var Todo34 = (function (_super) {
    __extends(Todo34, _super);
    function Todo34() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo34.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo34.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo34.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo34.prototype.clear = function () {
        this.destroy();
    };
    return Todo34;
}(BackboneLarge.Model));
var Todo35 = (function (_super) {
    __extends(Todo35, _super);
    function Todo35() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo35.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo35.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo35.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo35.prototype.clear = function () {
        this.destroy();
    };
    return Todo35;
}(BackboneLarge.Model));
var Todo36 = (function (_super) {
    __extends(Todo36, _super);
    function Todo36() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo36.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo36.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo36.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo36.prototype.clear = function () {
        this.destroy();
    };
    return Todo36;
}(BackboneLarge.Model));
var Todo37 = (function (_super) {
    __extends(Todo37, _super);
    function Todo37() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo37.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo37.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo37.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo37.prototype.clear = function () {
        this.destroy();
    };
    return Todo37;
}(BackboneLarge.Model));
var Todo38 = (function (_super) {
    __extends(Todo38, _super);
    function Todo38() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo38.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo38.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo38.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo38.prototype.clear = function () {
        this.destroy();
    };
    return Todo38;
}(BackboneLarge.Model));
var Todo39 = (function (_super) {
    __extends(Todo39, _super);
    function Todo39() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo39.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo39.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo39.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo39.prototype.clear = function () {
        this.destroy();
    };
    return Todo39;
}(BackboneLarge.Model));
var Todo40 = (function (_super) {
    __extends(Todo40, _super);
    function Todo40() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo40.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo40.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo40.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo40.prototype.clear = function () {
        this.destroy();
    };
    return Todo40;
}(BackboneLarge.Model));
var Todo41 = (function (_super) {
    __extends(Todo41, _super);
    function Todo41() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo41.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo41.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo41.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo41.prototype.clear = function () {
        this.destroy();
    };
    return Todo41;
}(BackboneLarge.Model));
var Todo42 = (function (_super) {
    __extends(Todo42, _super);
    function Todo42() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo42.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo42.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo42.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo42.prototype.clear = function () {
        this.destroy();
    };
    return Todo42;
}(BackboneLarge.Model));
var Todo43 = (function (_super) {
    __extends(Todo43, _super);
    function Todo43() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo43.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo43.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo43.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo43.prototype.clear = function () {
        this.destroy();
    };
    return Todo43;
}(BackboneLarge.Model));
var Todo44 = (function (_super) {
    __extends(Todo44, _super);
    function Todo44() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo44.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo44.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo44.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo44.prototype.clear = function () {
        this.destroy();
    };
    return Todo44;
}(BackboneLarge.Model));
var Todo45 = (function (_super) {
    __extends(Todo45, _super);
    function Todo45() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo45.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo45.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo45.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo45.prototype.clear = function () {
        this.destroy();
    };
    return Todo45;
}(BackboneLarge.Model));
var Todo46 = (function (_super) {
    __extends(Todo46, _super);
    function Todo46() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo46.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo46.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo46.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo46.prototype.clear = function () {
        this.destroy();
    };
    return Todo46;
}(BackboneLarge.Model));
var Todo47 = (function (_super) {
    __extends(Todo47, _super);
    function Todo47() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo47.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo47.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo47.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo47.prototype.clear = function () {
        this.destroy();
    };
    return Todo47;
}(BackboneLarge.Model));
var Todo48 = (function (_super) {
    __extends(Todo48, _super);
    function Todo48() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo48.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo48.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo48.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo48.prototype.clear = function () {
        this.destroy();
    };
    return Todo48;
}(BackboneLarge.Model));
var Todo49 = (function (_super) {
    __extends(Todo49, _super);
    function Todo49() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo49.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo49.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo49.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo49.prototype.clear = function () {
        this.destroy();
    };
    return Todo49;
}(BackboneLarge.Model));
var Todo50 = (function (_super) {
    __extends(Todo50, _super);
    function Todo50() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo50.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo50.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo50.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo50.prototype.clear = function () {
        this.destroy();
    };
    return Todo50;
}(BackboneLarge.Model));
var Todo51 = (function (_super) {
    __extends(Todo51, _super);
    function Todo51() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo51.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo51.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo51.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo51.prototype.clear = function () {
        this.destroy();
    };
    return Todo51;
}(BackboneLarge.Model));
var Todo52 = (function (_super) {
    __extends(Todo52, _super);
    function Todo52() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo52.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo52.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo52.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo52.prototype.clear = function () {
        this.destroy();
    };
    return Todo52;
}(BackboneLarge.Model));
var Todo53 = (function (_super) {
    __extends(Todo53, _super);
    function Todo53() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo53.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo53.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo53.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo53.prototype.clear = function () {
        this.destroy();
    };
    return Todo53;
}(BackboneLarge.Model));
var Todo54 = (function (_super) {
    __extends(Todo54, _super);
    function Todo54() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo54.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo54.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo54.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo54.prototype.clear = function () {
        this.destroy();
    };
    return Todo54;
}(BackboneLarge.Model));
var Todo55 = (function (_super) {
    __extends(Todo55, _super);
    function Todo55() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo55.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo55.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo55.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo55.prototype.clear = function () {
        this.destroy();
    };
    return Todo55;
}(BackboneLarge.Model));
var Todo56 = (function (_super) {
    __extends(Todo56, _super);
    function Todo56() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo56.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo56.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo56.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo56.prototype.clear = function () {
        this.destroy();
    };
    return Todo56;
}(BackboneLarge.Model));
var Todo57 = (function (_super) {
    __extends(Todo57, _super);
    function Todo57() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo57.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo57.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo57.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo57.prototype.clear = function () {
        this.destroy();
    };
    return Todo57;
}(BackboneLarge.Model));
var Todo58 = (function (_super) {
    __extends(Todo58, _super);
    function Todo58() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo58.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo58.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo58.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo58.prototype.clear = function () {
        this.destroy();
    };
    return Todo58;
}(BackboneLarge.Model));
var Todo59 = (function (_super) {
    __extends(Todo59, _super);
    function Todo59() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo59.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo59.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo59.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo59.prototype.clear = function () {
        this.destroy();
    };
    return Todo59;
}(BackboneLarge.Model));
var Todo60 = (function (_super) {
    __extends(Todo60, _super);
    function Todo60() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo60.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo60.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo60.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo60.prototype.clear = function () {
        this.destroy();
    };
    return Todo60;
}(BackboneLarge.Model));
var Todo61 = (function (_super) {
    __extends(Todo61, _super);
    function Todo61() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo61.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo61.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo61.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo61.prototype.clear = function () {
        this.destroy();
    };
    return Todo61;
}(BackboneLarge.Model));
var Todo62 = (function (_super) {
    __extends(Todo62, _super);
    function Todo62() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo62.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo62.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo62.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo62.prototype.clear = function () {
        this.destroy();
    };
    return Todo62;
}(BackboneLarge.Model));
var Todo63 = (function (_super) {
    __extends(Todo63, _super);
    function Todo63() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo63.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo63.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo63.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo63.prototype.clear = function () {
        this.destroy();
    };
    return Todo63;
}(BackboneLarge.Model));
var Todo64 = (function (_super) {
    __extends(Todo64, _super);
    function Todo64() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo64.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo64.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo64.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo64.prototype.clear = function () {
        this.destroy();
    };
    return Todo64;
}(BackboneLarge.Model));
var Todo65 = (function (_super) {
    __extends(Todo65, _super);
    function Todo65() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo65.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo65.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo65.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo65.prototype.clear = function () {
        this.destroy();
    };
    return Todo65;
}(BackboneLarge.Model));
var Todo66 = (function (_super) {
    __extends(Todo66, _super);
    function Todo66() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo66.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo66.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo66.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo66.prototype.clear = function () {
        this.destroy();
    };
    return Todo66;
}(BackboneLarge.Model));
var Todo67 = (function (_super) {
    __extends(Todo67, _super);
    function Todo67() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo67.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo67.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo67.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo67.prototype.clear = function () {
        this.destroy();
    };
    return Todo67;
}(BackboneLarge.Model));
var Todo68 = (function (_super) {
    __extends(Todo68, _super);
    function Todo68() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo68.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo68.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo68.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo68.prototype.clear = function () {
        this.destroy();
    };
    return Todo68;
}(BackboneLarge.Model));
var Todo69 = (function (_super) {
    __extends(Todo69, _super);
    function Todo69() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo69.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo69.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo69.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo69.prototype.clear = function () {
        this.destroy();
    };
    return Todo69;
}(BackboneLarge.Model));
var Todo70 = (function (_super) {
    __extends(Todo70, _super);
    function Todo70() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo70.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo70.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo70.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo70.prototype.clear = function () {
        this.destroy();
    };
    return Todo70;
}(BackboneLarge.Model));
var Todo71 = (function (_super) {
    __extends(Todo71, _super);
    function Todo71() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo71.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo71.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo71.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo71.prototype.clear = function () {
        this.destroy();
    };
    return Todo71;
}(BackboneLarge.Model));
var Todo72 = (function (_super) {
    __extends(Todo72, _super);
    function Todo72() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo72.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo72.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo72.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo72.prototype.clear = function () {
        this.destroy();
    };
    return Todo72;
}(BackboneLarge.Model));
var Todo73 = (function (_super) {
    __extends(Todo73, _super);
    function Todo73() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo73.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo73.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo73.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo73.prototype.clear = function () {
        this.destroy();
    };
    return Todo73;
}(BackboneLarge.Model));
var Todo74 = (function (_super) {
    __extends(Todo74, _super);
    function Todo74() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo74.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo74.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo74.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo74.prototype.clear = function () {
        this.destroy();
    };
    return Todo74;
}(BackboneLarge.Model));
var Todo75 = (function (_super) {
    __extends(Todo75, _super);
    function Todo75() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo75.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo75.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo75.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo75.prototype.clear = function () {
        this.destroy();
    };
    return Todo75;
}(BackboneLarge.Model));
var Todo76 = (function (_super) {
    __extends(Todo76, _super);
    function Todo76() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo76.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo76.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo76.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo76.prototype.clear = function () {
        this.destroy();
    };
    return Todo76;
}(BackboneLarge.Model));
var Todo77 = (function (_super) {
    __extends(Todo77, _super);
    function Todo77() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo77.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo77.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo77.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo77.prototype.clear = function () {
        this.destroy();
    };
    return Todo77;
}(BackboneLarge.Model));
var Todo78 = (function (_super) {
    __extends(Todo78, _super);
    function Todo78() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo78.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo78.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo78.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo78.prototype.clear = function () {
        this.destroy();
    };
    return Todo78;
}(BackboneLarge.Model));
var Todo79 = (function (_super) {
    __extends(Todo79, _super);
    function Todo79() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    Todo79.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    Todo79.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    Todo79.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    Todo79.prototype.clear = function () {
        this.destroy();
    };
    return Todo79;
}(BackboneLarge.Model));
//# sourceMappingURL=large.js.map