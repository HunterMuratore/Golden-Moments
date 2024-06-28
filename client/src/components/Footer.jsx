function Footer() {
    const date = new Date()
    return (
        <footer>
            <div className="w-full flex flex-col mx-auto my-1 p-3">
                <div className="flex flex-col items-center gap-1">
                    <p className="text-xl font-bold"><sup>&copy;</sup> {date.getFullYear()} Golden Moments</p>
                    <p className="text-xs">Site design by Hunter Muratore</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer