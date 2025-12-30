
import BigLogo from "./../Logo/BigLogo"
const Login = () => {
    return (
        <form className="px-8 py-4  rounded-lg flex flex-col lg:w-1/2 md:w-1/3 sm:w-1/4 space-y-4">
            <BigLogo></BigLogo>

            <div className="flex flex-col w-full">
                <label className="font-medium">Email</label>
                <input type="text" placeholder="seuEmail@mail.com" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <div className="flex flex-col w-full">
                <label className="font-medium">Password</label>
                <input type="password" placeholder="********" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <input type="submit" value="Enviar" className="shadow-2xl shadow-inner w-full mt-4 rounded-lg text-white font-bold bg-violet-600 hover:bg-violet-700 p-2 cursor-pointer" />
        </form>
    );
}

export default Login;
