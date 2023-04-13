import FormRegisterBook from "../components/FormRegisterBook";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

export default function RegisterBook() {
    return (
        <OutsideContainer>
            <TopBar />
            <PagesContainer books={[]}>
                <SideMenu />
                <FormRegisterBook />
            </PagesContainer>
        </OutsideContainer>
    )
}