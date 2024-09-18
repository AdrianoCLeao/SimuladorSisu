import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <a
      href="/#"
      className="flex flex-col items-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 pb-4">
        {description}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Goiania GO
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400 pb-6">
        Campus: Goiania
      </p>
      <p className="text-xl font-bold text-gray-700 dark:text-gray-200">
        Ciência da Computação
      </p>
      <p className="font-bold text-green-700 dark:text-green-500">
        Nota de Corte: 789.2
      </p>
    </a>
  );
};

export default Card;
