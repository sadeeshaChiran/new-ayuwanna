import './style.css'
import { motion } from 'framer-motion'
const index = () => {
    return (
        <div className='h-screen'>


           

            <div className="grid content-center h-screen max-w-2xl mx-auto">

                <motion.div
                    className='grid place-content-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1.0 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >

                    <img className='h-64' src="Home/e1bd1923f83a5d810699a58b1553e086 (1).png" alt="" />

                </motion.div>


                <div className="text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 1.0 }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <h1 className="mt-2 mb-3 text-4xl font-bold tracking-tight text-white sm:mb-6 sm:mt-6 sm:text-6xl">
                            आयुर्वेद
                        </h1>
                        <span className="text-3xl font-semibold text-white sm:text-5xl">
                            Ayurveda: <br /> the science of life
                        </span>
                    </motion.div>







                </div>
            </div>
        </div>



    )
}

export default index
