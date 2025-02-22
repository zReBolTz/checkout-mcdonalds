import { Restaurant } from "@prisma/client";
import { ChevronsLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface HeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}

const RestaurantHeader = ({restaurant}: HeaderProps) => {
    return (  
        <div className="relative w-full h-[250px]">
            <Button className="absolute left-4 top-4 z-50 rounded-full" variant="secondary" size='icon'>
                <ChevronsLeftIcon/>
            </Button>
            <Image src={restaurant.coverImageUrl} alt={restaurant.name} className="object-cover" fill/>
            <Button className="absolute right-4 top-4 z-50 rounded-full" variant="secondary" size='icon'>
                 <ScrollTextIcon />
                </Button>
        </div>
    );
}
 
export default RestaurantHeader;