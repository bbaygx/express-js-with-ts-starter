import request from "supertest";
import server from "../server";

describe("GET /api/v1/users", () => {
  it("should return all products", async () => {
    const res = await request(server).get("/api/v1/users");
    expect(res.statusCode).toBe(404);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
