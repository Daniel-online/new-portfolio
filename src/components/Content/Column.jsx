import PropTypes from "prop-types"
// const neon = import.meta.env.VITE_TEXT_NEON_COLOR || ""
const Column = ({
  title,
  list,
  links }//crie um objeto que permita passar os itens em lista
) => {
  //crie um mapping de cada item de 'list' e associe a uma variavel
  // console.log(list.map((item, index) => { item, index }));
  if (links.length == 0) {
    return (
      <>
        <h3 className={`capitalize text-lg text-indigo-500 hover:text-indigo-600 transition duration-300 hover:drop-shadow-[0_0_10px_#ff00cc]`}>{title}</h3>
        <ul className="place-self-center">
          {list.map((item, index) => (
            //mapa listado dos items
            <li key={index} className="place-content-center">
              {item}
            </li>
          )
          )
          }

        </ul>
      </>
    )

  } else {
    return (
      <div className="text-white font-semibold ">
        <h3 className=" capitalize d text-lg ">{title}</h3>
        <ul>
          {list.map((item, index) => (
            //mapa listado dos items
            <li key={index} className="text-indigo-500 hover:text-indigo-800 transition duration-300 hover:drop-shadow-[0_0_10px_#ff00cc]">
              <a href={links[index]}>{item}</a>
            </li>
          )
          )
          }

        </ul>
      </div>
    )
  }
}

Column.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  links: PropTypes.array
}
export default Column
