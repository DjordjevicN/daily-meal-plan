interface AddBoxProps {
  type: string;
  addEmptyMeal: (type: string) => void;
}

export const AddBox = ({ type, addEmptyMeal }: AddBoxProps) => {
  return (
    <div onClick={() => addEmptyMeal(type)}>
      <p className="text-brand my-3 cursor-pointer inline-block">
        + Add {type}
      </p>
    </div>
  );
};
