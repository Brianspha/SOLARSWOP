"use strict";

void 0===self.Iconify&&(self.Iconify= {
    isReady:  !1
}

, self.SimpleSVG=self.Iconify, function(e, t) {
    var i, n, o, r, s, a, c, l, d, u, f= {
        config: {}

        , version:"1.0.0-rc1"
    }

    ;

    i=f, function() {
        function e(e, t) {
            var i;

            return t=t|| {
                bubbles:  !1, cancelable: !1, detail:void 0
            }

            , (i=document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }

        "function" !=typeof window.CustomEvent&&(e.prototype=window.Event.prototype, window.CustomEvent=e)
    }

    (), i.event=function(e, t) {
        document.dispatchEvent(new CustomEvent(e, t))
    }

    , function(t, i, n) {
        var o=null;

        function e() {
            document.removeEventListener("DOMContentLoaded", e), window.removeEventListener("load", e), i.DOMReadyCallback()
        }

        i.DOMReadyCallback=function() {
            i.domready= !0, i.nextInitItem()
        }

        , i.initTimeout=function(e) {
            function t() {
                if(null !==o) {
                    if( !1 !==o.callback())return o.stop(), void i.nextInitItem();
                    o.counter++, 10 !==o.counter&&25 !==o.counter||(window.clearInterval(o.id), o.id=window.setInterval(t, 10===o.counter?250: 1e3))
                }
            }

            null !==o&&o.stop(), o= {
                id:window.setInterval(t, 100), counter:0, callback:e, stop:function() {
                    window.clearInterval(o.id), o=null
                }

                , nextTick:t
            }
        }

        , i.domready= !1, i.ready= !1, i.initQueue=[], i.readyQueue=[], i.nextInitItem=function() {
            var e;

            if( !i.ready) {
                if(i.initQueue.length)e=i.initQueue.shift();

                else {
                    if( !i.domready)return void i.initTimeout(function() {
                        return !i.domready&&document.body&&i.scanDOM(), i.domready
                    }

                    );
                    if( !i.readyQueue.length)return i.ready=t.isReady= !0, i.event(n._readyEvent), void i.scanDOM();
                    e=i.readyQueue.shift()
                }

                 !1 !==e()&&i.nextInitItem()
            }
        }

        , i.addStylesheet=function(e) {
            var t;
            return document.head&&document.body?((t=document.createElement("style")).type="text/css", t.innerHTML="span.iconify, i.iconify, iconify-icon { display: inline-block; width: 1em; }", null !==document.head.firstChild?document.head.insertBefore(t, document.head.firstChild): document.head.appendChild(t),  !0): ! !i.domready||(e||i.initTimeout(i.addStylesheet.bind(null,  !0)),  !1)
        }

        , i.initQueue.push(i.addStylesheet.bind(null,  !1)), t.ready=function(e) {
            t.isReady?window.setTimeout(e): document.addEventListener(n._readyEvent, e)
        }

        , window.setTimeout(function() {
            "complete"===document.readyState||"loading" !==document.readyState&& !document.documentElement.doScroll?i.domready= !0: (document.addEventListener("DOMContentLoaded", e), window.addEventListener("load", e)), i.nextInitItem()
        }

        )
    }

    (e, f, f.config), (n=f.config).SVGAttributes= {}

    , n._imageClass="iconify", n._loadingClass="svg-loading", n._iconAttribute="data-icon", n._rotateAttribute="data-rotate", n._flipAttribute="data-flip", n._inlineModeAttribute="data-inline", n._alignAttribute="data-align", n._appendAttribute="data-icon-append", n._appendedClass="svg-appended", n._readyEvent="IconifyReady", n._webComponentsPolyfill="//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.24/webcomponents-lite.min.js", n._classListPolyfill="//cdnjs.cloudflare.com/ajax/libs/classlist/1.1.20150312/classList.min.js", (o=f.config).defaultAPI="//api.iconify.design/{prefix}.js?icons={icons}", o.API= {}

    , o.loaderMaxURLSize=500, o.loadBeforeDOMReady= !(document&&document.body), o._loaderEvent="IconifyAddedIcons", o.sessionStorage= !0, o.localStorage= ! !(window&&window.localStorage&&window.localStorage.length), function(e, i, t, o) {
        function n(t, i, e) {
            var n=t;

            if("_" !==t.slice(0, 1)) {
                if(void 0===o[t]) {
                    if( !e||void 0===o["_"+t])return;
                    n="_"+t
                }

                switch(n) {
                    case"API":case"SVGAttributes":Object.keys(i).forEach(function(e) {
                        null===i[t]?delete o[n][e]: o[n][e]=i[e]
                    }

                    );
                    break;
                    default:o[n]=i
                }
            }
        }

        e.setConfig=function(e, t) {
            n(e, t,  !1)
        }

        , e.setCustomAPI=function(e, t) {
            switch(typeof e) {
                case"string": [e];
                break;

                case"object":if(e instanceof Array) {
                    e;
                    break
                }

                default:return
            }

            e.forEach(function(e) {
                null===t?delete o.API[e]: o.API[e]=t
            }

            )
        }

        , e.getConfig=function(e) {
            return void 0===o[e]?void 0===o["_"+e]?null: o["_"+e]:o[e]
        }

        , ["SimpleSVG", "Iconify"].forEach(function(e) {
            var t;

            void 0 !==i[e+"Config"]&&"object"==typeof i[e+"Config"]&&(t=i[e+"Config"], Object.keys(t).forEach(function(e) {
                n(e, t,  !0)
            }

            ))
        }

        )
    }

    (e, t, 0, f.config), s=(r=f).config, a=t, r.initQueue.push(function() {
        var e= {
            observer:  !1, classList: !1
        }

        , t= {
            observer:  !1, classList: !1
        }

        ;

        function i(e) {
            var t;
            return !e.length||(document.head?((t=document.createElement("script")).setAttribute("src", e), t.setAttribute("type", "text/javascript"), document.head.appendChild(t),  !0): r.domready)
        }

        function n() {
            return"classList"in document.createElement("div")||(t.classList||(t.classList=i(s._classListPolyfill)),  !1)
        }

        function o() {
            return a.MutationObserver&&a.WeakMap||t.observer||(t.observer=i(s._webComponentsPolyfill)),  !0
        }

        return e.classList= !n(), e.observer= !o(),  !e.classList&& !e.observer||(r.initTimeout(function() {
            return !(e.observer&& !o()||e.classList&& !n())
        }

        ),  !1)
    }

    ), f.getPrefix=function(e, t) {
        var i;

        return"string"==typeof t&&"" !==t? {
            prefix: t, icon:e
        }

        :2===(i=e.split(":")).length? {
            prefix: i[0], icon:i[1]
        }

        :1<(i=e.split("-")).length? {
            prefix: t=i.shift(), icon:i.join("-")
        }

        : {
            prefix: "", icon:e
        }
    }

    , function() {
        var s=f.getPrefix, t= {
            left: 0, top:0, width:16, height:16, rotate:0, vFlip: !1, hFlip: !1
        }

        , e=["left", "top", "width", "height", "body", "rotate", "vFlip", "hFlip", "inlineTop", "inlineHeight", "verticalAlign"];

        function a(e, t) {
            return function(e, t) {
                switch(e) {
                    case"rotate": return t=parseInt(t), isNaN(t)?null:t;
                    case"width": case"height":case"inlineHeight":case"inlineTop":case"verticalAlign":return t=parseFloat(t), isNaN(t)?null:t;
                    case"vFlip": case"hFlip":return ! !t;
                    case"body": case"parent":return"string"==typeof t?t:null
                }

                return t
            }

            ("rotate", e+t)
        }

        function c(e, t) {
            return ! !e != ! !t
        }

        function l(e) {
            var i= {}

            ;

            return(void 0===e._defaults?[e, t]:[e, e._defaults, t]).forEach(function(t) {
                Object.keys(t).forEach(function(e) {
                    "object" !=typeof t[e]&&void 0===i[e]&&(i[e]=t[e])
                }

                )
            }

            ), void 0===i.inlineTop&&(i.inlineTop=i.top), void 0===i.inlineHeight&&(i.inlineHeight=i.height), void 0===i.verticalAlign&&(i.height%7==0&&i.height%8 !=0?i.verticalAlign=-.143:i.verticalAlign=-.125), i
        }

        function i() {
            return this._icons= {}

            , this._aliases= {}

            , this._resolved= {}

            , this._add=function(e, t, i) {
                var n=e?"_aliases": "_icons";

                void 0===this._resolved[t.prefix]?(this._resolved[t.prefix]= {}

                , this._icons[t.prefix]= {}

                , this._aliases[t.prefix]= {}

                ):(delete this._icons[t.prefix][t.icon], delete this._aliases[t.prefix][t.icon]), this._resolved[t.prefix][t.icon]= !1, this[n][t.prefix][t.icon]=i
            }

            , this._resolveIcon=function(e) {
                var t, i, n, o, r, s;
                if(void 0===this._resolved[e.prefix]||void 0===this._resolved[e.prefix][e.icon])return null;
                if( !1 !==this._resolved[e.prefix][e.icon])return this._resolved[e.prefix][e.icon];
                if(void 0 !==this._icons[e.prefix][e.icon])return this._resolved[e.prefix][e.icon]=l(this._icons[e.prefix][e.icon]);

                for(i=0, t=this._aliases[e.prefix][e.icon], n= {}

                , Object.keys(t).forEach(function(e) {
                    "parent" !==e&&(n[e]=t[e])
                }

                ), o=t.parent;
                ;

                ) {
                    if(5<++i||void 0===this._resolved[e.prefix][o])return this._resolved[e.prefix][e.icon]=null;

                    if(r=void 0===this._icons[e.prefix][o], s=this[r?"_aliases":"_icons"][e.prefix][o], Object.keys(s).forEach(function(e) {
                        if(void 0 !==n[e])switch(e) {
                            case"rotate": n[e]=a(n[e], s[e]);
                            break;
                            case"hFlip": case"vFlip":n[e]=c(n[e], s[e])
                        }

                        else"parent" !==e&&(n[e]=s[e])
                    }

                    ),  !r)break;
                    o=s.parent
                }

                return this._resolved[e.prefix][e.icon]=l(n)
            }

            , this.addCollection=function(n) {
                var o=this, r= {}

                ;

                e.forEach(function(e) {
                    void 0 !==n[e]?r[e]=n[e]: void 0 !==t[e]&&(r[e]=t[e])
                }

                ), void 0 !==n.icons&&Object.keys(n.icons).forEach(function(e) {
                    var t=s(e, n.prefix), i=n.icons[e];
                    void 0 !==i.body&&(i._defaults=r, o._add( !1, t, i))
                }

                ), void 0 !==n.aliases&&Object.keys(n.aliases).forEach(function(e) {
                    var t=s(e, n.prefix), i=n.aliases[e];

                    if(void 0 !==i.parent) {
                        if(void 0===n.prefix) {
                            if(i.parent.slice(0, t.prefix.length) !==t.prefix)return;
                            i.parent=i.parent.slice(t.prefix.length+1)
                        }

                        o._add( !0, t, i)
                    }
                }

                )
            }

            , this.addIcon=function(e, t, i) {
                var n=void 0 !==t.parent, o=s(e, i);

                if(n&&void 0===i) {
                    if(t.parent.slice(0, o.prefix.length) !==o.prefix)return;
                    t.parent=t.parent.slice(o.prefix.length+1)
                }

                this._add(n, o, t)
            }

            , this.exists=function(e, t) {
                var i=s(e, t);
                return void 0 !==this._resolved[i.prefix]&&void 0 !==this._resolved[i.prefix][i.icon]
            }

            , this.getIcon=function(e, t) {
                var i=s(e, t);
                return this._resolveIcon(i)
            }

            , this.copyIcon=function(e, t) {
                var i, n=this.getIcon(e, t);

                return null===n?null:(i= {}

                , Object.keys(n).forEach(function(e) {
                    i[e]=n[e]
                }

                ), i)
            }

            , this.list=function(e) {
                var i, n;

                return void 0 !==e?void 0===this._resolved[e]?[]:Object.keys(this._resolved[e]):(i=[], n=this._resolved, Object.keys(n).forEach(function(t) {
                    i=i.concat(Object.keys(n[t]).map(function(e) {
                        return""===t&&-1===e.indexOf("-")?e: t+":"+e
                    }

                    ))
                }

                ), i)
            }

            , this
        }

        i.mergeFlip=c, i.mergeRotation=a, i.blankIcon=function() {
            return l( {
                body: "", width:16, height:16
            }

            )
        }

        , f.Storage=i
    }

    (), function(t, e, i) {
        var n= !1, o=new e.Storage;

        function r() {
            n&&(n= !1, e.scanDOM())
        }

        t.addCollection=function(e) {
            o.addCollection(e), n||(n= !0, window.setTimeout(r, 0))
        }

        , t.addIcon=function(e, t) {
            o.addIcon(e, t), n||(n= !0, window.setTimeout(r, 0))
        }

        , t.iconExists=o.exists.bind(o), t.getIcon=o.copyIcon.bind(o), t.listIcons=o.list.bind(o), ["SimpleSVG", "Iconify"].forEach(function(e) {
            void 0 !==i[e+"Preload"]&&i[e+"Preload"]instanceof Array&&i[e+"Preload"].forEach(function(e) {
                "object"==typeof e&&void 0 !==e.icons&&t.addCollection(e)
            }

            )
        }

        )
    }

    (e, f, t), function() {
        var e=f.Storage, w=f.config, c=/(-?[0-9.]*[0-9]+[0-9.]*)/g, l=/^-?[0-9.]*[0-9]+[0-9.]*$/g, _=["width", "height", "inline"], x=0;

        function I(e, t, i) {
            var n, o, r, s, a;
            if(1===t)return e;
            if(i=void 0===i?100: i, "number"==typeof e)return Math.ceil(e*t*i)/i;
            if("string" !=typeof e)return e;
            if(null===(n=e.split(c))|| !n.length)return e;
            for(o=[], r=n.shift(), s=l.test(r);
            ;

            ) {
                if(s?(a=parseFloat(r), isNaN(a)?o.push(r): o.push(Math.ceil(a*t*i)/i)):o.push(r), void 0===(r=n.shift()))return o.join("");
                s= !s
            }
        }

        function A(e, t, i) {
            var n, o, r;
            for(n=0;
            n<t.length;

            n++)if(void 0 !==e[o=t[n]])switch(typeof(r=e[o])) {
                case"boolean": return r;
                case"number": return ! !r;

                case"string":switch(r.toLowerCase()) {
                    case"1": case"true":case o:return !0;
                    case"0": case"false":case"":return !1
                }
            }

            return i
        }

        function E(e, t, i) {
            var n, o;
            for(n=0;
            n<t.length;
            n++)if(void 0 !==e[o=t[n]])return e[o];
            return i
        }

        f.SVG=function(y) {
            return y||(y=e.blankIcon()), this.item=y, this.height=function(e, t, i) {
                return void 0===e?t?this.item.inlineHeight: this.item.height:I(e, (t?this.item.inlineHeight:this.item.height)/this.item.width, i)
            }

            , this.width=function(e, t, i) {
                return void 0===e?this.item.width: I(e, this.item.width/(t?this.item.inlineHeight:this.item.height), i)
            }

            , this.defaultAttributes=function() {
                return {
                    xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink":"http://www.w3.org/1999/xlink", "aria-hidden":"true"
                }
            }

            , this.preserveAspectRatio=function(e, t, i) {
                var n="";

                switch(e) {
                    case"left": n+="xMin";
                    break;
                    case"right": n+="xMax";
                    break;
                    default: n+="xMid"
                }

                switch(t) {
                    case"top": n+="YMin";
                    break;
                    case"bottom": n+="YMax";
                    break;
                    default: n+="YMid"
                }

                return n+= !0===i?" slice":" meet"
            }

            , this.attributes=function(t) {
                var e, i, n, o, r, s, a, c, l, d, u, f, h, p= {
                    horizontal: "center", vertical:"middle", crop: !1
                }

                , v= {
                    rotate: y.rotate, hFlip:y.hFlip, vFlip:y.vFlip
                }

                , g="", b=this.defaultAttributes(), m=[];

                if(s=A(t="object"==typeof t?t: {}

                , [w._inlineModeAttribute, "inline"],  !0), d=A(t, [w._appendAttribute],  !1), e= {
                    left: y.left, top:s?y.inlineTop:y.top, width:y.width, height:s?y.inlineHeight:y.height
                }

                , "string"==typeof t[w._flipAttribute]&&t[w._flipAttribute].split(/[\s, ]+/).forEach(function(e) {
                    switch(e=e.toLowerCase()) {
                        case"horizontal": v.hFlip= !v.hFlip;
                        break;
                        case"vertical": v.vFlip= !v.vFlip
                    }
                }

                ), void 0 !==t[w._rotateAttribute])if("number"==typeof(c=t[w._rotateAttribute]))v.rotate+=c;
                else if("string"==typeof c)if(""===(u=c.replace(/^-?[0-9.]*/, "")))c=parseInt(c), isNaN(c)||(v.rotate+=c);

                else if(u !==c) {
                    switch(l= !1, u) {
                        case"%": l=25;
                        break;
                        case"deg": l=90
                    }

                    l&&(c=parseInt(c.slice(0, c.length-u.length)), isNaN(c)||(v.rotate+=Math.round(c/l)))
                }

                switch(v.hFlip?v.vFlip?v.rotate+=2:(m.push("translate("+(e.width+e.left)+" "+(0-e.top)+")"), m.push("scale(-1 1)"), e.top=e.left=0):v.vFlip&&(m.push("translate("+(0-e.left)+" "+(e.height+e.top)+")"), m.push("scale(1 -1)"), e.top=e.left=0), v.rotate%4) {
                    case 1: h=e.height/2+e.top, m.unshift("rotate(90 "+h+" "+h+")"), 0===e.left&&0===e.top||(h=e.left, e.left=e.top, e.top=h), e.width !==e.height&&(h=e.width, e.width=e.height, e.height=h);
                    break;
                    case 2: m.unshift("rotate(180 "+(e.width/2+e.left)+" "+(e.height/2+e.top)+")");
                    break;
                    case 3: h=e.width/2+e.left, m.unshift("rotate(-90 "+h+" "+h+")"), 0===e.left&&0===e.top||(h=e.left, e.left=e.top, e.top=h), e.width !==e.height&&(h=e.width, e.width=e.height, e.height=h)
                }

                return i=E(t, ["data-width", "width"], null), n=E(t, ["data-height", "height"], null), null===i&&null===n&&(n="1em"), null !==i&&null !==n?(o=i, r=n):null !==i?r=I(o=i, e.height/e.width):o=I(r=n, e.width/e.height),  !1 !==o&&(b.width="auto"===o?e.width:o),  !1 !==r&&(b.height="auto"===r?e.height:r), s&&0 !==y.verticalAlign&&(g+="vertical-align: "+y.verticalAlign+"em;"), "string"==typeof t[w._alignAttribute]&&t[w._alignAttribute].toLowerCase().split(/[\s, ]+/).forEach(function(e) {
                    switch(e) {
                        case"left": case"right":case"center":p.horizontal=e;
                        break;
                        case"top": case"bottom":case"middle":p.vertical=e;
                        break;
                        case"crop": p.crop= !0;
                        break;
                        case"meet": p.crop= !1
                    }
                }

                ), g+="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);", b.style=g+(void 0===t.style?"":t.style), b.preserveAspectRatio=this.preserveAspectRatio(p.horizontal, p.vertical, p.crop), b.viewBox=e.left+" "+e.top+" "+e.width+" "+e.height, a=function(i) {
                    var e, n, t=/\sid="(\S+)"/g, o=[];

                    function r(e, t, i) {
                        for(var n=0;
                        -1 !==(n=i.indexOf(e, n));
                        )i=i.slice(0, n)+t+i.slice(n+e.length), n+=t.length;
                        return i
                    }

                    for(;
                    e=t.exec(i);
                    )o.push(e[1]);

                    return o.length&&(n="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-", o.forEach(function(e) {
                        var t=n+x;
                        x++, i=r("(#"+e+")", "(#"+t+")", i=r('="#'+e+'"', '="#'+t+'"', i=r('="'+e+'"', '="'+t+'"', i)))
                    }

                    )), i
                }

                (this.item.body), m.length&&(a='<g transform="'+m.join(" ")+'">'+a+"</g>"), f= {}

                , Object.keys(t).forEach(function(e) {
                    void 0===b[e]&&-1===_.indexOf(e)&&(f[e]=t[e])
                }

                ), {
                    attributes: b, elementAttributes:f, body:a, append:d
                }
            }

            , this
        }
    }

    (), l=(c=f).config._loadingClass, c.newImage=function(e, t, i) {
        return {
            element: e, icon:t, parser:i, loading:e.classList.contains(l)
        }
    }

    , c.parsedImage=function(e, t) {
        return {
            element: e, icon:t
        }
    }

    , c.getImageAttributes=function(t) {
        var e, i, n= {}

        ;
        if( !t.element.hasAttributes())return n;
        for(e=0;
        e<t.element.attributes.length;
        e++)i=t.element.attributes[e], n[i.name]=i.value;

        return t.parser&&void 0 !==t.parser.filterAttributes&&(n=t.parser.filterAttributes(t, n)), void 0 !==n.class&&(n.class=n.class.split(" ").filter(function(e) {
            return e !==l
        }

        ), t.parser&&void 0 !==t.parser.filterClasses&&(n.class=t.parser.filterClasses(t, n.class)), n.class=n.class.join(" ")), void 0 !==t.attributes&&Object.keys(t.attributes).forEach(function(e) {
            n[e]=t.attributes[e]
        }

        ), n
    }

    , function(n, f, e) {
        var s=e._imageClass, t=e._loadingClass, i=e._appendedClass, a=e._iconAttribute, o=e._inlineModeAttribute, r=":not(svg):not(."+i+")", c=":not(."+t+")", l="."+t, h= {
            iconify: {
                selector:"."+s, selectorAll:"."+s+r, selectorNew:"."+s+r+c, selectorLoading:"."+s+r+l, icon:function(e) {
                    var t, i=e.getAttribute(a);
                    if("string"==typeof i)return i;
                    for(var n=0;
                    n<e.classList.length;
                    n++)if(5<(t=e.classList[n]).length&&"icon:"===t.slice(0, 5))return t.slice(5);
                    return""
                }

                , filterClasses:function(e, t) {
                    var i, n, o;
                    for(n=0;
                    n<t.length;

                    n++)"icon-"===(i=t[n]).slice(0, 5)&&2===(i=i.slice(5).split(":")).length&&(o="data-"+i[0], void 0===e.attributes&&(e.attributes= {}

                    ), e.attributes[o]=i[1]);
                    return t
                }
            }
        }

        , p=Object.keys(h);

        n.addFinder=function(e, t) {
            void 0===t.selectorAll&&(t.selectorAll=t.selector+r), void 0===t.selectorNew&&(t.selectorNew=t.selector+r+c), void 0===t.selectorLoading&&(t.selectorLoading=t.selector+r+l), h[e]=t, p=Object.keys(h), n.isReady&&n.scanDOM()
        }

        , n.addTag=function(e, i, t) {
            n.addFinder("tag-"+e, {
                selector:e, icon:null==t?h.iconify.icon:t, filterAttributes:function(e, t) {
                    return void 0===t[o]&&(t[o]=i), t
                }
            }

            )
        }

        ;

        try {
            "object"==typeof Reflect&&"object"==typeof customElements&&Object.setPrototypeOf&&function() {
                function e() {
                    return Reflect.construct(HTMLElement, [], e)
                }

                Object.setPrototypeOf(e.prototype, HTMLElement.prototype), Object.setPrototypeOf(e, HTMLElement), customElements.define("iconify-icon", e)
            }

            ()
        }

        catch(e) {}

        n.addTag("iconify-icon",  !1), f.findNewImages=function(c, l) {
            var d=[], u=[];

            return(c=void 0===c?void 0===e._root?document.body: e._root:c)&&p.forEach(function(e) {
                var t, i, n, o, r=h[e], s= !0===l?r.selectorLoading:  !1===l?r.selectorNew:r.selectorAll, a=c.querySelectorAll(s);
                for(t=0;
                t<a.length;
                t++)i=a[t], (n=r.icon(i))&&-1===u.indexOf(i)&&(u.push(i), o=f.newImage(i, n, r), d.push(o))
            }

            ), d
        }

        , f.findParsedImages=function(e) {
            var t, i, n, o=[], r=e.querySelectorAll("svg."+s);
            for(t=0;
            t<r.length;
            t++)(n=(i=r[t]).getAttribute(a))&&o.push(f.parsedImage(i, n));
            return o
        }
    }

    (e, f, f.config), function(r, s, c, o) {
        var l= {}

        , d= {}

        , a= {}

        , u= !1, f= {
            session:  !0, local: !0
        }

        , h= {
            session: 0, local:0
        }

        ;

        function p() {
            var r=c.loaderMaxURLSize, o= {}

            ;

            function s(e, t) {
                var i, n=o[e];
                n=n.replace("{icons}", t.join(",")), (i=document.createElement("script")).setAttribute("type", "text/javascript"), i.setAttribute("src", n), i.setAttribute("async",  !0), document.head.appendChild(i)
            }

            function a(e) {
                var t=void 0===c.API[e]?c.defaultAPI: c.API[e];
                return-1===t.indexOf("{icons}")?(o[e]=t, null):(t=t.replace("{prefix}", e).replace("{callback}", "Iconify._loaderCallback"), (o[e]=t).replace("{icons}", "").length)
            }

            Object.keys(l).forEach(function(i) {
                var n=a(i), o=[];
                if(null===n)return s(i, []), void(d[i]= !0);

                l[i].forEach(function(e, t) {
                    n+=e.length+1, r<=n&&(s(i, o), o=[], n=a(i)+e.length+1), o.push(e)
                }

                ), o.length&&s(i, o), d[i]=void 0===d[i]?l[i]:d[i].concat(l[i]), delete l[i]
            }

            ), u= !1
        }

        function v(e, t, i) {
            return i||s.domready||c.loadBeforeDOMReady?(void 0===l[e]||-1===l[e].indexOf(t))&&(void 0===d[e]|| !0 !==d[e]&&-1===d[e].indexOf(t))&&(void 0===l[e]&&(l[e]=[]), l[e].push(t), u||(u= !0, window.setTimeout(p, 0)),  !0):(o=t, void 0===a[n=e]&&(a[n]= {}

            ), a[n][o]= !0, void 0===s._loaderDOMReady&&(s._loaderDOMReady=s.DOMReadyCallback, s.DOMReadyCallback=function() {
                s._loaderDOMReady(), Object.keys(a).forEach(function(t) {
                    Object.keys(a[t]).forEach(function(e) {
                        r.iconExists(e, t)||v(t, e,  !0)
                    }

                    )
                }

                )
            }

            ),  !0);
            var n, o
        }

        r._loaderCallback=function(i) {
            var n= !1;

            "object"==typeof i&&(["local", "session"].forEach(function(t) {
                var e;

                if( !n&&f[t]&&c[t+"Storage"]) {
                    e=o[t+"Storage"];

                    try {
                        h[t]||e.setItem("iconify-version", s.version), e.setItem("iconify"+h[t], JSON.stringify(i)), n= !0, h[t]++, e.setItem("iconify-count", h[t])
                    }

                    catch(e) {
                        f[t]= !1
                    }
                }
            }

            ), r.addCollection(i), s.event(c._loaderEvent))
        }

        , s.loadImage=function(e, t) {
            var i=s.getPrefix(e.icon);
            return ! !r.iconExists(i.icon, i.prefix)||( !1 !==t&&v(i.prefix, i.icon,  !1)&&e.element.classList.add(c._loadingClass),  !1)
        }

        , r.preloadImages=function(e) {
            var t, i= !1;

            return e.forEach(function(e) {
                t=s.getPrefix(e), r.iconExists(t.icon, t.prefix)||(v(t.prefix, t.icon,  !0), i= !0)
            }

            ), i
        }

        , ["local", "session"].forEach(function(t) {
            var e, i, n;

            try {
                if("object" !=typeof(e=o[t+"Storage"]))return void(f[t]= !1);
                if(e.getItem("iconify-version") !==s.version)return;
                if("number" !=typeof(n=parseInt(e.getItem("iconify-count")))||isNaN(n))return;
                for(;
                ;

                ) {
                    if(h[t]>=n)return;
                    if("string" !=typeof(i=e.getItem("iconify"+h[t])))return;
                    "object"==typeof(i=JSON.parse(i))&&r.addCollection(i), h[t]++
                }
            }

            catch(e) {
                f[t]= !1
            }
        }

        )
    }

    (e, f, f.config, t), function(e, t, i, n) {
        var o=null, r=0, s=null, a= !1, c= {
            childList:  !0, subtree: !0
        }

        ;

        function l() {
            var e;
             !1 !==a&&a.length?(e=a, a= !1, t.scanDOM(e)): a= !1
        }

        function d(e) {
            e.forEach(function(e) {
                var t;
                if( !1===a&&(a=[], window.setTimeout(l, 0)), e.addedNodes)for(t=0;
                t<e.addedNodes.length;
                t++)a.push(e.addedNodes[t])
            }

            )
        }

        function u() {
            o.observe(void 0===i._root?document.querySelector("body"): i._root, c)
        }

        e.pauseObserving=function() {
            null !==o&&(r||(s=o.takeRecords(), o.disconnect())), r++
        }

        , e.resumeObserving=function() {
            null !==o?r&&(--r||(u(), null !==s&&s.length&&d(s))): r--
        }

        , e.isObserverPaused=function() {
            return null===o|| ! !r
        }

        , t.readyQueue.push(function() {
            return o=new n.MutationObserver(d), r||u(),  !0
        }

        )
    }

    (e, f, f.config, t), function(l, d, e) {
        var u=e._iconAttribute, f=e._loadingClass, h=e._imageClass, p=e._appendedClass;

        function v(e, t) {
            var i;
            return"<?"===e.slice(0, 2)&&(i=e.indexOf(">"), e=e.slice(i+1)), e=-1 !==(i=(e=e.replace("viewbox=", "viewBox=").replace("preserveaspectratio=", "preserveAspectRatio=")).indexOf("</"))?e.replace("</", t+"</"): e.replace("/>", ">"+t+"</svg>")
        }

        d.renderSVG=function(t) {
            var e, i, n, o, r, s, a=d.getImageAttributes(t), c=l.getIcon(t.icon);

            a[u]=t.icon, e=new d.SVG(c), n=document.createElement("svg"), r=e.attributes(a), Object.keys(r.attributes).forEach(function(e) {
                try {
                    n.setAttribute(e, r.attributes[e])
                }

                catch(e) {}
            }

            ), Object.keys(r.elementAttributes).forEach(function(e) {
                try {
                    (r.append?t.element: n).setAttribute(e, r.elementAttributes[e])
                }

                catch(e) {}
            }

            ), t.loading&&(n.classList.remove(f), r.append&&t.element.classList.remove(f)), n.classList.add(h), s=v(n.outerHTML, r.body), (o=document.createElement("span")).innerHTML=s, i=o.childNodes[0], r.append?(t.element.classList.add(p), t.element.appendChild(i)):(t.element.parentNode.replaceChild(i, t.element), t.element=i), delete t.parser, delete t.loading
        }

        , l.getSVG=function(e, t) {
            var i, n, o;

            return ! !l.iconExists(e)&&(i=new d.SVG(l.getIcon(e)), o=i.attributes(t,  !1), n=document.createElement("svg"), Object.keys(o.attributes).forEach(function(e) {
                try {
                    n.setAttribute(e, o.attributes[e])
                }

                catch(e) {}
            }

            ), v(n.outerHTML, o.body))
        }
    }

    (e, f, f.config), d=e, (u=f).scanDOM=function() {
        var t= !1;

        function e() {
            u.findNewImages().forEach(function(e) {
                u.loadImage(e)&&(t||(t= !0, d.pauseObserving()), u.renderSVG(e))
            }

            )
        }

        if(u.ready)e();

        else try {
            e()
        }

        catch(e) {}

        t&&d.resumeObserving()
    }

    , d.scanDOM=u.scanDOM, d.getVersion=function() {
        return u.version
    }
}

(self.Iconify, self));