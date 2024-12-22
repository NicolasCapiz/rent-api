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
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = require("@prisma/client/edge");
const prisma = new edge_1.PrismaClient();
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        // Inserta datos en la base de datos usando el cliente Prisma
        yield prisma.user.createMany({
            data: [
                {
                    accessToken: 'token1',
                    firstName: 'Usuario 1',
                    email: 'usuario1@example.com',
                },
                {
                    accessToken: 'token2',
                    firstName: 'Usuario 2',
                    email: 'usuario2@example.com',
                },
                // Puedes agregar más datos según sea necesario
            ],
        });
        // Cierra la conexión al finalizar
        yield prisma.$disconnect();
    });
}
// Llama a la función seed para insertar datos en la base de datos
seed().catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=users.js.map