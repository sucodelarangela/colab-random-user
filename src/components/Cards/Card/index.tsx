import { IUser } from 'interfaces/IUser';
import * as S from './styles';
import { BiMailSend } from 'react-icons/bi';
import { GrInstagram } from 'react-icons/gr';
import { generateLorem } from 'utils/loremIpsum';
import { generateRandomColor } from 'utils/randomColor';

export const Card = ({ gender, name, location, email, login, dob, picture }: IUser) => {

  return (
    <S.Card src={picture.large} randomColor={generateRandomColor()}>
      <div className='header'>
        <span></span>
      </div>
      <div className="content">
        <h2>{name.first} {name.last}</h2>
        <h3><GrInstagram size={18} />@{login.username}</h3>
        <div className='info'>
          <p><b>Gender:</b> {gender}</p>
          <p><b>Age:</b> {dob.age} years old</p>
        </div>
        <div className='bio'>
          <h3>Bio</h3>
          <p>{generateLorem(1)}</p>
          <p>{generateLorem(1)}</p>
        </div>
        <a
          className='contact'
          href={`mailto:${email}`}
        >
          <BiMailSend size={24} />
          {email}
        </a>
      </div>
      <div className='footer'>
        <p><b>Where to find:</b> {location.city}, {location.country}.</p>
      </div>
    </S.Card>
  );
};
