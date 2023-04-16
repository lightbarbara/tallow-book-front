import axios from "axios";
import OutsideContainer from "../components/OutsideContainer";
import PagesContainer from "../components/PagesContainer";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Payment() {

    const { token } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function buyBooks(e) {
        e.preventDefault()

        try {

            await axios.post(`${process.env.REACT_APP_BACK_END_URL}/finish-cart`, {}, config)

        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
        }
    }

    return (
        <OutsideContainer>
            <TopBar search={false} />
            <PagesContainer books={[]} selectedBooks={[]}>
                <SideMenu />
            </PagesContainer>
        </OutsideContainer>
    )
}