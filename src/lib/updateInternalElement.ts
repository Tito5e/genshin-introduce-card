import { characterAtom } from "@/components/CharacterSelect";
import { getFormData } from "@/lib/getFormData";
import { getDefaultStore } from "jotai";

const store = getDefaultStore();

export function updateInternalElement() {
    const data = getFormData();

    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string") {
            applyText(key, value);
        } else if (typeof value === "boolean") {
            applyText(key, value ? "あり" : "なし");
        }
    });

    const character = store.get(characterAtom);
    if (character.c1 === "Aether" || character.c1 === "Lumine") {
        (
            document.getElementById("c1") as HTMLImageElement
        ).src = `/${character.c1}.webp`;
    } else if (character.c1 !== "EMPTY") {
        (
            document.getElementById("c1") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_Gacha_AvatarImg_${character.c1}.png`;
    } else {
        (document.getElementById("c1") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.c2 === "Aether" || character.c2 === "Lumine") {
        (
            document.getElementById("c2") as HTMLImageElement
        ).src = `/${character.c2}.webp`;
    } else if (character.c2 !== "EMPTY") {
        (
            document.getElementById("c2") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_Gacha_AvatarImg_${character.c2}.png`;
    } else {
        (document.getElementById("c2") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.c3 === "Aether" || character.c3 === "Lumine") {
        (
            document.getElementById("c3") as HTMLImageElement
        ).src = `/${character.c3}.webp`;
    } else if (character.c3 !== "EMPTY") {
        (
            document.getElementById("c3") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_Gacha_AvatarImg_${character.c3}.png`;
    } else {
        (document.getElementById("c3") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.c4 === "Aether" || character.c4 === "Lumine") {
        (
            document.getElementById("c4") as HTMLImageElement
        ).src = `/${character.c4}.webp`;
    } else if (character.c4 !== "EMPTY") {
        (
            document.getElementById("c4") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_Gacha_AvatarImg_${character.c4}.png`;
    } else {
        (document.getElementById("c4") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.c5 === "Aether" || character.c5 === "Lumine") {
        (
            document.getElementById("c5") as HTMLImageElement
        ).src = `/${character.c5}.webp`;
    } else if (character.c5 !== "EMPTY") {
        (
            document.getElementById("c5") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_Gacha_AvatarImg_${character.c5}.png`;
    } else {
        (document.getElementById("c5") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s1 === "Aether") {
        (document.getElementById("s1") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s1 === "Lumine") {
        (document.getElementById("s1") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s1 !== "EMPTY") {
        (
            document.getElementById("s1") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s1}.png`;
    } else {
        (document.getElementById("s1") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s2 === "Aether") {
        (document.getElementById("s2") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s2 === "Lumine") {
        (document.getElementById("s2") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s2 !== "EMPTY") {
        (
            document.getElementById("s2") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s2}.png`;
    } else {
        (document.getElementById("s2") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s3 === "Aether") {
        (document.getElementById("s3") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s3 === "Lumine") {
        (document.getElementById("s3") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s3 !== "EMPTY") {
        (
            document.getElementById("s3") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s3}.png`;
    } else {
        (document.getElementById("s3") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s4 === "Aether") {
        (document.getElementById("s4") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s4 === "Lumine") {
        (document.getElementById("s4") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s4 !== "EMPTY") {
        (
            document.getElementById("s4") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s4}.png`;
    } else {
        (document.getElementById("s4") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s5 === "Aether") {
        (document.getElementById("s5") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s5 === "Lumine") {
        (document.getElementById("s5") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s5 !== "EMPTY") {
        (
            document.getElementById("s5") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s5}.png`;
    } else {
        (document.getElementById("s5") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    if (character.s6 === "Aether") {
        (document.getElementById("s6") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerBoy.png";
    } else if (character.s6 === "Lumine") {
        (document.getElementById("s6") as HTMLImageElement).src =
            "https://enka.network/ui/UI_AvatarIcon_PlayerGirl.png";
    } else if (character.s6 !== "EMPTY") {
        (
            document.getElementById("s6") as HTMLImageElement
        ).src = `https://enka.network/ui/UI_AvatarIcon_${character.s6}.png`;
    } else {
        (document.getElementById("s6") as HTMLImageElement).src =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=";
    }

    const files = (document.getElementById("f-bg") as HTMLInputElement).files;
    const background = document.getElementById("bg") as HTMLImageElement | null;

    if (files && files[0]) {
        const bg = files[0];

        document.getElementById("canvas")?.classList.remove("bg-gray-100");

        if (!background) {
            const newBg = document.createElement("img");
            newBg.id = "bg";
            newBg.className =
                "absolute object-cover h-full w-full top-0 left-0 z-[-10]";
            newBg.src = URL.createObjectURL(bg);
            document.getElementById("canvas")?.prepend(newBg);
        } else {
            if (background.src && !background.src.startsWith("data:image/png;"))
                URL.revokeObjectURL(background.src);

            background.src = URL.createObjectURL(bg);
        }
    } else {
        if (background) {
            if (background.src && !background.src.startsWith("data:image/png;"))
                URL.revokeObjectURL(background.src);
            background.remove();
        }

        document.getElementById("canvas")?.classList.add("bg-gray-100");
    }
}

function applyText(id: string, value: string) {
    (document.getElementById(id) as HTMLElement).innerText = value;
}
