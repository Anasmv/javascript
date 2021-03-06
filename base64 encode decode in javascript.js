function base64_encode(d) {
    var q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var z, y, x, w, v, u, t, s, i = 0,
        j = 0,
        p = '',
        r = [];
    if (!d) {
        return d;
    }
    do {
        z = d.charCodeAt(i++);
        y = d.charCodeAt(i++);
        x = d.charCodeAt(i++);
        s = z << 16 | y << 8 | x;
        w = s >> 18 & 0x3f;
        v = s >> 12 & 0x3f;
        u = s >> 6 & 0x3f;
        t = s & 0x3f;
        r[j++] = q.charAt(w) + q.charAt(v) + q.charAt(u) + q.charAt(t);
    } while (i < d.length);
    p = r.join('');
    var r = d.length % 3;
    return (r ? p.slice(0, r - 3) : p) + '==='.slice(r || 3);
}

function base64_decode(d) {
    var q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var z, y, x, w, v, u, t, s, i = 0,
        j = 0,
        r = [];
    if (!d) {
        return d;
    }
    d += '';
    do {
        w = q.indexOf(d.charAt(i++));
        v = q.indexOf(d.charAt(i++));
        u = q.indexOf(d.charAt(i++));
        t = q.indexOf(d.charAt(i++));
        s = w << 18 | v << 12 | u << 6 | t;
        z = s >> 16 & 0xff;
        y = s >> 8 & 0xff;
        x = s & 0xff;
        if (u == 64) {
            r[j++] = String.fromCharCode(z);
        } else if (t == 64) {
            r[j++] = String.fromCharCode(z, y);
        } else {
            r[j++] = String.fromCharCode(z, y, x);
        }
    } while (i < d.length);
    return r.join('');
}