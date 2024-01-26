export default function Page({ params }: { params: { slug: string[] } }) {
    console.log(params.slug);
    return (
        <div>
            <h1>Docs {params.slug.join('/')}</h1>
        </div>
    );
}