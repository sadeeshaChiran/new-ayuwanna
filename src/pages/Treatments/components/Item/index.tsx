import './index.css'
import { motion } from 'framer-motion'


const Header = {
    topic: "Treatment",
    description: "A team of dedicated Ayurveda physiains and therapists to prevent, cure and rejuvenate for optimal health and wellbeing."
}



const posts = [
    {

        title: 'Panchakarma',


    },
    {

        title: 'Kati Vasti (Keeping medicated oil ​on the back for prolonged periods)​',



    },
    {

        title: 'Kashaya Paana (Oral Decoction)and other Ayurveda medicinal supplements',



    },
    {

        title: 'Nabhipurna (Keeping medicated oil on the navel for prolonged periods)',


    },
    {

        title: 'Abhyanga (Full body oil application)',


    },
    {

        title: 'Akshitarpana (Nourishing eye treatment)',


    },
    {

        title: 'Udvartana (Herbal powder massage)',


    },
    {

        title: 'Shirodhara (Pouring a stream of warm oil to third eye chakra)',


    },
    {

        title: 'Karna Purna (Nourishing eye treatment)',


    },
    {

        title: 'Shiro Vasti (Keeping medicated oils on the head for prolonged periods)',


    },
    {

        title: 'Avagaha (Herbal bath)',


    }, {

        title: 'Sweda (Herbal steam)',


    },

]

const index = () => {
    return (

        <div className="treatment-background py-14 sm:py-20">
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
                    className="mx-auto text-center treatment-top-background p-20">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 m pt-10 mx-auto mt-10 border-t border-gray-200 gap-x-24 gap-y-6 lg:gap-y-10 sm:mt-16 sm:pt-16   ">
                    {posts.map((post) => (
                        <motion.article
                            className="flex flex-col items-center justify-between p-10 border-2 shadow-2xl rounded-3xl border-rose-600 treatment-item-background"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.8 }}
                            variants={{
                                hidden: { opacity: 0, y: -70 },
                                visible: { opacity: 1, y: 0 },

                            }}
                        >
                            <div className="relative group">

                                <motion.h3
                                    className="mt-3 text-2xl font-semibold text-center text-gray-900 group-hover:text-gray-600"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.2 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 },

                                    }}>

                                    {post.title}

                                </motion.h3>


                            </div>

                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default index
