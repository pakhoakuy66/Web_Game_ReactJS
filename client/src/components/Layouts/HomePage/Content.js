import { SidebarMenu } from "./Items/SidebarMenu";
import { ListGame } from "./Items/ListGame";

export function HomeMain() {
    return (
        <div>
            <nav className="flex">
                <aside>
                    <SidebarMenu />
                </aside>
                <content className="w-[100%] ml-[270px] mt-[70px]">
                    <ListGame />
                </content>
            </nav>
        </div>
    );
}
