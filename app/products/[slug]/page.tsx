// app/products/[slug]/page.tsx

type PageProps = {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold">
        Product Slug: {slug}
      </h1>
    </div>
  )
}