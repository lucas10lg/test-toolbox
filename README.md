# Cypress Login & API Testing Project

## Instrucciones para ejecutar los tests

### Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar los tests de Cypress en modo UI
```bash
npx cypress open
```

### Ejecutar los tests de Cypress en modo headless
```bash
npx cypress run
```

## API Testing
Este proyecto también incluye pruebas de API para validar los siguientes endpoints alojados en `https://echo-serv.tbxnet.com/explorer/#/QA/get_qa_test1`:

- **GET /qa/test1**: Valida que la respuesta tenga código 200, contenga `ok: true`, un campo `date` de tipo string, los headers correctos y un tiempo de respuesta menor a 1 segundo.
- **GET /qa/test2**: Valida que la respuesta tenga código 200, contenga `ok: true`, un campo `date` de tipo string, los headers correctos y un tiempo de respuesta menor a 1 segundo.
- **GET /qa/echo**: Pruebas con el parámetro `text`:
  - Caso feliz: Valida que el endpoint devuelve el texto enviado correctamente.
  - Caso con `text` vacío: Valida que devuelve un error cuando `text` está vacío.

Puedes ejecutar solo las pruebas de API con:
```bash
npx cypress run --spec cypress/e2e/api_spec.js
