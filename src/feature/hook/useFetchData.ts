import { useEffect } from "react"
import { useGetApiDataQuery } from "../redux/api/apiData"
import { useAppSelector } from "../redux/hook"
import { useAppDispatch } from "../redux/hook"
import { loadApiData } from "../redux/reducer/apiData"
export const useFetchData = () => {
   const dispatch = useAppDispatch()
   const pageNumber = useAppSelector((state)=>state.page)
   
   const {
      data,
      isError,
      isSuccess,
      isLoading,
      isFetching,
      refetch
   } = useGetApiDataQuery(pageNumber)
   

   useEffect(()=>{
      if(data && !isError && isSuccess && !isLoading){
         dispatch(loadApiData(data))
      }
   },[isError, isSuccess, isLoading, pageNumber])
   return {
      data,
      isError,
      isSuccess,
      isLoading,
      isFetching,
      pageNumber
   }
}
