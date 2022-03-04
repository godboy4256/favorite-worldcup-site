import { Dispatch, SetStateAction } from "react";
import WcStartPresenter from "./wc_start.presenter";

interface IProps {
    setWcComponentState: Dispatch<SetStateAction<string>>
}

const WcStartContainer = ({ setWcComponentState }: IProps) => {
    const onProceeding = () => {
        setWcComponentState("proceeding")
    }
    return <WcStartPresenter onProceeding={onProceeding} />
};

export default WcStartContainer;