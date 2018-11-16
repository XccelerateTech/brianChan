class RLE {
    encode(message) {
        var result = [];
        if (/^\s*$/.test(message)) { return '' };
        for (let i = 0; i <= message.length - 1; i++) {
            let runLength = 1;
            while (message[i] == message[i + 1] && message[i] != " ") {
                runLength++;
                i++;
            }
            if (runLength != 1) { result.push(runLength) };
            result.push(message[i]);
        }
        return result.join("");
    };

    decode(message) {
        var result = [];
        if (/^\s*$/.test(message)) { return '' };
        for (let i = 0; i <= message.length - 1; i++) {
            if (!(isNaN(message[i])) && !(isNaN(message[i + 1])) && message[i] != " ") {
                let runLength = Number(message[i] + message[i + 1]);
                while (runLength > 0) {
                    result.push(message[i + 2]);
                    runLength--;
                }
                i = i + 2;
            } else {
                if (!(isNaN(message[i])) && message[i] != " ") {
                    let runLength = message[i];
                    while (runLength > 0) {
                        result.push(message[i + 1]);
                        runLength--;
                    }
                    i++;
                }else {result.push(message[i])}
            } 
        }
        return result.join("");
    }
}

module.exports = RLE;