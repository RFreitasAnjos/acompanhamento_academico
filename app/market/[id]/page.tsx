import { ContentMock } from "@/public/mocks/Mocks";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ContentPage({ params }: Props) {
  const { id } = await params;

  const item = ContentMock.find((item) => item.id === Number(id));

  if (!item) {
    return <div className="p-4 sm:p-6 lg:p-8">Item not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="rounded-2xl border bg-white p-5 shadow-md sm:p-6 lg:p-8">
        <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{item.title}</h2>
        <p className="mb-4 text-base text-gray-600 sm:text-lg">{item.description}</p>
        <p className="mb-6 text-base text-gray-600 sm:text-lg">
          Price: ${item.price}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="rounded-md bg-blue-500 px-4 py-3 text-white transition hover:bg-blue-600 sm:w-auto">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}