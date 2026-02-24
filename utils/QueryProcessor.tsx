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

  if (query.toLowerCase().includes("plus")) {
    var split = query.split(" ");
    var sum = parseInt(split[2]) + parseInt(split[4]);
    return sum.toString();
  }

  return "";
}
