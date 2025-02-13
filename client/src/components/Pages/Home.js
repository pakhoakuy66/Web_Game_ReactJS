import { Menu } from "../Layouts/HomePage/Menu";
import { HomeMain } from "../Layouts/HomePage/Content";

export function Home() {
    return (
        <div className="w-[100%] h-auto bg-[#171A21]">
            <header>
                <Menu />
            </header>
            <main>
                <HomeMain />
            </main>
        </div>
    );
}
