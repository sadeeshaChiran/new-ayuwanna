import './index.css'
import { motion } from 'framer-motion'


const Header = {
    topic: "RE​TREATS",
    description: "Ayurveda retreats away from the city to reconnect with your trueself by the sea with Authentic Ayurveda from Barberyn Resorts "
}



const posts = [
    {

        title: 'Corporate Retreats',

    },
    {

        title: 'Relax & Restore Retreat​',

    },
    {

        title: 'Beposke Retreats for individuals, couples and groups',

    },


]



const index = () => {

    const Image = "Retreats/334444857_1837424806643930_218065146761511690_n.jpg"

    return (

        <div className="retreat-background py-14 sm:py-20">
            <div className="px-6 mx-auto max-w-7xl lg:px-8 mt-2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.0 }}
                    variants={{
                        hidden: { opacity: 0, y: -40 },
                        visible: { opacity: 1, y: 0 },

                    }}
                    className="mx-auto text-center retreat-top-background p-20">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.0 }}
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },

                        }}
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{Header.topic}</motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1. }}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },

                        }}
                        className="mt-10 font-serif text-xl sm:text-2xl text-black">
                        {Header.description}
                    </motion.p>
                </motion.div>

                <div className=' grid grid-cols sm:grid-cols-2 border-t pt-10 border-gray-200 mt-10 sm:mt-16 sm:pt-16'>


                    <div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 2.0 }}
                            variants={{
                                hidden: { opacity: 0, y: -80 },
                                visible: { opacity: 1, y: 0 },

                            }}
                            className='grid  content-center h-full opacity-80'>
                            <img className='w-full h-full max-h-screen ' src={Image} alt="" />
                        </motion.div>
                    </div>


                    <div className="grid max-w-2xl grid-cols-1  mx-auto mt-7 sm:mt-0 sm:ms-16  gap-x-24 gap-y-6   lg:max-w-none ">



                        {posts.map((post) => (
                            <motion.article
                                className="flex flex-col items-center text-center justify-between max-w-xl p-5 border-2 shadow-2xl rounded-3xl border-rose-600 retreat-item-background"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8 }}
                                variants={{
                                    hidden: { opacity: 0, x: -70 },
                                    visible: { opacity: 1, x: 0 },

                                }}
                            >
                                <div className="relative group">



                                    <motion.h3
                                        className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-gray-600"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 1.2 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },

                                        }}>

                                        {post.title}

                                    </motion.h3>



                                </div>

                            </motion.article>
                        ))}
                    </div>




                </div>


            </div>
        </div>
    )
}

export default index
