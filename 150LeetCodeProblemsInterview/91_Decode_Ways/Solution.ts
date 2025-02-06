function numDecodings(s: string): number {
    if (memo.has(s)) {
        return memo.get(s) ?? 0;
    }
    if (s.at(0) === '0') {
        return 0;
    }
    if (!s) {
        return 1;
    }
    let ans = 0;
    if (s.length > 1 && parseInt(s.slice(0, 2)) <= 26) {
        ans += numDecodings(s.slice(2));
    }
    memo.set(s, ans + numDecodings(s.slice(1)));
    return memo.get(s) ?? 0;
};

const memo = new Map<string, number>();
