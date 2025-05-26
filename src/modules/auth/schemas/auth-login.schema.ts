import { z } from 'zod';

export const authLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email obrigatório' })
    .email({ message: 'Deve ser um email válido' }),
  password: z.string().min(1, { message: 'Senha obrigatória' }),
});
