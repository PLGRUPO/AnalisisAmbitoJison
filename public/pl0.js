/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"block":4,"END_SYMBOL":5,"EOF":6,"const_decls":7,"var_decls":8,"proc_decls":9,"statement":10,"proc_decl":11,"CONST":12,"const_decl":13,"comma_const_decls":14,"END_SENTENCE":15,"COMMA":16,"id":17,"ASSIGN":18,"number":19,"VAR":20,"comma_var_decls":21,"PROCEDURE":22,"arglist":23,"LEFTPAR":24,"comma_arglist":25,"RIGHTPAR":26,"argexplist":27,"expression":28,"comma_argexplist":29,"CALL":30,"BEGIN":31,"statement_list":32,"END":33,"IF":34,"condition":35,"THEN":36,"ELSE":37,"WHILE":38,"DO":39,"ODD":40,"COMPARISON_OP":41,"+":42,"-":43,"*":44,"/":45,"ID":46,"NUMBER":47,"$accept":0,"$end":1},
terminals_: {2:"error",5:"END_SYMBOL",6:"EOF",12:"CONST",15:"END_SENTENCE",16:"COMMA",18:"ASSIGN",20:"VAR",22:"PROCEDURE",24:"LEFTPAR",26:"RIGHTPAR",30:"CALL",31:"BEGIN",33:"END",34:"IF",36:"THEN",37:"ELSE",38:"WHILE",39:"DO",40:"ODD",41:"COMPARISON_OP",42:"+",43:"-",44:"*",45:"/",46:"ID",47:"NUMBER"},
productions_: [0,[3,3],[4,4],[4,3],[4,3],[4,2],[9,0],[9,2],[7,4],[14,0],[14,3],[13,3],[8,4],[21,0],[21,3],[11,6],[11,5],[23,4],[25,0],[25,3],[27,4],[29,0],[29,3],[10,0],[10,3],[10,2],[10,4],[10,8],[10,6],[10,6],[10,3],[32,0],[32,3],[35,2],[35,3],[28,3],[28,3],[28,3],[28,3],[28,2],[28,1],[28,1],[28,3],[17,1],[19,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
/**/) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
      return $$[$0-2];
    
break;
case 2:
      this.$ = buildBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0]);
    
break;
case 3:
      this.$ = buildBlock(null, $$[$0-2], $$[$0-1], $$[$0]);
    
break;
case 4:
      this.$ = buildBlock($$[$0-2], null, $$[$0-1], $$[$0]);
    
break;
case 5:
      this.$ = buildBlock(null, null, $$[$0-1], $$[$0]);
    
break;
case 7:
      this.$ = [$$[$0-1]];
      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 8:
      this.$ = [$$[$0-2]];
      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 10:
      this.$ = [$$[$0-1]];
      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 11:
      this.$ = {
        type: 'CONST VAR',
        name: $$[$0-2].value,
        value: $$[$0].value
      };
    
