// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// var longestPalindrome = function(s) {
//     var result = '';
//     var string = '';
//     var min = 0;
//     for (var i = 0, k = i; i < s.length; i++) {
//       k = i;
//       for (var j = s.length-1; j > i; j--) {
//         if (string.length !== s.length && string.length - 1 !== s.length) {
//           if (s[k] === s[j]) {
//             string = string + s[k]
//             k++
//           } else {
//             string = '';
//             k = i;
//           }
//           if (string.length > min) {
//             result = string;
//             min = string.length;
//           }
//           console.log(string, result)

//         }
//       }
//     }
//       if (result.length % 2 === 1 && result.length * 2 <= s.length) {
//         result = result + result.split('').reverse().join('');
//       } else if (result.length % 2 === 0 && result.length * 2-1 <= s.length) {
//         result = result + result.substring(0, result.length - 1).split('').reverse().join('');
//       }
//     if (s === '') {
//       return ''
//     } else if (result === '') {
//       return s[0]
//     }
//     return result;
//   };


  var longestPalindrome = function(s) {
    var result = '';
    var string = [];
    var min = 0;
    var obj = {};
    for (var i = 0, k = i; i < s.length; i++) {
      console.log(min)
      if (min >= s.length / 2) {
          break;
        }
      k = i;
      string = [];
      for (var j = s.length-1, l = j; j > i; j--) {
        if (min >= s.length / 2) {
          break;
        }
        string = [];
        k = i;
        l = j
        while (s[k] === s[l] && l > 0) {
          string[k] = s[k]
          string[l] = s[l]
          k++
          l--
        }
        if (string.slice(k, l+1).includes(undefined)) {
          string = [];
        }
        if (string.join('').length > min) {
          result = string;
          min = string.join('').length;
        }
      }
    }
    for (var m = 0, n=s.length-1; m < s.substring(0, s.length/2).length; m++, n--) {
        obj[s[m]] = true;
        obj[s[n]] = true;
    }
    if (Object.keys(obj).length === 2 && s.length % 2 === 1) {
      return s;
    }
    if (s === '') {
      return ''
    } else if (result.length === 0) {
      return s[0]
    }
    return result.join('');
  };

/* TEST */
// console.log(longestPalindrome("kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"));

// console.log(longestPalindrome("aaabaaaa"));
// console.log(longestPalindrome("abcdasdfghjkldcba"));

// console.log(longestPalindrome("aba"));
// console.log(longestPalindrome("abcba"));
// console.log(longestPalindrome("abcda"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome('bceabaced'));
// console.log(longestPalindrome('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'));

// console.log([ undefined, 'b', 'b' ].join('-'))