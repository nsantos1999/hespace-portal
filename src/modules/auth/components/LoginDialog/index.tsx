import { Modal } from '@/global/components/Modal';
import { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { CredentialResponse, useGoogleLogin } from '@react-oauth/google';
import { LoginWithEmailForm } from '../LoginWithEmailForm';
import { LoginForm } from '../LoginForm';
import { Button } from '@/global/components/Button';
import { GrApple, GrGoogle, GrMail } from 'react-icons/gr';

import './google-styles.css';

export interface LoginDialogRef {
  openDialog(): void;
}

export const LoginDialog = forwardRef((_, ref: Ref<LoginDialogRef>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);

  const { login, isLoading } = useLogin();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  useImperativeHandle(ref, () => ({
    openDialog() {
      handleOpenDialog();
    },
  }));

  const handleLogin = () => {
    login({
      email: 'joao@mail.com',
      password: '123456',
    });
  };

  // const handleSuccessGoogle = async (credentialResponse: CredentialResponse) => {
  //   try {
  //     console.log(credentialResponse);
  //   } catch (error) {
  //     console.error('Erro ao autenticar:', error);
  //   }
  // };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseDialog} size="xl">
      <Modal.Header>Entrar ou cadastrar-se</Modal.Header>
      <Modal.Body>
        {loginWithEmail ? (
          <LoginWithEmailForm
            onCancel={() => setLoginWithEmail(false)}
            onSuccess={handleCloseDialog}
          />
        ) : (
          <div className="flex flex-col  gap-2">
            <LoginForm />
            <div className="flex items-center">
              <hr className="flex-grow border-primary-light" />
              <span className="mx-4 text-gray-500">ou</span>
              <hr className="flex-grow border-primary-light" />
            </div>
            {/* <div className="w-full">
              <GoogleLogin
                onSuccess={handleSuccessGoogle}
                onError={() => {
                  console.log('error');
                }}
                // size="medium"
                // // width={}
                // width={'100%'}
                // shape="rectangular"
              />
            </div> */}

            <Button IconLeft={<GrGoogle />} variant="outlined" onClick={loginWithGoogle}>
              Continuar com Google
            </Button>
            <Button IconLeft={<GrApple />} variant="outlined">
              Continuar com Apple
            </Button>
            <Button
              IconLeft={<GrMail />}
              variant="outlined"
              onClick={() => setLoginWithEmail(true)}
            >
              Continuar com E-mail
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
});
