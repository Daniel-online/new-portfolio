import Logo from "/src/assets/Logo-1.jpg";

const Copyright = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center py-4 px-2 text-center sm:text-left">
      <img
        src={Logo}
        alt="Logo"
        className="w-20 h-20 sm:w-14 sm:h-14 rounded-lg object-cover mb-2 sm:mb-0 sm:mr-4"
      />

      <div className="flex flex-col leading-tight">
        <span>We Belong Together LTDA</span>
        <span>Sao Paulo - Brasil</span>
        <span>
          Created by{""}
          <a
            className="text-black font-bold hover:underline"
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
