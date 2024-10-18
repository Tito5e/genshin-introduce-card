/* eslint-disable @typescript-eslint/no-unused-vars */
import { CardColumn } from "@/components/CardColumn";
import { useToBlob, useToPng } from "@hugocxl/react-to-image";
import { useEffect } from "react";

import { Gamepad2, Laptop, Smartphone } from "lucide-react";
import { Form } from "@/components/Form";
import { mergeRefs } from "@/lib/mergeRefs";
import { updateInternalElement } from "@/lib/updateInternalElement";
import { useDebouncedCallback } from "use-debounce";

function App() {
    const [, download, ref] = useToBlob<HTMLDivElement>({
        quality: 0.8,
        width: 800,
        height: 1200,
        canvasWidth: 1200,
        canvasHeight: 1800,
        skipAutoScale: false,
        style: {
            display: "block",
            width: "800px",
            height: "1200px",
        },
        onStart: () => {
            updateInternalElement();
        },
        onSuccess: (data) => {
            if (!data) return;
            const link = document.createElement("a");
            link.download = "Genshin_Introduce_Card.png";
            link.href = URL.createObjectURL(data);
            link.click();
        },
    });

    const [, internalUpdateViewport, ref2] = useToPng<HTMLDivElement>({
        quality: 0.8,
        width: 800,
        height: 1200,
        canvasWidth: 1200,
        canvasHeight: 1800,
        skipAutoScale: false,
        style: {
            display: "block",
            width: "800px",
            height: "1200px",
        },
        onStart: () => {
            updateInternalElement();
        },
        onSuccess: (data) => {
            const viewport = document.getElementById(
                "viewport"
            ) as HTMLImageElement;
            viewport.src = data;
        },
    });

    const updateViewport = useDebouncedCallback(() => {
        internalUpdateViewport();
    }, 500);

    useEffect(() => {
        updateViewport();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <header className="bg-blue-900 p-4">
                <span className="text-xl text-white">原神自己紹介カード</span>
            </header>
            <div className="w-full bg-[rgb(238_238_238)] flex-grow">
                <div className="grid w-full auto-rows-auto grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white m-4 border border-2 border-gray-400 rounded-md shadow-md p-4 flex flex-col gap-4">
                        <Form
                            download={download}
                            updateViewport={updateViewport}
                        />
                    </div>
                    <div className="bg-white m-4 border border-2 border-gray-400 rounded-md shadow-md p-2">
                        <img
                            className="max-h-[80dvh] aspect-[2/3] block mx-auto"
                            id="viewport"
                        />
                        <div
                            className="w-full flex flex-col gap-4 p-4 aspect-[2/3] hidden"
                            ref={mergeRefs(ref, ref2)}
                            id="canvas"
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-zinc-700 text-5xl p-2 underline font-bold [text-stroke:1px_#fff] [-webkit-text-stroke:1px_#fff]">
                                    原神自己紹介カード
                                </h1>
                                <img
                                    src="/logo.webp"
                                    className="drop-shadow-md"
                                />
                            </div>
                            <div className="grid w-full grid-rows-1 grid-cols-5 gap-2 py-2">
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg overflow-hidden p-2 backdrop-blur-xl">
                                    <img
                                        className="h-full object-cover"
                                        id="c1"
                                    />
                                </div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg overflow-hidden p-2 backdrop-blur-xl">
                                    <img
                                        className="h-full object-cover"
                                        id="c2"
                                    />
                                </div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg overflow-hidden p-2 backdrop-blur-xl">
                                    <img
                                        className="h-full object-cover"
                                        id="c3"
                                    />
                                </div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg overflow-hidden p-2 backdrop-blur-xl">
                                    <img
                                        className="h-full object-cover"
                                        id="c4"
                                    />
                                </div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg overflow-hidden p-2 backdrop-blur-xl">
                                    <img
                                        className="h-full object-cover"
                                        id="c5"
                                    />
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-70 rounded-lg p-4 mb-2">
                                <h1 className="text-gray-500 text-sm mb-2">
                                    サポートキャラクター
                                </h1>
                                <div className="grid w-full grid-rows-1 grid-cols-6 gap-2">
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s1"
                                        />
                                    </div>
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s2"
                                        />
                                    </div>
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s3"
                                        />
                                    </div>
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s4"
                                        />
                                    </div>
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s5"
                                        />
                                    </div>
                                    <div className="bg-white bg-opacity-70 aspect-square rounded-lg overflow-hidden border border-2 border-gray-800">
                                        <img
                                            className="h-full object-cover"
                                            id="s6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid w-full grid-rows-[min-content_min-content_min-content_auto] grid-cols-2 gap-2 flex-grow mb-2">
                                <CardColumn label="ユーザー名" id="username" />
                                <CardColumn label="UID" id="uid" />
                                <CardColumn label="世界ランク" id="worldRank" />
                                <CardColumn label="プレイスタイル" id="style" />
                                <CardColumn label="時間帯" id="time" />
                                <CardColumn label="生息地" id="live" />
                                <CardColumn
                                    label="コメント"
                                    double
                                    id="comment"
                                />
                            </div>
                            <div className="grid w-full grid-rows-1 grid-cols-4 gap-2">
                                <CardColumn label="VC" id="vc" />
                                <CardColumn label="性別" id="gender" />
                                {/*<CardColumn
                                    label="プラットフォーム"
                                    platform
                                    id="platform"
                                >
                                    <div className="grid w-full grid-rows-1 grid-cols-3 gap-2">
                                        <div className="flex gap-2 items-center">
                                            <Laptop />: <span id="p-desktop" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Smartphone />:{" "}
                                            <span id="p-mobile" />
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Gamepad2 />: <span id="p-ps" />
                                        </div>
                                    </div>
                                </CardColumn>*/}
                            </div>
                            <div className="flex w-full justify-end flex flex-col justify-center items-end mt-4">
                                <span className="text-gray-400 text-sm">
                                    https://genshincard.titose.dev/
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 p-4">
                <span className="text-lg text-gray-300">
                    <a
                        href="https://bsky.app/profile/titose.dev"
                        target="_blank"
                        className="underline"
                    >
                        @titose.dev
                    </a>{" "}
                    on Bluesky
                </span>
            </footer>
        </>
    );
}

export default App;
