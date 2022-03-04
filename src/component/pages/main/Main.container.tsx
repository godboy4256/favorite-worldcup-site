import { useRouter } from "next/router";
import MainPresenter from "./Main.presenter";

const MainContainer = () => {
    const router = useRouter()
    const goWcAdd = () => {
        router.push('/add')
    }
    return <MainPresenter goWcAdd={goWcAdd} />
};

export default MainContainer;