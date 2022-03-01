import { ReactNode } from "react";
import Footer from "../../src/component/layout/footer";
import Header from "../../src/component/layout/header";
import SideMenu from "../../src/component/layout/sidemenu";

interface ILayoutProps {
    children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
    return (
        <div>
            <Header />
            <div>
                <SideMenu />
                <div>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Layout;