"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fs = require("fs");
const server = (0, fastify_1.default)({});
server.get("/api/transactions", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    // This is where you would get the data from the database
    const transactions = JSON.parse(fs.readFileSync("./datastore/transactions.json", "utf8"));
    return transactions;
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield server.listen({ port: 3000 });
        const address = server.server.address();
        console.log("Server has been started:", address);
    }
    catch (err) {
        console.log("Error starting the server", err);
        process.exit(1);
    }
});
start();
