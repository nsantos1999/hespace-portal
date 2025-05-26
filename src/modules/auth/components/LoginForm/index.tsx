import { RHFTextInput } from '@/global/components/form/react-hook-form/RHFTextInput';
import { FormProvider, useForm } from 'react-hook-form';
import { LoginFormPrivacy } from './components/LoginFormPrivacyPolicy';
import { Button } from '@/global/components/Button';
import { RHFSelect } from '@/global/components/form/react-hook-form/RHFSelect';

export function LoginForm() {
  const form = useForm();

  return (
    <section className="flex flex-col gap-4">
      <p className="text-center">Bem-vindo ao Hespace</p>
      <FormProvider {...form}>
        <div className="flex flex-col gap-2">
          <RHFSelect
            label="País\Região"
            name="country"
            options={[
              {
                label: '(+55) Brasil',
                value: 'brasil',
              },
            ]}
          />
          <RHFTextInput label="Número de telefone" name="phone" />
        </div>
      </FormProvider>
      <LoginFormPrivacy />
      <Button>Continuar</Button>
    </section>
  );
}
