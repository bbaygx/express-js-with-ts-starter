// test/user.test.ts

import request from "supertest";
import { server } from "./app.test"; // Import the server

describe("GET /api/v1/users", () => {
  it("should return all products", async () => {
    const res = await request(server).get("/api/v1/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0); //memastikan bahwa panjang (jumlah elemen) dari properti body yang diterima dari permintaan HTTP (res) lebih besar dari 0.
  });

  afterEach((done) => {
    // Close the server after each test
    server.close(done);
  });
});
