import { Menu } from "./Menu";

export const UI = () => {
  return (
    <>
      <section className="h-screen w-screen flex items-center justify-center text-center p-8 lg:p-20 select-none">
        <div>
          <h1 className="mt-40 text-6xl font-bold font-serif ">
            Pirate Shifudo 🏴‍☠️
          </h1>
          <p className="">Best sea food in the world 🎣</p>
        </div>
      </section>
      <section className="h-screen w-screen flex items-center p-8 lg:p-20 select-none max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Le Chef</h2>
          <h3 className="text-5xl font-bold font-serif">Broswick Chichaigne</h3>
          <p className="mt-2">
            Travelled the world seas and learned from the best 🌊. <br />
            We are proud to have him in our team and to serve you his best
            dishes. 🍽️
            <br />
            <br />
            If you stay late, you might even get to see him play the piano. 🎹
          </p>
        </div>
      </section>
      <section className="h-screen w-screen flex flex-col items-center text-center p-8 lg:p-20 select-none  max-w-screen-xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-serif">Le Menu</h2>
          <p className="mt-2">
            Be prepared to taste the best sea food in the world. 🦞
          </p>
        </div>
        <Menu />
      </section>
    </>
  );
};
