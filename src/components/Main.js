import { useEffect, useState } from "react";
import latlangObj from "../utils/latlang.json";
import { Link } from "react-router-dom";


const Main = () => {
  const [latlang, setlatlang] = useState([]);

  useEffect(() => {
    setlatlang(latlangObj);
  }, []);

  return (
    <div>
      <h1>Main</h1>

      <h1 id="h1">Choose your city</h1>
        
      {latlang.map((e) => {
        return (
          <Link
            key={e.name}
            to={{
              pathname: "/body",
              search: `?lat=${e.lat}&lon=${e.lon}`,
            }}
          >
            <select name="" id="">

            <option className="m-5 p-2 border rounded-lg hover:bg-slate-300">
              {e.name}
            </option>
            </select>
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
