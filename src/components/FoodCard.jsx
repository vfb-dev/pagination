import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // 👈 add this

export function FoodCard({ cardObj }) {
  return (
    <Card className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      {/* IMAGE */}
      <div className="relative">
        <AspectRatio ratio={4 / 3}>
          <img
            src={cardObj.image}
            alt={cardObj.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </AspectRatio>

        {/* PRICE BADGE */}
        <Badge className="absolute top-3 right-3 bg-white/90 text-black backdrop-blur">
          ${cardObj.price}
        </Badge>
      </div>

      {/* CONTENT */}
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg">{cardObj.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {cardObj.description}
        </CardDescription>
      </CardHeader>

      {/* CTA */}
      <CardContent>
        <Button className="w-full rounded-xl cursor-pointer">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  );
}
