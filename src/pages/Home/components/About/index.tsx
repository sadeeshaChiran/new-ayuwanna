import { motion } from 'framer-motion'
import './style.css'

const Topic = "ABOUT"

const Image = "Home/b3416a2abf4796122c35d2eaefa6a6cd (1).jpg"

const Paragraph = [
  { about: "“Ayuwanna” refers to the compassionate blessing for life, is Barberyn's Ayurveda Medical Centre founded in 16th December 2019 to provide healing treatments to the discerning public in Colombo and surrounds the Authentic Ayurveda treatment for which Barberyn is nationally and internationally recognized. Behind the Barberyn Brand is a wealth of experience, having pioneered the resort concept of Ayurveda and achieving a perfect balance between Hospitality and Ayurveda. It brings to “Ayuwanna” its passion, experience and the knowledge of over 25 Ayurveda physicians who work at the resorts and at its Institute of Ayurveda and Alternative Medicine." },
  { about: "Ayuwanna provides Ayurveda treatment based on the physician’s diagnosis and an individual treatment plan will be prepared for each person based on their unique constitution.The programmes are two fold – curative for those who have illnesses that have already manifested and Preventive and Rejuvenation for those who wish to maintain and enhance their health. The treatment will include Kashaya, herbal pills and powders, Arishta, oil applications and Patthu (pastes applied on painful areas) steam baths and Herbal baths. The facility is wheel chair accessible and suitable for the differently abled. We're located within the beautifully designed Prana Lounge space.", },
]

const index = () => {
  return (
    <div>
      <div className='h-full lg:h-screen lg:bg-stone-300 small-background'>
        <div className='grid grid-cols-1 lg:grid-cols-2 '>

          {/* Lg divice Image */}
          <div className='hidden lg:block'>
            <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0 }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
              className='w-full h-screen ' src={Image} alt="" />
          </div>
          {/* --------------------------------- */}


          <motion.div className='grid content-center h-full px-5 mb-28 lg:mb-0 lg:px-100 lg-about-background'>

            {/* Topick */}
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
              className='mt-6 mb-6 text-4xl font-bold tracking-tight text-center text-white sm:text-7xl lg:text-5xl lg:text-start sm:mb-10 lg:mb-6'>
              {Topic}
            </motion.h1>
            {/* ----------------------------- */}

            {/* Paragraph */}
            {Paragraph.map((item) => (
              <>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className='font-serif text-base text-justify text-zinc-200 sm:text-2xl lg:text-base me-2 ms-2 sm:me-16 sm:ms-16 lg:me-0 lg:ms-0'>
                  {item.about}
                </motion.p>
                <br />
              </>
            ))}
            {/* -------------------------------- */}

            {/* sm and md divice image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -60 },
                visible: { opacity: 1, y: 0 },
              }}
              className='px-0 mt-10 lg:hidden'>
              <motion.img
                className='w-screen h-auto ' src={Image} alt="" />
            </motion.div>
            {/* -------------------------------- */}


          </motion.div>




        </div>
      </div>
    </div>
  )
}

export default index
