import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

interface RHFFormProviderProps<T extends FieldValues> extends React.PropsWithChildren {
  form: UseFormReturn<T, any, undefined>;
  onError?: SubmitErrorHandler<T> | undefined;
  onSuccess: SubmitHandler<T>;
}

export function RHFFormProvider<T extends FieldValues>({
  children,
  onError,
  onSuccess,
  form,
}: RHFFormProviderProps<T>) {
  return (
    <FormProvider {...form}>
      <form method="POST" action="" onSubmit={form.handleSubmit(onSuccess, onError)}>
        {children}
      </form>
    </FormProvider>
  );
}
