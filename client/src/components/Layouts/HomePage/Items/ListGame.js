import { HomeFooter } from "./FooterHome";
import LN from "../../../../IMG/littleNightmare.jpg";
import Detention from "../../../../IMG/detention.jpg";
import Eldenring from "../../../../IMG/eldenRing.jpg";
import HSH from "../../../../IMG/HSH.jpg";
import Miside from "../../../../IMG/miside.jpg";
import Inside from "../../../../IMG/inside.jpg";

export function ListGame() {
    return (
        <div className="pt-5">
            <header className="flex w-[100%] h-auto">
                <h1 className="text-[#C7D5E0] ml-5 text-[25px] font-bold">
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        L
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        i
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        s
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        t
                    </span>{" "}
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        G
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        a
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        m
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        e
                    </span>
                    <span className="drop-shadow-[0_0_1px_white] duration-300 hover:drop-shadow-[0_0_10px_white]">
                        s
                    </span>{" "}
                    <span className="drop-shadow-[0_0_2px_white] duration-300 hover:drop-shadow-[0_0_20px_white]">
                        🎮
                    </span>
                </h1>
                <select className="h-7.5 rounded-sm w-[250px] ml-[345px]">
                    <option value="" selected>
                        Chọn một tùy chọn
                    </option>
                    <option value="price-asc">A → Z</option>
                    <option value="price-desc">Z → A</option>
                </select>
            </header>
            <main>
                <List />
            </main>
            <footer>
                <HomeFooter />
            </footer>
        </div>
    );
}

export function List() {
    return (
        <div className="p-5 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                    name="id"
                    className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                >
                    <img
                        name="img"
                        src={LN}
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                        Little nightmares
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                        ReleaseDate: 28 tháng 4 năm 2017
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                        Description: <br />
                        "Little Nightmares" đưa người chơi vào vai Six, một cô
                        bé nhỏ nhắn bị mắc kẹt trong The Maw, một con tàu khổng
                        lồ đầy rẫy những sinh vật đáng sợ. Nhiệm vụ của Six là
                        tìm cách thoát ra bằng cách giải các câu đố, lẩn trốn kẻ
                        thù và khám phá những bí ẩn kinh hoàng của nơi này.
                    </p>
                </div>
                <div
                    name="id"
                    className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                >
                    <img
                        name="img"
                        src={Detention}
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                        Detention
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                        ReleaseDate: 13 tháng 1 năm 2017
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                        Description: <br />
                        "Detention" kể về câu chuyện của Ray và Wei, hai học
                        sinh bị mắc kẹt trong một ngôi trường trung học hoang
                        vắng giữa một cơn bão lớn. Khi khám phá ngôi trường, họ
                        phát hiện ra những hiện tượng siêu nhiên kỳ lạ và dần
                        dần vén màn những bí ẩn đen tối về xã hội Đài Loan thời
                        bấy giờ.
                    </p>
                </div>
                <div
                    name="id"
                    className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                >
                    <img
                        name="img"
                        src={Inside}
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                        Inside
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                        ReleaseDate: 29 tháng 6 năm 2016
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                        Description: <br />
                        "Inside" đưa người chơi vào vai một cậu bé vô danh trong
                        một thế giới đen tối, đầy rẫy nguy hiểm và bí ẩn. Cậu
                        phải lẩn trốn khỏi những kẻ truy đuổi, giải các câu đố
                        môi trường và khám phá một cơ sở nghiên cứu đáng sợ.
                    </p>
                </div>
                <div
                    name="id"
                    className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                >
                    <img
                        name="img"
                        src={Eldenring}
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                        Elden Ring
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                        ReleaseDate: 25 tháng 2 năm 2022
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                        Description: <br />
                        "Elden Ring" đưa người chơi vào The Lands Between, một
                        thế giới rộng lớn bị chia cắt sau sự vỡ nát của Elden
                        Ring. Người chơi vào vai Tarnished, một kẻ bị lưu đày
                        nay trở về để tìm cách khôi phục Elden Ring và trở thành
                        Elden Lord.
                    </p>
                </div>
                <div
                    name="id"
                    className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                >
                    <img
                        name="img"
                        src={Miside}
                        className="w-full h-auto object-cover rounded-md"
                    />
                    <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                        Miside
                    </h2>
                    <p className="text-gray-300 text-sm mt-1">
                        ReleaseDate: 10 tháng 12 năm 2024
                    </p>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                        Description: <br />
                        Trong MiSide, bạn vào vai một chàng trai vô tình bị cuốn
                        vào một trò chơi mô phỏng trên điện thoại. Tại đây, bạn
                        gặp Mita, một nhân vật nữ dễ thương nhưng ẩn chứa nhiều
                        bí ẩn. Ban đầu, trò chơi mang phong cách anime tươi
                        sáng, nơi bạn hỗ trợ Mita trong các công việc hàng ngày
                        như nấu ăn, trò chuyện và tặng quà. Tuy nhiên, càng tiến
                        sâu, bạn càng phát hiện ra những yếu tố kinh dị tâm lý
                        khi Mita thể hiện sự chiếm hữu và kiểm soát đáng sợ,
                        biến ngôi nhà ngọt ngào thành nơi giam cầm bạn.
                    </p>
                </div>
            </div>
        </div>
    );
}
