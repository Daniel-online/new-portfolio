import Column from "./../Content/Column";
import PropTypes from "prop-types";
import Copyright from "./Copyright";

const Footer = ({ data }) => {
  return (
    <div className="w-full bg-red-500 text-white">
      <footer className="flex flex-col sm:flex-row sm:justify-around px-4 py-4 space-y-4 sm:space-y-0 sm:space-x-4">
        {data.map((section, index) => (
          <Column
            key={index}
            title={section.title}
            list={section.list}
            links={section.links}
          />
        ))}
      </footer>

      <Copyright />
    </div>
  );
};

Footer.propTypes = {
  data: PropTypes.array,
};

export default Footer;
