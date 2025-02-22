import LogoItch from "../../../assets/img/logoItch.svg";

export function Menu() {
    return (
        <div>
            <header className="flex items-center w-100% h-[70px] bg-[#1B2838] fixed top-0 left-0 w-full z-50">
                <img src={LogoItch} className="w-32 ml-[30px]" />
                <div className="flex ml-5 list-none w-auto">
                    <li className="mx-3 text-[#fff] text-[16px] duration-700 hover:text-[#fa7878] ">
                        Browse Games
                    </li>
                    <li className="mx-3 text-[#fff] text-[16px] duration-700 hover:text-[#fa7878] ">
                        Game Jams
                    </li>
                    <li className="mx-3 text-[#fff] text-[16px] duration-700 hover:text-[#fa7878] ">
                        <i class="fa-solid fa-upload mr-1"></i>Upload Game
                    </li>
                    <li className="mx-3 text-[#fff] text-[16px] duration-700 hover:text-[#fa7878] ">
                        Developer Logs
                    </li>
                </div>
                <div className="ml-[120px]">
                    <input
                        className="w-[250px] rounded-sm p-1.5 duration-300 hover:bg-[#fdc8c8]"
                        placeholder="Tìm kiếm game nào 😜"
                    />
                    <button>
                        <i class="fa-solid fa-magnifying-glass text-[#fdc8c8] ml-2 duration-200 hover:text-[#fa7878] hover:text-[18px]"></i>
                    </button>
                </div>
            </header>
        </div>
    );
}
