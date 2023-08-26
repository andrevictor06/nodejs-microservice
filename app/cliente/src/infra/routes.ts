import { Router } from "express";
import { CreateClienteController } from "../modules/create-cliente/create-cliente.controller";

const router = Router();


router.post("/customer", (request, response) => {
    new CreateClienteController().handle(request, response)
})

export {router}