---
title: Access Control
category:
  - Note
tag:
  - Language
  - Java
footer: false
editLink: false
---

- Package
  - A collection of similar classes, interfaces, or other packages
  - `package`, `import`
  - Create a library and import it
    - Extract the package to `.jar` (Java ARchive) file in the project structure
    - Import the `.jar` file into the new project libraries in the project structure

- Scope

- Naming Convention
  - Reversed url

- Access control
  - At the top level: public or package-private (no explicit modifiers)

  - At the member level: public, private, protected, or package-private

  - A class declared with `public` is visible to all classes everywhere; A class with no modifier is visible only within its package

  - | Modifier    | Class | Package | Subclass outside the package | World |
    | ----------- | ----- | ------- | ---------------------------- | ----- |
    | `public`    | Y     | Y       | Y                            | Y     |
    | `protected` | Y     | Y       | Y                            | N     |
    | no modifier | Y     | Y       | N                            | N     |
    | `private`   | Y     | N       | N                            | N     |
