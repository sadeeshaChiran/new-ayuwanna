import Carasal from './components/Carasal'
import AyurvedaSlide from './components/AyurvedaSlide'
import About from './components/About'
import IlluessesTreated from './components/IlluessesTreated'
import Faq from './components/Faq'
import { SelectedPage } from '../../shared/types'
import { motion } from 'framer-motion'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};



const index = ({ setSelectedPage }: Props) => {


    return (

        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)} id="home">
            < Carasal />
            <AyurvedaSlide />
            < About />
            <IlluessesTreated />
            <Faq />
        </motion.div>


    )
}

export default index
