import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { products } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
        <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Product</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <Card key={product.id}>
            <CardHeader>
              <div className="relative aspect-square w-full mb-4">
                 <Image src={product.imageUrl} alt={product.name} fill className="rounded-md object-cover" data-ai-hint={product.imageHint} />
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.sku}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant="outline">{product.category}</Badge>
                <div className="text-lg font-semibold">{product.stock} <span className="text-sm text-muted-foreground">{product.uom}</span></div>
              </div>
            </CardContent>
            <CardFooter>
                <Button asChild variant="outline" className="w-full">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
