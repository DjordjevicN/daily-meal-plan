import Meal from "../meal/Meal";
import { IData } from "../../Types";

const data: IData[] = [
  {
    meal_no: 1,
    name: "Breakfast",
    contents: [
      { id: 1, name: "Pasteta od mesa", weight: "60" },
      { id: 2, name: "Kiselo Mleko", weight: "140" },
    ],
  },
  {
    meal_no: 2,
    name: "Snack",
    contents: [{ id: 1, name: "Potaz od povrca", weight: "60" }],
  },
  {
    meal_no: 3,
    name: "Lunch",
    contents: [{ id: 1, name: "Ratatouille", weight: "300" }],
  },
  {
    meal_no: 4,
    name: "Snack",
    contents: [
      { id: 1, name: "Jabuka", weight: "150" },
      { id: 2, name: "Badem", weight: "30" },
    ],
  },
  {
    meal_no: 5,
    name: "Diner",
    contents: [{ id: 1, name: "Pilece belo", weight: "250" }],
  },
];
function DayMenu() {
  return (
    <div className="dayMenu">
      <div className="content">
        <div className="title">
          <h1>{`Today's Meal Plan`}</h1>

          <div className="menu">
            <div className="menu_content">
              <div className="meal">
                {data.map((item) => (
                  <Meal item={item} key={item.meal_no} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayMenu;
