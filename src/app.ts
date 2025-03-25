import { TaskManager } from './models/TaskManager';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const manager = new TaskManager();

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
