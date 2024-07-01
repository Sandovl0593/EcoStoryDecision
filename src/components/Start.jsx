const Start = () => {
  return (
    <div
      className="m-auto flex min-h-screen w-full items-center bg-green-600"
      // style={{
      //   background: `url(${background}) no-repeat`,
      //   backgroundSize: "105rem 50rem",
      // }}
    >
      <section className="flex w-full flex-col items-center justify-center">
        <div className="pb-2 text-5xl">Hello World</div>
        <div className="pb-7 text-3xl">Are you really for your journey!</div>
        <button
          style={{
            background: "linear-gradient(90deg, #278E3E 0%, #54CFAA 100%)",
          }}
          className="m-2 h-16 w-48 rounded-lg px-4 py-2 text-xl font-bold shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Start;
