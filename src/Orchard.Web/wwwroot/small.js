var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Our basic **Todo** model has `content`, `order`, and `done` attributes.
var TodoSmall = (function (_super) {
    __extends(TodoSmall, _super);
    function TodoSmall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    TodoSmall.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    TodoSmall.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    TodoSmall.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    TodoSmall.prototype.clear = function () {
        this.destroy();
    };
    return TodoSmall;
}(Backbone.Model));
var TodoSmall1 = (function (_super) {
    __extends(TodoSmall1, _super);
    function TodoSmall1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Default attributes for the todo.
    TodoSmall1.prototype.defaults = function () {
        return {
            content: "empty todo...",
            done: false
        };
    };
    // Ensure that each todo created has `content`.
    TodoSmall1.prototype.initialize = function () {
        if (!this.get("content")) {
            this.set({ "content": this.defaults().content });
        }
    };
    // Toggle the `done` state of this todo item.
    TodoSmall1.prototype.toggle = function () {
        this.save({ done: !this.get("done") });
    };
    // Remove this Todo from *localStorage* and delete its view.
    TodoSmall1.prototype.clear = function () {
        this.destroy();
    };
    return TodoSmall1;
}(Backbone.Model));
//# sourceMappingURL=small.js.map