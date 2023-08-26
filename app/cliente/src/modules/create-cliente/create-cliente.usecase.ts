import { prismaClient } from "../../infra/database/prismaCliente"

type CreateClientRequest = {
    name: string
    password: string
    email: string
    phone: string
}

export class CreateClientUseCase{
    constructor(){}
    async execute(data: CreateClientRequest){
        const customer = await prismaClient.cliente.findFirst({
            where:{
                email: data.email
            }
        })

        if( customer ) throw new Error("Já existe")
        const customerCreated = await prismaClient.cliente.create({
            data: {
                ...data
            }
        })
        return customerCreated
    }
}