```markdown
## Project Overview

This project, named "Home_Appliance", is a web service exposing a RESTful API designed to manage home appliance data. Its primary function is to provide Create, Read, Update, and Delete (CRUD) operations for appliance records.

## Tech Stack & Architecture

The project is built using **Python** with the **Flask** web framework. It utilizes **SQLite** for data persistence. The architecture follows a **RESTful API** pattern, providing endpoints for resource management. Project dependencies are declared in `requirements.txt`.

## Key Directories

*   `app/`: Contains the main Flask application source code.
    *   `app/models.py`: Defines the database models, including the `Appliance` model.
*   `requirements.txt`: Lists Python project dependencies.

## Conventions & Patterns

*   **API Design Principles**: Adheres to RESTful conventions for managing `/appliances` resources, implementing standard HTTP methods (GET, POST, PUT, DELETE) for CRUD operations.
*   **Data Persistence**: Utilizes SQLite as the database. Data models, such as the `Appliance` model (with `name` and `status` fields), are defined in `app/models.py`.
*   **Error Handling**: Basic error handling is in place, specifically for 404 Not Found responses.
*   **Logging**: Configured to output basic logs to the console for development and operational insights.
*   **Dependency Management**: Python package dependencies are explicitly listed and managed via `requirements.txt`.
```