type props ={
    searchParams: any;
    params:{
        term:string;

    };
};







import { SearchParams } from '@/typings';
import { redirect } from 'next/navigation'
 async function searchPage ({searchParams, params : { term }} : props){

if (!term){
  redirect("/")
}

const response = await fetch()


  return(
    <div>
fuckkkkkk
    </div>
  )


}
export default searchPage