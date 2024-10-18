import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSetAtom } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { ReactNode } from "react";

type CharacterSelectProps = {
    id:
        | "c1"
        | "c2"
        | "c3"
        | "c4"
        | "c5"
        | "s1"
        | "s2"
        | "s3"
        | "s4"
        | "s5"
        | "s6";

    updateViewport: () => void;
    children?: ReactNode;
};

export const characterAtom = atomWithImmer({
    c1: "EMPTY",
    c2: "EMPTY",
    c3: "EMPTY",
    c4: "EMPTY",
    c5: "EMPTY",
    s1: "EMPTY",
    s2: "EMPTY",
    s3: "EMPTY",
    s4: "EMPTY",
    s5: "EMPTY",
    s6: "EMPTY",
});

function CharacterSelect(props: CharacterSelectProps) {
    const setCharacter = useSetAtom(characterAtom);
    return (
        <div className="space-y-2">
            <Label className="font-bold">{props.children}</Label>
            <Select
                onValueChange={(value) => {
                    setCharacter((prev) => {
                        return {
                            ...prev,
                            [props.id]: value,
                        };
                    });
                    props.updateViewport();
                }}
            >
                <SelectTrigger>
                    <SelectValue placeholder="キャラクターを選択" />
                </SelectTrigger>
                <SelectContent>
                    <div className="border-double border-4 border-gray-600 rounded-lg m-2">
                        <SelectItem value="Aether">空</SelectItem>
                        <SelectItem value="Lumine">蛍</SelectItem>
                    </div>

                    <SelectGroup className="border-double border-4 border-red-400 rounded-lg m-2">
                        <SelectLabel>炎元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Ambor">アンバー</SelectItem>
                            <SelectItem value="Xiangling">香菱</SelectItem>
                            <SelectItem value="Diluc">ディルック</SelectItem>
                            <SelectItem value="Bennett">ベネット</SelectItem>
                            <SelectItem value="Klee">クレー</SelectItem>
                            <SelectItem value="Xinyan">辛炎</SelectItem>
                            <SelectItem value="Hutao">胡桃</SelectItem>
                            <SelectItem value="Feiyan">煙緋</SelectItem>
                            <SelectItem value="Yoimiya">宵宮</SelectItem>
                            <SelectItem value="Tohma">トーマ</SelectItem>
                            <SelectItem value="Dehya">ディシア</SelectItem>
                            <SelectItem value="Liney">リネ</SelectItem>
                            <SelectItem value="Chevreuse">
                                シュヴルーズ
                            </SelectItem>
                            <SelectItem value="Gaming">嘉明</SelectItem>
                            <SelectItem value="Arlecchino">
                                アルレッキーノ
                            </SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-blue-400 rounded-lg m-2">
                        <SelectLabel>水元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Barbara">バーバラ</SelectItem>
                            <SelectItem value="Mona">モナ</SelectItem>
                            <SelectItem value="Xingqiu">行秋</SelectItem>
                            <SelectItem value="Tartaglia">
                                タルタリヤ
                            </SelectItem>
                            <SelectItem value="Kokomi">珊瑚宮心海</SelectItem>
                            <SelectItem value="Ayato">神里綾人</SelectItem>
                            <SelectItem value="Yelan">夜蘭</SelectItem>
                            <SelectItem value="Candace">
                                キャンディス
                            </SelectItem>
                            <SelectItem value="Nilou">ニィロウ</SelectItem>
                            <SelectItem value="Neuvillette">
                                ヌヴィレット
                            </SelectItem>
                            <SelectItem value="Furina">フリーナ</SelectItem>
                            <SelectItem value="Sigewinne">
                                シグウィン
                            </SelectItem>
                            <SelectItem value="Mualani">ムアラ二</SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-blue-200 rounded-lg m-2">
                        <SelectLabel>氷元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Kaeya">ガイア</SelectItem>
                            <SelectItem value="Chongyun">重雲</SelectItem>
                            <SelectItem value="Qiqi">七七</SelectItem>
                            <SelectItem value="Diona">ディオナ</SelectItem>
                            <SelectItem value="Ganyu">甘雨</SelectItem>
                            <SelectItem value="Rosaria">ロサリア</SelectItem>
                            <SelectItem value="Eula">エウルア</SelectItem>
                            <SelectItem value="Ayaka">神里綾華</SelectItem>
                            <SelectItem value="Aloy">アーロイ</SelectItem>
                            <SelectItem value="Shenhe">申鶴</SelectItem>
                            <SelectItem value="Layla">レイラ</SelectItem>
                            <SelectItem value="Mika">ミカ</SelectItem>
                            <SelectItem value="Freminet">フレミネ</SelectItem>
                            <SelectItem value="Wriothesley">
                                リオセスリ
                            </SelectItem>
                            <SelectItem value="Charlotte">
                                シャルロット
                            </SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-purple-400 rounded-lg m-2">
                        <SelectLabel>雷元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Keqing">刻晴</SelectItem>
                            <SelectItem value="Fischl">フィッシュル</SelectItem>
                            <SelectItem value="Beidou">北斗</SelectItem>
                            <SelectItem value="Lisa">リサ</SelectItem>
                            <SelectItem value="Razor">レザー</SelectItem>
                            <SelectItem value="Sara">九条裟羅</SelectItem>
                            <SelectItem value="Shougun">雷電将軍</SelectItem>
                            <SelectItem value="Yae">八重神子</SelectItem>
                            <SelectItem value="Shinobu">久岐忍</SelectItem>
                            <SelectItem value="Dori">ドリー</SelectItem>
                            <SelectItem value="Cyno">セノ</SelectItem>
                            <SelectItem value="Clorinde">クロリンデ</SelectItem>
                            <SelectItem value="Sethos">セトス</SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-green-600 rounded-lg m-2">
                        <SelectLabel>風元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Venti">ウェンティ</SelectItem>
                            <SelectItem value="Qin">ジン</SelectItem>
                            <SelectItem value="Sucrose">スクロース</SelectItem>
                            <SelectItem value="Xiao">魈</SelectItem>
                            <SelectItem value="Kazuha">楓原万葉</SelectItem>
                            <SelectItem value="Sayu">早柚</SelectItem>
                            <SelectItem value="Heizo">鹿野院平蔵</SelectItem>
                            <SelectItem value="Faruzan">ファルザン</SelectItem>
                            <SelectItem value="Wanderer">放浪者</SelectItem>
                            <SelectItem value="Linette">リネット</SelectItem>
                            <SelectItem value="Liuyun">閑雲</SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-yellow-600 rounded-lg m-2">
                        <SelectLabel>岩元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Ningguang">凝光</SelectItem>
                            <SelectItem value="Noel">ノエル</SelectItem>
                            <SelectItem value="Zhongli">鍾離</SelectItem>
                            <SelectItem value="Albedo">アルベド</SelectItem>
                            <SelectItem value="Itto">荒瀧一斗</SelectItem>
                            <SelectItem value="Gorou">ゴロー</SelectItem>
                            <SelectItem value="Yunjin">雲菫</SelectItem>
                            <SelectItem value="Navia">ナヴィア</SelectItem>
                            <SelectItem value="Chiori">千織</SelectItem>
                            <SelectItem value="Kachina">カチーナ</SelectItem>
                            <SelectItem value="Xilonen">シロネン</SelectItem>
                        </div>
                    </SelectGroup>
                    <SelectGroup className="border-double border-4 border-green-400 rounded-lg m-2">
                        <SelectLabel>草元素</SelectLabel>
                        <div className="pl-2">
                            <SelectItem value="Collei">コレイ</SelectItem>
                            <SelectItem value="Tighnari">ティナリ</SelectItem>
                            <SelectItem value="Nahida">ナヒーダ</SelectItem>
                            <SelectItem value="Alhatham">
                                アルハイゼン
                            </SelectItem>
                            <SelectItem value="Yaoyao">ヨォーヨ</SelectItem>
                            <SelectItem value="Kaveh">カーヴェ</SelectItem>
                            <SelectItem value="Baizhuer">白朮</SelectItem>
                            <SelectItem value="Momoka">綺良々</SelectItem>
                            <SelectItem value="Emilie">エミリエ</SelectItem>
                            <SelectItem value="Kinich">キィニチ</SelectItem>
                        </div>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export { CharacterSelect };
