import { useRef } from 'react';
import { ModalBody } from './components/ModalBody';
import { ModalHeader } from './components/ModalHeader';
import { useOutsideAction } from '@/global/hooks/useOutsideClickAction';
import { tv } from 'tailwind-variants';
import { SizeOptions } from '@/global/@types/sizes.types';

const dialogStyles = tv({
  base: 'relative max-w-full max-h-full outline bg-white rounded-lg outline-primary-light',
  variants: {
    size: {
      xs: 'w-64', // 16rem ou 256px
      sm: 'w-80', // 20rem ou 320px
      md: 'w-96', // 24rem ou 384px
      lg: 'w-full max-w-lg', // 28rem ou 448px
      xl: 'w-full max-w-xl', // 32rem ou 512px
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ModalProps extends React.PropsWithChildren {
  onClose(): void;
  isOpen: boolean;
  size?: SizeOptions;
  disableBackdrop?: boolean;
}

export function Modal({ children, onClose, disableBackdrop, size, isOpen }: ModalProps) {
  const modalRef = useRef(null);

  useOutsideAction(modalRef, () => {
    if (!disableBackdrop) {
      onClose();
    }
  });

  if (!isOpen) {
    return;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className={dialogStyles({ size })} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
