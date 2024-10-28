import fatIcon from "../assets/icons/fat-icon.svg";
import proteinIcon from "../assets/icons/protein-icon.svg";
import carbsIcon from "../assets/icons/carbs-icon.svg";
interface NutritionProps {
  calories?: number;
  carbs?: number;
  fat?: number;
  protein?: number;
}

interface NutritionBlockProps {
  type: string;
  image: string;
  amount: number | undefined;
  metric: string;
}

const NutritionBlock = ({
  type,
  image,
  amount,
  metric,
}: NutritionBlockProps) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <img src={image} alt="protein" />
        <p className="text-paragraph">{type}</p>
      </div>
      <div className="flex">
        <p>{amount}</p>
        <p>{metric}</p>
      </div>
    </div>
  );
};

export const CaloriesBlock = ({ nutrition }: { nutrition: NutritionProps }) => {
  return (
    <div className="ml-auto max-w-40 min-w-36">
      <div className="flex gap-3">
        <h1>Calories</h1>
        <p>{nutrition.calories}</p>
      </div>
      <NutritionBlock
        type="Carbs"
        image={carbsIcon}
        amount={nutrition.carbs}
        metric="gr"
      />
      <NutritionBlock
        type="Fat"
        image={fatIcon}
        amount={nutrition.fat}
        metric="gr"
      />
      <NutritionBlock
        type="Protein"
        image={proteinIcon}
        amount={nutrition.protein}
        metric="gr"
      />
    </div>
  );
};
