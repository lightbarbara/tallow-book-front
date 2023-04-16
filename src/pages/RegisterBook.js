import { useContext, useEffect } from "react";
import FormRegisterBook from "../components/FormRegisterBook";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function RegisterBook() {

    const { token } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {

        if (token.length === 0) {
            navigate('/')
        }

    }, [])

    return (
        <OutsideContainer>
            <TopBar search={false} />
            <PagesContainer books={[]} selectedBooks={[]}>
                <SideMenu />
                <FormRegisterBook />
            </PagesContainer>
        </OutsideContainer>
    )
}