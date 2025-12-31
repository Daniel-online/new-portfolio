const logo = import.meta.env.VITE_LOGO|| "";

const Copyright = () => {
  return (
    <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center py-4 px-2 text-center sm:text-left">
      <img
        src={logo}
        alt="Logo"
        className="w-auto h-8 sm:h-14 rounded-lg object-cover mb-2 sm:mb-0 sm:mr-4"
      />

      <div className="flex flex-col leading-tight">
        <span>DANIEL IS ONLINE LTDA</span>
        <span>Sao Paulo - Brasil</span>
        <span>
          Created by{" "}
          <a
            className="text-black font-bold hover:underline text-indigo-500 hover:text-indigo-600 transition duration-300 hover:drop-shadow-[0_0_10px_#ff00cc]"
            href="https://danielisonline.vercel.app/"
          >
            Daniel L. Affonso
          </a>
        </span>
        <span>© 2025 Todos os direitos reservados.</span>
      </div>
    </div>
  );
};

export default Copyright;
