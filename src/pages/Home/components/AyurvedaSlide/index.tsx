import { motion } from 'framer-motion'
import './index.css'

const Topic = "AYURVEDA"

const Image = "Home/174418192_465619557982472_5327497778691185058_n.jpg"

const Paragraph = [
  { about: "Ayurveda, the science of life is beyond just an alternative medicine, rooted in 5000 years of history, it is one of the oldest form of medical system known to man. Ayurveda is a way to a healthy and long life that can complement modern medicine." },
  { about: "Ancient Ayurveda wisdom implies that human beings are made of the same five elements. Just as the sun, moon and wind maintain the balance of the universe, the Tri-Dosha, Vata, Pitta and Kapha maintain the balance of the body.", },
  { about: "Our practice is rooted in consciously preserving the intergrity of the mind, heart and body to restore and maintain these elements in a state of equilibrium.  Ayurveda gives equal importance to both the maintanance of health and the curing of the disease. Instead of simply supressing the disease, we aim at removing the disease from its root." }
]

const index = () => {
  return (
    <div className='h-screen lg:bg-stone-200'>
      <div className='grid grid-cols-1 p-0 lg:grid-cols-2 '>

        {/* lg divice image */}
        <div className='absolute -z-10 lg:hidden'>
          <img className='w-screen h-screen' src={Image} alt="" />
        </div>
        {/* ------------------------- */}

        <div className='AyurvedaSlide-background'>


          <motion.div className=' grid content-center h-screen lg:ms-10 lg:me-10 ms-5 me-5'>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: -80 },
                visible: { opacity: 1, y: 0 },
              }}
              className='mt-6 mb-6 text-4xl font-bold tracking-tight text-center text-white sm:text-7xl lg:text-5xl lg:text-start sm:mb-20 lg:mb-6'>
              {Topic}
            </motion.h1>

            {/* Paragraph */}
            {Paragraph.map((item) => (
              <>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className='font-serif text-base text-justify text-zinc-200 sm:text-3xl lg:text-xl me-0 ms-0 sm:me-16 sm:ms-16 lg:me-0 lg:ms-0'>
                  {item.about}
                </motion.p>
                <br />
              </>
            ))}
            {/* -------------------------------- */}
          </motion.div>

        </div>

        {/* sm and md divice image */}
        <div className='hidden lg:block'>
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className='w-full h-screen' src={Image} alt="" />
        </div>
        {/* ------------------------------------- */}


      </div>
    </div>
  )
}

export default index
