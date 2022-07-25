import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./GraphStats.scss";
import { color } from "../../constants/color";

ChartJS.register(ArcElement, Tooltip);
interface IProps {
  nutritionStats: {
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
    price: number;
  };
}

const GraphStats: React.FC<IProps> = ({ nutritionStats }) => {
  const data = {
    labels: ["Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: [
          nutritionStats.protein,
          nutritionStats.carbs,
          nutritionStats.fat,
        ],
        backgroundColor: [color.proteinColor, color.carbsColor, color.fatColor],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="graphStats">
      <div className="graphStats__content">
        <div className="chart">
          <Pie data={data} />
        </div>
        <div className="title">
          <h2>Total nutrition</h2>
        </div>
        <div className="writtenStats">
          <div className="writtenStats__content">
            <div className="label">
              <p className="calories">Calories</p>
              <p className="carbs">Carbs</p>
              <p className="fat">Fat</p>
              <p className="protein">Protein</p>
            </div>
            <div className="values">
              <p className="calories">{nutritionStats.calories}</p>
              <p className="carbs">{nutritionStats.carbs}</p>
              <p className="fat">{nutritionStats.fat}</p>
              <p className="protein">{nutritionStats.protein}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphStats;
