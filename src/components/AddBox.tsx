interface AddBoxProps {
  type: string;
  addRecipeMeal: (type: string) => void;
}

export const AddBox = ({ type, addRecipeMeal }: AddBoxProps) => {
  return (
    <div onClick={() => addRecipeMeal(type)}>
      <p className="text-brand my-3 cursor-pointer inline-block">
        + Add {type}
      </p>
    </div>
  );
};
