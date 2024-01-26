export default function Page({ params }: { params: { productId: string } }) {
    return (
        <div>
            <h1>Product {params.productId} Detail</h1>
        </div>
    );
}

