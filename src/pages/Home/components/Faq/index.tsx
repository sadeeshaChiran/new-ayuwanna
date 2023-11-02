import { motion } from 'framer-motion'


const Topic = "FAQ"

const Item = [
    {
        question: "Why do I need to consult a physician before a treatment?",
        amswer: "Our qualified Ayurveda physician's will prescribe a treatment plan after an in-depth consultation after carefully diagnosing your pulse, tongue, body, lifestyle and medical history. Ayurveda is not a one size fit all model therefore your treatment plans will be unique for your constitution."
    },
    {
        question: "Can I pick the treatments I like from your menu?",
        amswer: "Your treatment plan will be decided by the physician's after a consultation to best suit your unique requirements. For some of the treatments your physician will first prepare your body then do the treatment and a post treatment to bring you back to balance."
    },

    {
        question: "Does Ayurveda really work?",
        amswer: "Ayurveda is one of the oldest medical systems in the world with over 5,000 years of proven  track record. It's a holistic system where not just medicine but your lifestyle, diet and other factors are also considered.  Give Ayurveda a fair chance and let us know whether it really works."
    },

]

const index = () => {
    return (
        <div>
            <div className='h-auto bg-stone-200'>
                <div className='grid content-center h-full px-5 sm:px-6 lg:px-28'>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className='mt-8 mb-8 text-4xl font-bold tracking-tight text-black text-start sm:text-7xl lg:text-5xl sm:mb-10 lg:mb-12'>
                        {Topic}
                    </motion.h1>

                    {/* Question and answer */}
                    {Item.map((item) => (
                        <>

                            {/* Question */}
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.8 }}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                className='mb-3 font-serif text-xl font-extrabold text-justify text-black sm:text-3xl lg:text-3xl '>
                                {item.question}
                            </motion.p>
                            {/* ----------------- */}

                            {/* Answer */}
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 1.3 }}
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                                className='px-3 font-serif text-base font-thin text-justify text-black sm:text-xl lg:text-2xl '>
                                {item.amswer}
                            </motion.p>
                            {/* ------------------- */}
                            <br />
                            <br />
                        </>
                    ))}
                    {/* -------------------------------- */}
                    <div className='px-5 mb-4 sm:px-8 lg:px-8'>

                    </div>


                </div>


            </div>
        </div>
    )
}

export default index
