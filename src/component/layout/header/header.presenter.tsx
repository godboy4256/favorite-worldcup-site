import Logo from "../../../common/component/logo";
import {
    HeaderStyles,
    HeaderMenu
} from "./header.styles";


const HeaderPresenter = () => {
    return (
        <HeaderStyles>
            <h1><Logo /></h1>
            <HeaderMenu>
                <li>로그인</li>
                <li>회원가입</li>
            </HeaderMenu>
        </HeaderStyles>
    );
};

export default HeaderPresenter;