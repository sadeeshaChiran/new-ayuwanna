
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Linksm = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  { { console.log(selectedPage) } }

  return (
    <AnchorLink

      className={`${selectedPage === lowerCasePage ? "block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 bg-red-400 rounded-lg hover:bg-red-400" : ""}
      block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-red-400
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Linksm;
