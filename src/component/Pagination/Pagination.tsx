import React, { useState } from 'react';

interface PaginationInterface {
   data:{
      total:number;
      data:{
         id:number,
         name:string,
         year:number,
         color:string;
         pantone_value:string
      }[]
   }
}

export const Pagination = ({ data }: PaginationInterface) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 6;
  const totalPages = Math.ceil(Number(data.total) / perPage);

  const handlePageChange = (newPage:number) => {
    setCurrentPage(newPage);
  };

  const paginatedData = data.data.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div>
      <div>
        {paginatedData.map((item) => (
          <div key={item.id}>
            <p>Name: {item.id.toString()}</p>
            <p>Name: {item.name}</p>
            <p>Year: {item.year}</p>
            <p>Color: {item.color}</p>
            <p>Pantone Value: {item.pantone_value}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