break;
case 12:
      this.$ = [{
        type: 'VAR',
        name: $$[$0-2].value
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 14:
      this.$ = [{
        type: 'VAR',
        name: $$[$0-1].value
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 15:
      /* Poner declarado, tipo, ... */
      this.$ = {
        type: 'PROCEDURE',
        name: $$[$0-4].value,
        args: $$[$0-3],
        block: $$[$0-1]
      };
    
break;
case 16:
      this.$ = {
        type: 'PROCEDURE',
        name: $$[$0-3].value,
        args: null,
        block: $$[$0-1]
      };
    
break;
case 17:
      this.$ = [{
        type: 'ARG',
        content: $$[$0-2].value
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 19:
      this.$ = [{
        type: 'ARG',
        content: $$[$0-1].value
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 20:
      this.$ = [{
        type: 'ARGEXP',
        content: $$[$0-2]
      }];

      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 22:
      this.$ = [{
        type: 'ARGEXP',
        content: $$[$0-1]
      }];

      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 24:
      this.$ = {
        type: 'PROC_CALL',
        name: $$[$0-1].value,
        arguments: $$[$0]
      };
    
break;
case 25:
      this.$ = {
        type: 'PROC_CALL',
        name: $$[$0].value,
        arguments: null
      };
    
break;
case 26:
      this.$ = [$$[$0-2]];
      if ($$[$0-1] && $$[$0-1].length > 0)
        this.$ = this.$.concat($$[$0-1]);
    
break;
case 27:
      this.$ = {
        type: 'IFELSE',
        cond: $$[$0-5],
        st: $$[$0-2],
        sf: $$[$0]
      };
    
break;
case 28:
      this.$ = {
        type: 'IF',
        cond:  $$[$0-3],
        st: $$[$0]
      };
    
break;
case 29:
      this.$ = {
        type: 'WHILE',
        cond: $$[$0-3],
        st: $$[$0]
      };
    
break;
case 30:
      this.$ = {
        type: '=',
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 32:
      this.$ = [$$[$0-1]];
      if ($$[$0] && $$[$0].length > 0)
        this.$ = this.$.concat($$[$0]);
    
break;
case 33:
      this.$ = {
        type: 'ODD',
        exp: $$[$0]
      };
    
break;
case 34:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 35:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 36:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 37:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 38:
      this.$ = {
        type: $$[$0-1],
        left: $$[$0-2],
        right: $$[$0]
      };
    
break;
case 39:
      this.$ = {
        type: $$[$0-1],
        value: $$[$0]
      };
    
break;
case 42:
      this.$ = $$[$0-1];
    
break;
case 43:
    this.$ = {
      type: 'ID',
      value: yytext
    };
  
break;
case 44:
    this.$ = {
      type: 'NUMBER',
      value: yytext
    };
  
break;
}
},
table: [{3:1,4:2,5:[2,6],7:3,8:4,9:5,11:8,12:[1,6],20:[1,7],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{1:[3]},{5:[1,10]},{5:[2,6],8:11,9:12,11:8,15:[2,6],20:[1,7],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{5:[2,6],9:13,11:8,15:[2,6],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{5:[2,23],10:14,15:[2,23],17:19,30:[1,15],31:[1,16],34:[1,17],38:[1,18],46:[1,20]},{13:21,17:22,46:[1,20]},{17:23,46:[1,20]},{5:[2,6],9:24,11:8,15:[2,6],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{17:25,46:[1,20]},{6:[1,26]},{5:[2,6],9:27,11:8,15:[2,6],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{5:[2,23],10:28,15:[2,23],17:19,30:[1,15],31:[1,16],34:[1,17],38:[1,18],46:[1,20]},{5:[2,23],10:29,15:[2,23],17:19,30:[1,15],31:[1,16],34:[1,17],38:[1,18],46:[1,20]},{5:[2,5],15:[2,5]},{17:30,46:[1,20]},{10:31,15:[2,23],17:19,30:[1,15],31:[1,16],33:[2,23],34:[1,17],38:[1,18],46:[1,20]},{24:[1,32]},{24:[1,33]},{18:[1,34]},{5:[2,43],15:[2,43],16:[2,43],18:[2,43],24:[2,43],26:[2,43],33:[2,43],37:[2,43],41:[2,43],42:[2,43],43:[2,43],44:[2,43],45:[2,43]},{14:35,15:[2,9],16:[1,36]},{18:[1,37]},{15:[2,13],16:[1,39],21:38},{5:[2,7],15:[2,7],30:[2,7],31:[2,7],34:[2,7],38:[2,7],46:[2,7]},{15:[1,41],23:40,24:[1,42]},{1:[2,1]},{5:[2,23],10:43,15:[2,23],17:19,30:[1,15],31:[1,16],34:[1,17],38:[1,18],46:[1,20]},{5:[2,4],15:[2,4]},{5:[2,3],15:[2,3]},{5:[2,25],15:[2,25],24:[1,45],27:44,33:[2,25],37:[2,25]},{15:[1,47],32:46,33:[2,31]},{17:53,19:52,24:[1,54],28:50,35:48,40:[1,49],43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:50,35:56,40:[1,49],43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:57,43:[1,51],46:[1,20],47:[1,55]},{15:[1,58]},{13:59,17:22,46:[1,20]},{19:60,47:[1,55]},{15:[1,61]},{17:62,46:[1,20]},{15:[1,63]},{4:64,7:3,8:4,9:5,11:8,12:[1,6],15:[2,6],20:[1,7],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{17:65,46:[1,20]},{5:[2,2],15:[2,2]},{5:[2,24],15:[2,24],33:[2,24],37:[2,24]},{17:53,19:52,24:[1,54],28:66,43:[1,51],46:[1,20],47:[1,55]},{33:[1,67]},{10:68,15:[2,23],17:19,30:[1,15],31:[1,16],33:[2,23],34:[1,17],38:[1,18],46:[1,20]},{26:[1,69]},{17:53,19:52,24:[1,54],28:70,43:[1,51],46:[1,20],47:[1,55]},{41:[1,71],42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{17:53,19:52,24:[1,54],28:76,43:[1,51],46:[1,20],47:[1,55]},{5:[2,40],15:[2,40],16:[2,40],26:[2,40],33:[2,40],37:[2,40],41:[2,40],42:[2,40],43:[2,40],44:[2,40],45:[2,40]},{5:[2,41],15:[2,41],16:[2,41],26:[2,41],33:[2,41],37:[2,41],41:[2,41],42:[2,41],43:[2,41],44:[2,41],45:[2,41]},{17:53,19:52,24:[1,54],28:77,43:[1,51],46:[1,20],47:[1,55]},{5:[2,44],15:[2,44],16:[2,44],26:[2,44],33:[2,44],37:[2,44],41:[2,44],42:[2,44],43:[2,44],44:[2,44],45:[2,44]},{26:[1,78]},{5:[2,30],15:[2,30],33:[2,30],37:[2,30],42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{5:[2,8],15:[2,8],20:[2,8],22:[2,8],30:[2,8],31:[2,8],34:[2,8],38:[2,8],46:[2,8]},{14:79,15:[2,9],16:[1,36]},{15:[2,11],16:[2,11]},{5:[2,12],15:[2,12],22:[2,12],30:[2,12],31:[2,12],34:[2,12],38:[2,12],46:[2,12]},{15:[2,13],16:[1,39],21:80},{4:81,7:3,8:4,9:5,11:8,12:[1,6],15:[2,6],20:[1,7],22:[1,9],30:[2,6],31:[2,6],34:[2,6],38:[2,6],46:[2,6]},{15:[1,82]},{16:[1,84],25:83,26:[2,18]},{16:[1,86],26:[2,21],29:85,42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{5:[2,26],15:[2,26],33:[2,26],37:[2,26]},{15:[1,47],32:87,33:[2,31]},{36:[1,88]},{26:[2,33],42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{17:53,19:52,24:[1,54],28:89,43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:90,43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:91,43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:92,43:[1,51],46:[1,20],47:[1,55]},{17:53,19:52,24:[1,54],28:93,43:[1,51],46:[1,20],47:[1,55]},{5:[2,39],15:[2,39],16:[2,39],26:[2,39],33:[2,39],37:[2,39],41:[2,39],42:[2,39],43:[2,39],44:[2,39],45:[2,39]},{26:[1,94],42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{39:[1,95]},{15:[2,10]},{15:[2,14]},{15:[1,96]},{5:[2,16],15:[2,16],22:[2,16],30:[2,16],31:[2,16],34:[2,16],38:[2,16],46:[2,16]},{26:[1,97]},{17:98,46:[1,20]},{26:[1,99]},{17:53,19:52,24:[1,54],28:100,43:[1,51],46:[1,20],47:[1,55]},{33:[2,32]},{5:[2,23],10:101,15:[2,23],17:19,30:[1,15],31:[1,16],33:[2,23],34:[1,17],37:[2,23],38:[1,18],46:[1,20]},{26:[2,34],42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{5:[2,35],15:[2,35],16:[2,35],26:[2,35],33:[2,35],37:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[1,74],45:[1,75]},{5:[2,36],15:[2,36],16:[2,36],26:[2,36],33:[2,36],37:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[1,74],45:[1,75]},{5:[2,37],15:[2,37],16:[2,37],26:[2,37],33:[2,37],37:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37]},{5:[2,38],15:[2,38],16:[2,38],26:[2,38],33:[2,38],37:[2,38],41:[2,38],42:[2,38],43:[2,38],44:[2,38],45:[2,38]},{5:[2,42],15:[2,42],16:[2,42],26:[2,42],33:[2,42],37:[2,42],41:[2,42],42:[2,42],43:[2,42],44:[2,42],45:[2,42]},{5:[2,23],10:102,15:[2,23],17:19,30:[1,15],31:[1,16],33:[2,23],34:[1,17],37:[2,23],38:[1,18],46:[1,20]},{5:[2,15],15:[2,15],22:[2,15],30:[2,15],31:[2,15],34:[2,15],38:[2,15],46:[2,15]},{15:[2,17]},{16:[1,84],25:103,26:[2,18]},{5:[2,20],15:[2,20],33:[2,20],37:[2,20]},{16:[1,86],26:[2,21],29:104,42:[1,72],43:[1,73],44:[1,74],45:[1,75]},{5:[2,28],15:[2,28],33:[2,28],37:[1,105]},{5:[2,29],15:[2,29],33:[2,29],37:[2,29]},{26:[2,19]},{26:[2,22]},{5:[2,23],10:106,15:[2,23],17:19,30:[1,15],31:[1,16],33:[2,23],34:[1,17],37:[2,23],38:[1,18],46:[1,20]},{5:[2,27],15:[2,27],33:[2,27],37:[2,27]}],
defaultActions: {26:[2,1],79:[2,10],80:[2,14],87:[2,32],97:[2,17],103:[2,19],104:[2,22]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


function buildBlock(cd, vd, pd, c) {
  var res = {
    type: 'BLOCK',
    content: c,
    decls: {}
  };

  decls = [];
  if (cd) decls = decls.concat(cd);
  if (vd) decls = decls.concat(vd);

  for (var i in decls) {
    res.decls[decls[i].name] = {
      type: decls[i].type,
      value: decls[i].value
    };
  }

  for (var i in pd){
    res.decls[pd[i].name] = {
      type: pd[i].type,
      argnumber: pd[i].args? pd[i].args.length : 0
    };
  }

  return res;
}


/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START
/**/) {

var reserved_words = {
  BEGIN: 'BEGIN',
  CALL: 'CALL',
  CONST: 'CONST',
  DO: 'DO',
  ELSE: 'ELSE',
  END: 'END',
  IF: 'IF',
  ODD: 'ODD',
  PROCEDURE: 'PROCEDURE',
  THEN: 'THEN',
  VAR: 'VAR',
  WHILE: 'WHILE'
}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
}


var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* Ignorar espacios */
break;
case 1:return 41
break;
case 2:return 41
break;
case 3:return 18
break;
case 4:return yy_.yytext
break;
case 5:return idORrw(yy_.yytext)
break;
case 6:return 47
break;
case 7:return 16
break;
case 8:return 15
break;
case 9:return 5
break;
case 10:return 24
break;
case 11:return 26
break;
case 12:return 6
break;
case 13:return 'INVALID'
break;
}
},
rules: [/^(?:[\s\t\n\r])/,/^(?:[<>=!]=)/,/^(?:[<>])/,/^(?:=)/,/^(?:[*/+-])/,/^(?:\b[a-zA-Z_]\w*\b)/,/^(?:\b[0-9]+\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?:\()/,/^(?:\))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}