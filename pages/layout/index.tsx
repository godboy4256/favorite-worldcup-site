import { ReactNode } from "react";
import FooterContainer from "../../src/component/layout/footer/footer.container";
import HeaderContainer from "../../src/component/layout/header/header.container";
import SideMenuContainer from "../../src/component/layout/sidemenu/sidemenu.container";
import styled from "@emotion/styled"

interface ILayoutProps {
    children: ReactNode;
}

const MainLayout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const MainContents = styled.div`
    width: 100%;
`

const Layout = (props: ILayoutProps) => {
    return (
        <div>
            <HeaderContainer />
            <MainLayout>
                <SideMenuContainer />
                <MainContents>
                    {props.children}
                </MainContents>
            </MainLayout>
            <FooterContainer />
        </div >
    );
};

export default Layout;