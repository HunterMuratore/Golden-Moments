function Footer() {
    const date = new Date()
    return (
        <footer>
            <div className="flex justify-center items-center pt-10 space-x-4">
                {/* FaceBook */}
                <a href="https://facebook.com/GoldenMoments" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook fa-2xl"></i>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/GoldenMoments" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/GoldenMoments" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram fa-2xl"></i>
                </a>

                {/* Email */}
                <a href="mailto:eli.goldenmoments@yahoo.com?subject=Golden Moments Inquiry" target="_blank" rel="noopener noreferrer">
                    <i className="fa-regular fa-envelope fa-2xl"></i>
                </a>
            </div>

            <div className="w-full flex flex-col mx-auto my-1 p-3">
                <div className="flex flex-col items-center gap-1">
                    <p className="text-md font-bold"><sup>&copy;</sup> {date.getFullYear()} Golden Moments</p>
                    <p className="text-xs">Site design by Hunter Muratore</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer