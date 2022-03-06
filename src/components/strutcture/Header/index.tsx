import * as S from './styles';
import { Link } from 'react-router-dom';
import Logo from 'components/misc/Logo';

const Header = () => (
  <S.Wrapper>
    <header>
      <S.Message>
        <ul>
          <li>Quer comprar pelo whatsapp? Clica aqui</li>
          <li>Frete grátis acima de R$99</li>
        </ul>
      </S.Message>
      <S.Menu>
        <div>Menu</div>
        <Link to="/">
          <Logo />
        </Link>
        <div>Cart</div>
      </S.Menu>
    </header>
  </S.Wrapper>
);

export default Header;
