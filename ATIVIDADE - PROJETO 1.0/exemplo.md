# Exemplo de Aplicação: To-Do List em MVC

## 1. Descrição do Projeto
A aplicação **To-Do List** permitirá que os usuários **adicionem, visualizem e removam tarefas**. O projeto será estruturado seguindo o padrão **Model-View-Controller (MVC)**.

---

## 2. Organização dos Componentes do Projeto
O projeto será organizado da seguinte forma:

```
/todo-list-mvc
│── src/
│   ├── model/
│   │   ├── Task.java
│   │   ├── TaskDAO.java
│   ├── view/
│   │   ├── TaskView.java
│   ├── controller/
│   │   ├── TaskController.java
│   ├── Main.java
│── README.md
│── pom.xml (caso use Maven)
```

### **Descrição dos Componentes:**
- **Model (`model/`)**  
  - `Task.java`: Classe representando a tarefa.  
  - `TaskDAO.java`: Classe para persistência das tarefas (simulação de um banco de dados).  

- **View (`view/`)**  
  - `TaskView.java`: Responsável por exibir as tarefas ao usuário e receber entradas.

- **Controller (`controller/`)**  
  - `TaskController.java`: Gerencia as interações entre o modelo e a visão.

- **Main (`Main.java`)**  
  - Classe principal que inicia a aplicação.

---

## 3. Implementação de uma Funcionalidade
A funcionalidade escolhida é **adicionar uma tarefa**.  

### **Model - `Task.java`**
```java
package model;

public class Task {
    private int id;
    private String description;

    public Task(int id, String description) {
        this.id = id;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return id + " - " + description;
    }
}
```

---

### **Model - `TaskDAO.java` (Simulação de Banco de Dados)**
```java
package model;

import java.util.ArrayList;
import java.util.List;

public class TaskDAO {
    private List<Task> tasks;
    private int nextId;

    public TaskDAO() {
        tasks = new ArrayList<>();
        nextId = 1;
    }

    public void addTask(String description) {
        Task task = new Task(nextId++, description);
        tasks.add(task);
    }

    public List<Task> getTasks() {
        return tasks;
    }
}
```

---

### **View - `TaskView.java`**
```java
package view;

import java.util.List;
import model.Task;

public class TaskView {
    public void displayTasks(List<Task> tasks) {
        if (tasks.isEmpty()) {
            System.out.println("Nenhuma tarefa disponível.");
        } else {
            System.out.println("Lista de Tarefas:");
            for (Task task : tasks) {
                System.out.println(task);
            }
        }
    }

    public void showMessage(String message) {
        System.out.println(message);
    }
}
```

---

### **Controller - `TaskController.java`**
```java
package controller;

import model.TaskDAO;
import view.TaskView;
import java.util.Scanner;

public class TaskController {
    private TaskDAO taskDAO;
    private TaskView taskView;
    private Scanner scanner;

    public TaskController() {
        taskDAO = new TaskDAO();
        taskView = new TaskView();
        scanner = new Scanner(System.in);
    }

    public void addTask() {
        System.out.print("Digite a descrição da tarefa: ");
        String description = scanner.nextLine();
        taskDAO.addTask(description);
        taskView.showMessage("Tarefa adicionada com sucesso!");
    }

    public void showTasks() {
        taskView.displayTasks(taskDAO.getTasks());
    }
}
```

---

### **Main - `Main.java`**
```java
package main;

import controller.TaskController;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        TaskController controller = new TaskController();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n1 - Adicionar Tarefa");
            System.out.println("2 - Listar Tarefas");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            int option = scanner.nextInt();
            scanner.nextLine(); // Consumir nova linha

            switch (option) {
                case 1:
                    controller.addTask();
                    break;
                case 2:
                    controller.showTasks();
                    break;
                case 0:
                    System.out.println("Encerrando o programa.");
                    scanner.close();
                    return;
                default:
                    System.out.println("Opção inválida.");
            }
        }
    }
}
```

---

## 4. Como Funciona?
- O **usuário interage** com o menu no terminal.
- O **controller recebe a entrada**, repassa para o **modelo (TaskDAO)** e atualiza a **visão (TaskView)**.
- As tarefas são **armazenadas temporariamente em uma lista**.

Esse código implementa um **sistema de TODO-LIST implementando a funcionalidade de adição**. A estrutura de dados para armazenamento é um array.
