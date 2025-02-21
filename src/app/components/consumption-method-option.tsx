import { OrderConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface consumptionMethodProps{
    slug: string,
    imageURL: string,
    textAlt: string,
    buttonText: string
    option: OrderConsumptionMethod
}


const ConsumptionMethod = ({slug, imageURL, textAlt, buttonText, option}: consumptionMethodProps) => {
    return ( 
        <div>
             <Card>
          <CardContent>
            <div className="flex flex-col items-center gap-8 py-5">
              <div className="relative h-[80px] w-[80px]">
                <Image
                  src={imageURL}
                  width={82}
                  height={82}
                  alt={textAlt}
                  className="object-contain"
                />
              </div>
              <Button asChild className="rounded-full" variant="secondary">
                <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
                 {buttonText}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
     );
}
 
export default ConsumptionMethod;