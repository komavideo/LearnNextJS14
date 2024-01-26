export default function Page({ params }: { params: { productId: string; reviewId: string; } }) {
    return (
        <div>
            <h1>Product {params.productId} Detail's Review {params.reviewId}</h1>
        </div>
    );
}