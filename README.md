# Fastify-jwt

Este projeto foi desenvolvido para fins de datico onde ensino usar jsonwebtoken com framework fastify.

## Para rodar essa aplicação em modo desenvolvimento

Primeiro crie um arquivo .env e cole a variavel de ambiente.

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/fastify?schema=public"
```

Segundo rode os comandos.

```
    npm install && npx prisma migrate dev
```
O ultimo passo é rodar comando.

```
    npm run dev
```