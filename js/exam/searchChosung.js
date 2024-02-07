const strData = [
  "강원도 고성군",
  "고성군 토성면",
  "토성면 북면",
  "북면",
  "김1수",
];

const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
const searchByKoreanInitialSound = (data, initSounds) => {
  // is.replaceAll("ㄱ", "[ㄱ가-깋]").replaceAll("ㄴ", "[ㄴ나-닣]");
  const regexps = [...initSounds].map((c) => {
    const idx = ㄱㄴㄷ.indexOf(c);
    if (idx === -1) return c;
    const S = 가나다.at(idx);
    const endCode = 가나다.at(idx + 1).charCodeAt(0);
    const E = String.fromCharCode(c === "ㅎ" ? endCode : endCode - 1);

    return `[${c}${S}-${E}]`;
  });

  const regex = new RegExp(regexps.join());
  data.filter((d) => regex.test(d));
};

// const result = strData.filter((s) => s.match(/[ㄱ가-깋][ㅅ사-싷]/));
// console.log(result);

// const result = searchByKoreanInitialSound(strData, "ㄱㅅㄱ");
// console.log(result);

assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  "강원도 고성군",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  "강원도 고성군",
  "고성군 토성면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  "고성군 토성면",
  "토성면 북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  "토성면 북면",
  "북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
