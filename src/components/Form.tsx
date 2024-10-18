import { CharacterSelect } from "@/components/CharacterSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormProps = {
    updateViewport: () => void;
    download: () => void;
};

let gender: string;

function Form(props: FormProps) {
    const updateViewport = props.updateViewport;

    return (
        <>
            <div className="flex items-center gap-2">
                <div className="grow shrink-0">
                    <Label className="font-bold">カスタム背景</Label>
                    <Input
                        type="file"
                        name="bg"
                        id="f-bg"
                        accept="image/*"
                        onChange={updateViewport}
                    />
                </div>
                <div className="grow-0 shrink-1">
                    <Label className="font-bold">背景を削除</Label>
                    <Button
                        className="h-9 w-full rounded-md border border-input bg-red-600 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={() => {
                            (
                                document.getElementById(
                                    "f-bg"
                                ) as HTMLInputElement
                            ).value = "";
                            updateViewport();
                        }}
                    >
                        削除
                    </Button>
                </div>
            </div>
            <div className="grid w-full auto-rows-auto grid-cols-2 gap-4">
                <CharacterSelect id="c1" updateViewport={updateViewport}>
                    キャラクター1
                </CharacterSelect>
                <CharacterSelect id="s1" updateViewport={updateViewport}>
                    サポート1
                </CharacterSelect>
                <CharacterSelect id="c2" updateViewport={updateViewport}>
                    キャラクター2
                </CharacterSelect>
                <CharacterSelect id="s2" updateViewport={updateViewport}>
                    サポート2
                </CharacterSelect>
                <CharacterSelect id="c3" updateViewport={updateViewport}>
                    キャラクター3
                </CharacterSelect>
                <CharacterSelect id="s3" updateViewport={updateViewport}>
                    サポート3
                </CharacterSelect>
                <CharacterSelect id="c4" updateViewport={updateViewport}>
                    キャラクター4
                </CharacterSelect>
                <CharacterSelect id="s4" updateViewport={updateViewport}>
                    サポート4
                </CharacterSelect>
                <CharacterSelect id="c5" updateViewport={updateViewport}>
                    キャラクター5
                </CharacterSelect>
                <CharacterSelect id="s5" updateViewport={updateViewport}>
                    サポート5
                </CharacterSelect>
                <div />
                <CharacterSelect id="s6" updateViewport={updateViewport}>
                    サポート6
                </CharacterSelect>
            </div>
            <div className="grid w-full auto-rows-auto grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label className="font-bold">ユーザー名</Label>
                    <Input
                        placeholder="ユーザー名"
                        type="text"
                        name="username"
                        id="f-username"
                        onChange={updateViewport}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold">UID</Label>
                    <Input
                        placeholder="UID"
                        type="text"
                        name="uid"
                        id="f-uid"
                        onChange={() => {
                            updateViewport();
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold">世界ランク</Label>
                    <Input
                        placeholder="1~9"
                        type="number"
                        name="worldRank"
                        id="f-worldRank"
                        onChange={() => {
                            updateViewport();
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold">プレイスタイル</Label>
                    <Input
                        placeholder="のんびり など"
                        type="text"
                        name="style"
                        id="f-style"
                        onChange={() => {
                            updateViewport();
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold">時間帯</Label>
                    <Input
                        placeholder="早朝 / 深夜 など"
                        type="text"
                        name="time"
                        id="f-time"
                        onChange={() => {
                            updateViewport();
                        }}
                    />
                </div>
                <div className="space-y-2">
                    <Label className="font-bold">生息地</Label>
                    <Input
                        placeholder="Discord / Bluesky / X など"
                        type="text"
                        name="live"
                        id="f-live"
                        onChange={() => {
                            updateViewport();
                        }}
                    />
                </div>
                <div className="space-y-2 col-span-2">
                    <Label className="font-bold">コメント</Label>
                    <Textarea
                        placeholder="自由にどうぞ"
                        name="comment"
                        id="f-comment"
                        onChange={() => {
                            updateViewport();
                        }}
                        className="resize-none"
                        rows={7}
                    />
                </div>
            </div>
            <div className="grid w-full auto-rows-auto grid-cols-2 gap-4">
                <div className="grid w-full auto-rows-auto grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label className="font-bold">VC</Label>
                        <Input
                            type="text"
                            placeholder="あり / なし"
                            name="vc"
                            id="f-vc"
                            onChange={() => {
                                updateViewport();
                            }}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="font-bold">性別</Label>
                        <Input
                            type="text"
                            name="gender"
                            id="f-gender"
                            onChange={() => {
                                updateViewport();
                            }}
                        />
                    </div>
                </div>
            </div>
            <button
                className="bg-sky-500 text-white p-2 rounded-lg"
                type="button"
                onClick={props.download}
            >
                ダウンロード
            </button>
        </>
    );
}

export { Form, gender };
