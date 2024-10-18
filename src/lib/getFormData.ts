/*const Platform = {
    PS: "PlayStation",
    MOBILE: "スマホ / タブレット",
    DESKTOP: "パソコン",
} as const;

type Platform = (typeof Platform)[keyof typeof Platform];

type Platforms = {
    [key in keyof typeof Platform]: boolean;
};*/

export function getFormData() {
    const username = (document.getElementById("f-username") as HTMLInputElement)
        .value;
    const uid = (document.getElementById("f-uid") as HTMLInputElement).value;
    const worldRank = (
        document.getElementById("f-worldRank") as HTMLInputElement
    ).value;
    const style = (document.getElementById("f-style") as HTMLInputElement)
        .value;
    const time = (document.getElementById("f-time") as HTMLInputElement).value;
    const live = (document.getElementById("f-live") as HTMLInputElement).value;
    const comment = (
        document.getElementById("f-comment") as HTMLTextAreaElement
    ).value;

    const vc = (document.getElementById("f-vc") as HTMLInputElement).value;
    const localGender = (
        document.getElementById("f-gender") as HTMLInputElement
    ).value;

    return {
        username,
        uid,
        worldRank,
        style,
        time,
        live,
        comment,
        vc,
        gender: localGender,
    };
}
