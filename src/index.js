var through = require('through');


var isIfRegex = /^\s*(?:\/\/){0,1}\s*#if ([A-Za-z_][A-Za-z_0-9]*)/;
var isElseRegex = /^\s*(?:\/\/){0,1}\s*#else/;
var isEndIfRegex = /^\s*(?:\/\/){0,1}\s*#endif/;

function preprocess(data, settings) {
    var processed = [], lines = data.split('\n');

    var isInIf = false, isInElse = false, definition;

    lines.forEach(function (line) {
        var match = line.match(isIfRegex);
        if (match) {
            isInIf = true;            
            definition = match[1];
            return;
        }
        if (line.match(isElseRegex) && isInIf) {
            isInElse = true;
            return;
        }
        if (line.match(isEndIfRegex)) {
            isInIf = false;
            isInElse = false;
            return;
        }
        if (isInIf) {
            if (!settings.definitions[definition] && !isInElse)
                return;
            if (settings.definitions[definition] && isInElse)
                return;
        }

        processed.push(line);
    })

    return processed.join('\n');
}

module.exports = function (file, settings) {
    var data = '';

    return through(function (buffer) {
        data += buffer;
    }, function () {
        this.queue(preprocess(data, Object.assign({ definitions: {} }, settings)));
        this.queue(null);
    });
};