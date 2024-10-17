/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useToPng } from "@hugocxl/react-to-image";
import clsx from "clsx";
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { InferOutput, object, string } from "valibot";

const usernameSchema = string();
const uidSchema = string();
const worldRankSchema = string();
const styleSchema = string();
const timeSchema = string();
const liveSchema = string();
const commentSchema = string();

export const FormSchema = object({
    username: usernameSchema,
    uid: uidSchema,
    worldRank: worldRankSchema,
    style: styleSchema,
    time: timeSchema,
    live: liveSchema,
    comment: commentSchema,
});

export type FormType = InferOutput<typeof FormSchema>;

function App() {
    const [_, convert, ref] = useToPng<HTMLDivElement>({
        quality: 0.8,
        width: 800,
        height: 600,
        canvasWidth: 1200,
        canvasHeight: 900,
        skipAutoScale: false,
        onStart: () => {
            const canv = document.getElementById("canvas") as HTMLElement;
            canv.style.width = "800px";
            canv.style.height = "600px";
        },
        onSuccess: (data) => {
            const link = document.createElement("a");
            link.download = "Genshin_Introduce_Card.png";
            link.href = data;
            link.click();

            const canv = document.getElementById("canvas") as HTMLElement;
            canv.style.width = "100%";
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            canv.style.height = null;
        },
    });

    const handleOnSubmit: SubmitHandler<FormType> = (_) => {};

    const form = useForm<FormType>({
        mode: "onChange",
        resolver: valibotResolver(FormSchema),
    });

    const username = form.watch("username");
    const uid = form.watch("uid");
    const worldRank = form.watch("worldRank");
    const style = form.watch("style");
    const time = form.watch("time");
    const live = form.watch("live");
    const comment = form.watch("comment");

    return (
        <>
            <header className="bg-blue-900 p-4">
                <span className="text-xl text-white">原神自己紹介カード</span>
            </header>
            <div className="w-full bg-[rgb(238_238_238)] flex-grow">
                <div className="grid w-full auto-rows-auto grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white m-4 border border-2 border-gray-400 rounded-md shadow-md p-4 flex flex-col gap-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(handleOnSubmit)}
                                className="grid w-full auto-rows-auto grid-cols-2 gap-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="ユーザー名"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="uid"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>UID</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="UID"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="worldRank"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>世界ランク</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="1~9"
                                                    type="number"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="style"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                プレイスタイル
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="のんびり など"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="time"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>時間帯</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="早朝 / 深夜 など"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="live"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>生息地</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Discord / Bluesky / X / Mixi など"
                                                    type="text"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>コメント</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="自由にどうぞ"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                        <button
                            className="bg-sky-500 text-white p-2 rounded-lg"
                            type="button"
                            onClick={convert}
                        >
                            ダウンロード
                        </button>
                    </div>
                    <div className="bg-white m-4 border border-2 border-gray-400 rounded-md shadow-md p-2">
                        <div
                            className="w-full bg-gray-200 flex flex-col gap-4 p-4 aspect-[4/3]"
                            ref={ref}
                            id="canvas"
                        >
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-zinc-700 text-4xl p-2 underline font-bold">
                                    原神自己紹介カード
                                </h1>
                                <img
                                    src="/logo.webp"
                                    className="drop-shadow-md"
                                />
                            </div>
                            {/*<div className="grid w-full grid-rows-1 grid-cols-5 gap-2">
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg">
                                    <img
                                        className="h-full object-cover"
                                        src="https://cdn.wanderer.moe/cdn-cgi/image/width=512,quality=50/genshin-impact/splash-art/zhongli-nobg.png"
                                    />
                                </div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg"></div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg"></div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg"></div>
                                <div className="bg-white bg-opacity-70 aspect-[1/2] rounded-lg"></div>
                            </div>*/}
                            <div className="grid w-full grid-rows-[min-content_min-content_min-content_auto] grid-cols-2 gap-2 flex-grow">
                                <Column label="ユーザー名">{username}</Column>
                                <Column label="UID">{uid}</Column>
                                <Column label="世界ランク">{worldRank}</Column>
                                <Column label="プレイスタイル">{style}</Column>
                                <Column label="時間帯">{time}</Column>
                                <Column label="生息地">{live}</Column>
                                <Column label="コメント" double>
                                    {comment}
                                </Column>
                            </div>
                            <div className="flex w-full justify-end">
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

type ColumnProps = {
    label?: ReactNode;
    children?: ReactNode;
    double?: boolean;
};

function Column(props: ColumnProps) {
    return (
        <div
            className={clsx(
                "bg-opacity-70 bg-white py-1 px-3 flex flex-col rounded-lg",
                { "col-span-2": props.double }
            )}
        >
            <span className="text-gray-500 text-sm overflow-x-hidden">
                {props.label}
            </span>
            <p className="text-gray-800 text-2xl whitespace-pre">
                {props.children}
            </p>
        </div>
    );
}

export default App;
