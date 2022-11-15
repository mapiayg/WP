function ex5(sentence) {
    var char1; // next char to be read
    var char2; // next char to be compared with char1
    var count; // char occurrence
    var index; // index to save new char
    newChars = []; // array of new chars
    newCharsOccu = []; // array of new chars and occurrences
    index = 0; 
    // for every char in sentence
    for (let i = 0; i < sentence.length; i++) {
        // read char
        char1 = sentence.substr(i, 1).toLowerCase();
        // if char is not in the array of new chars
        if (newChars.join('').indexOf(char1) == -1) {
            // save new char
            newChars[index] = char1;
            count = 1;
            // compare all chars after the new one
            // and update occurrence
            for (let j = i + 1; j < sentence.length; j++) {
                char2 = sentence.substr(j, 1);
                if (char2 === char1) {
                    count ++;
                }
            }
            // save char and occurence
            newCharsOccu[index] = newChars[index] + ':' + count;
            index ++;
        }
    }
    newCharsOccu.sort();
    console.log('[');
    for (let i = 0; i < newCharsOccu.length; i++){
        let char;
        if (i == newCharsOccu.length - 1) {
            char = '';
        }
        else {
            char = ',';
        }
        console.log('\t' + '\"' + newCharsOccu[i] + '\"' + char);
    }
    console.log(']');
    // show unformatted output in the input text element
    document.getElementById("console_ex5").innerHTML=newCharsOccu;
    return newCharsOccu;
}
