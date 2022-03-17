git-comit-msg-linter
    ->Biblioteca que vai garantir o padrão de commit

tsconfig
    -> configurações do typescript

javascript standard style
    -> padrão do javascript

.eslintrc.json
    -> arquivo de configurações do eslint

git add .
git commit --amend --no-edit
commitar sem abrir o editor 

husky
    -> permite colocar comandos antes de fazer um commit 
.huskyrc.json
    -> arquivo de configuração do husky

lint-staged
    -> permite rodar scripts somente em arquivos que foram alterados (staged area), bom para usar em conjunto com o husky
.lintstagedrc.json
    -> arquivo de configuração do lint-staged

jest
    -> biblioteca para testes unitarios
    -> npm i -D jest @types/jest ts-jest
    -> yarn jest --init

/************************************************/

1 -> sempre comece pelo test;
    ex: signup controller deverá ver primeiro se os paremetros estão corretos e dentro do padrão; 