import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import { Card } from './Card';

export const Cards = () => {
  const users = useUserContext();

  return (
    <S.Cards>
      <Card />
      <Card />
    </S.Cards>
  );
};
