import Image from "next/image";

export default function Home() {
    return (
        <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
                <Image
                    src="/jerry.jpeg"
                    alt="Next.js logo"
                    width={650}
                    height={38}
                    className="rounded-2xl"
                />
                <div className="text-center">
                    <p className="pb-6 text-xl">
                        Hello, wonderful team. I hope you are all well.😄 <br />{" "}
                        Get to work and remember that no matter how stressful it
                        is, it will pass. 🎉 <br /> Don&apos;t hesitate to ask
                        for support at any time.🚀
                    </p>
                    <span className="mt-6 text-2xl font-bold text-rose-400 sm:text-left sm:text-3xl">
                        Your awesome leader, Hala! 😎
                    </span>
                </div>
            </main>
        </div>
    );
}
