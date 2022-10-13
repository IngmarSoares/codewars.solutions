function isMerge(string, part1, part2) {
   if (!string.length) return !part1.length && !part2.length;
   if (part1.length && string.charAt(0) == part1.charAt(0)) {
     if (part2.length && string.charAt(0) == part2.charAt(0)) {
       return isMerge(string.substr(1), part1.substr(1), part2) || isMerge(string.substr(1), part1, part2.substr(1));
     }
     else {
       return isMerge(string.substr(1), part1.substr(1), part2);
     }
   }
   else if (part2.length && string.charAt(0) == part2.charAt(0)) {
     return isMerge(string.substr(1), part1, part2.substr(1));
   }
   else {
     return false;
   }
 }
