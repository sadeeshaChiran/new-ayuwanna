import { motion } from 'framer-motion'
import './index.css'


const callouts = [
    {
        imageSrc: 'Gallary/232412010_1114879029003238_1474216336843595851_n.jpg',
    },
    {
        imageSrc: 'Gallary/271936086_112494964531915_6713011472750704197_n.jpg',
    },
    {
        imageSrc: 'Gallary/289639444_428289285614554_4044462471747428466_n.jpg',
    },
    {
        imageSrc: 'Gallary/333906931_182039044549834_6098131144553606849_n.jpg',
    },
    {
        imageSrc: 'Gallary/334444857_1837424806643930_218065146761511690_n.jpg',
    },
    {
        imageSrc: 'Gallary/350241807_276535904831253_2528188267603369298_n.jpg',
    },
]

const index = () => {
    return (
        <div className="gallary-background">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl py-10 mx-auto sm:py-20 lg:max-w-none lg:py-14">
                    
                    <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, y: -80 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-5xl font-bold text-center text-gray-900 m-10 ">
                        Gallary
                        </motion.h2>

                    <div className="gap-y-12 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 mt-20">
                        {callouts.map((callout) => (
                            <motion.div
                                className="relative group"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.9 }}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt=""
                                        className="object-cover object-center w-full h-full"
                                    />
                                </div>
                              
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
