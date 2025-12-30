import countryCodes from "./../../Data/countryNumberData.json"
import BigLogo from "./../Logo/BigLogo"
const SignUp = () => {
    return (
        <form className="px-8 py-4  rounded-lg flex flex-col lg:w-1/2 md:w-1/3 sm:w-1/4 space-y-4">
            <BigLogo></BigLogo>
            <div className="flex flex-col w-full">
                <label className="font-medium">Nome completo</label>
                <input type="text" placeholder="Seu Nome" className="shadow-2xl shadow-inner active:ring-violet-500 hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <div className="flex flex-col w-full">
                <label className="font-medium">Telefone</label>
                <div className="flex gap-2">
                    <select className="shadow-2xl shadow-inner shadow-inner active:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 w-1/2 overflow-hidden ring-violet-600 rounded-lg p-2">
                        {countryCodes.map((country, index) => (
                            <option key={index} value={country.code}>{`${country.code} (${country.name})`}</option>
                        ))}
                    </select>
                    <input type="tel" placeholder="(21) 99999-9999" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 flex-1" />
                </div>
            </div>

            <div className="flex flex-col w-full">
                <label className="font-medium">Email</label>
                <input type="text" placeholder="seuEmail@mail.com" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <div className="flex flex-col w-full">
                <label className="font-medium">Password</label>
                <input type="password" placeholder="********" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <div className="flex flex-col w-full">
                <label className="font-medium">Repeat Password</label>
                <input type="password" placeholder="********" className="shadow-2xl shadow-inner hover:bg-yellow-500 hover:bg-opacity-20 hover:ring-2 ring-violet-600 rounded-lg focus:ring-violet-600 p-2 w-full" />
            </div>

            <div className="flex items-center mt-2 w-full">
                <input type="checkbox" className="mr-2" />
                <label>
                    Li e concordo com os <a href="/termos-de-servico" className="text-blue-600 underline">Termos de Uso</a> e <a href="/politica-privacidade" className="text-blue-600 underline">Políticas</a> da BEKLUBE.
                </label>
            </div>

            <input type="submit" value="Enviar" className="shadow-2xl shadow-inner w-full mt-4 rounded-lg text-white font-bold bg-violet-600 hover:bg-violet-700 p-2 cursor-pointer" />
        </form>
    );
}

export default SignUp;
