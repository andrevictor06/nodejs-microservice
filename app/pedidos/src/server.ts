import express from "express";
//import { router } from "./infra/routes";

const app = express()

const PORT = process.env.PORT ?? 3002
app.use(express.json())
//app.use(router)
app.listen(PORT, ()=>{
    console.log( ` Server Pedido is running on PORT ${PORT}`);
})