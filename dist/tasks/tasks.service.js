"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
let TasksService = class TasksService {
    constructor() {
        this.tasks = [
            {
                id: 123,
                title: 'Create a SPA',
                description: 'Use react angular or vue',
                isDone: false
            },
            {
                id: 124,
                title: 'Create a SPA',
                description: 'Use react angular or vue',
                isDone: false
            },
            {
                id: 125,
                title: 'Create a SPA',
                description: 'Use react angular or vue',
                isDone: false
            }
        ];
    }
    getTasks() {
        return this.tasks;
    }
    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map