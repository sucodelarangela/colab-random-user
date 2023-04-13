import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import { Card } from './Card';
import { IUser } from 'interfaces/IUser';

export const Cards = () => {
  const users = useUserContext();

  return (
    <S.Cards>
      {users ? users.map((user: IUser) => (
        <Card key={user.login.username} {...user} />
      )) : ('')}
    </S.Cards>
  );
};
