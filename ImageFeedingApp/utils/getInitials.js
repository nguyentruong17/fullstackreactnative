//src code: https://github.com/TheKetan2/fullstack-react-native-code/tree/master/fullstack-react-native-code/image-feed/utils
export default function getInitials(fullname) {
    const match = fullname.match(/(\w)?\w*\s*(\w)?/);
    return match ? match.slice(1).join('') : '';
}