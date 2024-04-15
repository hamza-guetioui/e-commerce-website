import Image from "next/image";
import React from "react";

function Articles() {
  return (
    <div>
      <div className="m-4 p-4 border rounded-lg shadow bg-slate-300">
        <h1 className="text-center text-3xl font-bold mt-8 md:mt-0">
          Articles
        </h1>
        <section className="flex ">
          <Image
            className="w-2/6 m-3"
            src="/images/about.jpg"
            alt="article"
            width={500}
            height={400}
          />
          <p className="w-4/6 m-3 text-2xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            repellendus blanditiis rem accusantium nulla obcaecati quam
            molestiae suscipit cum doloremque necessitatibus, sint optio labore,
            modi eveniet delectus tempore quis commodi! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Voluptas, repellendus blanditiis
            rem accusantium nulla obcaecati quam molestiae suscipit cum
            doloremque necessitatibus, sint optio labore, modi eveniet delectus
            tempore quis commodi!
          </p>
        </section>
      </div>
      <div className="m-4 p-4 border rounded-lg shadow bg-slate-300">
        <h1 className="text-center text-3xl font-bold mt-8 md:mt-0">
          Articles
        </h1>
        <section className="flex ">
          <Image
            className="w-2/6 m-3"
            src="/images/about.jpg"
            alt="article"
            width={500}
            height={400}
          />
          <p className="w-4/6 m-3 text-2xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            repellendus blanditiis rem accusantium nulla obcaecati quam
            molestiae suscipit cum doloremque necessitatibus, sint optio labore,
            modi eveniet delectus tempore quis commodi! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Voluptas, repellendus blanditiis
            rem accusantium nulla obcaecati quam molestiae suscipit cum
            doloremque necessitatibus, sint optio labore, modi eveniet delectus
            tempore quis commodi!
          </p>
        </section>
      </div>
      <div className="m-4 p-4 border rounded-lg shadow bg-slate-300">
        <h1 className="text-center text-3xl font-bold mt-8 md:mt-0">
          Articles
        </h1>
        <section className="flex ">
          <Image
            className="w-2/6 m-3"
            src="/images/about.jpg"
            alt="article"
            width={500}
            height={400}
          />
          <p className="w-4/6 m-3 text-2xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            repellendus blanditiis rem accusantium nulla obcaecati quam
            molestiae suscipit cum doloremque necessitatibus, sint optio labore,
            modi eveniet delectus tempore quis commodi! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Voluptas, repellendus blanditiis
            rem accusantium nulla obcaecati quam molestiae suscipit cum
            doloremque necessitatibus, sint optio labore, modi eveniet delectus
            tempore quis commodi!
          </p>
        </section>
      </div>
    </div>

  );
}

export default Articles;
