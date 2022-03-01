import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered } from '@fortawesome/free-solid-svg-icons'
import { LogoStyles } from './styles';

const Logo = () => {
    return <LogoStyles>
        <FontAwesomeIcon icon={faFlagCheckered} />
        <span>Favorite World Cup!</span>
    </LogoStyles>
};

export default Logo;