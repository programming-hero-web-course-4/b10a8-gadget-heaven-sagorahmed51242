/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Category = ({category}) => {
  return (
    <div className="border p-4">
        <ul>
            {category.map((item) => ( <li key={item.id} className="my-4">
              <NavLink to={`/${item.category}`} className={({ isActive }) => isActive ? 'bg-[#9538E2] text-center text-white px-4 py-2 rounded-full inline-block w-full ' :'bg-[#e4e4e495] text-gray-500 text-center px-3 inline-block w-full py-2 rounded-full'}>{item.category_name}</NavLink>
            </li>))}
        </ul>
    </div>
  )
}

export default Category