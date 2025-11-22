import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ReorderingRules from "@/components/products/reordering-rules";
import type { Product } from "@/lib/types";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = products.find(p => p.id === params.id) as Product | undefined;

    if (!product) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-lg font-semibold md:text-2xl mb-4">Product Details</h1>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader>
                            <div className="relative aspect-square w-full mb-4">
                                <Image src={product.imageUrl} alt={product.name} fill className="rounded-md object-cover" data-ai-hint={product.imageHint} />
                            </div>
                            <CardTitle className="text-2xl">{product.name}</CardTitle>
                            <CardDescription>SKU: {product.sku}</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Category</span>
                                <span>{product.category}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Unit of Measure</span>
                                <span>{product.uom}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-semibold">
                                <span className="text-muted-foreground">Current Stock</span>
                                <span>{product.stock}</span>
                            </div>
                             <div className="flex justify-between">
                                <span className="text-muted-foreground">Location</span>
                                <span>{product.location}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2">
                    <ReorderingRules product={product} />
                </div>
            </div>
        </div>
    );
}
