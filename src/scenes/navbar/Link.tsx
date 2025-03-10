import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return(
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}`} href={`${lowerCasePage}transition duration-500 hover:text-primary-300` } onClick = {()=> setSelectedPage(lowerCasePage)}>
           {page}
        </AnchorLink>
    )
}

export default Link 