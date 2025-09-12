
const Footer = () => {
    return (
        <footer className="bg-nightshade text-white">
            <div className="container mx-auto py-4 px-4">
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 Skyton. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
