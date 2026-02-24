import { textChangeRangeIsUnchanged } from "typescript";

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "cseluzhy";
  }

  if (query.toLowerCase().includes("andrewid")) {
    return "cseluzhy";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "cseluzhy";
  }

  if (query.toLowerCase().includes("numbers") && query.toLowerCase().includes("largest")) {
    var nums = query.substring(46, query.length - 1);
    var nums2 = nums.split(",");
    return Math.max(parseInt(nums2[0]), parseInt(nums2[1]), parseInt(nums2[2])).toString();
  }

  if (query.toLowerCase().includes("multiplied") && query.toLowerCase().includes("plus")) {
    var split = query.split(" ");
    var ans = parseInt(split[2]) * parseInt(split[5]) + parseInt(split[7]);
    return ans.toString();
  }
  

  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    var nums = query.substring(59, query.length - 1);
    var nums2 = nums.split(",");
    var ans=0;
    for (var i=0; i < nums2.length; i++) {
      if (Math.sqrt(parseInt(nums2[i])) % 1 === 0 && Math.cbrt(parseInt(nums2[i])) % 1 === 0) {
        ans = parseInt(nums2[i]);
      }
    }
    return ans.toString();
  }


  if (query.toLowerCase().includes("multiplied")) {
    var split = query.split(" ");
    var sum = parseInt(split[2]) * parseInt(split[5]);
    return sum.toString();
  }

  if (query.toLowerCase().includes("divided")) {
    var split = query.split(" ");
    var sum = parseInt(split[2]) / parseInt(split[5]);
    return sum.toString();
  }

  if (query.toLowerCase().includes("minus")) {
    var split = query.split(" ");
    var sum = parseInt(split[2]) - parseInt(split[4]);
    return sum.toString();
  }

  function isPrime(n: number) {
    for (let j = 2; j < n; j++) {
      if (n % j === 0) return false;
    }
    return true;
  }

  if (query.toLowerCase().includes("primes")) {
    var nums = query.substring(42, query.length - 1);
    var nums2 = nums.split(",");
    var ans=0;
    for (var i=0; i < nums2.length; i++) {
      if (isPrime(parseInt(nums2[i]))) {
        ans = parseInt(nums2[i]);
      }
    }
    return ans.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    var split = query.split(" ");
    var sum = parseInt(split[2]) + parseInt(split[4]);
    return sum.toString();
  }

  if (query.toLowerCase().includes("power")) {
    var split = query.split(" ");
    return BigInt(Math.pow(parseInt(split[2]), parseInt(split[7]))).toString();
  }

  return "";
}
