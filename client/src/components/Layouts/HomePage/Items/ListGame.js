import { useState } from "react";
import { HomeFooter } from "./FooterHome";
import { gamesData } from "../../../../data/games";

export function ListGame() {
    const [sortOrder, setsortOrder] = useState("");

    return (
        <div className="pt-5">
            <header className="flex w-[100%] h-auto">
                <h1 className="text-[#C7D5E0] ml-5 text-[25px] font-bold ">
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
                <select
                    className="h-7.5 rounded-sm w-[250px] ml-[345px]"
                    value={sortOrder}
                    onChange={(e) => setsortOrder(e.target.value)}
                >
                    <option value="" selected>
                        Chọn một tùy chọn
                    </option>
                    <option value="asc">A → Z</option>
                    <option value="desc">Z → A</option>
                </select>
            </header>
            <main>
                <List sortOrder={sortOrder} />
            </main>
            <footer>
                <HomeFooter />
            </footer>
        </div>
    );
}

export function List({ sortOrder }) {
    const [games, setGames] = useState(gamesData);

    const sortedGame = [...games].sort((a, b) => {
        if (sortOrder === "asc") return a.name.localeCompare(b.name);
        if (sortOrder === "desc") return b.name.localeCompare(a.name);
        return 0;
    });

    return (
        <div className="p-5 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedGame.map((game) => {
                    let imagePath;
                    try {
                        imagePath = require(`../../../../../IMG/${game.img}`);
                    } catch (error) {
                        console.error("Không tìm thấy ảnh:", game.img);
                        imagePath = ""; // Hoặc ảnh mặc định
                    }
                    return (
                        <div
                            name="id"
                            className="bg-[#1e293b] p-4 rounded-lg shadow-lg hover:scale-102 transition-all duration-300 hover:drop-shadow-[0_0_2px_white]"
                        >
                            <img
                                name="img"
                                src={imagePath}
                                alt=""
                                className="w-full h-[150px] object-cover rounded-md"
                            />
                            <h2 className="text-white mt-3 text-lg font-bold duration-200 hover:drop-shadow-[0_0_10px_white]">
                                {game.name}
                            </h2>
                            <p className="text-gray-300 text-sm mt-1">
                                ReleaseDate: {game.releaseDate}
                            </p>
                            <p className="text-gray-400 text-sm mt-2 line-clamp-5 max-h-[300px] duration-100 hover:overflow-y-auto">
                                Description: <br />
                                {game.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
