import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethod from "./components/consumption-method-option";

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
      
      <ConsumptionMethod
      imageURL="/dine_in.png"
      textAlt="Comer Aqui"
      buttonText="Comer Aqui"
      option="DINE_IN"
      slug={slug}
      />
       <ConsumptionMethod
      imageURL="/takeaway.png"
      textAlt="Para Levar"
      buttonText="Para Levar"
      option="TAKEAWAY"
      slug={slug}
      />

      </div>
    </div>
  );
};

export default slug;
