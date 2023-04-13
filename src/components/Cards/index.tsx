import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import { Card } from './Card';
import { IUser } from 'interfaces/IUser';
import Masonry from 'react-masonry-css';

export const Cards = () => {
  const users = useUserContext();

  const breakpoints = {
    default: 3,
    // 1100: 2,
    // 700: 1
  };

  return (
    <S.Cards>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {users ? users.map((user: IUser) => (
          <Card key={user.login.username} {...user} />
        )) : ('')}
      </Masonry>
    </S.Cards>
  );
};
