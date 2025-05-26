import { Button } from '@/global/components/Button';
import { RHFTextInput } from '@/global/components/form/react-hook-form/RHFTextInput';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BiLeftArrow, BiLeftArrowAlt } from 'react-icons/bi';
import { AuthLoginDto } from '../../dtos/auth-login.dto';
import { useAuth } from '../../hooks/useAuth';
import { RHFFormProvider } from '@/global/providers/rhf-form-provider';
import { zodResolver } from '@hookform/resolvers/zod';
import { authLoginSchema } from '../../schemas/auth-login.schema';

interface LoginWithEmailFormProps {
  onCancel(): void;
  onSuccess(): void;
}

export function LoginWithEmailForm({ onCancel, onSuccess }: LoginWithEmailFormProps) {
  const form = useForm<AuthLoginDto>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(authLoginSchema),
  });

  const { login, isLoadingLogin } = useAuth();

  const handleLogin = async (authLogin: AuthLoginDto) => {
    await login(authLogin);
    onSuccess();
  };

  return (
    <section className="flex flex-col gap-4 relative">
      <div className="absolute left-0 w-9">
        <Button variant="outlined" onClick={onCancel}>
          <BiLeftArrowAlt />
        </Button>
      </div>

      <p className="text-center">Login com e-mail</p>
      <RHFFormProvider form={form} onSuccess={handleLogin}>
        <div className="flex flex-col gap-2">
          <RHFTextInput label="E-mail" name="email" type="email" required />
          <RHFTextInput label="Senha" name="password" type="password" required />
          <Button type="submit" isLoading={isLoadingLogin}>
            Logar
          </Button>
        </div>
      </RHFFormProvider>
    </section>
  );
}
