interface ModalBodyProps extends React.PropsWithChildren {}

export function ModalBody({ children }: ModalBodyProps) {
  return <div className="p-5">{children}</div>;
}
