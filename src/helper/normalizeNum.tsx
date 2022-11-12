export default function normalizeNum(s: string): string {
    if (s.length === 1) {
        return '0'+s
    } else {
        return s
    }
}