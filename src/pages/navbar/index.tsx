import { useState } from "react";
import { SelectedPage } from "../../shared/types";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Linklg from "./Linklg";
import Linksm from "./Linksm";



type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const navigation = [
  { name: 'Home', href: 'home', current: true },
  { name: 'Treatments', href: 'treatments', current: false },
  { name: 'Package', href: 'package', current: false },
  { name: 'Retreats', href: 'retreats', current: false },
  { name: 'Gallary', href: 'gallary', current: false },
  { name: '', href: 'another', current: false },


]


const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-orange-900 drop-shadow";



  const NavicationOnClick = () => {

    setMobileMenuOpen(false)

  }



  return (


    <div >
      <header className={`${navbarBackground} ${flexBetween} fixed top-0 left-0  z-30 w-full `}>
        <nav className="flex items-center justify-between m-6" aria-label="Global">


          <div className="flex lg:flex-1">
            <a href="#" className="">

              <img
                className="w-auto h-8 me-20"
                src="logo.png"
                alt=""
              />
            </a>
          </div>

          <div className="fixed lg:hidden right-6">
            <button
              type="button"
              className=" inline-flex items-center justify-center rounded-md  text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-8 h-8" aria-hidden="true" />
            </button>

          </div>


          <div className="hidden lg:flex lg:gap-x-12 text-white">

            {navigation.map((item) => {

              return (

                <div >
                  <Linklg

                    page={item.name}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                </div>


              );

            })}

          </div>

        </nav>


        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-1/2 px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-end">

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">


                  {navigation.map((item) => {

                    return (

                      <div  onClick={() => NavicationOnClick()}>
                        <Linksm

                          page={item.name}
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}

                        />
                      </div>
                    );

                  })}

                </div>

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

    </div>





  );
};

export default Navbar;
