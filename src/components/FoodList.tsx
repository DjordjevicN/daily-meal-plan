import Input from "./Input";

export const FoodList = () => {
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Input type="text" placeholder="Search for food" />
      {list.map((item) => {
        return (
          <div
            key={item}
            className="flex justify-between items-center p-3 border-b border-gray-300"
          >
            <p>Food item {item}</p>
            <button className="text-red-500">Remove</button>
          </div>
        );
      })}
    </div>
  );
};
