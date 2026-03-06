import React from "react";

interface Material {
  type: string;
  price: number;
  image: string; // URL of the image
}

interface SelectedMaterialDetailProps {
  material: Material | null;
}

const SelectedMaterialDetail: React.FC<SelectedMaterialDetailProps> = ({
  material,
}) => {
  if (!material) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Selected Material</h2>
      <img
        src={material.image}
        alt={material.type}
        className="h-64 w-full object-cover rounded"
      />
      <h3 className="font-semibold">{material.type}</h3>
      <p className="text-gray-600">Price: ${material.price}</p>
    </div>
  );
};

export default SelectedMaterialDetail;
