import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { db } from "@/lib/prisma";

interface slugProps {
  params: Promise<{ slug: string }>;
}

const slug = async ({ params }: slugProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="h-creen flex flex-col items-center justify-center px-6 pt-24">
      <Image
        src={restaurant.avatarImageUrl}
        width={82}
        height={82}
        alt={restaurant.name}
      />
      <h2 className="font-semibold">{restaurant.name}</h2>
      <div className="space-y-2 pt-24 text-center">
        <h2 className="font-semibold">Seja bem-vindo!</h2>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <Card>
          <CardContent>
            <div className="flex flex-col items-center gap-8 py-5">
              <div className="relative h-[80px] w-[80px]">
                <Image
                  src="/dine_in.png"
                  width={82}
                  height={82}
                  alt='Comer Awui"'
                  className="object-contain"
                />
              </div>
              <Button asChild className="rounded-full" variant="secondary">
                <Link href={`/${slug}/menu?consumptionMethod=dine_in`}>
                  Para comer aqui
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex flex-col items-center gap-8 py-5">
              <div className="relative h-[80px] w-[80px]">
                <Image
                  src="/takeaway.png"
                  width={82}
                  height={82}
                  alt='Comer Awui"'
                  className="object-contain"
                />
              </div>
              <Button asChild className="rounded-full " variant="secondary">
                <Link href={`/${slug}/menu?consumptionMethod=dine_in`}>
                  Para levar
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default slug;
