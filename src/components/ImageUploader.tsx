import React, { useState, useRef, useEffect } from "react";

interface ImageUploaderProps {
  initialImageUrl?: string;
  onImageUpload: (image: string | undefined) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  initialImageUrl,
  onImageUpload,
}) => {
  const [preview, setPreview] = useState<string | undefined>(initialImageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update the preview when initialImageUrl changes
    setPreview(initialImageUrl);
  }, [initialImageUrl]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(undefined);
      onImageUpload(undefined);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="w-24 h-24 mb-4 rounded-lg border border-gray-300 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <div
          onClick={handleClick}
          className="w-24 h-24 mb-4 rounded-lg border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <p className="text-gray-500">+</p>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ImageUploader;
