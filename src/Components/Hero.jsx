import image from './../assets/images/banner.jpg'
const Hero = () => {
  return (
    <div className='max-w-[1280px] mx-auto -mt-48'>
        <img className='w-[1000px] h-[550px] object-cover mx-auto rounded-3xl outline outline-white outline-offset-16' src={image} alt="this is the banner image" />
    </div>
  )
}

export default Hero