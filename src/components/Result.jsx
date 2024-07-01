import { Document, Page, Text, View, Image, pdf } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import background from "../assets/back.png";

const Result = ({ result, image }) => {
  const tw = createTw({
    theme: {
      fontFamily: {
        sunflower: ["sunflower", "sans-serif"],
      },
    },
  });

  const doc = (
    <Document className={tw("justify-center text-center")}>
      <Page size="A4">
        <View className={tw("flex flex-col items-center justify-center")}>
          <Text>{result}</Text>
          <Image src={image} />
        </View>
      </Page>
    </Document>
  );

  const getPdfBlob = async () => {
    const blobPdf = pdf(doc);
    blobPdf.updateContainer(doc);
    const result = await blobPdf.toBlob();
    console.log(result);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(result);
    link.download = "result.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="m-auto flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-green-600"
      // style={{
      //   background: `url(${background}) no-repeat`,
      //   backgroundSize: "105rem 50rem",
      // }}
    >
      <div className="pb-2 text-5xl">Congratulations, thanks for playing!</div>
      <div className="pb-7 text-xl">This result is your perception:</div>
      <section className="flex w-[75%] items-center justify-center border border-blue-600 text-white">
        <div className="pb-2 text-5xl">{result}</div>
      </section>
      <button
        onClick={getPdfBlob}
        style={{
          background: "linear-gradient(90deg, #278E3E 0%, #54CFAA 100%)",
        }}
        className="m-2 h-16 w-48 cursor-pointer rounded-lg px-4 py-2 text-xl font-bold shadow-lg hover:shadow-xl"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Result;
