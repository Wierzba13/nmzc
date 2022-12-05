const toTitleCase = function (str: string): string {
    let arr: string[] = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let el: string = arr[i];
        el = el.toLowerCase();
        el = el.charAt(0).toUpperCase() + el.slice(1);
        arr[i] = el;
    }

    return arr.join(" ");
}


const countWords = function (str: string): number {
    let arr: string[] = str.split(/[-_\s]/);

    return arr.length;
}


const toWords = function (str: string): string[] {
    let arr: string[] = str.split(" ");

    return arr;
}


const repeat = function (str: string, r: number): string {
    let newString: string = "";

    for (let i = 0; i < r; i++) {
        newString += str;
    }

    return newString;
}


const isAlpha = function (str: string): boolean {
    let arr: string[] = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if(/[0-9]/.test(arr[i])) {
           return false;
        }
    }

    return true;
}


const isBlank = function (str: string): boolean {
    str = str.trim();

    if(str.length == 0) {
        return true;
    }

    return false;
}


