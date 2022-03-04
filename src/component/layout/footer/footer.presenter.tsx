import Logo from "../../../common/component/logo";
import { FooterStyles } from "./footer.styles";

const FooterPresenter = () => {
    return (
        <FooterStyles>
            <div><Logo /></div>
            <p>© Copyright godboy47474@gmail.com</p>
        </FooterStyles>
    );
};

export default FooterPresenter;