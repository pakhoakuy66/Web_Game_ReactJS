export function SidebarMenu() {
    return (
        <div className="">
            <aside className="w-[270px] max-h-[498px] bg-[#1e222c] p-3 overflow-y-auto fixed top-[70px] h-[calc(100vh-70px)]">
                <nav>
                    <h3 className="text-[#C7D5E0] mt-2 font-bold">
                        POPULAR TAG
                    </h3>
                    <div className="flex mt-1">
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Browse Games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Multiplayer
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Simulation
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Roguelike
                            </li>
                            <li className=" hover:text-[#F4C2C2] hover:underline">
                                Browse all tags
                            </li>
                        </ul>
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Horror Games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Visual novels
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                MacOS games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Linux game
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="mt-5">
                    <h3 className="text-[#C7D5E0] mt-2 font-bold">BROWSE</h3>
                    <div className="flex mt-1">
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Tools
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Physical games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Books
                            </li>
                        </ul>
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Game assets
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Albums & soundtracks
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Comics
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                <i class="fa-solid fa-share-nodes mr-1"></i>
                                Randomizer
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="mt-5">
                    <h3 className="text-[#C7D5E0] mt-2 font-bold">
                        GAME BY PRICE
                    </h3>
                    <div className="flex mt-1">
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Browse Games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Multiplayer
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Simulation
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Roguelike
                            </li>
                            <li className=" hover:text-[#F4C2C2] hover:underline">
                                Browse all tags
                            </li>
                        </ul>
                        <ul className="w-[100%] text-[#C7D5E0] text-[13px]">
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Horror Games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Visual novels
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                MacOS games
                            </li>
                            <li className="mb-1 hover:text-[#F4C2C2] hover:underline">
                                Linux game
                            </li>
                        </ul>
                    </div>
                </nav>
                <nav className="my-5">
                    <nav className="flex list-none justify-center">
                        <li className="mx-1 text-[#C7D5E0] duration-300 hover:text-[#F4C2C2] ">
                            <i class="fa-brands fa-reddit-alien"></i>
                        </li>
                        <li className="mx-1 text-[#C7D5E0] duration-300 hover:text-[#F4C2C2] ">
                            <i class="fa-brands fa-facebook-f"></i>
                        </li>
                        <li className="mx-1 text-[#C7D5E0] duration-300 hover:text-[#F4C2C2] ">
                            <i class="fa-brands fa-twitter"></i>
                        </li>
                        <li className="mx-1 text-[#C7D5E0] duration-300 hover:text-[#F4C2C2] ">
                            Download app
                        </li>
                    </nav>
                </nav>
            </aside>
        </div>
    );
}
