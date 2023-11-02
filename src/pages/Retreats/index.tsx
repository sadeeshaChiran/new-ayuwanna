
import { motion } from 'framer-motion';
import Item from './components/Item'
import { SelectedPage } from '../../shared/types';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };



const index = ({ setSelectedPage }: Props) => {

    

    return (
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Retreats)} id="retreats">
           
            < Item />
          

        </motion.div>
    )
}

export default index
