function firstNonRepeatedChar(str) {
 // Write your code here
	for(int i=0; i<str.length; i++) {
		let char s = str.charAt(i);
		for(int j=0; i<str.length; j++) {
			if(i == j) {
				continue;
			}
			if(s == str.charAt(j)) {
				s = null;
				break;
			}
		}
	return s;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 