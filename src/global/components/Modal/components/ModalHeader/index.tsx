interface ModalHeaderProps extends React.PropsWithChildren {}

export function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <div className="flex justify-center border-b p-5 py-3 border-primary-light">
      <div className="font-semibold">{children}</div>
    </div>
  );
}
