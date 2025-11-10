export function merge(collection_1: number[], collection_2: number[], collection_3: number[]) {
    let BigCollection: any[] = collection_1.concat(collection_2, collection_3);
    let placeholder: any = 0;
    for (let i = 0; i < BigCollection.length; i++) {
        let swappedChecker = false;
        for (let j = 0; j < BigCollection.length; j++) {
            if (BigCollection[j] > BigCollection[j + 1]) {
                placeholder = BigCollection[j];
                BigCollection[j] = BigCollection[j + 1];
                BigCollection[j + 1] = placeholder;
                swappedChecker = true;
            }
        }
        if (!swappedChecker) { break }
    }
    return BigCollection

}
