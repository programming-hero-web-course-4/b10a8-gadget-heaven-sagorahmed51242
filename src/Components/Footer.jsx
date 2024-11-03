
const Footer = () => {
  return (
    <div className="py-10 md:py-24 max-w-[1280px] mx-auto">
        <div className="text-center pb-5">
            <h1 className="text-2xl md:text-3xl font-bold pb-2">Gadget Heaven</h1>
            <p className="font-bold text-[#09080F99]">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-evenly py-5">
            <ul className="flex flex-col items-center gap-1 text-[#09080F99]">
                <li className="text-lg font-bold text-black pb-2">Services</li>
                <li>Product Support</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Returns</li>
            </ul>
            <ul className="flex flex-col items-center gap-1 text-[#09080F99]">
                <li className="text-lg font-bold text-black pb-2">Company</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
            <ul className="flex flex-col items-center gap-1 text-[#09080F99]">
                <li className="text-lg font-bold text-black pb-2">Legal</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer