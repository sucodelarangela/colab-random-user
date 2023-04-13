import * as S from './styles';
import { BiMailSend } from 'react-icons/bi';
import { GrInstagram } from 'react-icons/gr';
import { generateLorem } from 'utils/loremIpsum';
import { generateRandomColor } from 'utils/randomColor';

export const Card = (/*{ gender, name, location, email, login, dob, picture }: IUser*/) => {

  return (
    <S.Card src='https://github.com/sucodelarangela.png' randomColor={generateRandomColor()}>
      <div className='header'>
        <span></span>
      </div>
      <div className="content">
        <h2>Angela Caldas</h2>
        <h3><GrInstagram size={18} />@sucodelarangela</h3>
        <div className='info'>
          <p><b>Gênero:</b> Feminino</p>
          <p><b>Idade:</b> 32 anos</p>
        </div>
        <div className='bio'>
          <h3>Bio</h3>
          <p>{generateLorem(1)}</p>
          <p>{generateLorem(1)}</p>
        </div>
        <a
          className='contact'
          href="mailto:email@provedor.com.br"
        >
          <BiMailSend size={24} />
          email@provedor.com.br
        </a>
      </div>
      <div className='footer'>
        <p><b>Cidade:</b> São Luís - MA</p>
        <p><b>País:</b> Brasil</p>
      </div>
    </S.Card>
  );
};
