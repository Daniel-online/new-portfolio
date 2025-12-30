import Logo from "./Logo"
const Header = () => {
    return (
        <nav className="h-[70px] place-content-evenly top-0 sticky bg-cyan-600 items-center flex w-full ">
            <div className="Left" style={{ flex: 1 }}>
                <div className="logo">
                    <Logo></Logo>
                </div>
            </div>
        </nav>
    )
}

export default Header
