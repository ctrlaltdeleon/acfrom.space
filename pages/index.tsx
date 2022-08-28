import Spline from "@splinetool/react-spline";
import Container from "../components/Container";
import Unsplash from "../components/Unsplash";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Andrew De Leon
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            what up BITCH what up BITCH what up BITCH what up BITCH what up
            BITCH what up BITCH what up BITCH what up BITCH what up BITCH what
            up BITCH what up BITCH what up BITCH what up BITCH what up BITCH
            what up BITCH what up BITCH what up BITCH what up BITCH what up
            BITCH what up BITCH what up BITCH
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            <Unsplash />
          </div>
        </div>
      </div>
    </Container>
  );
}
