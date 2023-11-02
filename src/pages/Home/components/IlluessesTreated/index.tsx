
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import './style.css'

const Topic = "ILLNESSES TREATED"

const Paragraph = [
    { title: " Diabetes,High Blood pressure & Cholesterol ", moveLength: -5 },
    { title: " Asthma, Migraine, ​Sinusitis ", moveLength: 5 },
    { title: " Paralysis & Stroke ​recovery ", moveLength: -5 },
    { title: " Arthritis ", moveLength: 5 },
    { title: " Obesity ", moveLength: -5 },
    { title: " Joint Pain ", moveLength: 5 },
    { title: " Skin Conditions ", moveLength: -5 },
    { title: "Reproductive disorders, Sub-Fertility, PCOS, Fibroids, hormonal imbalance", moveLength: 5 },
    { title: "Dry and Strained ​ Eyes & Computer ​Vision Syndrome", moveLength: -5 },
    { title: "Constipation, IBS, Acid Refluy, Piles & Fistula", moveLength: 5 },
    { title: "Pediatric Illnesses", moveLength: -5 },
    { title: "Auto-immune ​diseases", moveLength: 5 },
    { title: "Stress, Anyiety & ​Insomnia", moveLength: -5 },
    { title: "Allergies", moveLength: 5 },
]


const index = () => {
    return (
        <div >
            <div className='h-auto background-color'>
                <div className='grid grid-cols-1 px-2'>

                    {/* Topic */}
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9 }}
                        variants={{
                            hidden: { opacity: 0, y: -80 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className='mt-10 mb-6 text-4xl font-bold tracking-tight text-center text-white sm:text-7xl lg:text-5xl sm:mb-20 lg:mb-6'>
                        {Topic}
                    </motion.h1>
                    {/* ----------------------------- */}



                    <motion.div
                        className='grid content-center mt-10 mb-10 text-xl font-bold tracking-tight text-center text-white sm:text-3xl lg:text-2xl place-content-center'
                    >


                        <br />
                        {/* Item */}
                        {Paragraph.map((item) => (
                            <>
                                <motion.div initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 1.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: item.moveLength },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    <FontAwesomeIcon icon={faLeaf} style={{ color: "#c6e5c2", }} />    
                                        &nbsp; {item.title} &nbsp;
                                    <FontAwesomeIcon icon={faLeaf} style={{ color: "#c6e5c2", }} />
                                </motion.div>
                                <br />
                            </>
                        ))}
                        {/* -------------------------------- */}

                    </motion.div>




                </div>
            </div>
        </div>
    )
}

export default index
