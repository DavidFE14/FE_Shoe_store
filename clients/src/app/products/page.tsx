import Image from "next/image";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

export default async function ProductPage() {
  const data = await getProducts();
  console.log("data", data);
  return (
    <div className="grid justify-around grid-cols-3 gap-4 md:grid-cols-3">
      {data.map((item: any) => {
        return (
          <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.product_id}
          >
            <Image
              className="p-8 rounded-t-lg"
              width={1000}
              height={100}
              src={item.image}
              alt="product image"
            />
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </a>

              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
