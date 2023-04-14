import * as S from './styles';
import { ReactNode } from 'react';

interface ButtonProps {
  className: string;
  clickAction: () => void;
  children: ReactNode;
}

export const Button = ({ className, clickAction, children }: ButtonProps) => {
  return (
    <S.Button className={className} onClick={clickAction}>
      {children}
    </S.Button>
  );
};
