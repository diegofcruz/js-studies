# TypeScript — Fundamentos Antes de Escrever Qualquer Código

Leia este arquivo inteiro antes de começar o exercício 1. Ele resolve as dúvidas conceituais que farão os erros do compilador fazerem sentido desde o início.

---

## 1. O problema que o TypeScript resolve

JavaScript aceita qualquer coisa sem reclamar:

```js
// JavaScript puro
function somar(a, b) {
  return a + b;
}

somar(1, 2);       // 3   — correto
somar("1", 2);     // "12" — concatenou em vez de somar, sem aviso algum
somar(undefined);  // NaN  — sem aviso algum
```

Esses bugs só aparecem **quando o código roda** — talvez em produção, às 3 da manhã, depois de semanas de trabalho. TypeScript resolve isso fazendo o computador verificar os tipos **antes** de rodar qualquer coisa.

```ts
// TypeScript
function somar(a: number, b: number): number {
  return a + b;
}

somar(1, 2);      // OK
somar("1", 2);    // ERRO no editor — antes de rodar
```

---

## 2. O que TypeScript realmente é

TypeScript **não é uma linguagem diferente**. É JavaScript com uma camada extra que:

1. Você escreve `.ts` em vez de `.js`
2. O TypeScript verifica os tipos (essa etapa roda no seu editor e no terminal)
3. O TypeScript remove toda informação de tipo e gera `.js` puro
4. O Node.js roda o `.js` gerado — ele nunca vê TypeScript

```
Você escreve     TypeScript verifica     TypeScript gera     Node.js executa
  arquivo.ts   →   tipos (erros aqui)  →   arquivo.js      →   o .js puro
```

**O importante**: tipos não existem em tempo de execução. Eles são removidos antes do código rodar. Isso significa que TypeScript tem **custo zero em produção** — é só uma ferramenta de desenvolvimento.

---

## 3. Dois mundos separados: Tipos e Valores

Este é o conceito mais importante para não se perder:

| Mundo dos **Valores** | Mundo dos **Tipos** |
|---|---|
| Existe em tempo de execução | Existe só em tempo de compilação |
| Node.js conhece | Node.js nunca vê |
| `"hello"`, `42`, `{name: "Diego"}` | `string`, `number`, `User` |
| Vive dentro do JavaScript | É removido pelo compilador |

```ts
const nome: string = "Diego";
//    ^^^^  ^^^^^^    ^^^^^^^
//    valor  tipo      valor
//    (JS)  (TS only)  (JS)
```

Depois da compilação, o Node.js recebe apenas:

```js
const nome = "Diego";
// O ": string" foi removido completamente
```

Quando um exercício falar em "custo em runtime" significa o custo do JavaScript que sobrou depois de remover todos os tipos. Tipos em si têm **custo zero em runtime** porque não existem lá.

---

## 4. O que "tipo" significa

Um tipo é um **conjunto de valores possíveis**:

- `string` = o conjunto de todas as strings existentes (`"a"`, `"hello"`, `""`, ...)
- `number` = o conjunto de todos os números (`0`, `1`, `-1`, `3.14`, ...)
- `"dark"` = um conjunto com apenas um valor: a string `"dark"`
- `string | number` = a união dos dois conjuntos acima
- `never` = o conjunto vazio — nenhum valor existe nele

Quando TypeScript diz que um valor é do tipo `string`, está dizendo: "este valor pertence ao conjunto de todas as strings possíveis".

---

## 5. Como ler mensagens de erro do TypeScript

Os erros do TypeScript são em inglês e parecem assustadores no começo. Aqui está o padrão:

```
Type 'string' is not assignable to type 'number'.
```

Leitura: "Você tentou colocar uma string num lugar que só aceita number."

```
Property 'nome' does not exist on type '{ id: string }'.
```

Leitura: "Você tentou acessar `.nome` mas o objeto só tem `.id`."

```
Argument of type 'string' is not assignable to parameter of type '"up" | "down"'.
```

Leitura: "Você passou uma string genérica mas a função só aceita os valores literais `"up"` ou `"down"`."

**Regra geral**: leia o erro de trás pra frente — o que TypeScript esperava, e o que você deu a ele.

---

## 6. O compilador é seu par de programação

Pense no compilador TypeScript como um colega que leu todo o seu código e te avisa antes de você rodar:

- "Essa função espera um número, você passou uma string"
- "Esse objeto pode ser null, você esqueceu de verificar"
- "Você adicionou um novo estado no switch mas esqueceu de tratar ele"

Erros do compilador não são falhas — são **o produto**. Cada erro que aparece no editor é um bug que não vai aparecer em produção.

---

## 7. Como executar os exercícios

Cada exercício é um arquivo `.ts` independente. Para rodar:

```bash
# Opção 1: ts-node (executa diretamente, mais comum nos exercícios)
npx ts-node nodejs/typescript/test1.ts

# Opção 2: com tsconfig específico (necessário para exercícios com decorators)
npx ts-node --project nodejs/typescript/tsconfig.json nodejs/typescript/test18.ts

# Opção 3: compilar primeiro e depois rodar
npx tsc --project nodejs/typescript/tsconfig.json
node nodejs/typescript/dist/test1.js
```

Quando o arquivo tiver erros de tipo, o compilador vai listar todos antes de rodar. Isso é normal e esperado em vários exercícios — parte do aprendizado é ver o erro e entender por quê ele aparece.

---

## 8. Notação Big O neste contexto

Os exercícios de TypeScript envolvem **dois tipos de complexidade diferentes**:

### Complexidade do verificador de tipos (compile time)
É o custo que o compilador TypeScript tem para verificar seus tipos. Você não paga isso em produção, mas paga em tempo de feedback no editor.

- Uma variável simples: **O(1)** — verificação direta
- Uma união com N membros: **O(N)** — verifica cada membro
- Um mapeamento sobre K propriedades: **O(K)** — itera sobre as chaves
- Tipos condicionais distributivos sobre N membros: **O(N)** — roda uma vez por membro

### Complexidade em runtime (código JavaScript)
É o custo do código JavaScript que sobrou depois que os tipos foram removidos.

- Acesso a propriedade de objeto: **O(1)**
- Operação em Map (get, set, delete): **O(1)** amortizado
- Array.push / Array.pop: **O(1)** amortizado
- **Array.shift (remover do início)**: **O(N)** — re-indexa todos os elementos
- Iteração sobre K propriedades: **O(K)**
- String.split: **O(N)** onde N = comprimento da string

Cada exercício vai indicar ambas as complexidades quando forem relevantes.

---

## 9. O que você deve esperar sentir

- **Exercícios 1–4**: Confusão normal. Os conceitos de "tipo" e "valor" como mundos separados levam tempo para assentar.
- **Exercícios 5–8**: Os erros do compilador começam a fazer sentido. Você começa a antecipar o que o TypeScript vai reclamar.
- **Exercícios 9–13**: Os tipos começam a parecer uma linguagem de programação por conta própria — porque são.
- **Exercícios 14–19**: Você começa a ver padrões do TypeScript em código de bibliotecas reais (NestJS, React Query, Prisma).

Não pule exercícios. Cada um constrói sobre o anterior.
