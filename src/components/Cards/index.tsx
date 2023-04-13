import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import { Card } from './Card';
import { IUser } from 'interfaces/IUser';
import { Masonry } from '@mui/lab';

export const Cards = () => {
  const users = useUserContext();

  return (
    <S.Cards>
      <Masonry columns={3} spacing={4}>
        {users ? users.map((user: IUser) => (
          <Card key={user.login.username} {...user} />
        )) : ('')}
      </Masonry>
    </S.Cards>
  );
};
