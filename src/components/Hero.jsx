import React from 'react'

function Hero() {
    return (
        <section className=' max-w-screen-xl  flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row'>
            <div className=' flex-1 text-center md:text-left'>
                <h2 className=' text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>Building Dreams, Crafting Homes.</h2>
                <p className=' text-sm leading-6 text-darkBlue mb-6 md:w-4/5'>Turning Dreams into homes. Explore our exceptional craftmanship and
                    envision your perfect space</p>
                <button className='primary-btn'>Explore Our Projects.</button>
            </div>

            <div className=' flex gap-2 justify-center md:gap-3 lg:gap-5'>
                <img className='hero-img   w-[150px] h-[400px] object-cover object-center' alt='img-1' src='https://homezonline.in/wp-content/uploads/2022/09/Double-storey-home-with-alluring-exterior.jpg' />
                <img className='hero-img w-[150px] h-[400px] object-cover object-center ' alt='img-2' src='https://img.freepik.com/premium-photo/big-american-house-generative-ai_170984-9624.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705708800&semt=sph' />
                <img className='hero-img w-[150px] h-[400px] object-cover object-center ' alt='img-3' src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg' />
            </div>
        </section>
    )
}

export default Hero