export default function Navbar() {
    return (
        <nav className="mx-4 mt-4 mb-8">
            <ul className="list-none p-0 overflow-hidden bg-custom-yellow border-4 border-custom-navy shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] rounded">
                <li className="float-left border-r-4 border-custom-navy last:border-r-0">
                    <a href="/" className="block text-custom-navy text-center py-3 px-4 no-underline hover:bg-custom-cream transition duration-200">Home</a>
                </li>
                <li className="float-left border-r-4 border-custom-navy last:border-r-0">
                    <a href="#news" className="block text-custom-navy text-center py-3 px-4 no-underline hover:bg-custom-cream transition duration-200">News</a>
                </li>
                <li className="float-left border-r-4 border-custom-navy last:border-r-0">
                    <a href="#contact" className="block text-custom-navy text-center py-3 px-4 no-underline hover:bg-custom-cream transition duration-200">Contact</a>
                </li>
                <li className="float-right ">
                    <a href="#about" className="block text-custom-cream text-center py-3 px-4 no-underline bg-custom-red hover:bg-custom-orange transition duration-200">About</a>
                </li>
            </ul>
        </nav>
    )
}