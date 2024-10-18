export function mergeRefs<T extends HTMLElement>(...refs: Ref<T>[]) {
    return (node: T) => {
        for (const ref of refs) {
            if (ref === null) {
                continue;
            }

            if (typeof ref === "function") {
                ref(node);
            } else {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                ref.current = node;
            }
        }
    };
}
