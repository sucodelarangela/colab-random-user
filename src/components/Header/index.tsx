import * as S from './styles';
import { useState } from 'react';

export const Header = () => {
  const [className, setClassName] = useState('');

  // Mudar estilo do header após scroll da página
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
      setClassName('rolling');
    } else {
      setClassName('');
    }
  });

  return (
    <S.Header className={className}>
      <div>
        <h1 tabIndex={0}>Colab Random User</h1>
      </div>
    </S.Header>
  );
};
