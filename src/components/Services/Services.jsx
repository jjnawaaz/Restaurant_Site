import React from "react";
import Img2 from "../../assets/biryani2.png";
const ServiceData = [
  {
    id: 1,
    img: Img2,
    name: "Mutton Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ratione magnam, expedita dolorem labore explicabo voluptatibus sit impedit iste blanditiis vitae eos eligendi maxime vero exercitationem mollitia iusto perspiciatis odio",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Biryani",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ratione magnam, expedita dolorem labore explicabo voluptatibus sit impedit iste blanditiis vitae eos eligendi maxime vero exercitationem mollitia iusto perspiciatis odio",
  },
  {
    id: 3,
    img: Img2,
    name: "Sweet",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ratione magnam, expedita dolorem labore explicabo voluptatibus sit impedit iste blanditiis vitae eos eligendi maxime vero exercitationem mollitia iusto perspiciatis odio",
  },
];

const Services = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section  */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </p>
          <h1 className="text-3xl font-bold dark:text-white duration-1000">
            Services
          </h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            iure fugit est illum magnam fuga suscipit molestias, commodi
            voluptatem vel!
          </p>
        </div>
        {/* Card Section  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServiceData.map(({ id, img, name, description }) => {
              return (
                <>
                  <div
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl "
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt=""
                        className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h1 className="text-xl font-bold dark:text-transparent bg-clip-text hover: bg-gradient-to-r from-primary to-secondary">
                        {name}
                      </h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        {description}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
