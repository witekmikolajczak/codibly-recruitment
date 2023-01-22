global {
   interface ApiDataInterface {
      page: number,
      per_page: number,
      total: number,
      total_pages: number,
      data:{
         id: number;
         name: string;
         year: number;
         color: string;
         pantone_value: string;
       }[]
       support: {
         url: string;
         text: string;
       }
   }


   interface RowInterface {
      id:number,
      name:string,
      calories:number,
      fat:number
   }
}
export {}