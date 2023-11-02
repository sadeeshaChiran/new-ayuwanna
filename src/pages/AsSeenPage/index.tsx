import { motion } from "framer-motion"
import './index.css'
import { SelectedPage } from "../../shared/types"


const item = [
    {
        name: 'Daily Mirror',
        link: 'https://www.pressreader.com/sri-lanka/daily-mirror-sri-lanka/20220418/282827899691621'
    },
    {
        name: 'The Morning',
        link: 'https://www.themorning.lk/articles/115250'

    },
    {
        name: 'Brunch',
        link: 'https://brunch.lk/journey-to-healing-with-barberyn/'
    },
    {
        name: 'Derana',
        link: 'http://bizenglish.adaderana.lk/journey-to-healing-with-barberyn-rediscover-the-secrets-to-holistic-wellbeing-to-navigate-during-these-challenging-times/'

    },
    {
        name: 'Life Online',
        link: 'https://www.life.lk/article/health__wellness/AYURVEDA-FOR-THE-BODY--MIND---SOUL---AYUWANNA-BY-BARBERYN/240/20274'

    },

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const index = ({ setSelectedPage }: Props) => {

    
    return (
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Another)} className="AsSeenPage-background h-full " id='another'>

            <div className=" py-20">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, y: -80 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-5xl font-bold text-center text-gray-900  ">
                    As Seen In
                </motion.h2>

                <div className="mt-12">
                    {item.map((item) => (
                        <motion.div
                            className="relative group py-2 lg:px-60 px-10 sm:px-28"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                hidden: { opacity: 0, x: -80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >

                            <a href={item.link}><button className=" bg-gray-600 text-center text-slate-300 p-10 w-full grid rounded-full text-2xl font-bold hover:bg-gray-900 hover:text-white">  {item.name}
                            </button></a>


                        </motion.div>
                    ))}

                </div>









            </div>



        </motion.div>
    )
}

export default index
