
import { motion } from 'framer-motion';
import Item from './components/Item'
import { SelectedPage } from '../../shared/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const index = ({ setSelectedPage }: Props) => {


  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)} id='gallery'>

 
      <Item />

    </motion.div>
  )
}

export default index
