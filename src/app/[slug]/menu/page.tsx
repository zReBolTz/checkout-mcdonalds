import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantHeader from "./components/Header";

interface RestaurantMenuPageProps{
    params: Promise<{slug: string}>,
    searchParams: Promise<{consumptionMethod: string}>
}

const isConsumptionMethodValid = (consumptionMethod: string)=> {
    return ['DINE_IN' , 'TAKEAWAY'].includes(consumptionMethod.toUpperCase())
}

const RestaurantMenuPage  =  async ({params, searchParams}: RestaurantMenuPageProps) => {



    if(!isConsumptionMethodValid){
return notFound()
    }
    const {slug}= await  params
    const {consumptionMethod} = await searchParams

    if(!isConsumptionMethodValid(consumptionMethod)){
        return notFound()
    }


    const restaurant = await db.restaurant.findUnique({where: {slug}, include: {menuCategories:{include:{products: true}}}})


    if(!restaurant){
        return notFound()
    }

    return ( 
        <div>
            <RestaurantHeader restaurant={restaurant}/>
           
        </div>
     );
}
 
export default RestaurantMenuPage ;