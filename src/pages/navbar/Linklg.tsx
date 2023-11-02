
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Linklg = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  { { console.log(selectedPage) } }

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-sm font-semibold leading-6 text-red-400 hover:text-red-400" : ""}
      text-sm font-semibold leading-6 text-white hover:text-red-400
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Linklg;
