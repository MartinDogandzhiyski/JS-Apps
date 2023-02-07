function encodeAndDecodeMessages() {
    const messages = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);
    function encode() {
        const input = messages[0].value;
        encodedMessage = '';
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1);
            messages[0].value = '';
            
        }
        messages[1].value = encodedMessage;
    }

    function decode() {
        decodedMessage = '';
        const msg = messages[1].value;
        for (let index = 0; index < msg.length; index++) {
            const element = msg[index];
            decodedMessage += String.fromCharCode(element.charCodeAt(0) - 1);
        messages[1].value = decodedMessage;
            
        }
    }
}