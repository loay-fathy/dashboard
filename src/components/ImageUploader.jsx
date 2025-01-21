import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  // Handle image drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  // Handle image selection via input
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  // Process files
  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    const imagePreviews = imageFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => resolve(reader.result);
      });
    });

    Promise.all(imagePreviews).then((previews) => {
      setImages([...images, ...previews]);
    });
  };

  // Handle image delete
  const handleDelete = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Display uploaded images */}
      <div className="flex flex-wrap gap-4 mb-6">
        {images.length > 0 && images.map((image, index) => (
          <div key={index} className="relative w-32 h-32 overflow-hidden border border-gray-300 rounded-md">
            <img src={image} alt={`uploaded-${index}`} className="object-cover w-full h-full" />
            {/* Delete Button */}
            <button
              className="absolute top-1 right-1 bg-red-500 text-white flex justify-center items-center w-5 h-5 rounded-full hover:bg-red-600 transition"
              onClick={() => handleDelete(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Drag and drop area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full max-w-lg p-10 text-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition"
      >
        <p className="text-gray-500">Drag & Drop your images here, or</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="mt-2 text-blue-500 underline cursor-pointer"
        >
          Browse images
        </label>
      </div>
    </div>
  );
};

export default ImageUploader;
