const request = require("supertest");
const app = require("../src/app");

beforeEach(() => {
  app.resetTasks();
});

describe("Pruebas funcionales del Task Manager", () => {
  test("Debe crear una tarea correctamente", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "Estudiar DevOps",
        status: "pendiente",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Estudiar DevOps");
    expect(response.body.status).toBe("pendiente");
  });

  test("Debe listar las tareas", async () => {
    await request(app)
      .post("/tasks")
      .send({
        title: "Preparar defensa",
        status: "en progreso",
      });

    const response = await request(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });

  test("Debe actualizar una tarea", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({
        title: "Tarea inicial",
        status: "pendiente",
      });

    const response = await request(app)
      .put(`/tasks/${created.body.id}`)
      .send({
        title: "Tarea actualizada",
        status: "completado",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.title).toBe("Tarea actualizada");
    expect(response.body.status).toBe("completado");
  });

  test("Debe eliminar una tarea", async () => {
    const created = await request(app)
      .post("/tasks")
      .send({
        title: "Tarea para eliminar",
        status: "pendiente",
      });

    const response = await request(app).delete(`/tasks/${created.body.id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Tarea eliminada correctamente");
  });
});

describe("Pruebas negativas y de borde", () => {
  test("No debe crear tarea sin título", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "",
        status: "pendiente",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("El título es obligatorio");
  });

  test("No debe aceptar un estado inválido", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "Tarea con estado incorrecto",
        status: "cancelado",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Estado inválido");
  });

  test("No debe actualizar una tarea inexistente", async () => {
    const response = await request(app)
      .put("/tasks/999")
      .send({
        title: "No existe",
        status: "pendiente",
      });

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Tarea no encontrada");
  });

  test("No debe eliminar una tarea inexistente", async () => {
    const response = await request(app).delete("/tasks/999");

    expect(response.statusCode).toBe(404);
    expect(response.body.error).toBe("Tarea no encontrada");
  });
});