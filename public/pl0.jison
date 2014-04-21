
/* Código de soporte */

%{

function buildBlock(cd, vd, pd, c) {
  var res = {
    type: 'BLOCK',
    sym_table: {},
    procs: pd,
    content: c
  };

  // Agregamos las constantes a la tabla de símbolos
  for (var i in cd) {
    res.sym_table[cd[i].name] = {
      type: cd[i].type,
      value: cd[i].value
    };
  }

  // Agregamos las variables a la tabla de símbolos
  for (var i in vd) {
    res.sym_table[vd[i].name] = {
      type: vd[i].type,
    };
  }

  // Agregamos los datos básicos de los procedimientos a la tabla de símbolos
  for (var i in pd) {
    res.sym_table[pd[i].name] = {
      type: pd[i].type,
      arglist_size: pd[i].args? pd[i].args.length : 0
    };
  }

  return res;
}

function buildProcedure (id, args, block) {
  res = {
    type: 'PROCEDURE',
    name: id.value,
    args: args,
    sym_table: block.sym_table,
    procs: block.procs,
    content: block.content
  };

  // Agregamos los argumentos como VAR a la tabla de símbolos del procedimiento
  for (var i in args) {
    res.sym_table[args[i].name] = {
      type: 'VAR'
    }
  }

  return res;
}

%}

/* Reglas de precedencia */

%right ASSIGN
%left '+' '-'
%left '*' '/'
%left UMINUS

%right THEN ELSE

/* Declaración de tokens */

%token END_SYMBOL EOF CONST END_SENTENCE COMMA ID ASSIGN PROCEDURE BEGIN CALL COMPARISON_OP DO END
%token IF LEFTPAR RIGHTPAR NUMBER ODD VAR WHILE

%start program

/* Comienzo de la descripción de la gramática */

%%

program
  : block END_SYMBOL EOF
    {
      return $1;
    }
  ;

block
  : const_decls var_decls proc_decls statement
    {
      $$ = buildBlock($1, $2, $3, $4);
    }
  | var_decls proc_decls statement
    {
      $$ = buildBlock(null, $1, $2, $3);
    }
  | const_decls proc_decls statement
    {
      $$ = buildBlock($1, null, $2, $3);
    }
  | proc_decls statement
    {
      $$ = buildBlock(null, null, $1, $2);
    }
  ;

proc_decls
  : /* nada */
  | proc_decl proc_decls
    {
      $$ = [$1];
      if ($2 && $2.length > 0)
        $$ = $$.concat($2);
    }
  ;

const_decls
  : CONST const_decl comma_const_decls END_SENTENCE
    {
      $$ = [$2];
      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

comma_const_decls
  : /* nada */
  | COMMA const_decl comma_const_decls
    {
      $$ = [$2];
      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

const_decl
  : id ASSIGN number
    {
      $$ = {
        type: 'CONST VAR',
        name: $1.value,
        value: $3.value
      };
    }
  ;

var_decls
  : VAR id comma_var_decls END_SENTENCE
    {
      $$ = [{
        type: 'VAR',
        name: $2.value
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

comma_var_decls
  : /* nada */
  | COMMA id comma_var_decls
    {
      $$ = [{
        type: 'VAR',
        name: $2.value
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

proc_decl
  : PROCEDURE id arglist END_SENTENCE block END_SENTENCE
    {
      $$ = buildProcedure($2, $3, $5);
    }
  | PROCEDURE id END_SENTENCE block END_SENTENCE
    {
      $$ = buildProcedure($2, null, $4);
    }
  ;

arglist
  : LEFTPAR id comma_arglist RIGHTPAR
    {
      $$ = [{
        type: 'ARG',
        name: $2.value
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

comma_arglist
  : /* nada */
  | COMMA id comma_arglist
    {
      $$ = [{
        type: 'ARG',
        name: $2.value
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

argexplist
  : LEFTPAR expression comma_argexplist RIGHTPAR
    {
      $$ = [{
        type: 'ARGEXP',
        content: $2
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

comma_argexplist
  : /* nada */
  | COMMA expression comma_argexplist
    {
      $$ = [{
        type: 'ARGEXP',
        content: $2
      }];

      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

statement
  : /* nada */
  | CALL id argexplist
    {
      $$ = {
        type: 'PROC_CALL',
        name: $2.value,
        arguments: $3
      };
    }
  | CALL id
    {
      $$ = {
        type: 'PROC_CALL',
        name: $2.value,
        arguments: null
      };
    }
  | BEGIN statement statement_list END
    {
      $$ = [$2];
      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  | IF LEFTPAR condition RIGHTPAR THEN statement ELSE statement
    {
      $$ = {
        type: 'IFELSE',
        cond: $3,
        st: $6,
        sf: $8
      };
    }
  | IF LEFTPAR condition RIGHTPAR THEN statement
    {
      $$ = {
        type: 'IF',
        cond:  $3,
        st: $6
      };
    }
  | WHILE LEFTPAR condition RIGHTPAR DO statement
    {
      $$ = {
        type: 'WHILE',
        cond: $3,
        st: $6
      };
    }
  | id ASSIGN expression
    {
      $$ = {
        type: '=',
        left: $1,
        right: $3
      };
    }
  ;

statement_list
  : /* nada */
  | END_SENTENCE statement statement_list
    {
      $$ = [$2];
      if ($3 && $3.length > 0)
        $$ = $$.concat($3);
    }
  ;

condition
  : ODD expression
    {
      $$ = {
        type: 'ODD',
        exp: $2
      };
    }
  | expression COMPARISON_OP expression
    {
      $$ = {
        type: $2,
        left: $1,
        right: $3
      };
    }
  ;

expression
  : expression '+' expression
    {
      $$ = {
        type: $2,
        left: $1,
        right: $3
      };
    }
  | expression '-' expression
    {
      $$ = {
        type: $2,
        left: $1,
        right: $3
      };
    }
  | expression '*' expression
    {
      $$ = {
        type: $2,
        left: $1,
        right: $3
      };
    }
  | expression '/' expression
    {
      $$ = {
        type: $2,
        left: $1,
        right: $3
      };
    }
  | '-' expression %prec UMINUS
    {
      $$ = {
        type: $1,
        value: $2
      };
    }
  | number
  | id
  | LEFTPAR expression RIGHTPAR
    {
      $$ = $2;
    }
  ;

id: ID
  {
    $$ = {
      type: 'ID',
      value: yytext
    };
  }
  ;

number: NUMBER
  {
    $$ = {
      type: 'NUMBER',
      value: yytext
    };
  }
  ;

%%
