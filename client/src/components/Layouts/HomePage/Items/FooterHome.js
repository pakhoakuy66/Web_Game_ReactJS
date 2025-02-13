export function HomeFooter() {
    return (
        <footer className="w-[100%] py-10">
            <div className="flex justify-center">
                <div className="flex list-none justify-evenly w-[700px] text-[#C7D5E0]">
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        ABOUT
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        FAQ
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        BLOG
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        CONTACT US
                    </li>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <div className="flex list-none justify-evenly w-[800px] text-[#C7D5E0]">
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        Copyright © 2025 itch corp
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white] underline">
                        Directory
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white] underline">
                        Terms
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white] underline">
                        Privacy
                    </li>
                    <li className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white] underline">
                        Cookies
                    </li>
                </div>
            </div>
        </footer>
    );
}
