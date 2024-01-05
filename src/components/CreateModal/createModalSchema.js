import { z } from "zod";

export const createModalSchema = z.object({
    firstName: z.string().min(1,"O nome é obrigatório."),
    lastName: z.string().min(1,"O sobrenome é obrigatório."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    phone_number: z.string().min(1,"O contato é obrigatório.").regex(/^\d{10,11}$/, "O contato precisa ser um número de telefone válido com DDD"),
});