"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./models/TaskManager");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const manager = new TaskManager_1.TaskManager();
function mainMenu() {
    console.log(`
--- Task Manager ---
1. Add Task
2. List Tasks
3. Complete Task
4. Exit
  `);
    rl.question('Choose an option: ', answer => {
        switch (answer) {
            case '1':
                rl.question('Task title: ', title => {
                    rl.question('Task description: ', description => {
                        manager.addTask(title, description);
                        mainMenu();
                    });
                });
                break;
            case '2':
                manager.listTasks();
                mainMenu();
                break;
            case '3':
                rl.question('Enter task ID to complete: ', id => {
                    manager.completeTask(parseInt(id));
                    mainMenu();
                });
                break;
            case '4':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid option.');
                mainMenu();
        }
    });
}
mainMenu();
