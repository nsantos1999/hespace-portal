export interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return <p className="text-red-700 text-sm">{message}</p>;
}
